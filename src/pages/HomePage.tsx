import {
  ArrowRight,
  ArrowUpRight,
  Cable,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router";
import IndustryCard from "../components/IndustryCard";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Seo from "../components/Seo";
import { company } from "../data/company";
import { industries } from "../data/industries";
import { products } from "../data/products";
import { services } from "../data/services";

const strengths = [
  {
    title: "A coordinated technology portfolio",
    copy: "Product supply spans computing, print, power, networking and interactive systems, supported by related technical services.",
    image: "/images/hero-workspace.webp",
  },
  {
    title: "Support across the equipment lifecycle",
    copy: "Installation, maintenance, repair and annual maintenance contracts help organizations plan for continuity beyond initial deployment.",
    image: "/images/copier-support.webp",
  },
  {
    title: "Infrastructure and technical capability",
    copy: "The service portfolio includes wired and wireless networking, server and storage systems, cloud services, surveillance and access control.",
    image: "/images/network-support.webp",
  },
  {
    title: "Designed for varied operating environments",
    copy: "The company profile identifies public administration, education, healthcare, corporate, manufacturing and service-sector requirements.",
    image: "/images/team-workspace.webp",
  },
  {
    title: "Operational services beyond IT",
    copy: "Facility management and manpower supply complement the technology portfolio for organizations coordinating wider support needs.",
    image: "/images/fire-alarm-systems.webp",
  },
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="Varun Systems | End-to-End Technology Solutions"
        description="IT products, infrastructure support, maintenance, networking and enterprise technology services from Varun Systems in Hyderabad."
      />
      <section className="hero hero--video">
        <div className="hero__video-bg" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-workspace.webp"
          >
            <source src="/videos/varun-systems-overview.webm" type="video/webm" />
          </video>
        </div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Technology for the way organizations work
            </p>
            <h1>Powering Businesses with End-to-End Technology Solutions</h1>
            <p className="hero__lead">
              Delivering professional IT infrastructure, technology products,
              maintenance, networking, and enterprise support solutions to
              organizations across diverse industries.
            </p>
            <div className="hero__footnote">
              <Cable size={17} strokeWidth={1.6} aria-hidden="true" />
              <span>Technology delivery · Infrastructure · Lifecycle support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-section__grid">
          <div>
            <p className="eyebrow">About Varun Systems</p>
            <h2>Technology that works across your organization.</h2>
          </div>
          <div className="intro-section__copy">
            <p>
              Varun Systems brings IT products, technical services, networking
              and infrastructure support together for public, corporate,
              educational, healthcare and industrial environments.
            </p>
            <Link className="text-link" to="/about">
              Discover Varun Systems <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section section-pad section-pad--top">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              eyebrow="Our expertise"
              title="Support for every layer of your technology environment."
              body="Explore technology supply, infrastructure and operational support capabilities for organizational environments."
            />
          </div>
          <Carousel label="Our expertise" autoPlayMs={6500}>
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </Carousel>
        </div>
      </section>

      <section className="products-section section-pad">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              eyebrow="IT products"
              title="Equipment for essential business operations."
              body="Explore technology products for computing, networking, print, power, security and collaboration environments."
            />
            <Link className="text-link section-row__link" to="/products">
              Our Products <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <Carousel label="Our products" autoPlayMs={7200}>
            {products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </Carousel>
        </div>
      </section>

      <section className="industries-section section-pad">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              eyebrow="Industries we serve"
              title="Different sectors. Practical technology needs."
              body="The company profile lists a broad range of public, private and service-sector environments."
            />
          </div>
          <Carousel label="Industries served" autoPlayMs={7600}>
            {industries.map((group) => <IndustryCard key={group.title} group={group} />)}
          </Carousel>
        </div>
      </section>

      <section className="strengths-section section-pad">
        <div className="container strengths-section__grid">
          <div className="strengths-section__intro">
            <p className="eyebrow">Why Varun Systems</p>
            <h2>A practical partner for technology and infrastructure.</h2>
            <p>
              Varun Systems brings together product sourcing, implementation,
              infrastructure services and ongoing support. This coordinated
              portfolio helps organizations address day-to-day technology
              needs and plan for reliable operations across their environments.
            </p>
            <Link className="text-link" to="/about">
              Read the company profile <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <Carousel label="Why Varun Systems" autoPlayMs={6800}>
            {strengths.map((item, index) => (
              <article className="strength-card" key={item.title}>
                <div className="strength-card__visual">
                  <img src={item.image} alt="" loading="lazy" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="strength-card__copy">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="contact-band">
        <div className="contact-band__ornament" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="container contact-band__inner">
          <div className="contact-band__copy">
            <p className="eyebrow eyebrow--light">Let’s talk</p>
            <h2>Looking for a reliable technology solutions partner?</h2>
            <p>
              Connect with Varun Systems to discuss your IT infrastructure,
              product supply, maintenance and technical service requirements.
            </p>
            <div className="contact-band__actions">
              <Link className="button button--light" to="/contact">
                Contact Our Team <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="contact-band__details">
            <div>
              <MapPin size={18} aria-hidden="true" />
              <p>{company.address}</p>
            </div>
            <div>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
            <div>
              <Phone size={18} aria-hidden="true" />
              <p>
                {company.phones.map((phone, index) => (
                  <span key={phone}>
                    {index > 0 && <br />}
                    <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
                  </span>
                ))}
              </p>
            </div>
            <Link className="text-link text-link--light" to="/contact">
              Full contact details <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
