import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import RevealOnScroll from "@/app/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Asset Versioning — Parisa Alirezaee",
};

export default function AssetVersioningCaseStudy() {
  return (
    <>
      <Nav />
      <article className="case-study">
        <header className="case-hero">
          <Link href="/#work" className="back-link">
            &larr; Back to work
          </Link>
          <span className="case-number">04</span>
          <h1>Asset Versioning for Unity Asset Manager</h1>
          <p className="case-subtitle">
            Designing version control workflows for 3D assets in collaborative
            game development pipelines
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
              Asset Management
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
          <Link href="/case-study/cloud-storage" className="case-nav-link">
            &larr; Previous: Cloud Storage
          </Link>
          <Link href="/case-study/3d-annotation" className="case-nav-link">
            Next: 3D Annotation &rarr;
          </Link>
        </div>
      </article>

      <Footer minimal />
      <RevealOnScroll />
    </>
  );
}
