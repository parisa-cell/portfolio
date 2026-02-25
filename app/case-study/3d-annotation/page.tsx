import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
          <h1>Unity Reflect Annotation</h1>
          <p className="case-subtitle">
            Allowing users to collaborate on 3D models real-time
          </p>
          <div className="case-meta">
            <div>
              <strong>Role</strong>
              <br />
              Lead and solo designer
            </div>
            <div>
              <strong>Type</strong>
              <br />
              Agile
            </div>
            <div>
              <strong>Platform</strong>
              <br />
              Desktop and Tablet
            </div>
            <div>
              <strong>Length</strong>
              <br />
              2 months
            </div>
          </div>

          <div className="case-hero-image">
            <Image
              src="/images/case-studies/3d-annotation/hero.png"
              alt="Unity Reflect 3D Annotation"
              width={1366}
              height={1024}
              priority
            />
          </div>
        </header>

        <div className="case-body">
          <section>
            <h2>Project details</h2>
            <p>
              <strong>Tools used:</strong>
              <br />
              Figma . Figjam . JIRA
            </p>
            <p>
              <strong>Team:</strong>
              <br />
              David Ménard: Product Manager
              <br />
              Christian Boutin: Engineering lead
              <br />
              Simon Courtemanche: Front-end developer
              <br />
              Nadine Boucher: Program Manager
              <br />
              Angela Case: Documentation lead
            </p>
            <p>
              <strong>My role:</strong>
              <br />
              Lead and solo designer of the product - discovery, user research,
              design, testing.
            </p>
            <p>
              <strong>Outcome:</strong>
              <br />
              To address the need for tracking discussions and issues during
              design reviews, I designed Unity Reflect 3D Annotation feature.
              This feature enables architects and stakeholders to monitor
              discussions and issues in real-time, resulting in faster decision
              making and cost saving.
            </p>
          </section>

          <section>
            <h2>What is Unity Reflect?</h2>
            <p>
              Unity Reflect is a suite of products that helps users connect
              Building Information Model (BIM) data, stakeholders, and every
              phase of the Architecture, Engineering and Construction (AEC)
              lifecycle in one immersive, collaborative real-time platform. It
              enables better communication and facilitate faster, more impactful
              decision-making to win bids, catch mistakes early, prevent
              injuries, and more.
            </p>
          </section>

          <section>
            <h2>Key benefits of Unity Reflect</h2>
            <ul>
              <li>
                <strong>Identify mistakes earlier:</strong> Bring multiple models
                and their metadata together to facilitate more efficient
                collaboration with project stakeholders, catch mistakes early,
                and avoid costly rework.
              </li>
              <li>
                <strong>Faster decision-making:</strong> Generate interactive,
                immersive experiences that are linked to the original design
                models in Revit, BIM 360, Navisworks, SketchUp, and Rhino.
              </li>
              <li>
                <strong>Multiuser collaboration:</strong> Drive alignment around
                design decisions with multiuser collaboration to avoid
                misunderstandings and errors. Share a project link to
                stakeholders and walk through the model together in Follow Mode,
                add annotations, and see what other users are seeing in
                real-time.
              </li>
              <li>
                <strong>Any platform, anywhere:</strong> The ability to make
                changes to projects on-premise or in the cloud enables greater
                collaboration with users outside of your network. View large
                models on any device or platform, including VR, AR, iOS,
                Android, PC, and Mac.
              </li>
              <li>
                <strong>Communicate design intent:</strong> Conduct sun studies,
                overlay models in 1:1 AR at scale (marker-based or tabletop),
                and filter BIM data to effectively communicate design intent to
                stakeholders.
              </li>
              <li>
                <strong>Enable more aha moments:</strong> Create immersive,
                multiuser environments to perform collaborative project
                walkthroughs in VR and AR. Wow clients in VR or high-powered GPU
                desktop applications with high-definition graphics.
              </li>
            </ul>
          </section>

          <section>
            <h2>Design Process</h2>
            <nav className="process-nav">
              <a href="#discovery" className="process-step">
                <span className="process-circle">Discovery</span>
              </a>
              <span className="process-arrow">&rarr;</span>
              <a href="#exploration" className="process-step">
                <span className="process-circle">Exploration</span>
              </a>
              <span className="process-arrow">&rarr;</span>
              <a href="#ship" className="process-step">
                <span className="process-circle">Ship</span>
              </a>
            </nav>
          </section>

          <section id="discovery">
            <h2>Discovery</h2>

            <h2>Goals of this phase</h2>
            <ul>
              <li>Align on project goals and limitations</li>
              <li>Empathize with our users</li>
              <li>Define the problem(s) we are solving</li>
            </ul>

            <h2>User interviews</h2>
            <p>
              During the discovery phase of the project, I conducted user
              interviews to identify pain points users face when tying to
              accomplish their task in Unity Reflect. These interviews were done
              during our bi-weekly user feedback meeting. Our open-ended
              conversations during these interviews revealed these findings:
            </p>
            <ul>
              <li>
                <strong>Real-time collaboration</strong> in pre-construction
                stages is crucial for seamless project execution.
              </li>
              <li>
                Engaging on a regular basis builds trust with{" "}
                <strong>owners</strong> and speeds up customer buy-in
              </li>
              <li>
                Finding mistakes early{" "}
                <strong>prevents costly rework</strong>
              </li>
              <li>
                Design tools and documents are inaccessible to{" "}
                <strong>non-technical stakeholders</strong>
              </li>
            </ul>

            <h2>Problem</h2>
            <p>
              From the findings of these interviews, a Product Requirement
              Document (PRD) is created by the Product Manager (PM). This
              document roughly defines the problem, which in summary goes as
              follows:
            </p>
            <p>
              During design review, Architects and stakeholders need a way to
              track discussions and issues that have been risen during the
              discussion. It enables teams to share instant updates, identify
              issues early, and make informed decisions collaboratively.
            </p>
            <p>Our personas are:</p>
            <ul>
              <li>
                <strong>Architect:</strong> Conveying design intent to
                non-technical stakeholders and capturing stakeholders feedback
                early in design process
                <br />
                <strong>
                  Goal: to deliver what the customer needs in a timely manner
                  and be efficient while working on multiple projects at the
                  same time.
                </strong>
              </li>
              <li>
                <strong>Project Manager:</strong> Manages entire project from
                design through build: identify project scope, hire vendors,
                share design/build requirements with Architect.
                <br />
                <strong>
                  Goal: to have an overview of the project timeline and can
                  estimate delivery time.
                </strong>
              </li>
              <li>
                <strong>Occupant:</strong> Provides feedback on designs. Has
                challenges with understanding technical models especially when
                delivered in 2D, CAD or PDF format.
                <br />
                <strong>
                  Goal: to make sure that the final version of the project is
                  what they want it to be.
                </strong>
              </li>
            </ul>

            <div className="case-image">
              <Image
                src="/images/case-studies/3d-annotation/user-journey.png"
                alt="User journey for Unity Reflect Annotation"
                width={1380}
                height={779}
              />
              <p className="case-caption">
                I worked on creating the user journey based on the data from
                user interviews and competitive analysis.
              </p>
            </div>

            <h2>P0 Requirements</h2>
            <p>
              Based on the user journey, I identified these user flows as
              highest priority to create the Minimum Viable Product:
            </p>
            <ul>
              <li>
                Users should be able to add an annotation that&apos;s attached
                to an object on the 3D model. They should be able to
                edit/delete it.
              </li>
              <li>
                Users should be able to reply to an annotation. They should be
                able to edit/delete it.
              </li>
              <li>
                Users should be able to resolve their own annotation.
              </li>
              <li>
                Users should be able to see a list of resolved annotations.
              </li>
            </ul>
          </section>

          <section id="exploration">
            <h2>Exploration</h2>

            <h2>Goals of this phase</h2>
            <ul>
              <li>Generate ideas</li>
              <li>Prototype solutions</li>
              <li>Test with users and internal teams</li>
              <li>Review and iterate</li>
            </ul>

            <h2>Prototype solutions</h2>
            <p>
              Using Figma and components from our design system I translated the
              user flows identified in the previous phase into low-fidelity
              wireframes. At this stage, the wireframes were defined enough for
              some user testing.
            </p>
            <div className="case-embed">
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fir0VN8KXKMtvtgqf68jzSo%2FReflect---my-designs%3Ftype%3Ddesign%26node-id%3D86%253A79360%26mode%3Ddesign%26t%3DL3Lo6EUKcQmiZ2Qv-1"
                width="800"
                height="450"
                allowFullScreen
              />
              <p className="case-caption">
                Wireframes for <strong>Unity Reflect Annotation</strong> user
                journey.
              </p>
            </div>

            <h2>Review and iterate with users</h2>
            <p>
              I tested the wireframes during our bi-weekly user group meeting.
              The feedback highlighted the need for easier navigation between
              annotations and their original views. As an example, we had to add
              one more P0 requirement:
            </p>
            <ul>
              <li>
                Users should be able to quickly switch to the view from which
                the annotation was originally created.
              </li>
            </ul>
            <p>
              Also, some quality of life features were suggested by our beta
              users, such as:
            </p>
            <ul>
              <li>
                Ability to snap the annotation to corners or edges of a 3D
                object
              </li>
              <li>
                Ability to magnify where the annotation is placed for more
                precise placement
              </li>
              <li>
                Adjust the behaviour of annotation pin based on the device
                (tablet vs. desktop) - image below
              </li>
            </ul>
            <div className="case-embed">
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fir0VN8KXKMtvtgqf68jzSo%2FReflect---my-designs%3Ftype%3Ddesign%26node-id%3D332%253A61739%26mode%3Ddesign%26t%3D1JZsI8QRPrWGijQH-1"
                width="800"
                height="450"
                allowFullScreen
              />
              <p className="case-caption">
                Prototyping quality of life features requested by beta users
              </p>
            </div>

            <h2>Review and iterate with internal stakeholders</h2>
            <p>
              I also peer reviewed the designs with my design team and the
              design system team and iterated on some patterns regarding the
              information architecture for this feature.
            </p>
            <div className="case-embed">
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fir0VN8KXKMtvtgqf68jzSo%2FReflect---my-designs%3Ftype%3Ddesign%26node-id%3D332%253A61240%26mode%3Ddesign%26t%3D1JZsI8QRPrWGijQH-1"
                width="800"
                height="450"
                allowFullScreen
              />
              <p className="case-caption">
                Prototyping different options for information architecture to
                review with fellow designers
              </p>
            </div>
          </section>

          <section id="ship">
            <h2>Ship</h2>

            <h2>Goals of this phase</h2>
            <ul>
              <li>Perform a technical handover</li>
              <li>Bug bash and check quality</li>
              <li>Dogfood and test internally</li>
              <li>Conduct engineering demos</li>
              <li>Define metrics to measure on launch</li>
            </ul>

            <h2>Technical handover</h2>
            <p>
              I prototyped the flows on Figma and added spec-lining to hand over
              to the engineer. I was closely involved with the engineering team
              assigned to this project through regular meetings (2-3 times a
              week sometimes) to address any question on the designs as well as
              design for edge cases.
            </p>
            <div className="case-embed">
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fir0VN8KXKMtvtgqf68jzSo%2FReflect---my-designs%3Fpage-id%3D482%253A12349%26type%3Ddesign%26node-id%3D1426-75%26viewport%3D-8931%252C464%252C0.38%26t%3D86NMjKQUxYYSVj8X-1%26scaling%3Dscale-down%26starting-point-node-id%3D1426%253A75%26show-proto-sidebar%3D1%26mode%3Ddesign"
                width="800"
                height="450"
                allowFullScreen
              />
              <p className="case-caption">
                Final designs for Unity Reflect Annotation covering all the user
                stories.
              </p>
            </div>

            <h2>Demo</h2>
            <p>
              I tested the product on staging throughout the implementation and
              bug bashed various times to ensure the final quality and the
              details meet the designs. One example of a detail I uncovered
              during these testing sessions was the orientation of the annotation
              pins. We iterated on them with the engineers making sure the final
              experience is enjoyable and intuitive.
            </p>
            <div className="case-embed">
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fir0VN8KXKMtvtgqf68jzSo%2FReflect---my-designs%3Ftype%3Ddesign%26node-id%3D332%253A61740%26mode%3Ddesign%26t%3D1JZsI8QRPrWGijQH-1"
                width="800"
                height="450"
                allowFullScreen
              />
              <p className="case-caption">
                Comments for the engineering team on the screenshots from the
                demo
              </p>
            </div>

            <h2>Covering edge cases</h2>
            <p>
              As with every other feature, during the review and implementation
              phase, we discovered various edge cases, such as variant screen
              sizes, user roles, and error scenarios. I addressed all of these
              and provided the team with detailed designs to implement.
            </p>
          </section>

          <section>
            <h2>What I learned from this project?</h2>
            <ul>
              <li>Iterate. Iterate. Iterate.</li>
              <li>
                This was my first time following this design process. I learned
                a lot about maintaining a structured approach while also being
                adaptable.
              </li>
              <li>
                I at first undermined the power of detailed spec-lining but
                after many sessions with the engineer I realized it&apos;s very
                important to record every detail for their reference.
              </li>
            </ul>
          </section>
        </div>

        <div className="case-nav">
          <Link href="/case-study/asset-versioning" className="case-nav-link">
            &larr; Previous: Asset Versioning
          </Link>
          <Link href="/case-study/agentic-ai" className="case-nav-link">
            Next: Agentic AI &rarr;
          </Link>
        </div>
      </article>

      <Footer minimal />
      <RevealOnScroll />
    </>
  );
}
