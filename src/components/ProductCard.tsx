import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { Product } from "../data/products";
import { productImage } from "../data/media";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const Icon = product.icon;

  return (
    <article className="product-card">
      <Link
        className="product-card__visual"
        to={`/contact?type=Product%20Enquiry&category=${encodeURIComponent(product.name)}&subject=${encodeURIComponent(`Product enquiry: ${product.name}`)}`}
        aria-label={`Enquire about ${product.name}`}
      >
        <img src={productImage(product)} alt="" loading="lazy" />
        <span className="product-card__visual-mark" aria-hidden="true" />
        <Icon size={54} strokeWidth={1.25} aria-hidden="true" />
        <span className="product-card__visual-caption">Varun Systems</span>
      </Link>
      <div className="product-card__content">
        <span className="tag">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link
          className="text-link"
          to={`/contact?type=Product%20Enquiry&category=${encodeURIComponent(product.name)}&subject=${encodeURIComponent(`Product enquiry: ${product.name}`)}`}
        >
          Enquire about this product <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
