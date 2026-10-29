import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import IndustriesPage from "./pages/IndustriesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ServicesPage from "./pages/ServicesPage";
import { getService } from "./data/services";

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const service = path.startsWith("/services/")
      ? getService(path.split("/").at(-1))
      : undefined;
    const pages: Record<string, { title: string; description: string }> = {
      "/": {
        title: "Varun Systems | End-to-End Technology Solutions",
        description:
          "IT products, infrastructure support, maintenance, networking and enterprise technology services from Varun Systems in Hyderabad.",
      },
      "/about": {
        title: "About Varun Systems | Company Profile",
        description:
          "Learn about Varun Systems, its IT infrastructure capabilities, company background and the sectors it serves.",
      },
      "/services": {
        title: "Technology Expertise | Varun Systems",
        description:
          "Explore IT products and supply, maintenance, AMC, networking, CCTV, cloud, server, facility and other services from Varun Systems.",
      },
      "/products": {
        title: "IT Products Catalogue | Varun Systems",
        description:
          "Browse computers, servers, printers, UPS systems, network equipment, surveillance systems and more.",
      },
      "/industries": {
        title: "Industries We Serve | Varun Systems",
        description:
          "Explore the public, corporate, healthcare, education, manufacturing, infrastructure and service sectors listed in the Varun Systems company profile.",
      },
      "/contact": {
        title: "Contact Varun Systems | Corporate Enquiries",
        description:
          "Contact Varun Systems in Hyderabad about IT products, infrastructure, maintenance and technical service requirements.",
      },
    };
    const meta =
      (service && {
        title: `${service.title} | Varun Systems`,
        description: service.description,
      }) ??
      pages[path] ?? {
        title: "Page not found | Varun Systems",
        description: "The requested Varun Systems page could not be found.",
      };

    document.title = meta.title;
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector<HTMLMetaElement>('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector<HTMLMetaElement>('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector<HTMLMetaElement>('meta[property="og:url"]')
      ?.setAttribute("content", `https://www.varunsystems.in${path}`);
    document
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute("href", `https://www.varunsystems.in${path}`);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }, [location.pathname]);

  return null;
}

function SiteLayout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="site-main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
      <RouteEffects />
    </>
  );
}

export default function App() {
  return <SiteLayout />;
}
