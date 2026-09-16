import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services-head">
          <SectionHeading
            label="01 / WHAT WE DO"
            title={
              <>
                Engineering with
                <br />
                <span className="serif accent">intent.</span>
              </>
            }
          />
          <Reveal delay={140} className="services-head-note">
            <p className="text-secondary">
              Four disciplines, one team. We move between them without a handoff
              gap — the way good products are actually built.
            </p>
          </Reveal>
        </div>

        <ul className="services-list">
          {services.map((s, i) => (
            <Reveal as="li" key={s.index} delay={i * 60} className="service-row">
              <a href="#contact" className="service-link" data-cursor>
                <span className="service-index mono">{s.index}</span>
                <span className="service-main">
                  <span className="service-title">{s.title}</span>
                  <span className="service-desc text-secondary">
                    {s.description}
                  </span>
                </span>
                <span className="service-tech mono">{s.tech}</span>
                <span className="service-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
