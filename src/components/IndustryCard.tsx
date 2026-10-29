import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { IndustryGroup } from "../data/industries";
import { industryImage } from "../data/media";

export default function IndustryCard({ group }: { group: IndustryGroup }) {
  const Icon = group.icon;

  return (
    <article className="industry-card">
      <div className="industry-card__visual">
        <img src={industryImage(group)} alt="" loading="lazy" />
      </div>
      <div className="industry-card__heading">
        <span className="icon-frame icon-frame--tint">
          <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
        </span>
      </div>
      <h3>{group.title}</h3>
      <p>{group.description}</p>
      <ul>
        {group.sectors.slice(0, 3).map((sector) => (
          <li key={sector}>{sector}</li>
        ))}
        {group.sectors.length > 3 && (
          <li className="industry-card__more">
            + {group.sectors.length - 3} more areas
          </li>
        )}
      </ul>
      <Link className="text-link" to="/industries">
        Explore sectors <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
