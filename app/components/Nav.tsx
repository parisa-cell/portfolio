import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        PA
      </Link>
      <div className="nav-links">
        <Link href="/#about">About</Link>
        <a href="mailto:hello@parisaalirezaee.com">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
