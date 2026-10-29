import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Seo from "../components/Seo";
import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Technology Expertise | Varun Systems"
        description="Explore IT products and supply, maintenance, AMC, networking, CCTV, cloud, server, facility and other services from Varun Systems."
      />
      <section className="page-hero page-hero--simple page-hero--expertise">
        <div className="container page-hero__inner">
          <div className="page-hero__copy">
            <p className="eyebrow">Our Expertise</p>
            <h1>Technology expertise for day-to-day operations and infrastructure.</h1>
            <p>
              Explore the IT products, technical support and enterprise
              services documented in the Varun Systems company profile.
            </p>
            <Link className="button" to="/contact?type=Service%20Enquiry">
              Discuss a requirement <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="service-page-visual" aria-hidden="true">
            <div className="service-page-visual__core">
              <span className="service-page-visual__ring" />
              <span className="service-page-visual__ring service-page-visual__ring--two" />
              <span className="service-page-visual__diamond" />
              <span className="service-page-visual__label">Technology</span>
            </div>
            <div className="service-page-visual__nodes">
              <span>Supply</span>
              <span>Support</span>
              <span>Infrastructure</span>
            </div>
          </div>
        </div>
        <span className="page-hero__shape page-hero__shape--one" aria-hidden="true" />
        <span className="page-hero__shape page-hero__shape--two" aria-hidden="true" />
      </section>

      <section className="services-section section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="Expertise directory"
            title="Explore our areas of expertise."
            body="Each service page describes the capabilities listed in the company profile. Actual scope can be discussed for your organization’s requirements."
          />
          <div className="service-grid service-grid--page">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="service-callout">
        <div className="container service-callout__inner">
          <div>
            <p className="eyebrow eyebrow--light">Technology support</p>
            <h2>Need help defining the right scope?</h2>
            <p>
              Share your environment and requirements with the Varun Systems
              team.
            </p>
          </div>
          <Link className="button button--light" to="/contact?type=Service%20Enquiry">
            Make an enquiry <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
