"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="/" className="nav-logo" aria-label="Stacknet.dev home">
          <Logo />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="/#contact" className="btn btn-primary nav-cta">
            Start a project <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <button
            className={`nav-toggle ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav className="nav-mobile-links" aria-label="Mobile">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-mobile-link"
              style={{ transitionDelay: `${open ? 80 + i * 45 : 0}ms` }}
              onClick={() => setOpen(false)}
            >
              <span className="mono nav-mobile-index">
                0{i + 1}
              </span>
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="btn btn-primary nav-mobile-cta"
            onClick={() => setOpen(false)}
          >
            Start a project <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
