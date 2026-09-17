export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const tickerItems = [
  "WEB APPS",
  "SAAS",
  "ECOMMERCE",
  "FRONTEND",
  "BACKEND",
  "APIS",
  "PERFORMANCE",
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
    title: "Frontend Engineering",
    description:
      "Responsive, accessible interfaces with modern frameworks, thoughtful motion and obsessive attention to detail.",
    tech: "React · Next.js · TypeScript",
  },
  {
    index: "02",
    title: "Backend & APIs",
    description:
      "Reliable systems designed around your product — clean architecture, secure APIs and infrastructure that scales.",
    tech: "Node · Python · PostgreSQL",
  },
  {
    index: "03",
    title: "Web Platforms",
    description:
      "End-to-end digital products connecting frontend, backend, content and analytics.",
    tech: "SaaS · CMS · Commerce",
  },
  {
    index: "04",
    title: "Performance & Growth",
    description:
      "Technical improvements that make websites faster, more discoverable and more effective.",
    tech: "SEO · Core Web Vitals · CRO",
  },
];

export interface StackGroup {
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    label: "Infrastructure",
    items: ["Vercel", "AWS", "Docker", "GitHub", "CI/CD"],
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
    tech: "Next.js · Node · PostgreSQL",
    hue: "150",
  },
  {
    name: "Form / Function",
    category: "Digital commerce / D2C",
    year: "2025",
    description:
      "A conversion-focused storefront with a headless architecture, sub-second navigation and a considered checkout.",
    tech: "Next.js · Commerce · Stripe",
    hue: "95",
  },
  {
    name: "Atlas",
    category: "Data platform / B2B",
    year: "2025",
    description:
      "A data platform turning noisy pipelines into clear, queryable insight with a fast, keyboard-first interface.",
    tech: "React · Python · GraphQL",
    hue: "185",
  },
  {
    name: "Fieldnote",
    category: "Editorial / Content platform",
    year: "2024",
    description:
      "An editorial platform built for writers — structured content, live preview and a reading experience that stays out of the way.",
    tech: "Next.js · CMS · Edge",
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
      "Understand the problem, users, constraints and desired outcome.",
  },
  {
    index: "02",
    title: "Design & Build",
    description:
      "Translate ideas into polished interfaces and production-ready systems.",
  },
  {
    index: "03",
    title: "Launch & Improve",
    description: "Ship, measure and continuously refine.",
  },
];

export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: "Design and engineering together",
    description: "No handoff gap between design and development.",
  },
  {
    title: "Performance is a feature",
    description: "Fast experiences are treated as part of the product.",
  },
  {
    title: "Built for change",
    description:
      "Architecture should support the next version, not just today's requirements.",
  },
  {
    title: "Small team. Senior execution.",
    description: "Avoid generic agency overhead.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

// Placeholder testimonials — clearly marked, ready to be replaced with real ones.
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
    q: "Do you work with existing products?",
    a: "Yes. We join existing codebases to rebuild, extend or improve them, and we're comfortable working alongside in-house teams.",
  },
  {
    q: "Can you handle both frontend and backend?",
    a: "Yes. We design and build end-to-end — interface, API and infrastructure — so there's no handoff gap between the two.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope, but most engagements run from a few weeks to a few months. We scope clearly before we start.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. After launch we can continue to measure, maintain and refine — performance and reliability are ongoing work.",
  },
  {
    q: "What technologies do you use?",
    a: "React, Next.js and TypeScript on the frontend; Node and Python with PostgreSQL on the backend; deployed on modern infrastructure.",
  },
];

export const founder = "Lochan SR";

export const socials = [
  { label: "GitHub", href: "https://github.com/lochanlochi/stacknet" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:hello@stacknet.dev" },
];
