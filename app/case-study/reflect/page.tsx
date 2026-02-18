import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import RevealOnScroll from "@/app/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Unity Reflect — Parisa Alirezaee",
};

export default function ReflectCaseStudy() {
  return (
    <>
      <Nav />
      <article className="case-study">
        <header className="case-hero">
          <Link href="/#work" className="back-link">
            &larr; Back to work
          </Link>
          <span className="case-number">01</span>
          <h1>Unity Reflect</h1>
          <p className="case-subtitle">
            Redesigning navigation and collaboration for a 3D multi-presence
            application
          </p>
          <div className="case-meta">
            <div>
              <strong>Role</strong>
              <br />
              Senior Product Designer
            </div>
            <div>
              <strong>Company</strong>
              <br />
              Unity Technologies
            </div>
            <div>
              <strong>Duration</strong>
              <br />
              2019 – 2022
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
              Unity Reflect is a 3D multi-presence desktop and tablet
              application that helps professionals in the Architecture,
              Engineering, and Construction (AEC) industry review large models
              and collaborate on them in real time. As the lead designer, I owned
              end-to-end design for multiple features across the product
              lifecycle.
            </p>
          </section>

          <section>
            <h2>The Challenge</h2>
            <p>
              AEC professionals needed a way to review massive 3D models
              collaboratively without being tied to specialized hardware. The
              existing navigation paradigm was inherited from gaming conventions
              and felt unintuitive for architects and engineers who think
              spatially in different ways.
            </p>
            <p>Key challenges included:</p>
            <ul>
              <li>
                Navigation modes that didn&apos;t match mental models of AEC
                professionals
              </li>
              <li>
                Difficulty collaborating in real-time across desktop and tablet
                platforms
              </li>
              <li>
                Complex model data that needed to feel accessible and reviewable
              </li>
            </ul>
          </section>

          <section>
            <h2>Process</h2>
            <p>
              I conducted user research sessions with architects, engineers, and
              project managers to understand how they spatially navigate and
              review building models. This informed a complete revamp of the
              navigation system.
            </p>
            <p>My design process included:</p>
            <ul>
              <li>
                Contextual inquiry and user interviews with AEC professionals
              </li>
              <li>Competitive analysis of existing 3D review tools</li>
              <li>Iterative prototyping of navigation paradigms</li>
              <li>
                Usability testing across desktop and tablet form factors
              </li>
              <li>
                Close collaboration with engineering on technical constraints
              </li>
            </ul>
          </section>

          <section>
            <h2>Solution</h2>
            <p>
              I revamped the navigation modes to align with how AEC
              professionals naturally think about space — introducing view-based
              navigation, smart orbit controls, and contextual movement that
              adapts based on model scale and user intent.
            </p>
            <p>
              The multi-presence features were redesigned to support real-time
              awareness of collaborators, with visual indicators for participant
              locations and a shared camera system for guided walkthroughs.
            </p>
          </section>

          <section>
            <h2>Impact</h2>
            <ul>
              <li>
                Improved task completion rates in usability testing by 40%
              </li>
              <li>Reduced onboarding time for new users significantly</li>
              <li>
                Shipped across desktop and tablet platforms for enterprise
                clients
              </li>
              <li>
                Enabled real-time collaboration for distributed AEC teams
              </li>
            </ul>
          </section>
        </div>

        <div className="case-nav">
          <Link href="/#work" className="case-nav-link">
            &larr; All projects
          </Link>
          <Link href="/case-study/annotation" className="case-nav-link">
            Next: Annotation &rarr;
          </Link>
        </div>
      </article>

      <Footer minimal />
      <RevealOnScroll />
    </>
  );
}
