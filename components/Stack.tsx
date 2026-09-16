import Reveal from "./Reveal";
import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section className="section stack" aria-labelledby="stack-heading">
      <div className="container">
        <div className="stack-head">
          <Reveal>
            <span className="section-label">
              <span aria-hidden="true">✦</span>
              TECHNOLOGY
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="stack-heading" className="stack-title">
              A stack chosen for
              <br />
              <span className="text-muted">reliability, not fashion.</span>
            </h2>
          </Reveal>
        </div>

        <div className="stack-grid">
          {stack.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 80} className="stack-group">
              <div className="stack-group-head">
                <span className="mono stack-group-index">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <h3 className="stack-group-label">{group.label}</h3>
              </div>
              <ul className="stack-items">
                {group.items.map((item) => (
                  <li key={item} className="stack-item">
                    <span className="mono stack-item-dot" aria-hidden="true">
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="stack-foot mono">
          <span className="text-muted">SYSTEM READY</span>
          <span className="text-muted">v1.0 · Typed end to end</span>
        </Reveal>
      </div>
    </section>
  );
}
