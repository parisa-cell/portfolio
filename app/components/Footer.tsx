export default function Footer({ minimal = false }: { minimal?: boolean }) {
  return (
    <footer className="footer">
      <p>Made with care by Parisa Alirezaee &middot; 2026</p>
      {!minimal && (
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/parisa-alirezaee/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/parisa-alirezaee"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </div>
      )}
    </footer>
  );
}
