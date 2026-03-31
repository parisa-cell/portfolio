import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
          <span className="case-number">03</span>
          <h1>Unity Cloud Asset Versioning</h1>
          <p className="case-subtitle">
            Designing version control workflows for 3D assets in collaborative
            game development pipelines
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
              Web
            </div>
            <div>
              <strong>Length</strong>
              <br />
              2 months
            </div>
          </div>

          <div className="case-hero-image">
            <Image
              src="/images/case-studies/asset-versioning/hero.png"
              alt="Unity Cloud Asset Versioning interface"
              width={1444}
              height={1028}
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
              Figma . Figjam . JIRA . ProductBoard
            </p>
            <p>
              <strong>Team:</strong>
              <br />
              Eoghan O&apos;Sullivan: Product Manager
              <br />
              Sean Totterdell: Engineering lead (team of 5 engineers)
              <br />
              Chris Yazbek: Program Manager
              <br />
              Angela Case: Documentation lead
            </p>
            <p>
              <strong>My role:</strong>
              <br />
              Lead and solo designer for this feature. Collaborated with design
              system designers.
            </p>
            <p>
              <strong>Outcome:</strong>
              <br />
              Content creation in gaming, industrial verticals, and VFX is
              iterative and team-driven, often requiring approval from a small
              group of leads. In this design project, through iterative design I
              simplified tracking the lifecycle and review cycle of assets.
            </p>
          </section>

          <section>
            <h2>What is Unity Cloud Asset Manager?</h2>
            <p>
              An extensible, cloud-based digital asset management (DAM) solution
              specializing in robust 3D asset management to increase
              discoverability, reusability, and ROI of content across your
              organization.
            </p>
          </section>

          <section>
            <h2>Problem</h2>
            <p>
              The problem of easily storing, categorizing and sharing assets
              within a RT3D organization expands and compounds as the amount of
              people, projects and assets grow. This creates a corresponding
              growth in the inefficiencies and costs that creep into an
              organization. Teams often complain of not being able to find
              existing assets, get them into the right format or even know if
              they have the right license. All of this blocks collaboration
              across projects and this in turn drives a duplication of efforts
              and assets.
            </p>
          </section>

          <section>
            <h2>Design process</h2>
            <nav className="process-nav">
              <a href="#discovery" className="process-step">
                <span className="process-circle">Discovery</span>
              </a>
              <span className="process-arrow">&rarr;</span>
              <a href="#explore" className="process-step">
                <span className="process-circle">Explore</span>
              </a>
              <span className="process-arrow">&rarr;</span>
              <a href="#ship" className="process-step">
                <span className="process-circle">Ship</span>
              </a>
            </nav>
          </section>

          <section id="discovery">
            <h2>Discovery</h2>

            <h2>Goal of this phase</h2>
            <p>
              The most common problem we face as a product team is building the
              wrong thing. The Discovery phase is intended to ensure we get
              started on the right path to creating solutions that match our
              user&apos;s needs and help them achieve their goals.
            </p>

            <h2>User Personas</h2>
            <p>The two primary user groups that feel this pain are:</p>
            <p>
              1: Users in gaming or industrial studios who need to{" "}
              <strong>manage, track and control access</strong> to their
              organization&apos;s content
            </p>
            <p>
              2: Users in gaming or industrial studios who need to{" "}
              <strong>discover, contribute and collaborate</strong> on this
              content.
            </p>

            <h2>Solution Hypothesis</h2>
            <p>
              By building out a feature stack that enables users of an
              organization to securely share their content from project to
              project, as well as easily{" "}
              <strong>
                collaborating and tracking the lifecycle of this content
              </strong>
              , we will reduce the inefficiencies and costs for organizations as
              they grow.
            </p>

            <p>
              <strong>
                Tracking the lifecycle of assets = Asset versioning and version
                control
              </strong>
            </p>

            <h2>Asset Versioning feature definition</h2>
            <p>
              Asset Versioning ensures teams can safely make changes to assets
              without disrupting projects. Users can increment a new version of
              an asset with ease, while still accessing old versions through a
              powerful labeling system. This system complements existing Version
              Control Systems like Perforce without replacing them.
            </p>

            <h2>User interviews</h2>
            <p>
              Now that the feature is roughly defined, I conduct user interviews
              to learn about users&apos; experience versioning RT3D assets to
              define user flows. Some of the questions I asked during these
              interviews are:
            </p>
            <ul>
              <li>
                <em>
                  Can you walk me through your typical workflow when it comes to
                  versioning RT3D assets?
                </em>
              </li>
              <li>
                <em>
                  How do you determine when to create a new version of an asset?
                </em>
              </li>
              <li>
                <em>
                  Can you describe a recent scenario where you needed to revert
                  to an older version of an RT3D asset? What was that experience
                  like?
                </em>
              </li>
              <li>
                <em>
                  What features or capabilities would you find most helpful in a
                  versioning system for RT3D assets?
                </em>
              </li>
              <li>
                <em>
                  How do you currently keep track of changes made to RT3D assets
                  by different team members?
                </em>
              </li>
              <li>
                <em>
                  What criteria do you use to determine which version of an
                  asset to use for a particular project or task?
                </em>
              </li>
              <li>
                <em>
                  What challenges do you currently face when versioning RT3D
                  assets, if any?
                </em>
              </li>
              <li>
                <em>
                  What is an ideal versioning system for your RT3D asset
                  management needs?
                </em>
              </li>
            </ul>

            <h2>User journey</h2>
            <p>
              From the insights of these interviews, I worked on creating a user
              journey for asset versioning. I then presented it to the other
              stakeholders and after iterating on their feedback, here is the
              final version:
            </p>
            <ul>
              <li>
                <strong>Uploading a New Asset</strong>: Sarah, a 3D artist in a
                gaming studio, has just finished working on a new character model
                for an upcoming game. She uploads the asset to the Asset
                Manager, knowing that she can easily keep track of its versions
                and revisions.
              </li>
              <li>
                <strong>Versioning the Asset</strong>: After receiving feedback
                from her team lead, Sarah makes some changes to the character
                model. Using the Asset Versioning feature, she increments a new
                version of the asset with a brief description of the changes
                made.
              </li>
              <li>
                <strong>Labeling for Organization</strong>: To ensure easy
                access to previous versions of the asset, Sarah labels the older
                version as &quot;Initial Design&quot; and the new version as
                &quot;Revised Design&quot;. This labeling system helps her and
                her team members quickly find and reference specific versions
                when needed.
              </li>
              <li>
                <strong>Continued Collaboration</strong>: Sarah&apos;s
                colleagues, including animators and game designers, can access
                the Asset Manager to view the latest version of the character
                model. They can provide feedback and collaborate, knowing that
                they&apos;re working with the relevant version of the asset.
              </li>
            </ul>
          </section>

          <section id="explore">
            <h2>Explore</h2>

            <h2>Goal of this phase</h2>
            <p>
              Finding the right solutions to our problems is not easy. The
              Explore phase is intended to ensure we utilize collaboration,
              reviews and feedback to achieve a design vision that we are
              confident to ship to our users.
            </p>

            <h2>User flows</h2>
            <ul>
              <li>
                Users should be able to find out what version number any asset
                has and see version number increases when making changes to the
                asset
              </li>
              <li>
                User should be able to select older versions of any asset on
                version history and find out the details of the old version of
                asset
              </li>
              <li>
                User should be able to retrieve any older version and make it
                the working version of the asset
              </li>
              <li>
                User should be able to add a version label from organization
                library to any version
              </li>
              <li>
                User should be able to filter on assets list based on version
                labels
              </li>
            </ul>

            <h2>Wireframes</h2>
            <p>
              I started with wireframing the logic of how &quot;Asset
              version&quot;, &quot;Asset version label&quot; and &quot;Asset
              version status&quot; will work together. I peer reviewed this with
              the other stakeholders.
            </p>
            <div className="case-image">
              <Image
                src="/images/case-studies/asset-versioning/wireframes.png"
                alt="Wireframes for asset version, version label, and version status"
                width={974}
                height={874}
              />
            </div>

            <h2>User testing and iteration</h2>
            <p>
              I iterated on the wireframes and presented them frequently for
              peer reviews and stakeholder reviews. Through these reviews, I
              uncovered gaps in the designs and fixed them.
            </p>
            <p>
              I&apos;m going through one example of how these reviews and user
              tests helped us improve the user experience of this feature.
            </p>
            <p>
              Take this user flow:
              <br />
              <strong>
                User should be able to retrieve any older version and make it
                the working version of the asset
              </strong>
            </p>
            <div className="case-embed">
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFNXKXmzW0UGxC0vbjeNUtg%2FAsset-Versioning%3Ftype%3Ddesign%26node-id%3D1%253A72179%26mode%3Ddesign%26t%3DM7whPGYmBqHZoKS0-1"
                width="800"
                height="450"
                allowFullScreen
              />
              <p className="case-caption">First iteration on retrieve older version user flow.</p>
            </div>

            <p>
              After testing this design with our beta users, as well as
              stakeholders review, I realized this design is creating confusion.
              Users commented that:
            </p>
            <ul>
              <li>
                &quot;I clicked &apos;Retrieve this version,&apos; but now
                I&apos;m not sure if I&apos;ve overwritten the current version
                or not.&quot;
              </li>
              <li>
                &quot;It&apos;s not clear what happens when I retrieve an older
                version. Does it replace the current version or create a new
                one?&quot;
              </li>
              <li>
                &quot;I thought &apos;Retrieve this version&apos; would simply
                show me the older version, but now it seems like it&apos;s
                changing something.&quot;
              </li>
              <li>
                &quot;I&apos;m hesitant to use &apos;Retrieve this
                version&apos; because I&apos;m not sure if it&apos;s reversible
                or if it permanently changes the current version.&quot;
              </li>
            </ul>

            <div className="case-embed">
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFNXKXmzW0UGxC0vbjeNUtg%2FAsset-Versioning%3Ftype%3Ddesign%26node-id%3D43%253A239244%26mode%3Ddesign%26t%3DjZ2PiNAsoHDy6F8X-1"
                width="800"
                height="450"
                allowFullScreen
              />
              <p className="case-caption">Next iteration on retrieve older version user flow.</p>
            </div>
          </section>

          <section id="ship">
            <h2>Ship</h2>

            <h2>Goal of this phase</h2>
            <p>
              The Ship phase is intended to ensure we deliver quality products
              and services that enhance the reputation of Unity and provide
              joyful experiences for our users. We continuously improve upon
              shipped products by collecting feedback and acting upon this in
              future releases.
            </p>

            <h2>Handoff</h2>
            <p>
              I expanded the user stories and added a lot more details to them.
              I added spec-lines on figma detailing all the expected behaviours
              so that the engineering team can use it as the single source of
              truth.
            </p>
            <div className="case-embed">
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFNXKXmzW0UGxC0vbjeNUtg%2FAsset-Versioning%3Ftype%3Ddesign%26node-id%3D43%253A222236%26mode%3Ddesign%26t%3Dhqdoe8r5C17c6jEe-1"
                width="800"
                height="800"
                allowFullScreen
              />
              <p className="case-caption">Handoff Figma document.</p>
            </div>
          </section>

          <section>
            <h2>What I learned from this project?</h2>
            <ul>
              <li>
                Got really good at juggling tasks to keep everything on track
              </li>
              <li>
                Learned to contribute effectively to growing and refining our
                design system, ensuring consistency and efficiency across
                projects.
              </li>
              <li>
                Practices presenting designs regularly to clients and internal
                stakeholders so we&apos;re all on the same page.
              </li>
              <li>
                Discovered how to navigate uncertainty, leading the charge in
                designing flows even when we didn&apos;t have all the answers.
              </li>
            </ul>
          </section>
        </div>

        <div className="case-nav">
          <Link href="/case-study/content-browser" className="case-nav-link">
            &larr; Previous: Content Browser
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
