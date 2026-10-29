import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="IT Products Catalogue | Varun Systems"
        description="Browse computers, servers, printers, UPS systems, network equipment, surveillance systems and more."
      />
      <section className="page-hero page-hero--simple page-hero--products">
        <div className="container page-hero__inner page-hero__inner--catalogue">
          <div className="page-hero__copy">
            <p className="eyebrow">Products catalogue</p>
            <h1>Explore the technology your organization relies on.</h1>
            <p>
              Browse product categories listed by Varun Systems and send an
              enquiry about the equipment you need.
            </p>
            <Link className="button" to="/contact?type=Product%20Enquiry">
              Enquire about a product <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <figure className="catalogue-hero-mosaic" aria-hidden="true">
            <img className="catalogue-hero-mosaic__laptop" src="/images/hero-workspace.webp" alt="" />
            <img className="catalogue-hero-mosaic__print" src="/images/copier-support.webp" alt="" />
            <img className="catalogue-hero-mosaic__network" src="/images/network-support.webp" alt="" />
            <img className="catalogue-hero-mosaic__security" src="/images/cctv-systems.webp" alt="" />
            <img className="catalogue-hero-mosaic__power" src="/images/fire-alarm-systems.webp" alt="" />
          </figure>
        </div>
        <span className="page-hero__shape page-hero__shape--one" aria-hidden="true" />
      </section>

      <section className="catalogue-section section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="Browse the catalogue"
            title="Product categories"
            body="Explore the equipment categories supported by Varun Systems, from business computing and print to networking, security and collaboration."
          />
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
