import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import RevealOnScroll from "@/app/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Annotation & Presentation Mode — Parisa Alirezaee",
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
          <span className="case-number">02</span>
          <h1>Annotation &amp; Presentation Mode</h1>
          <p className="case-subtitle">
            Designing tools for real-time 3D model reviews and stakeholder
            walkthroughs
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
              <strong>Duration</strong>
              <br />
              2020 – 2021
            </div>
            <div>
              <strong>Platform</strong>
              <br />
              Desktop &amp; Tablet
            </div>
          </div>
        </header>

        <div className="case-body">
          <section>
            <h2>Overview</h2>
            <p>
              As part of the Unity Reflect ecosystem, I designed the annotation
              and presentation mode features — enabling AEC teams to markup 3D
              models, leave contextual notes, and guide stakeholders through
              structured walkthroughs of building designs.
            </p>
          </section>

          <section>
            <h2>The Challenge</h2>
            <p>
              Design reviews in AEC typically happen through 2D screenshots and
              email chains, losing the spatial context that makes 3D models
              valuable. Teams needed a way to annotate directly in 3D space and
              present designs to clients without requiring them to learn complex
              navigation tools.
            </p>
            <ul>
              <li>
                Annotations needed to be spatially anchored to 3D model elements
              </li>
              <li>
                Presentation mode needed to guide non-technical stakeholders
                through a model
              </li>
              <li>
                The tools had to work across both desktop and tablet interfaces
              </li>
            </ul>
          </section>

          <section>
            <h2>Process</h2>
            <p>
              I mapped existing review workflows through interviews and
              observation, identifying pain points where spatial context was
              lost. I worked closely with the engineering team to understand the
              technical possibilities of 3D annotation anchoring.
            </p>
            <ul>
              <li>
                Workflow mapping of existing design review processes
              </li>
              <li>
                Co-design sessions with architects and project managers
              </li>
              <li>
                Low-fidelity prototyping of annotation interaction patterns
              </li>
              <li>
                Iterative testing of presentation mode navigation
              </li>
            </ul>
          </section>

          <section>
            <h2>Solution</h2>
            <p>
              The annotation system allows users to pin notes, sketches, and
              markers directly onto 3D surfaces. Notes are persistent, filterable
              by author or category, and visible to all collaborators in real
              time.
            </p>
            <p>
              Presentation mode transforms the free-roam 3D environment into a
              guided, step-by-step experience. Designers can set up camera
              viewpoints, add talking points, and walk stakeholders through a
              model as if giving a live tour — without the audience needing to
              navigate at all.
            </p>
          </section>

          <section>
            <h2>Impact</h2>
            <ul>
              <li>
                Reduced design review cycle time by enabling in-context feedback
              </li>
              <li>
                Presentation mode adopted by enterprise clients for
                client-facing walkthroughs
              </li>
              <li>
                Eliminated the need for 2D screenshot-based review workflows
              </li>
            </ul>
          </section>
        </div>

        <div className="case-nav">
          <Link href="/case-study/reflect" className="case-nav-link">
            &larr; Prev: Unity Reflect
          </Link>
          <Link href="/case-study/ar" className="case-nav-link">
            Next: AR Collaboration &rarr;
          </Link>
        </div>
      </article>

      <Footer minimal />
      <RevealOnScroll />
    </>
  );
}
