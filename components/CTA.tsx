import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="section cta" id="contact">
      <div className="cta-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="grid-bg cta-grid" aria-hidden="true" />

      <div className="container cta-inner">
        <Reveal>
          <span className="section-label cta-label">
            <span aria-hidden="true">✦</span>
            04 / LET&apos;S BUILD
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="cta-title">
            Have an idea?
            <br />
            Make it <span className="serif accent">real.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="cta-lead text-secondary">
            Tell us what you&apos;re building. We&apos;ll bring the technical
            thinking, craft and momentum.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="cta-actions">
            <a href="mailto:hello@stacknet.dev" className="btn btn-primary cta-mail">
              hello@stacknet.dev{" "}
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
            <a href="mailto:hello@stacknet.dev" className="btn btn-secondary">
              Start a conversation{" "}
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={320} className="cta-foot mono text-muted">
          <span>
            <span className="dot" /> SYSTEM READY
          </span>
          <span>From first commit to production.</span>
        </Reveal>
      </div>
    </section>
  );
}
