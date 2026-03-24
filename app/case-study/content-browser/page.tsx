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
          <span className="case-number">02</span>
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
              PBR material maps). The challenge was to design a single, modular,
              Weave-based Generic Content Browser that could deliver a cohesive
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
              Comparative reviews of the Asset Management UI and the Kitbashing
              Part Browser highlighted valuable strengths&mdash;like robust
              metadata visibility or large-dataset handling&mdash;but also
              exposed major gaps including inconsistent navigation patterns, lack
              of responsiveness, limited extensibility, and outdated visual
              design.
            </p>
            <p>
              An assessment of the Autodesk Libraries Platform showed promise as
              a potential foundation due to its mature features, yet its
              constraints around data source flexibility and alignment with EMS
              workflows made it an imperfect fit. Together, these evaluations
              clarified that no existing internal solution could meet the shared
              and evolving needs of all teams, solidifying the need for a
              unified, extensible, and Weave-based Generic Content Browser.
            </p>
          </section>

          <section>
            <h2>Competitive Audit</h2>
            <p>
              During the early stages of the project, we examined a wide range
              of existing browsing experiences across industry tools&mdash;both
              within Autodesk&apos;s ecosystem and in leading DCC
              applications&mdash;to understand how they structure navigation,
              expose metadata, support previews, and handle large asset
              libraries.
            </p>
            <p>
              By intentionally fragmenting these patterns into their fundamental
              building blocks (tree views, grid/list switching, filtering models,
              preview paradigms, drag-and-drop behaviors), we were able to
              identify which interaction models consistently supported efficient
              asset discovery and which ones broke down under real production
              workflows.
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
              To validate the concept and align the organization around a
              unified browsing experience, we created an &quot;ideal user
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
              stakeholder groups, and varied priorities&mdash;ultimately helping
              secure broad support for forming a dedicated engineering team to
              bring the Generic Content Browser to life.
            </p>
          </section>

          <section>
            <h2>Requirements</h2>
            <p>User should be able to:</p>
            <ul>
              <li>
                Locate, browse, and navigate assets through a hierarchical tree
                view.
              </li>
              <li>
                Switch between gallery (grid) view and list view depending on
                their workflow.
              </li>
              <li>Search for assets using keywords.</li>
              <li>
                Filter assets based on metadata such as type, category, or other
                attributes.
              </li>
              <li>Sort assets (e.g., by name, size, type, date).</li>
              <li>
                Preview selected assets with larger images, metadata, or
                detailed inspection (e.g., shaderball).
              </li>
              <li>
                Change the thumbnail size to fit scanning vs. detail-oriented
                tasks.
              </li>
              <li>
                Drag and drop one or multiple assets directly into their scene
                or workspace.
              </li>
              <li>
                Choose how assets are inserted (e.g., import, reference,
                replace).
              </li>
              <li>Set favorites and view favorite assets for quick access.</li>
              <li>
                View, browse, and switch source locations (e.g., project,
                directory, database).
              </li>
              <li>
                Work with large asset libraries via pagination, lazy loading, or
                &quot;Show more&quot; loading patterns.
              </li>
              <li>
                Inspect key metadata such as name, size, type, variant,
                resolution, or maps.
              </li>
              <li>
                Preview complex assets such as USD variants, assemblies, or PBR
                maps.
              </li>
              <li>
                View contextual indicators (e.g., whether an asset is used or
                selected in the scene).
              </li>
              <li>
                Work offline or without Flow for base functionality (when
                supported).
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
              Once the MVP scope was set, I organized a second prioritization
              workshop to sequence those MVP items across remaining sprints,
              effectively acting as both PO and interim scrum master to ensure
              clarity, alignment, and momentum. Through this process, I helped
              the team translate a complex, multi-stakeholder vision into an
              actionable delivery plan, ensuring that we shipped the
              highest-value workflows first while keeping future extensibility
              in mind.
            </p>
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
          <Link href="/case-study/agentic-ai" className="case-nav-link">
            &larr; Previous: Agentic AI
          </Link>
          <Link href="/case-study/cloud-storage" className="case-nav-link">
            Next: Cloud Storage &rarr;
          </Link>
        </div>
      </article>

      <Footer minimal />
      <RevealOnScroll />
    </>
  );
}
