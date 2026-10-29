import { Check } from "lucide-react";
import Carousel from "../components/Carousel";
import Seo from "../components/Seo";
import { industries } from "../data/industries";
import { industryImage } from "../data/media";

export default function IndustriesPage() {
  return (
    <>
      <Seo
        title="Industries We Serve | Varun Systems"
        description="Explore the public, corporate, healthcare, education, manufacturing, infrastructure and service sectors listed in the Varun Systems company profile."
      />
      <section className="page-hero page-hero--simple page-hero--industries">
        <div className="container page-hero__inner">
          <div className="page-hero__copy">
            <h1>Technology support across varied sectors.</h1>
            <p>
              The Varun Systems company profile lists public, private,
              manufacturing, infrastructure and service-sector environments.
            </p>
          </div>
          <div className="industry-hero-graphic" aria-hidden="true">
            <div className="industry-hero-graphic__center">VS</div>
            <span className="industry-hero-graphic__orbit industry-hero-graphic__orbit--one" />
            <span className="industry-hero-graphic__orbit industry-hero-graphic__orbit--two" />
            <span className="industry-hero-graphic__node industry-hero-graphic__node--one" />
            <span className="industry-hero-graphic__node industry-hero-graphic__node--two" />
            <span className="industry-hero-graphic__node industry-hero-graphic__node--three" />
            <span className="industry-hero-graphic__node industry-hero-graphic__node--four" />
          </div>
        </div>
        <span className="page-hero__shape page-hero__shape--two" aria-hidden="true" />
      </section>

      <section className="industry-page-section section-pad">
        <div className="container">
          <div className="industry-page-intro">
            <h2>Technology requirements vary by environment.</h2>
            <p>
              Varun Systems addresses technology and infrastructure needs across
              public administration, education, healthcare, corporate services,
              manufacturing, logistics and other service environments.
            </p>
          </div>
          <Carousel label="Industry sectors" autoPlayMs={10400}>
            {industries.map((group, index) => {
              const Icon = group.icon;
              return (
                <article className="industry-detail-card" key={group.title}>
                  <div className="industry-detail-card__visual">
                    <img src={industryImage(group)} alt="" loading="lazy" />
                  </div>
                  <div className="industry-detail-card__header">
                    <span className="icon-frame icon-frame--tint">
                      <Icon size={23} strokeWidth={1.65} aria-hidden="true" />
                    </span>
                    <span className="industry-detail-card__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.sectors.map((sector) => (
                      <li key={sector}>
                        <Check size={15} aria-hidden="true" />
                        <span>{sector}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </Carousel>
        </div>
      </section>
    </>
  );
}
