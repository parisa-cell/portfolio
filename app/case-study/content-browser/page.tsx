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
          <span className="case-number">01</span>
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
            <h2>Problem Statement</h2>
            <p>
              Teams across Autodesk&apos;s Entertainment &amp; Media Solutions
              were each building their own content browsers&mdash;resulting in
              duplicated effort, inconsistent user experiences, and fragmented
              workflows across DCCs and Flow-native apps. Artists needed a
              unified, responsive, and extensible way to browse, search, filter,
              preview, and drag-and-drop assets from diverse data sources (Flow,
              cloud, local, NAS, custom storage) regardless of the application
              they were in.
            </p>
            <p>
              At the same time, product teams required a scalable, configurable
              foundation that could support both common requirements and
              domain-specific needs (e.g., USD components, shaderball previews,
              PBR material maps). The challenge was to design a single, modular
              Generic Content Browser built on Weave&mdash;Autodesk&apos;s design
              system&mdash;that could deliver a cohesive
              experience across products while being flexible enough for each
              team to extend without breaking consistency.
            </p>
          </section>

          <section>
            <h2>Analysis of existing browsers</h2>
            <p>
              The design process began with a thorough evaluation of
              Autodesk&apos;s internal ecosystem of existing content browsers,
              revealing significant fragmentation across teams such as
              Kitbashing, USD, Bifrost, LookdevX, Flow, and Asset Management.
            </p>
            <p>
              Comparative reviews of these browsers highlighted valuable
              strengths like robust metadata visibility or large-dataset
              handling, but also exposed gaps including inconsistent navigation
              patterns, lack of responsiveness, limited extensibility, and
              outdated visual design.
            </p>
            <p>
              I also looked at how other organizations within Autodesk had
              tackled the same problem of fragmented, inconsistent browsers and
              built a unified browsing experience. The Autodesk Libraries
              Platform (ALP) was one of them. However, ALP lacked the
              flexibility around data sources and alignment with the unique needs
              of M&amp;E workflows and artists, so while we
              couldn&apos;t adopt it directly, it served as a valuable source of
              inspiration. Together, these evaluations solidified the need for
              building a Generic Content Browser for Autodesk M&amp;E products.
            </p>
          </section>

          <section>
            <h2>Competitive Audit</h2>
            <p>
              I also examined existing browsing experiences across industry tools
              to understand common workflows&mdash;e.g., navigation, metadata
              preview, handling large asset libraries. After extracting these
              essential workflows, I fragmented them into their building blocks
              (tree views, grid/list switching, filtering, preview paradigms,
              drag-and-drop) to identify which interaction models consistently
              supported efficient asset discovery.
            </p>
            <p>
              This exploration helped us recognize gaps in current approaches,
              validate user expectations, and define a clear set of reusable
              patterns that could form the foundation of a unified, extensible
              content browser. These insights shaped our early design direction,
              ensuring the Generic Content Browser wasn&apos;t just a merged set
              of features, but a thoughtfully structured system built on proven
              patterns adapted for EMS users&apos; needs.
            </p>
          </section>

          <section>
            <h2>User journey and prototype</h2>
            <p>
              Now it was time to sell this idea to the organization. To validate
              the concept and build alignment, we created an &quot;ideal user
              journey&quot; prototype and took it on a cross-team roadshow.
              Together with my design manager, a PM, and a PO who volunteered to
              champion the initiative, we met with all EMS teams who either
              owned or needed a content browser&mdash;USD, Kitbashing, Maya
              Foundation, Flow Asset Management, Bifrost, and LookdevX.
            </p>
            <p>
              Each of these teams had built their own isolated, often
              inconsistent browsers, so our goal was to introduce the vision for
              a consistent, Weave-based browsing experience and demonstrate how
              a shared design system could streamline workflows across products.
            </p>
            <p>
              These sessions allowed us to review the prototype collaboratively,
              collect both generic and domain-specific requirements, surface
              unique technical constraints, and build momentum toward a unified
              solution. Beyond gathering feedback, this &quot;tour&quot; served
              to build alignment in an environment with many PMs, multiple
              stakeholder groups, and varied priorities. As a result, a
              dedicated engineering team was formed called Flow Front-end SDK
              (FFESDK) to bring the Generic Content Browser to life.
            </p>
          </section>

          <section>
            <h2>Requirements</h2>
            <ul>
              <li>
                Data source must be configurable (Flow, Cloud, Local, NAS,
                custom data storage, etc.)
              </li>
              <li>UI and functionality must be configurable/extensible</li>
              <li>UI must be responsive</li>
              <li>
                UI must be able to support many assets (i.e., pagination, lazy
                loading, etc.)
              </li>
              <li>
                UI must show an empty state when the connection to the data
                source fails
              </li>
              <li>
                User must see and switch between gallery view and list view
              </li>
              <li>User must have the option to choose thumbnail size</li>
              <li>User must be able to search objects</li>
              <li>
                User must be able to see the name, size, and file type of the
                objects
              </li>
              <li>
                User must see a preview of a selected object that shows a larger
                image and metadata
              </li>
              <li>User must be able to filter objects</li>
              <li>User must be able to sort objects</li>
              <li>
                User must be able to view, browse, and change the source
                location (directory/project)
              </li>
              <li>
                User must be able to set and view objects as favorites
              </li>
              <li>
                User must be able to drag and drop one or multiple objects into
                their scene
              </li>
              <li>
                User must have options on how objects get dropped into scene
                (import, reference, replace, etc.)
              </li>
              <li>
                User must see the thumbnail dimmed when dragging into the scene
              </li>
            </ul>
          </section>

          <section>
            <h2>Story mapping and defining MVP</h2>
            <p>
              After completing the multi-team tour and consolidating all generic
              and team-specific requirements into a comprehensive list, I
              partnered with engineering to run a structured story-mapping
              exercise. In this session, I stepped into a PM role&mdash;guiding
              the team through evaluating each requirement based on user value,
              feasibility, and cross-product impact. This helped us separate
              essentials from nice-to-haves and clearly define the MVP.
            </p>
            <p>
              Once we defined the MVP, I ran another prioritization session
              with the team to break it down across the remaining sprints. I
              stepped in as both a PO and an interim scrum master to help keep
              things clear and moving. We focused on what needed to ship first,
              what could wait, and how everything fit together over time. This
              helped us turn a pretty complex, multi-team vision into a concrete
              plan we could actually execute on&mdash;making sure we delivered
              the most valuable workflows early, while still leaving room to
              expand later.
            </p>
          </section>

          <section>
            <h2>Requirements for MVP</h2>
            <ul>
              <li>As a user I want to see the location at a glance and go up the directory</li>
              <li>As a user I want to see the objects in selected directory in grid view</li>
              <li>As a user I want to navigate the directory</li>
              <li>As a user I want to see GCB in horizontal view</li>
              <li>As a user I want to see GCB in vertical view</li>
              <li>As a user I want to change the tile size</li>
              <li>As a user I want the window to be responsive and adaptive</li>
              <li>As a user I want to drag and drop an object into the scene</li>
              <li>As a user I want to navigate folders with large number of folders in them</li>
              <li>As a user I want a basic authentication setup</li>
              <li>As a user I want to get proper feedback when a directory is empty</li>
              <li>As a user I want resizable panels</li>
              <li>As a user I want the content browser to show me relevant information when I open it for the first time</li>
              <li>As a user I want to see thumbnails in the asset cards</li>


            </ul>
          </section>

          <section>
            <h2>High-fidelity designs and handoff</h2>
            <p>
              Once the MVP and sprint roadmap were defined, I transitioned into
              execution by creating detailed user stories in JIRA and linking
              each one directly to its corresponding Figma designs. I stayed
              embedded with the engineering team throughout
              implementation&mdash;joining daily scrums, answering questions in
              real time, clarifying edge cases, and co-creating solutions
              whenever technical constraints required design adjustments.
            </p>
            <p>
              I intentionally worked one to two sprints ahead, ensuring designs,
              flows, and acceptance criteria were always ready before development
              picked them up. In parallel, we established a bi-weekly
              stakeholder review where we showcased actual implementation
              progress rather than mockups. This allowed all adopting
              teams&mdash;USD, Kitbashing, Maya Foundation, Flow Asset Manager,
              Bifrost, and LookdevX&mdash;to see the Generic Content Browser
              materialize sprint by sprint, provide timely feedback, and build
              confidence in the direction and quality of the work.
            </p>
            <div style={{ width: "100%", borderRadius: "8px", overflow: "hidden" }}>
              <iframe
                src="/images/case-studies/content-browser/gcb-deliverables.pdf#toolbar=1&navpanes=0&view=FitH"
                title="GCB high-fidelity design deliverables"
                style={{
                  width: "100%",
                  height: "80vh",
                  border: "none",
                  borderRadius: "8px",
                }}
              />
            </div>
            <p className="case-image-caption">
              Scroll and zoom within the viewer, or{" "}
              <a
                href="/images/case-studies/content-browser/gcb-deliverables.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                open full screen
              </a>{" "}
              for more details
            </p>
          </section>

          <section>
            <h2>What I learned</h2>
            <ul>
              <li>
                Achieving a consistent user experience across products requires
                not only good design, but persistent advocacy and hands-on
                collaboration with every team involved to co-create the
                solution.
              </li>
              <li>
                The value of flexibly wearing different hats&mdash;designer, PM,
                PO, and scrum master&mdash;to keep a complex, cross-functional
                project aligned, prioritized, and moving forward with clarity.
              </li>
              <li>
                Showing real, continuous implementation progress is the most
                powerful tool for keeping multiple teams aligned and confident in
                the shared direction.
              </li>
            </ul>
          </section>
        </div>

        <div className="case-nav">
          <Link href="/#work" className="case-nav-link">
            &larr; All work
          </Link>
          <Link href="/case-study/cloud-storage" className="case-nav-link">
            Next: Cloud Personal Storage &rarr;
          </Link>
        </div>
      </article>

      <Footer minimal />
      <RevealOnScroll />
    </>
  );
}
