import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FloatingIcons from "./components/FloatingIcons";
import RevealOnScroll from "./components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero Banner */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-name">
            Parisa
            <br />
            Alirezaee
          </h1>
          <p className="hero-title">UX Designer</p>
        </div>
        <FloatingIcons />
      </header>

      {/* About */}
      <section id="about" className="about">
        <h2 className="section-title">about me</h2>
        <div className="about-content">
          <p>
            I&apos;m a Montreal-based product designer and passionate user
            advocate. I believe in the power of persistence, iterations and user
            research to translate complex user and business requirements into
            simple, effective and enjoyable user experience.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="work">
        <h2 className="section-title">case studies</h2>
        <div className="case-studies">
          <Link href="/case-study/reflect" className="case-card">
            <div className="case-card-number">01</div>
            <h3 className="case-card-title">Unity Reflect</h3>
            <p className="case-card-desc">
              Redesigning navigation and collaboration for a 3D multi-presence
              application used by AEC professionals.
            </p>
            <div className="case-card-tags">
              <span>Product Design</span>
              <span>3D/AR</span>
              <span>Enterprise</span>
            </div>
            <span className="case-card-arrow">&rarr;</span>
          </Link>

          <Link href="/case-study/annotation" className="case-card">
            <div className="case-card-number">02</div>
            <h3 className="case-card-title">
              Annotation &amp; Presentation Mode
            </h3>
            <p className="case-card-desc">
              Designing annotation tools and presentation features for real-time
              3D model reviews and stakeholder walkthroughs.
            </p>
            <div className="case-card-tags">
              <span>Feature Design</span>
              <span>Collaboration</span>
              <span>Unity</span>
            </div>
            <span className="case-card-arrow">&rarr;</span>
          </Link>

          <Link href="/case-study/ar" className="case-card">
            <div className="case-card-number">03</div>
            <h3 className="case-card-title">AR Collaboration</h3>
            <p className="case-card-desc">
              Exploring augmented reality as a medium for multi-user
              collaboration on architectural models.
            </p>
            <div className="case-card-tags">
              <span>AR/VR</span>
              <span>Research</span>
              <span>Prototyping</span>
            </div>
            <span className="case-card-arrow">&rarr;</span>
          </Link>

          <Link href="/case-study/vibrotactile" className="case-card">
            <div className="case-card-number">04</div>
            <h3 className="case-card-title">Vibrotactile Alarm System</h3>
            <p className="case-card-desc">
              HCI research at McGill — designing a wearable alarm system to
              deliver patient information to medical staff in critical care.
            </p>
            <div className="case-card-tags">
              <span>HCI Research</span>
              <span>Wearable</span>
              <span>Healthcare</span>
            </div>
            <span className="case-card-arrow">&rarr;</span>
          </Link>
        </div>
      </section>

      <Footer />
      <RevealOnScroll />
    </>
  );
}
