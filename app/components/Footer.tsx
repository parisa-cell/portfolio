export default function Footer({ minimal = false }: { minimal?: boolean }) {
  return (
    <footer id="footer" className="footer">
      {!minimal && (
        <p className="contact-text">
          Let&apos;s talk! You can email me at{" "}
          <a href="mailto:parisa.alirezaee@gmail.com">
            parisa.alirezaee@gmail.com
          </a>
          , message me on{" "}
          <a
            href="https://www.linkedin.com/in/parisa-alirezaee/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
          , or just call! 📞{" "}
          <a href="tel:+14389233676">+1 (438) 923-3676</a>
        </p>
      )}
      <p className="footer-credit">
        Made by Parisa Alirezaee using AI
      </p>
    </footer>
  );
}
