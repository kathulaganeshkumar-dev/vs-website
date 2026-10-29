import { useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import { products, productCategories } from "../data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All categories");
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatches =
        activeCategory === "All categories" || product.category === activeCategory;
      const queryMatches =
        !search ||
        [product.name, product.category, product.description]
          .join(" ")
          .toLowerCase()
          .includes(search);
      return categoryMatches && queryMatches;
    });
  }, [activeCategory, query]);

  function clearFilters() {
    setActiveCategory("All categories");
    setQuery("");
  }

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
          <div className="catalogue-hero-art" aria-hidden="true">
            <div className="catalogue-hero-art__screen">
              <div />
              <div />
              <div />
            </div>
            <span className="catalogue-hero-art__tower" />
            <span className="catalogue-hero-art__base" />
            <span className="catalogue-hero-art__caption">Technology supply</span>
          </div>
        </div>
        <span className="page-hero__shape page-hero__shape--one" aria-hidden="true" />
      </section>

      <section className="catalogue-section section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="Browse the catalogue"
            title="Product categories"
            body="Use the filters or search by product category. Product specifications, pricing and availability are confirmed on enquiry."
          />
          <div className="catalogue-controls">
            <div className="catalogue-search">
              <label htmlFor="product-search">Search product categories</label>
              <div className="catalogue-search__field">
                <Search size={19} aria-hidden="true" />
                <input
                  id="product-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search computers, printers, network equipment…"
                />
                {query && (
                  <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
                    <X size={17} aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
            <div className="catalogue-filters">
              <span className="catalogue-filters__label">Filter by category</span>
              <div className="catalogue-filters__list">
                {productCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={
                      activeCategory === category
                        ? "filter-chip is-active"
                        : "filter-chip"
                    }
                    aria-pressed={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p className="catalogue-results" role="status" aria-live="polite">
            {filteredProducts.length > 0
              ? `Showing ${filteredProducts.length} ${filteredProducts.length === 1 ? "category" : "categories"}`
              : "No product categories match your search."}
          </p>
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="catalogue-empty">
              <Search size={26} aria-hidden="true" />
              <h2>No matching categories</h2>
              <p>Try a different search term or clear the selected filters.</p>
              <button className="button button--outline" type="button" onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          )}
          <div className="catalogue-disclaimer">
            <span className="catalogue-disclaimer__mark" aria-hidden="true" />
            <p>
              This catalogue is for product discovery and enquiries. It does
              not show online stock, prices or checkout.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
