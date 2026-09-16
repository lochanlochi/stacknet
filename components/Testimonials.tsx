import Reveal from "./Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="testimonials-head">
          <Reveal>
            <span className="section-label">
              <span aria-hidden="true">✦</span>
              WHAT PARTNERS SAY
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="testimonials-heading" className="testimonials-title">
              Signal over noise.
            </h2>
          </Reveal>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal
              as="figure"
              key={i}
              delay={i * 90}
              className="testimonial"
            >
              <span className="testimonial-mark serif" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="testimonial-quote">{t.quote}</blockquote>
              <figcaption className="testimonial-meta">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role mono text-muted">
                  {t.role} · {t.company}
                </span>
              </figcaption>
              <span className="testimonial-placeholder mono">PLACEHOLDER</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
