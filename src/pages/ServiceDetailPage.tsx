import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import Carousel from "../components/Carousel";
import Seo from "../components/Seo";
import { serviceImage } from "../data/media";
import { getService, services } from "../data/services";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <Navigate to="/not-found" replace />;

  const imageAlt = `${service.title} service`;

  return (
    <>
      <Seo
        title={`${service.title} | Varun Systems`}
        description={service.description}
      />
      <section className="service-detail-hero">
        <div className="container service-detail-hero__inner">
          <div className="service-detail-hero__copy">
            <Link className="back-link" to="/services">
              <ArrowLeft size={16} aria-hidden="true" />
              All expertise
            </Link>
            <p className="eyebrow">Expertise overview</p>
            <h1>{service.title}</h1>
            <p>{service.introduction}</p>
          </div>
          <figure className="service-detail-hero__image">
            <img src={serviceImage(service)} alt={imageAlt} width="1241" height="735" />
            <figcaption>{service.shortTitle}</figcaption>
          </figure>
        </div>
      </section>

      <section className="service-detail-body section-pad">
        <div className="container service-detail-body__grid">
          <div className="service-detail-body__main">
            <p className="eyebrow">Capability scope</p>
            <h2>Service scope aligned to your operating environment.</h2>
            <p className="service-detail-body__intro">
              This capability overview outlines the areas covered by the service.
              Equipment selection, coverage and delivery requirements can be
              defined with Varun Systems for your organization.
            </p>
            <Carousel label={`Scope and capabilities for ${service.title}`} autoPlayMs={7000}>
              {service.capabilities.map((capability, index) => (
                <article className="scope-slide" key={capability}>
                  <img src={serviceImage(service)} alt="" loading="lazy" />
                  <div className="scope-slide__content">
                    <span>{String(index + 1).padStart(2, "0")} / {String(service.capabilities.length).padStart(2, "0")}</span>
                    <h3>{capability}</h3>
                    <Check size={18} aria-hidden="true" />
                  </div>
                </article>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="related-services section-pad">
        <div className="container">
          <div className="section-row">
            <div>
              <p className="eyebrow">Related expertise</p>
              <h2>Explore complementary capabilities.</h2>
            </div>
            <Link className="text-link" to="/services">
              View all expertise <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <Carousel label="Related expertise" autoPlayMs={7300}>
            {services.filter((item) => item.slug !== service.slug).slice(0, 6).map((item) => (
              <Link className="related-service-card" key={item.slug} to={`/services/${item.slug}`}>
                <img src={serviceImage(item)} alt="" loading="lazy" />
                <span>{item.shortTitle}</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}
