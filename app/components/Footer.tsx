"use client";

import { useState } from "react";

export default function Footer({ minimal = false }: { minimal?: boolean }) {
  const [copied, setCopied] = useState(false);

  function copyEmail(e: React.MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText("parisa.alirezaee@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <footer id="footer" className="footer">
      {!minimal && (
        <p className="contact-text">
          Let&apos;s talk! You can email me at{" "}
          <a href="mailto:parisa.alirezaee@gmail.com" onClick={copyEmail}>
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
      {copied && <span className="copy-toast">Email copied!</span>}
      <p className="footer-credit">
        Made by Parisa Alirezaee using AI
      </p>
    </footer>
  );
}
