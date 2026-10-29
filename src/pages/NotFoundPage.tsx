import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import Seo from "../components/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found | Varun Systems"
        description="The requested Varun Systems page could not be found."
      />
      <section className="not-found-page">
        <div className="container">
          <p className="eyebrow">404 · Page not found</p>
          <h1>This page isn’t part of the Varun Systems site.</h1>
          <p>
            The link may have changed. Browse the main pages or return to the
            homepage.
          </p>
          <div className="not-found-page__actions">
            <Link className="button" to="/">
              <ArrowLeft size={17} aria-hidden="true" /> Go to home
            </Link>
            <Link className="text-link" to="/services">
              Explore our expertise <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
