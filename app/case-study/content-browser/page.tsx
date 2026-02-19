import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import RevealOnScroll from "@/app/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Generic Content Browser — Parisa Alirezaee",
};

export default function ContentBrowserCaseStudy() {
  return (
    <>
      <Nav />
      <article className="case-study">
        <header className="case-hero">
          <Link href="/#work" className="back-link">
            &larr; Back to work
          </Link>
          <span className="case-number">02</span>
          <h1>Generic Content Browser for Autodesk M&amp;E Products</h1>
          <p className="case-subtitle">
            Designing a unified content browsing experience across Autodesk
            Media &amp; Entertainment products
          </p>
          <div className="case-meta">
            <div>
              <strong>Role</strong>
              <br />
              Product Designer
            </div>
            <div>
              <strong>Company</strong>
              <br />
              Autodesk
            </div>
            <div>
              <strong>Focus</strong>
              <br />
              Content Management
            </div>
          </div>
        </header>

        <div className="case-body">
          <section>
            <h2>Overview</h2>
            <p>Content coming soon.</p>
          </section>
        </div>

        <div className="case-nav">
          <Link href="/case-study/agentic-ai" className="case-nav-link">
            &larr; Previous: Agentic AI
          </Link>
          <Link href="/case-study/cloud-storage" className="case-nav-link">
            Next: Cloud Storage &rarr;
          </Link>
        </div>
      </article>

      <Footer minimal />
      <RevealOnScroll />
    </>
  );
}
