import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { principles, founder } from "@/lib/data";

export default function Philosophy() {
  return (
    <section className="section philosophy" id="about">
      <div className="container">
        <div className="philosophy-head">
          <SectionHeading
            label="WHY STACKNET"
            title={
              <>
                Good software should
                <br />
                feel <span className="serif accent">obvious.</span>
              </>
            }
          />
        </div>

        <div className="philosophy-grid">
          {principles.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 70}
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

        <p className="philosophy-founder text-secondary">
          Founded by <span className="serif accent">{founder}</span>.
        </p>
      </div>
    </section>
  );
}
