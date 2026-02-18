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


      <Footer />
      <RevealOnScroll />
    </>
  );
}
