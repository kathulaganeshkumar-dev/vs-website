import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";
import { services } from "../data/services";

function activeLinkClass({ isActive }: { isActive: boolean }) {
  return isActive ? "site-nav__link is-active" : "site-nav__link";
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const servicesMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    if (servicesMenuRef.current) servicesMenuRef.current.open = false;
  }, [location.pathname]);

  return (
    <>
      <header className="site-header">
        <div className="container site-header__main">
          <Link className="brand" to="/" aria-label="Varun Systems home">
            <img src="/images/varun-systems-mark.png" alt="" width="110" height="145" />
            <span className="brand__wordmark"><strong>VARUN</strong><span>SYSTEMS</span></span>
          </Link>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="primary-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav
            id="primary-navigation"
            className={mobileOpen ? "site-nav is-open" : "site-nav"}
            aria-label="Main navigation"
          >
            <NavLink to="/" end className={activeLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={activeLinkClass}>
              About Us
            </NavLink>
            <details className="services-menu" ref={servicesMenuRef}>
              <summary
                className={
                  location.pathname.startsWith("/services")
                    ? "site-nav__link is-active"
                    : "site-nav__link"
                }
              >
                Our Expertise <ChevronDown size={15} aria-hidden="true" />
              </summary>
              <div className="services-menu__panel">
                <Link className="services-menu__overview" to="/services">
                  Explore all expertise
                </Link>
                <div className="services-menu__grid">
                  {services.map((service) => (
                    <Link key={service.slug} to={`/services/${service.slug}`}>
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </details>
            <NavLink to="/products" className={activeLinkClass}>
              Products
            </NavLink>
            <NavLink to="/industries" className={activeLinkClass}>
              Industries
            </NavLink>
            <NavLink to="/contact" className={activeLinkClass}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
