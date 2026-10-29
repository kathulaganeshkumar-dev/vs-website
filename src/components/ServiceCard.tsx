import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { Service } from "../data/services";
import { serviceImage } from "../data/media";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className="service-card__visual">
        <img src={serviceImage(service)} alt="" loading="lazy" />
        <span>{service.shortTitle}</span>
      </div>
      <div className="service-card__top">
        <span className="icon-frame">
          <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
        </span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link className="text-link" to={`/services/${service.slug}`}>
        Explore capability <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
