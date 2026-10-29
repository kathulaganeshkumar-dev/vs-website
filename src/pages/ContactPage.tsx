import { Mail, MapPin, Phone, Globe, ArrowUpRight } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";
import Seo from "../components/Seo";
import { company } from "../data/company";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Varun Systems | Corporate Enquiries"
        description="Contact Varun Systems in Hyderabad about IT products, infrastructure, maintenance and technical service requirements."
      />
      <section className="page-hero page-hero--contact">
        <div className="container contact-page__hero">
          <div className="page-hero__copy">
            <p className="eyebrow">Contact Varun Systems</p>
            <h1>Discuss your technologies and infrastructure requirements.</h1>
          </div>
          <figure className="contact-page__visual" role="img" aria-label="Varun Systems professionals collaborating on technology infrastructure" />
        </div>
      </section>

      <section className="contact-content section-pad">
        <div className="container contact-content__grid">
          <aside className="contact-info">
            <p className="eyebrow">Contact details</p>
            <h2>Speak directly with our team.</h2>
            <p className="contact-info__intro">
              Use the confirmed Varun Systems contact details below for
              enquiries and quotations.
            </p>
            <div className="contact-info__items">
              <div className="contact-info__item">
                <span className="icon-frame icon-frame--tint">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3>Office</h3>
                  <address>{company.address}</address>
                </div>
              </div>
              <div className="contact-info__item">
                <span className="icon-frame icon-frame--tint">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </div>
              <div className="contact-info__item">
                <span className="icon-frame icon-frame--tint">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3>Phone</h3>
                  {company.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/[^+\d]/g, "")}`}>
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="contact-info__item">
                <span className="icon-frame icon-frame--tint">
                  <Globe size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3>Website</h3>
                  <a href="https://www.varunsystems.in" target="_blank" rel="noreferrer">
                    {company.website} <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <p className="contact-info__note">
              The address and email above use the latest company profile and
              confirmed project details.
            </p>
          </aside>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
