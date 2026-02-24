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
            Hi, I&apos;m Parisa Alirezaee. I&apos;m a Montreal-based product
            designer and passionate user advocate. I believe in the power of
            persistence, iterations and user research to translate complex user
            and business requirements into simple, effective and enjoyable user
            experience.
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
