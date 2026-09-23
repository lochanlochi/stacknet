import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ClientShowcase from "@/components/ClientShowcase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { clients } from "@/lib/data";

export const metadata: Metadata = {
  title: "Clients — Stacknet.dev",
  description:
    "The businesses Stacknet.dev builds for — including Promed Hospital and Assurance Developers in Bengaluru.",
  alternates: { canonical: "https://stacknet.dev/clients" },
};

export default function ClientsPage() {
  const industries = Array.from(new Set(clients.map((c) => c.industry)));

  return (
    <>
      <a href="#top" className="skip-link">
        Skip to content
      </a>
      <CustomCursor />
      <Navbar />
      <main>
        <section className="clients-hero" id="top">
          <div className="grid-bg" aria-hidden="true" />
          <div className="glow clients-glow" aria-hidden="true" />

          <div className="container clients-hero-inner">
            <Reveal>
              <span className="section-label">
                <span aria-hidden="true">✦</span>
                CLIENTS
              </span>
            </Reveal>

            <h1 className="display clients-title">
              <Reveal as="span" delay={60} className="hero-line">
                Trusted by people
              </Reveal>
              <Reveal as="span" delay={140} className="hero-line">
                who build <span className="serif accent">real</span> things.
              </Reveal>
            </h1>

            <Reveal delay={220}>
              <p className="clients-lead text-secondary">
                Hospitals that care for families. Builders who hand over homes.
                We engineer the digital side of businesses where trust is the
                whole product — and every one of these sites is live today.
              </p>
            </Reveal>

            <Reveal delay={300} className="clients-facts mono">
              <span>
                <b>{String(clients.length).padStart(2, "0")}</b> Live
                engagements
              </span>
              <span>
                <b>{String(industries.length).padStart(2, "0")}</b> Industries
              </span>
              <span>
                <b>100%</b> Still live today
              </span>
            </Reveal>
          </div>
        </section>

        <ClientShowcase />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
