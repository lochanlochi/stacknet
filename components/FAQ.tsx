import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <section className="section faq" aria-labelledby="faq-heading">
      <div className="container faq-inner">
        <div className="faq-head">
          <SectionHeading
            label="FAQ"
            title={
              <span id="faq-heading">
                Questions,
                <br />
                <span className="serif accent">answered.</span>
              </span>
            }
          />
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 50}>
              <details className="faq-item" name="faq">
                <summary className="faq-question" data-cursor>
                  <span className="faq-q-index mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
