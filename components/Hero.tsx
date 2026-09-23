import Reveal from "./Reveal";
import CodePanel from "./CodePanel";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="grid-bg" aria-hidden="true" />
      <div className="glow hero-glow" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow hero-eyebrow">
              <span>Web Development &amp;</span>{" "}
              <span>AI Product Studio</span>
            </span>
          </Reveal>

          <h1 className="display hero-title">
            <Reveal as="span" delay={60} className="hero-line">
              We build the web
            </Reveal>
            <Reveal as="span" delay={140} className="hero-line">
              <span className="serif accent">worth</span> visiting.
            </Reveal>
          </h1>

          <Reveal delay={220}>
            <p className="hero-lead text-secondary">
              Stacknet.dev turns ambitious ideas into edge-fast, pixel-perfect,
              AI-ready digital products — engineered on the modern web, from
              first commit to global launch.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Build with us <span className="arrow" aria-hidden="true">↗</span>
              </a>
              <a href="#work" className="btn btn-secondary">
                Explore our work{" "}
                <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <span className="badge hero-status">
              <span className="dot" />
              Currently accepting selected projects
            </span>
          </Reveal>
        </div>

        <Reveal delay={220} className="hero-visual">
          <CodePanel />
        </Reveal>
      </div>
    </section>
  );
}
