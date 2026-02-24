import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        <span className="nav-logo-short">PA</span>
        <span className="nav-logo-full"><strong>P</strong>arisa <strong>A</strong>lirezaee</span>
      </Link>
      <div className="nav-links">
        <Link href="/#work">Work</Link>
        <Link href="#footer">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
