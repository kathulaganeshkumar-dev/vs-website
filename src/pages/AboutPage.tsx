import { ArrowUpRight, Server, Wrench, Network } from "lucide-react";
import { Link } from "react-router";
import Carousel from "../components/Carousel";
import IndustryCard from "../components/IndustryCard";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import { industries } from "../data/industries";
import { services } from "../data/services";

const capabilities = [
  { title: "Product supply", description: "Computing, print, power, network and interactive equipment for organizational environments.", image: "/images/hero-workspace.webp", icon: Server },
  { title: "Technical services", description: "Computer maintenance, repair, upgrades and remote support for business equipment.", image: "/images/copier-support.webp", icon: Wrench },
  { title: "Infrastructure", description: "Networking, servers, storage, cloud and security systems across connected environments.", image: "/images/network-support.webp", icon: Network },
];

const trustedClients = [
  { name: "AP Police Housing Corporation", logo: "/images/clients/ap-police-housing-corporation.webp" },
  { name: "APSCHE", logo: "/images/clients/apsche.webp" },
  { name: "AVZ Construction Group", logo: "/images/clients/avz-construction-group.webp" },
  { name: "Cambridge High School", logo: "/images/clients/cambridge-high-school.webp" },
  { name: "College of Agriculture", logo: "/images/clients/college-of-agriculture.webp" },
  { name: "Digiflex", logo: "/images/clients/digiflex.webp" },
  { name: "Education Institute", logo: "/images/clients/education-institute.webp" },
  { name: "ESIC", logo: "/images/clients/esic.webp" },
  { name: "Future Trends", logo: "/images/clients/future-trends.webp" },
  { name: "HMWSSB", logo: "/images/clients/hmwssb.webp" },
  { name: "IIRM", logo: "/images/clients/iirm.webp" },
  { name: "iSprout", logo: "/images/clients/isprout.webp" },
  { name: "Krishi Vigyan Kendra", logo: "/images/clients/krishi-vigyan-kendra.webp" },
  { name: "Krishna University", logo: "/images/clients/krishna-university.webp" },
  { name: "KYB", logo: "/images/clients/kyb.webp" },
  { name: "Mazi Zen Clinical Research", logo: "/images/clients/mazi-zen-clinical-research.webp" },
  { name: "NIMS Hospital", logo: "/images/clients/nims-hospital.webp" },
  { name: "Osmania University", logo: "/images/clients/osmania-university.webp" },
  { name: "PLR Projects", logo: "/images/clients/plr-projects.webp" },
  { name: "Praneeth Group", logo: "/images/clients/praneeth-group.webp" },
  { name: "Raghava Construction", logo: "/images/clients/raghava-constructions.webp" },
  { name: "SPCA", logo: "/images/clients/spca.webp" },
  { name: "Sri Balasai Degree College", logo: "/images/clients/sri-balasai-degree-college.webp" },
  { name: "The Workspaces", logo: "/images/clients/the-workspaces.webp" },
  { name: "Vaibhavi", logo: "/images/clients/vaibhavi.webp" },
  { name: "Vessella Group", logo: "/images/clients/vessella-group.webp" },
  { name: "VRK Infrastructure", logo: "/images/clients/vrk-infrastructure.webp" },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Varun Systems | Company Profile"
        description="Learn about Varun Systems, its IT infrastructure capabilities, company background and the sectors it serves."
      />
      <section className="page-hero page-hero--about">
        <div className="container page-hero__inner">
          <div className="page-hero__copy">
            <h1>Technology support built around real operating needs.</h1>
            <p>
              Varun Systems is a Hyderabad-based provider of IT products,
              infrastructure services, maintenance and networking support.
            </p>
          </div>
          <figure className="page-hero__image">
            <img
              src="/images/team-workspace.webp"
              alt="Colleagues collaborating around computers in an office"
              width="1128"
              height="693"
              fetchPriority="high"
            />
          </figure>
        </div>
        <span className="page-hero__shape page-hero__shape--one" aria-hidden="true" />
        <span className="page-hero__shape page-hero__shape--two" aria-hidden="true" />
      </section>

      <section className="about-story section-pad">
        <div className="container about-story__grid">
          <div className="about-story__aside">
            <h2>Integrated technology and infrastructure solutions.</h2>
            <p>
              Established in 2014, Varun Systems has grown from an IT marketing
              and services business into a broader technology and infrastructure
              solutions provider under the leadership of Mr. Veerendra.
            </p>
          </div>
          <div className="about-story__content">
            <p>
              Varun Systems delivers a coordinated portfolio of technology
              products, infrastructure solutions and technical support for
              organizations with varied operating requirements.
            </p>
            <p>
              Its portfolio includes branded desktops, laptops, workstations,
              servers, printers, scanners and UPS systems, supported by
              maintenance, networking, cloud and related technical services.
            </p>
            <p>
              These capabilities address requirements across government,
              education, healthcare, corporate, manufacturing and industrial
              environments.
            </p>
          </div>
        </div>
      </section>

      <section className="client-trust section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="Trusted organizations"
            title="Companies and institutions that trust Varun Systems."
            body="Our relationships span government, education, healthcare, infrastructure, construction and corporate environments."
          />
          <div className="client-logo-grid">
            {trustedClients.map((client) => (
              <article className="client-logo-card" key={client.name}>
                <img src={client.logo} alt={`${client.name} logo`} loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="capability-section section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="Integrated solutions portfolio"
            title="A connected portfolio of products, services and infrastructure."
            body="Varun Systems combines technology supply, technical services and operational support to address organizational requirements."
          />
          <Carousel label="Business capabilities" autoPlayMs={10000}>
            {capabilities.map(({ title, description, image }) => (
              <article className="capability-slide" key={title}>
                <img src={image} alt="" loading="lazy" />
                <div className="capability-slide__content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="about-sectors section-pad">
        <div className="container about-sectors__inner">
          <div>
            <p className="eyebrow">Sectors</p>
            <h2>Serving a diverse range of organizational environments.</h2>
            <p>
              The company profile lists public organizations, educational and
              healthcare facilities, corporate offices, manufacturing and
              service-sector environments.
            </p>
            <Link className="text-link" to="/industries">
              Explore industries <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <Carousel label="Sectors served" autoPlayMs={10400}>
            {industries.map((group) => <IndustryCard key={group.title} group={group} />)}
          </Carousel>
        </div>
      </section>

      <section className="approach-section section-pad">
        <div className="container approach-section__inner">
          <figure className="approach-section__image">
            <img src="/images/network-support.webp" alt="An IT professional maintaining network infrastructure" loading="lazy" />
          </figure>
          <div className="approach-section__copy">
            <p className="eyebrow">Our approach</p>
            <h2>Service quality at the center of every engagement.</h2>
            <p>
              Every engagement is supported by a focus on dependable delivery,
              responsive technical expertise and long-term service quality.
              From equipment supply and installation to maintenance and
              infrastructure support, our approach is aligned to each
              organization’s operational context.
            </p>
            <Link className="text-link" to={`/services/${services.find((service) => service.slug === "computer-maintenance-and-amc")?.slug ?? "computer-maintenance-and-amc"}`}>
              Explore maintenance support <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
