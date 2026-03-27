import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import RevealOnScroll from "@/app/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Cloud Personal Storage — Parisa Alirezaee",
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
          <span className="case-number">02</span>
          <h1>Cloud Personal Storage for Autodesk Maya and 3dsMax</h1>
          <p className="case-subtitle">
            Bringing cloud-native file management to Autodesk&apos;s most widely
            used 3D tools
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
            <h2>Problem Framing</h2>
          </section>

          <section>
            <h3>What I was given by the Product Manager</h3>
            <p>
              The project started with a broad problem statement around
              connecting DCC tools to cloud services. While the direction was
              clear, it did not yet define what the product should actually be or
              what the MVP should include. My role was to take this initial input
              and turn it into a clear, actionable product direction.
            </p>
            <div className="case-image" style={{ maxWidth: "70%", margin: "0 auto" }}>
              <Image
                src="/images/case-studies/cloud-storage/pm-scope-v2.png"
                alt="Scope details provided by the Product Manager, outlining the What, Why, and Goals for connecting DCCs to cloud services"
                width={1600}
                height={900}
              />
            </div>
            <p className="case-image-caption">
              This is the project brief provided by the PM&mdash;the starting
              point I had to work with to define and shape the product direction.
            </p>
          </section>

          <section>
            <h3>Concept</h3>
            <p>
              Early conversations with the PM helped shape a high-level concept
              of what this product could become over time. It outlined a future
              where cloud storage connects multiple tools and workflows, but at
              this stage it was still too broad to design against directly.
            </p>
            <p>
              To make this vision more tangible, I created low-fidelity concept
              designs that illustrated how the experience could work end to end.
              This helped align the team, especially product and leadership, on
              where the feature was heading. It also gave the PM a clearer way
              to communicate and advocate for the initiative internally.
            </p>
            <p>
              From there, I focused on narrowing this vision into a well-defined
              and achievable MVP.
            </p>
          </section>

          <section>
            <h3>Persona</h3>
            <p>
              To anchor the work in real user needs, I defined a primary persona
              representing freelancers, students, and generalist creators. These
              users typically work independently, manage their own assets, and do
              not rely on complex pipelines. This helped shift the conversation
              from system capabilities to actual user workflows.
            </p>
            <p>
              In addition, I explicitly defined who was not the target user, such
              as large studios and enterprise teams with established asset
              management systems. This helped keep the project focused and
              ensured we were designing for the right level of complexity.
            </p>
            <div className="case-image">
              <Image
                src="/images/case-studies/cloud-storage/persona-v2.png"
                alt="User personas showing VSB and EDU artists (Freelancer/Generalist and Student) and SMB artists (Asset Builder, Animator, FX Artist)"
                width={1600}
                height={900}
              />
            </div>
          </section>

          <section>
            <h3>User Value for MVP</h3>
            <p>
              With the persona defined, I articulated a clear user value for the
              MVP. The goal was simple: enable users to safely store and access
              their work across devices without worrying about broken
              dependencies or losing data. This became the foundation for all
              product decisions moving forward.
            </p>
            <p>
              <em>
                &quot;As a user I want to back up a project on Cloud personal
                storage so I can open the same project in another machine without
                worrying about broken dependencies and I don&apos;t risk data
                loss.&quot;
              </em>
            </p>
          </section>

          <section>
            <h3>My Impact during Problem Framing</h3>
            <p>
              Helped align PM, PO, and engineering on a clear user-centered
              scope and an achievable MVP.
            </p>
          </section>

          <section>
            <h2>Research and Discovery</h2>
          </section>

          <section>
            <h3>Knowledge Gathering (Internal Tools)</h3>
            <p>
              I started by looking at how this problem is currently handled
              within Autodesk. I explored tools like Autodesk Drive, Desktop
              Connector, and OneDrive integrations to understand how users
              interact with cloud storage today.
            </p>
            <p>
              These solutions made it possible to move files between local and
              cloud environments, but they also revealed gaps. The experience
              often felt disconnected from how 3D workflows are actually
              structured, especially when working across multiple tools.
            </p>
            <div className="case-image">
              <Image
                src="/images/case-studies/cloud-storage/knowledge-internal.png"
                alt="Knowledge gathering of internal tools including OneDrive, Autodesk Drive, Desktop Connector, path editing, and dependency handling in Maya and 3dsMax"
                width={1600}
                height={900}
              />
            </div>
          </section>

          <section>
            <h3>Knowledge Gathering (External Tools)</h3>
            <p>
              To broaden the perspective, I looked at how external tools approach
              similar problems. Blender and Cinema4D, for example, introduce
              cloud access through built-in asset browsers.
            </p>
            <p>
              While these provide a centralized way to browse and access assets,
              they tend to impose a rigid structure that does not always align
              with how users organize their work. This highlighted a common
              tradeoff in the industry between accessibility and flexibility.
            </p>
            <div className="case-image">
              <Image
                src="/images/case-studies/cloud-storage/knowledge-external.png"
                alt="Knowledge gathering of external tools showing asset browsing in Cinema 4D and Blender"
                width={1600}
                height={900}
              />
            </div>
          </section>

          <section>
            <h3>Design Iteration</h3>
            <p>
              As I compared these approaches, a key issue started to emerge
              around file dependencies.
            </p>
            <p>
              In 3D workflows, a single scene rarely exists in isolation. It
              depends on textures, references, shaders, and other assets that
              live in different locations. My analysis showed that when assets
              are imported from outside a project, they often keep absolute
              paths, and those dependencies are not automatically managed.
            </p>
            <p>
              This means that simply moving a file or changing its location can
              break the entire scene.
            </p>
            <p>
              At this point, it became clear that treating files as independent
              units in the cloud would not work reliably.
            </p>
          </section>

          <section>
            <h3>Key Design Insight</h3>
            <p>
              The initial idea was to integrate cloud storage into Maya through
              the Open and Save experience, allowing users to store individual
              files in the cloud.
            </p>
            <p>
              However, given the dependency issues, this approach would likely
              lead to broken references and an inconsistent experience.
            </p>
            <p>
              This led me to reframe the problem. Instead of asking how to store
              files in the cloud, I asked what unit of work users actually rely
              on.
            </p>
            <p>
              The answer was the Maya project. A project already contains the
              full structure of a user&apos;s work, including scenes, textures,
              references, and supporting files.
            </p>
            <p>
              By shifting the design from file-based storage to project-based
              storage, dependencies could be preserved and the workflow would
              remain intact. This became a foundational decision for the rest of
              the design.
            </p>
          </section>

          <section>
            <h3>User Research to Validate</h3>
            <p>
              To validate this direction, I conducted an observational interview
              with a QA engineer who also teaches Maya. I asked him to walk me
              through how he introduces students to starting a new project.
            </p>
            <p>
              What I observed was consistent and straightforward. Every workflow
              began with creating a project, which automatically establishes the
              folder structure before any files are created or edited.
            </p>
            <p>
              This confirmed that the project is the natural starting point for
              users. It also reinforced that introducing cloud interaction at
              this stage would align with existing mental models, while
              significantly reducing the risk of broken dependencies.
            </p>
          </section>

          <section>
            <h3>List of Requirements</h3>
            <p>
              Following the research and validation phase, I translated the
              insights into a set of product requirements that defined the MVP
              scope. I iterated on them with the PM, PO, and engineering team
              to align on feasibility and scope, turning the validated direction
              into a clear and actionable plan for development. This step helped
              turn an abstract idea into a shared understanding of what we were
              building and why.
            </p>
            <p>Here is the list of requirements:</p>
            <ul>
              <li>User is able to create a project in cloud personal storage and have all the standard folders and hierarchy created in cloud</li>
              <li>User is able to set the project to a cloud project</li>
              <li>User is able to receive proper feedback that a set project is on cloud</li>
              <li>User is able to create a new scene in the set cloud project</li>
              <li>User is able to save as the new scene in the set cloud project&apos;s &ldquo;Scenes&rdquo; folder</li>
              <li>User has access to Maya save options when saving to set cloud project</li>
              <li>User is able to open a scene from the set cloud project</li>
              <li>User has access to Maya open options when opening from a set cloud project</li>
              <li>User is able to incrementally save a scene to the set cloud project</li>
              <li>User is able to see the status of opening/saving a scene through Flow desktop service</li>
            </ul>
            <ul>
              <li>User is able to <strong>import</strong> a file from &ldquo;Scenes&rdquo; folder of the set cloud project</li>
              <li>User is able to <strong>reference</strong> a file from &ldquo;Scenes&rdquo; folder of the set cloud project</li>
              <li>User is able to <strong>add texture to</strong> objects from &ldquo;SourceImages&rdquo; folder of the set cloud project</li>
              <li>If user <strong>imports</strong> a model from outside of set cloud project, any possible dependencies are fixed upon saving the scene</li>
              <li>If user <strong>references</strong> a model from outside of set cloud project, any possible dependencies are fixed upon saving the scene</li>
              <li>If user <strong>adds texture</strong> from outside of set cloud project, any possible dependencies are fixed upon saving the scene</li>
            </ul>
          </section>

          <section>
            <h3>My Impact during Research and Discovery</h3>
            <p>
              Identified file dependency risks and uncovered that Maya projects,
              not individual files, should be the unit of cloud storage.
            </p>
          </section>

          <section>
            <h2>Design</h2>
          </section>

          <section>
            <h3>User Journey</h3>
            <p>
              With the key insight that cloud interaction should happen at the
              project level, I focused on defining the end-to-end user journey
              before designing any UI.
            </p>
            <p>
              Instead of jumping into screens, I explored multiple iterations of
              how a user would create, access, and manage a cloud-based Maya
              project. The goal was to ensure the flow aligned with existing
              workflows while preserving dependencies and minimizing friction.
            </p>
            <p>
              This approach allowed me to validate the concept early and make
              changes quickly, without the overhead of detailed interface design.
            </p>
            <div className="case-image">
              <Image
                src="/images/case-studies/cloud-storage/user-journey-v2.png"
                alt="User journey scenario for a generalist creating an advertisement video, detailing 24 steps from project creation to cloud sync and cross-device access"
                width={1600}
                height={900}
              />
            </div>
          </section>

          <section>
            <h3>Mid-Fidelity Designs</h3>
            <p>
              Once the journey was clearly defined, I translated the flows into
              mid-fidelity designs in Figma.
            </p>
            <p>
              At this stage, the focus was on making the experience tangible for
              the team. The designs outlined how users would move through the
              workflow, how cloud interactions would be introduced, and how key
              moments like project creation and asset management would function.
            </p>
            <p>
              These artifacts made it easier to align across product, design, and
              engineering before committing to final UI decisions.
            </p>
            <div className="magazine-video">
              <video
                src="/videos/cloud-storage.mp4"
                controls
                playsInline
                muted
                preload="metadata"
                style={{ width: "100%", borderRadius: "0.5rem" }}
              />
            </div>
            <p className="case-image-caption">
              Figma prototype of the user journey
            </p>
          </section>

          <section>
            <h3>Review and Iterate</h3>
            <p>
              I shared these designs with the PM, PO, engineering team, and the
              broader design team to gather feedback.
            </p>
            <p>
              Through these reviews, I refined several parts of the experience.
              One example was the dependency packaging interaction, where I
              iterated on how to communicate what assets are included in a cloud
              project and how to prevent missing references.
            </p>
            <p>
              This collaborative step helped ensure the solution was not only
              usable, but also realistic to implement within the system
              constraints.
            </p>
            <div className="case-image">
              <Image
                src="/images/case-studies/cloud-storage/review-iterate.png"
                alt="Maya dependency packaging dialog with review notes from team feedback sessions"
                width={1600}
                height={900}
              />
            </div>
            <p className="case-image-caption">
              Comments gathered from the broad design team on the
              &ldquo;dependency packaging&rdquo; window after reviewing with them
            </p>
          </section>

          <section>
            <h3>Sent for Development</h3>
            <p>
              After incorporating feedback, I finalized the designs and prepared
              them for implementation.
            </p>
            <p>
              I created high-fidelity designs and translated the flows into user
              stories in JIRA, making sure the requirements and interactions were
              clearly documented for the engineering team.
            </p>
            <p>
              Shortly after this, I transitioned to another team, but the work
              was structured to support a smooth handoff and continued
              development.
            </p>
          </section>

          <section>
            <h3>My Impact during Design</h3>
            <p>
              Established a project-based cloud workflow that preserved
              dependencies and provided a practical foundation for
              implementation.
            </p>
          </section>

          <section>
            <h2>What I learned</h2>
            <ul>
              <li>
                Defining the problem space early through persona, user value,
                and requirements can significantly improve alignment and reduce
                ambiguity across teams.
              </li>
              <li>
                In complex systems, understanding technical constraints such as
                file dependencies is critical to making the right design
                decisions.
              </li>
              <li>
                Iterating on user journeys before moving into UI design helps
                explore solutions more efficiently and avoids costly rework
                later.
              </li>
            </ul>
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
