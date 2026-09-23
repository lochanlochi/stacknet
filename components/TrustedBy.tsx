import Reveal from "./Reveal";
import { clients } from "@/lib/data";

export default function TrustedBy() {
  return (
    <section className="trusted" aria-labelledby="trusted-heading">
      <div className="container trusted-inner">
        <Reveal className="trusted-label">
          <h2 id="trusted-heading" className="section-label">
            <span aria-hidden="true">✦</span>
            TRUSTED BY
          </h2>
        </Reveal>

        <ul className="trusted-list">
          {clients.map((c, i) => (
            <Reveal as="li" key={c.domain} delay={i * 80}>
              <a href="/clients" className="trusted-item" data-cursor>
                <span className="trusted-name">{c.name}</span>
                <span className="trusted-industry mono text-muted">
                  {c.industry}
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <a href="/clients" className="trusted-more mono">
            View clients <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
