import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import RevealOnScroll from "@/app/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Cloud Storage for Maya — Parisa Alirezaee",
};

export default function CloudStorageCaseStudy() {
  return (
    <>
      <Nav />
      <article className="case-study">
        <header className="case-hero">
          <Link href="/#work" className="back-link">
            &larr; Back to work
          </Link>
          <span className="case-number">03</span>
          <h1>Introducing Cloud Storage for Autodesk Maya</h1>
          <p className="case-subtitle">
            Bringing cloud-native file management to one of the most widely used
            3D animation tools
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
              Cloud &amp; Storage
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
          <Link href="/case-study/content-browser" className="case-nav-link">
            &larr; Previous: Content Browser
          </Link>
          <Link href="/case-study/asset-versioning" className="case-nav-link">
            Next: Asset Versioning &rarr;
          </Link>
        </div>
      </article>

      <Footer minimal />
      <RevealOnScroll />
    </>
  );
}
