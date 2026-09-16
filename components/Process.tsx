import Reveal from "./Reveal";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="process-head">
          <Reveal>
            <span className="section-label process-label">
              <span aria-hidden="true">✦</span>
              03 / PROCESS
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="process-title">
              Less theatre.
              <br />
              More shipping.
            </h2>
          </Reveal>
        </div>

        <ol className="process-steps">
          {process.map((step, i) => (
            <Reveal as="li" key={step.index} delay={i * 90} className="process-step">
              <span className="process-step-index mono">{step.index}</span>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
