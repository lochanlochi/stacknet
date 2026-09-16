import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <a href="#top" className="skip-link">
        Skip to content
      </a>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Intro />
        <Services />
        <Stack />
        <Work />
        <Process />
        <Philosophy />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
