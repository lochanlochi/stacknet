import Reveal from "./Reveal";
import { clients } from "@/lib/data";

export default function ClientShowcase() {
  return (
    <section className="section client-list" aria-label="Client list">
      <div className="container">
        {clients.map((c, i) => (
          <Reveal as="article" key={c.domain} className="client">
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="client-visual"
              style={{ "--hue": c.hue } as React.CSSProperties}
              aria-label={`Visit ${c.name} (opens in a new tab)`}
              data-cursor
            >
              <div className="client-visual-grid" aria-hidden="true" />
              <div className="client-window" aria-hidden="true">
                <div className="client-window-bar">
                  <span className="client-window-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="client-window-url mono">
                    <span className="client-lock">●</span> {c.domain}
                  </span>
                </div>
                <div className="client-window-body">
                  <span className="client-window-eyebrow mono">
                    {c.industry}
                  </span>
                  <span className="client-window-headline">{c.headline}</span>
                  <span className="client-window-lines">
                    <b style={{ width: "78%" }} />
                    <b style={{ width: "56%" }} />
                  </span>
                  <span className="client-window-cta">
                    <i />
                    <i />
                  </span>
                </div>
              </div>
              <span className="client-live mono">
                <span className="dot" /> LIVE
              </span>
            </a>

            <div className="client-body">
              <div className="client-meta mono">
                <span className="client-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{c.industry}</span>
                <span className="text-muted">{c.location}</span>
              </div>

              <h2 className="client-name">{c.name}</h2>
              <p className="client-summary text-secondary">{c.summary}</p>

              <ul className="client-scope">
                {c.scope.map((s) => (
                  <li key={s} className="client-scope-item mono">
                    {s}
                  </li>
                ))}
              </ul>

              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary client-cta"
              >
                Visit {c.domain}{" "}
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
