import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="section intro" aria-labelledby="intro-heading">
      <div className="container intro-inner">
        <Reveal className="intro-mark">
          <span className="mono text-muted">( 00 )</span>
        </Reveal>
        <div className="intro-body">
          <Reveal>
            <h2 id="intro-heading" className="intro-statement">
              Digital products shouldn&apos;t just work.
              <br />
              They should feel{" "}
              <span className="serif accent">inevitable.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="intro-support text-secondary">
              Product thinking, design and engineering fused into one discipline —
              so what we ship loads in a blink, reads like a conversation and
              keeps performing long after launch day.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
