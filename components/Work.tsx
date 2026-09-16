import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="work-head">
          <SectionHeading
            label="02 / SELECTED WORK"
            title={
              <>
                Made to
                <br />
                <span className="serif accent">matter.</span>
              </>
            }
          />
          <Reveal delay={140} className="work-note mono text-muted">
            Demonstration case studies — placeholders until real projects are
            supplied.
          </Reveal>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.name}
              delay={(i % 2) * 80}
              className="project"
            >
              <a href="#contact" className="project-link" data-cursor>
                <div
                  className="project-visual"
                  style={{ "--hue": p.hue } as React.CSSProperties}
                >
                  <div className="project-visual-grid" aria-hidden="true" />
                  <div className="project-window" aria-hidden="true">
                    <span className="project-window-bar">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="project-window-lines">
                      <b style={{ width: "62%" }} />
                      <b style={{ width: "88%" }} />
                      <b style={{ width: "40%" }} />
                      <b style={{ width: "74%" }} />
                    </span>
                  </div>
                  <span className="project-index mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="project-meta">
                  <div className="project-meta-top">
                    <h3 className="project-name">{p.name}</h3>
                    <span className="project-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <div className="project-tags mono">
                    <span className="project-category">{p.category}</span>
                    <span className="project-year">{p.year}</span>
                  </div>
                  <p className="project-desc text-secondary">{p.description}</p>
                  <span className="project-tech mono text-muted">{p.tech}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
