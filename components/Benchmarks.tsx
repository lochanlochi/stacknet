import Reveal from "./Reveal";
import { benchmarks } from "@/lib/data";

export default function Benchmarks() {
  return (
    <section className="section bench" aria-labelledby="bench-heading">
      <div className="container">
        <div className="bench-head">
          <Reveal>
            <span className="section-label">
              <span aria-hidden="true">✦</span>
              THE BAR
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="bench-heading" className="bench-title">
              Numbers we build against.
              <br />
              <span className="text-muted">Not opinions.</span>
            </h2>
          </Reveal>
        </div>

        <ul className="bench-grid">
          {benchmarks.map((b, i) => (
            <Reveal as="li" key={b.label} delay={i * 80} className="bench-item">
              <span className="bench-value">{b.value}</span>
              <span className="bench-label">{b.label}</span>
              <span className="bench-note mono text-muted">{b.note}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
