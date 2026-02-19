import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import RevealOnScroll from "@/app/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Learning Agentic AI — Parisa Alirezaee",
};

export default function AgenticAiCaseStudy() {
  return (
    <>
      <Nav />
      <article className="case-study">
        <header className="case-hero">
          <Link href="/#work" className="back-link">
            &larr; Back to work
          </Link>
          <span className="case-number">01</span>
          <h1>Learning Agentic AI</h1>
          <p className="case-subtitle">
            Exploring the intersection of autonomous AI agents and user
            experience design
          </p>
          <div className="case-meta">
            <div>
              <strong>Role</strong>
              <br />
              Product Designer
            </div>
            <div>
              <strong>Focus</strong>
              <br />
              AI &amp; UX
            </div>
            <div>
              <strong>Status</strong>
              <br />
              Ongoing
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
          <Link href="/#work" className="case-nav-link">
            &larr; All projects
          </Link>
          <Link href="/case-study/content-browser" className="case-nav-link">
            Next: Content Browser &rarr;
          </Link>
        </div>
      </article>

      <Footer minimal />
      <RevealOnScroll />
    </>
  );
}
