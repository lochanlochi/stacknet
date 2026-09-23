// Root-relative anchors so the nav also works from sub-pages like /clients.
export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Technology", href: "/#technology" },
  { label: "Work", href: "/#work" },
  { label: "Clients", href: "/clients" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export interface Client {
  name: string;
  url: string;
  domain: string;
  industry: string;
  location: string;
  summary: string;
  scope: string[];
  headline: string;
  hue: string;
}

export const clients: Client[] = [
  {
    name: "Promed Hospital",
    url: "https://www.promedhospital.co.in",
    domain: "promedhospital.co.in",
    industry: "Healthcare",
    location: "Bengaluru, IN",
    summary:
      "A 24×7 multi-speciality hospital in Banashankari. We built its digital front door — a calm, trustworthy experience where patients explore specialities, meet the lead doctor, check insurance tie-ups and book an appointment in a few taps.",
    scope: [
      "Brand-led web design",
      "Appointment booking",
      "Speciality pages",
      "Local SEO & maps",
    ],
    headline: "Healing built on trust, precision & genuine care.",
    hue: "165",
  },
  {
    name: "Assurance Developers",
    url: "https://assurancedevelopers.com/",
    domain: "assurancedevelopers.com",
    industry: "Real estate & construction",
    location: "Bengaluru, IN",
    summary:
      "A Bangalore home-construction company guiding families from first consultation through approvals to handover. Their web presence showcases transparent packages, a clear step-by-step build process and completed homes — designed to turn visitors into consultations.",
    scope: [
      "Web presence",
      "Conversion-focused layout",
      "Project showcase",
      "Lead capture",
    ],
    headline: "Your dream home awaits.",
    hue: "38",
  },
];

export const tickerItems = [
  "EDGE-RENDERED",
  "SUB-SECOND LOADS",
  "AI-READY",
  "PIXEL-PERFECT",
  "ACCESSIBLE BY DEFAULT",
  "ZERO-DOWNTIME DEPLOYS",
  "SEO-NATIVE",
  "BUILT TO SCALE",
];

export interface Service {
  index: string;
  title: string;
  description: string;
  tech: string;
}

export const services: Service[] = [
  {
    index: "01",
    title: "Experience Engineering",
    description:
      "Interfaces that feel instant — fluid motion, pixel-perfect layouts on every screen and accessibility engineered in, not bolted on.",
    tech: "Motion · Design Systems · A11y",
  },
  {
    index: "02",
    title: "Platform Architecture",
    description:
      "The invisible engine behind great products — secure APIs, clean data models and infrastructure that shrugs off traffic spikes.",
    tech: "APIs · Data · Cloud",
  },
  {
    index: "03",
    title: "Products & Platforms",
    description:
      "SaaS, commerce and content platforms shipped end to end — from the first wireframe to the first paying customer.",
    tech: "SaaS · Commerce · CMS",
  },
  {
    index: "04",
    title: "AI-Powered Features",
    description:
      "Smart search, assistants and automation woven into your product — useful intelligence, not a chatbot for the sake of it.",
    tech: "LLMs · Search · Automation",
  },
  {
    index: "05",
    title: "Performance & Growth",
    description:
      "Speed you can measure and rankings you can see — every millisecond shaved is a visitor kept and a conversion won.",
    tech: "SEO · Core Web Vitals · CRO",
  },
];

export interface Capability {
  code: string;
  title: string;
  description: string;
}

// Capabilities rather than a tool list — the right modern tools are chosen per project.
export const capabilities: Capability[] = [
  {
    code: "EDGE",
    title: "Edge-first delivery",
    description:
      "Served from the network edge, milliseconds from every visitor — global speed by default.",
  },
  {
    code: "HYBRID",
    title: "Hybrid rendering",
    description:
      "Pre-built where it can be, streamed live where it must be. Chosen page by page.",
  },
  {
    code: "TYPED",
    title: "Type-safe end to end",
    description:
      "Errors caught at build time — not discovered by your customers.",
  },
  {
    code: "AI",
    title: "AI-ready architecture",
    description:
      "Structured from day one for smart search, assistants and intelligent automation.",
  },
  {
    code: "LIVE",
    title: "Real-time by design",
    description:
      "Live updates, streaming UI and instant feedback — no refresh button required.",
  },
  {
    code: "SECURE",
    title: "Security baked in",
    description:
      "Modern auth, encryption everywhere, hardened headers and audited dependencies.",
  },
  {
    code: "SCALE",
    title: "Cloud-native scaling",
    description:
      "Absorbs launch-day spikes and scales down when quiet. Pay for traffic, not idle servers.",
  },
  {
    code: "CI/CD",
    title: "Automated delivery",
    description:
      "Every change tested, previewed and shipped automatically. Zero-downtime releases.",
  },
];

export interface Benchmark {
  value: string;
  label: string;
  note: string;
}

// Engineering targets every build is held to — not historical claims.
export const benchmarks: Benchmark[] = [
  {
    value: "100",
    label: "Lighthouse target",
    note: "Performance · SEO · Best practices",
  },
  {
    value: "<1s",
    label: "Largest paint target",
    note: "Core Web Vitals in the green",
  },
  {
    value: "AA",
    label: "WCAG 2.2 compliance",
    note: "Usable by everyone, on any device",
  },
  {
    value: "0",
    label: "Downtime deploys",
    note: "Ship on a Friday. Sleep fine.",
  },
];

export interface Project {
  name: string;
  category: string;
  year: string;
  description: string;
  tech: string;
  hue: string;
}

export const projects: Project[] = [
  {
    name: "Northstar",
    category: "Operations platform / SaaS",
    year: "2026",
    description:
      "A control surface for operations teams — real-time dashboards, role-based access and workflows that scale with the org.",
    tech: "Real-time · Role-based access · Audit trails",
    hue: "150",
  },
  {
    name: "Form / Function",
    category: "Digital commerce / D2C",
    year: "2025",
    description:
      "A conversion-focused storefront with a headless architecture, sub-second navigation and a considered checkout.",
    tech: "Headless · Edge-cached · One-tap checkout",
    hue: "95",
  },
  {
    name: "Atlas",
    category: "Data platform / B2B",
    year: "2025",
    description:
      "A data platform turning noisy pipelines into clear, queryable insight with a fast, keyboard-first interface.",
    tech: "Live queries · Keyboard-first · Data pipelines",
    hue: "185",
  },
  {
    name: "Fieldnote",
    category: "Editorial / Content platform",
    year: "2024",
    description:
      "An editorial platform built for writers — structured content, live preview and a reading experience that stays out of the way.",
    tech: "Structured content · Live preview · Edge",
    hue: "70",
  },
];

export interface Step {
  index: string;
  title: string;
  description: string;
}

export const process: Step[] = [
  {
    index: "01",
    title: "Discover",
    description:
      "We map the problem, the people and the constraints — then define success in numbers before a single pixel is drawn.",
  },
  {
    index: "02",
    title: "Design & Build",
    description:
      "Design and code move together in short, visible cycles. Every change gets a live preview link — no black box, no big reveal.",
  },
  {
    index: "03",
    title: "Launch & Evolve",
    description:
      "Zero-downtime launch, real-user monitoring from minute one, then continuous refinement driven by data, not guesswork.",
  },
];

export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: "Design and engineering, one mind",
    description:
      "No handoff gap, nothing lost in translation. The people who design it build it.",
  },
  {
    title: "Performance is a feature",
    description:
      "Speed isn't polish added at the end — it's architecture from the start. Every kilobyte earns its place.",
  },
  {
    title: "Built for the next version",
    description:
      "Clean, typed, documented foundations, so tomorrow's feature costs days, not a rewrite.",
  },
  {
    title: "Small team. Senior execution.",
    description:
      "No account managers, no juniors learning on your budget. You talk directly to the people shipping your product.",
  },
  {
    title: "Accessible is non-negotiable",
    description:
      "Keyboard, screen reader, slow network, old phone — if it doesn't work for everyone, it isn't finished.",
  },
  {
    title: "Always on the current web",
    description:
      "We retire old patterns fast and adopt new ones with care. Modern — never experimental on your budget.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

// Placeholder testimonials — section is hidden for now; re-enable in app/page.tsx once real ones exist.
export const testimonials: Testimonial[] = [
  {
    quote: "Client testimonial goes here.",
    name: "Full Name",
    role: "Role",
    company: "Company",
  },
  {
    quote: "Client testimonial goes here.",
    name: "Full Name",
    role: "Role",
    company: "Company",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "What type of projects do you take?",
    a: "Websites, web applications, SaaS products, digital platforms and backend systems — work where design quality and engineering both matter.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern and latest technologies — the current generation of the web, not yesterday's templates. Every build is edge-delivered, type-safe, secure and made to scale, and we choose the right tools for your product instead of forcing one recipe onto every problem.",
  },
  {
    q: "Can you build the whole product end to end?",
    a: "Yes. Interface, APIs, data and infrastructure — one team owns it all, so nothing gets lost between design, development and deployment.",
  },
  {
    q: "Will my website be fast and rank on Google?",
    a: "Speed and search are engineered in from day one — semantic markup, structured data, optimised media and Core Web Vitals in the green. We measure it, not just promise it.",
  },
  {
    q: "Can you add AI features to my product?",
    a: "Yes — smart search, assistants, content generation and workflow automation, integrated where they genuinely help your users rather than as a gimmick.",
  },
  {
    q: "Do you work with existing products?",
    a: "Yes. We join existing codebases to rebuild, modernise or extend them, and we're comfortable working alongside in-house teams.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope, but most engagements run from a few weeks to a few months. We scope clearly before we start — no surprise timelines.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. After launch we keep measuring, maintaining and refining — performance, security and reliability are ongoing work, not a one-off.",
  },
];

export const founder = "Lochan SR";

export const socials = [
  { label: "GitHub", href: "https://github.com/lochanlochi/stacknet" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:hello@stacknet.dev" },
];
