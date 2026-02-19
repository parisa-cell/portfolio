import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import RevealOnScroll from "@/app/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "3D Annotation — Parisa Alirezaee",
};

export default function AnnotationCaseStudy() {
  return (
    <>
      <Nav />
      <article className="case-study">
        <header className="case-hero">
          <Link href="/#work" className="back-link">
            &larr; Back to work
          </Link>
          <span className="case-number">05</span>
          <h1>3D Annotation for Unity Reflect</h1>
          <p className="case-subtitle">
            Enabling spatial markup and review workflows in a real-time 3D
            collaboration platform
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
              Unity Technologies
            </div>
            <div>
              <strong>Focus</strong>
              <br />
              3D Collaboration
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
          <Link href="/case-study/asset-versioning" className="case-nav-link">
            &larr; Previous: Asset Versioning
          </Link>
          <Link href="/#work" className="case-nav-link">
            All projects &rarr;
          </Link>
        </div>
      </article>

      <Footer minimal />
      <RevealOnScroll />
    </>
  );
}
