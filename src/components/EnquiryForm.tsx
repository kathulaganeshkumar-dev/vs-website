import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { useSearchParams } from "react-router";
import { company } from "../data/company";
import { products } from "../data/products";
import { services } from "../data/services";

const enquiryTypes = [
  "General Enquiry",
  "Service Enquiry",
  "Product Enquiry",
  "Request a Quote",
  "AMC Enquiry",
  "Technical Support Enquiry",
];

const categories = [
  ...new Set([
    ...services.map((service) => service.title),
    ...products.map((product) => product.name),
  ]),
];

export default function EnquiryForm() {
  const [searchParams] = useSearchParams();
  const [preparedHref, setPreparedHref] = useState("");
  const requestedType = searchParams.get("type") ?? "";
  const requestedCategory = searchParams.get("category") ?? "";
  const requestedSubject = searchParams.get("subject") ?? "";
  const selectedType = enquiryTypes.includes(requestedType)
    ? requestedType
    : "General Enquiry";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const subject =
      String(values.get("subject") || "Website enquiry").trim() ||
      "Website enquiry";
    const body = [
      `Enquiry type: ${values.get("enquiryType")}`,
      `Service or product: ${values.get("category") || "Not specified"}`,
      `Name: ${values.get("name")}`,
      `Company: ${values.get("company") || "Not specified"}`,
      `Email: ${values.get("email")}`,
      `Phone: ${values.get("phone") || "Not specified"}`,
      "",
      "Message:",
      String(values.get("message")),
    ].join("\n");

    setPreparedHref(
      `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
  }

  return (
    <div className="enquiry-form-card">
      <div className="enquiry-form-card__intro">
        <p className="eyebrow">Tell us what you need</p>
        <h2>Start a conversation</h2>
        <p>
          Share a few details and we’ll prepare an enquiry for your email
          application.
        </p>
      </div>
      <form
        className="enquiry-form"
        onSubmit={handleSubmit}
        onChange={() => setPreparedHref("")}
      >
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="enquiry-name">Full name <span aria-hidden="true">*</span></label>
            <input
              id="enquiry-name"
              name="name"
              autoComplete="name"
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-field">
            <label htmlFor="enquiry-company">Company or organization</label>
            <input
              id="enquiry-company"
              name="company"
              autoComplete="organization"
              placeholder="Organization name"
            />
          </div>
          <div className="form-field">
            <label htmlFor="enquiry-email">Email address <span aria-hidden="true">*</span></label>
            <input
              id="enquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
            />
          </div>
          <div className="form-field">
            <label htmlFor="enquiry-phone">Phone number</label>
            <input
              id="enquiry-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91"
            />
          </div>
          <div className="form-field">
            <label htmlFor="enquiry-type">Enquiry type <span aria-hidden="true">*</span></label>
            <select id="enquiry-type" name="enquiryType" defaultValue={selectedType} required>
              {enquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="enquiry-category">Service or product category</label>
            <select
              id="enquiry-category"
              name="category"
              defaultValue={categories.includes(requestedCategory) ? requestedCategory : ""}
            >
              <option value="">Choose a category (optional)</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field form-field--full">
            <label htmlFor="enquiry-subject">Subject <span aria-hidden="true">*</span></label>
            <input
              id="enquiry-subject"
              name="subject"
              required
              defaultValue={requestedSubject}
              placeholder="A short subject for your enquiry"
            />
          </div>
          <div className="form-field form-field--full">
            <label htmlFor="enquiry-message">Message <span aria-hidden="true">*</span></label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={5}
              required
              placeholder="Tell us about your requirements"
            />
          </div>
        </div>
        <div className="form-submit-row">
          <button className="button" type="submit">
            Prepare email <ArrowUpRight size={17} aria-hidden="true" />
          </button>
          <p>Required fields are marked with an asterisk.</p>
        </div>
        {preparedHref && (
          <div className="form-feedback" role="status" aria-live="polite">
            <div className="form-feedback__icon">
              <Check size={17} aria-hidden="true" />
            </div>
            <div>
              <strong>Your enquiry is ready.</strong>
              <p>
                Open your email application to review and send it to{" "}
                <a href={preparedHref}>{company.email}</a>. This website does not
                send or store submissions.
              </p>
              <a className="text-link" href={preparedHref}>
                Open email application <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
