import Logo from "./Logo";
import { socials, founder } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="/" aria-label="Stacknet.dev home">
            <Logo />
          </a>
          <span className="footer-tag mono text-muted">Built for the web.</span>
        </div>

        <span className="footer-copy mono text-muted">
          © 2026 Stacknet.dev · Founded by {founder}
        </span>

        <nav className="footer-links" aria-label="Footer">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="footer-link"
              {...(s.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
