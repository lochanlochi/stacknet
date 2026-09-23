import Reveal from "./Reveal";
import { capabilities } from "@/lib/data";

export default function Stack() {
  return (
    <section
      className="section stack"
      id="technology"
      aria-labelledby="stack-heading"
    >
      <div className="container">
        <div className="stack-head">
          <div>
            <Reveal>
              <span className="section-label">
                <span aria-hidden="true">✦</span>
                TECHNOLOGY
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 id="stack-heading" className="stack-title">
                We use modern &amp;
                <br />
                <span className="serif accent">latest</span> technologies.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} className="stack-lead">
            <p className="text-secondary">
              No legacy baggage, no recycled templates. Every build runs on the
              current generation of the web — the same class of technology
              behind the fastest products online, chosen fresh for each
              project.
            </p>
          </Reveal>
        </div>

        <ul className="stack-grid">
          {capabilities.map((c, i) => (
            <Reveal as="li" key={c.code} delay={(i % 4) * 70} className="cap">
              <div className="cap-top mono">
                <span className="cap-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="cap-code">{c.code}</span>
              </div>
              <h3 className="cap-title">{c.title}</h3>
              <p className="cap-desc text-secondary">{c.description}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200} className="stack-foot mono">
          <span className="text-muted">
            <span className="dot" /> ALWAYS CURRENT
          </span>
          <span className="text-muted">Typed · Tested · Deployed at the edge</span>
        </Reveal>
      </div>
    </section>
  );
}
