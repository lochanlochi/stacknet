import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { aiPromises } from "@/lib/data";

export default function AIStudio() {
  return (
    <section className="section ai-studio" id="ai">
      <div className="container">
        <div className="ai-head">
          <SectionHeading
            label="AI PRODUCT STUDIO"
            title={
              <>
                Your work,
                <br />
                <span className="serif accent">90% lighter.</span>
              </>
            }
          />
          <Reveal delay={160}>
            <p className="ai-lead text-secondary">
              Most of a working day is repetition — copying, checking, chasing,
              reporting. We build AI products that take on that 90%, so your team
              keeps the 10% that truly needs a human.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="ai-split">
          <div className="ai-split-bar" aria-hidden="true">
            <span className="ai-split-ai" />
            <span className="ai-split-you" />
          </div>
          <div className="ai-split-legend">
            <div className="ai-split-item">
              <span className="ai-split-pct mono accent">90%</span>
              <span className="ai-split-text">
                <strong>AI handles it.</strong>{" "}
                <span className="text-secondary">
                  The repetitive, rule-based work that eats your day.
                </span>
              </span>
            </div>
            <div className="ai-split-item">
              <span className="ai-split-pct mono">10%</span>
              <span className="ai-split-text">
                <strong>You own it.</strong>{" "}
                <span className="text-secondary">
                  The judgement, relationships and ideas only you can bring.
                </span>
              </span>
            </div>
          </div>
        </Reveal>

        <div className="ai-grid">
          {aiPromises.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 4) * 70}
              className="philosophy-item"
            >
              <span className="philosophy-index mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="philosophy-item-title">{p.title}</h3>
              <p className="philosophy-item-desc text-secondary">
                {p.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
