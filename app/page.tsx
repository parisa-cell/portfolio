import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FloatingIcons from "./components/FloatingIcons";
import RevealOnScroll from "./components/RevealOnScroll";
import CaseStudies from "./components/CaseStudies";
import MontrealStatus from "./components/MontrealStatus";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero Banner */}
      <header id="about" className="hero">
        <div className="hero-content">
          <p className="hero-text">
            Hi, I&apos;m Parisa. I&apos;m a product designer who champions
            users, translates complexity into beautiful simplicity, and brings
            ideas to life through persistent iteration and purposeful
            storytelling.
          </p>
        </div>
        <FloatingIcons />
        <MontrealStatus />
      </header>

      {/* Work */}
      <div id="work" className="work-wrapper">
        <section className="work">
          <h2 className="section-title">selected work</h2>
          <CaseStudies />
        </section>
      </div>

      <Footer />
      <RevealOnScroll />
    </>
  );
}
