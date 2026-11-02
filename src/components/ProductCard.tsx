import { Link } from "react-router";
import type { Product } from "../data/products";
import { productImage } from "../data/media";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <article className="product-card">
      <Link
        className="product-card__visual"
        to={`/contact?type=Product%20Enquiry&category=${encodeURIComponent(product.name)}&subject=${encodeURIComponent(`Product enquiry: ${product.name}`)}`}
        aria-label={`Enquire about ${product.name}`}
      >
        <img src={productImage(product)} alt="" loading="lazy" />
      </Link>
      <div className="product-card__content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link
          className="text-link"
          to={`/contact?type=Product%20Enquiry&category=${encodeURIComponent(product.name)}&subject=${encodeURIComponent(`Product enquiry: ${product.name}`)}`}
        >
          Enquire about this product
        </Link>
      </div>
    </article>
  );
}
