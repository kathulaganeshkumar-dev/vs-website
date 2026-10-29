import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router";
import { company } from "../data/company";
import { services } from "../data/services";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__main">
        <div className="site-footer__brand">
          <Link className="brand brand--footer" to="/" aria-label="Varun Systems home">
            <img src="/images/varun-systems-mark.png" alt="" width="110" height="145" loading="lazy" />
            <span className="brand__wordmark"><strong>VARUN</strong><span>SYSTEMS</span></span>
          </Link>
          <p>
            IT products, infrastructure services and technical support for
            organizations across diverse sectors.
          </p>
          <Link className="text-link text-link--light" to="/about">
            Discover Varun Systems <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="site-footer__column">
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Expertise</Link>
          <Link to="/products">Products</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="site-footer__column">
          <h2>Our Expertise</h2>
          {[
            services[1],
            services[2],
            services[3],
            services[5],
            services[9],
            services[11],
          ].map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>
              {service.shortTitle}
            </Link>
          ))}
          <Link className="site-footer__all" to="/services">
            View all expertise <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <div className="site-footer__column site-footer__contact">
          <h2>Contact</h2>
          <p>
            <MapPin size={16} aria-hidden="true" />
            <span>{company.address}</span>
          </p>
          <p>
            <Mail size={16} aria-hidden="true" />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p>
            <Phone size={16} aria-hidden="true" />
            <span>
              {company.phones.map((phone, index) => (
                <span key={phone}>
                  {index > 0 && <br />}
                  <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Varun Systems. All rights reserved.</p>
        <p>Hyderabad, Telangana, India</p>
      </div>
    </footer>
  );
}
