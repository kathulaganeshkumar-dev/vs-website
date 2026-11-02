import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { IndustryGroup } from "../data/industries";
import { industryImage } from "../data/media";

export default function IndustryCard({ group }: { group: IndustryGroup }) {
  return (
    <article className="industry-card">
      <div className="industry-card__visual">
        <img src={industryImage(group)} alt={`${group.title} sector`} loading="lazy" />
      </div>
      <h3>{group.title}</h3>
      <p>{group.description}</p>
      <ul>
        {group.sectors.slice(0, 3).map((sector) => (
          <li key={sector}>{sector}</li>
        ))}
      </ul>
      <Link className="text-link" to="/industries">
        Explore sectors <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
