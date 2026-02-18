import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import RevealOnScroll from "@/app/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "AR Collaboration — Parisa Alirezaee",
};

export default function ARCaseStudy() {
  return (
    <>
      <Nav />
      <article className="case-study">
        <header className="case-hero">
          <Link href="/#work" className="back-link">
            &larr; Back to work
          </Link>
          <span className="case-number">03</span>
          <h1>AR Collaboration</h1>
          <p className="case-subtitle">
            Exploring augmented reality as a medium for multi-user architectural
            collaboration
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
              2021
            </div>
            <div>
              <strong>Platform</strong>
              <br />
              Tablet (AR)
            </div>
          </div>
        </header>

        <div className="case-body">
          <section>
            <h2>Overview</h2>
            <p>
              I explored the use of augmented reality as a collaboration medium
              within Unity Reflect, allowing multiple users to view and discuss
              architectural models overlaid onto physical spaces using tablets
              and AR-capable devices.
            </p>
          </section>

          <section>
            <h2>The Challenge</h2>
            <p>
              While desktop-based 3D reviews work well for detailed analysis,
              they can&apos;t replicate the experience of understanding a
              building design at scale and in context. Construction teams on-site
              and clients visiting locations needed a way to see proposed designs
              in the physical space where they would be built.
            </p>
            <ul>
              <li>
                AR experiences needed to support multiple simultaneous users
                seeing the same model
              </li>
              <li>
                Scale and positioning of models had to be accurate to physical
                space
              </li>
              <li>
                Interaction patterns for AR collaboration were largely undefined
                in the industry
              </li>
            </ul>
          </section>

          <section>
            <h2>Process</h2>
            <p>
              This was an exploratory project that required a research-heavy
              approach. I worked at the intersection of UX design and technical
              prototyping.
            </p>
            <ul>
              <li>
                Literature review of AR collaboration patterns in professional
                settings
              </li>
              <li>Prototyping sessions with AR development kits</li>
              <li>
                User testing with AEC professionals in simulated site visits
              </li>
              <li>
                Defining interaction paradigms for multi-user AR environments
              </li>
            </ul>
          </section>

          <section>
            <h2>Solution</h2>
            <p>
              I designed a shared AR experience where team members could place a
              building model in a physical space, walk around it, and annotate
              specific elements. The system maintained spatial sync across
              devices, so all participants saw the model in the same location and
              orientation.
            </p>
            <p>
              Key interactions included pinch-to-scale, tap-to-annotate, and a
              &ldquo;follow me&rdquo; mode where one user could guide others to
              specific viewpoints — translating the presentation mode concept
              into physical space.
            </p>
          </section>

          <section>
            <h2>Impact</h2>
            <ul>
              <li>
                Validated AR as a viable review medium for AEC teams
              </li>
              <li>
                Established interaction design patterns that informed future AR
                product direction
              </li>
              <li>
                Demonstrated at Unity events and industry conferences
              </li>
            </ul>
          </section>
        </div>

        <div className="case-nav">
          <Link href="/case-study/annotation" className="case-nav-link">
            &larr; Prev: Annotation
          </Link>
          <Link href="/case-study/vibrotactile" className="case-nav-link">
            Next: Vibrotactile &rarr;
          </Link>
        </div>
      </article>

      <Footer minimal />
      <RevealOnScroll />
    </>
  );
}
