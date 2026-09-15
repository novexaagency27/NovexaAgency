import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Smartphone,
  Layers,
  Cpu,
  Sparkles,
  ShoppingBag,
  FileCode2,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  Zap,
  Eye,
  Settings,
  Globe2,
} from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/lib/data/projects";
import { WebsiteDevelopmentFAQ } from "./WebsiteDevelopmentFAQ";

export const metadata: Metadata = {
  title: "Website Development Agency in India | NOVEXA Agency",
  description:
    "NOVEXA is a website development agency building responsive, modern and scalable websites for growing businesses, brands and digital experiences.",
  alternates: {
    canonical: "https://novexaagency.com/website-development/",
  },
  openGraph: {
    title: "Website Development Agency in India | NOVEXA Agency",
    description:
      "NOVEXA is a website development agency building responsive, modern and scalable websites for growing businesses, brands and digital experiences.",
    url: "https://novexaagency.com/website-development/",
    siteName: "NOVEXA",
    images: [
      {
        url: "/assets/work/ui-ux/watch web page ui.jpg",
        width: 1200,
        height: 630,
        alt: "NOVEXA Website Development Agency — Custom Frontend & Web Engineering",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Agency in India | NOVEXA Agency",
    description:
      "NOVEXA is a website development agency building responsive, modern and scalable websites for growing businesses, brands and digital experiences.",
    images: ["/assets/work/ui-ux/watch web page ui.jpg"],
  },
};

const developmentServices = [
  {
    icon: Code2,
    num: "01",
    title: "Custom Website Development",
    description:
      "Clean, component-driven frontend codebases engineered from approved designs using modern technologies like Next.js, React, and TypeScript without rigid page-builder constraints.",
    deliverables: ["Custom Next.js & React Code", "Modular Component System", "Tailwind CSS Styling Tokens", "Production Deployment Setup"],
  },
  {
    icon: Smartphone,
    num: "02",
    title: "Responsive Website Development",
    description:
      "Meticulous cross-breakpoint coding ensuring layouts, typography, navigation menus, and interactive elements adapt fluidly from mobile displays to 4K desktop screens.",
    deliverables: ["Fluid Viewport Breakpoints", "Touch-Optimized Mobile Navigation", "Adaptive Image Loading", "Cross-Browser Compatibility"],
  },
  {
    icon: Globe2,
    num: "03",
    title: "Business Website Development",
    description:
      "Robust commercial platforms built for professional service firms and enterprises to articulate value propositions, project authority, and capture qualified business inquiries.",
    deliverables: ["Commercial Site Architecture", "Lead Generation Forms", "Fast Static Prerendering", "Structured Technical SEO"],
  },
  {
    icon: Sparkles,
    num: "04",
    title: "Brand Website Development",
    description:
      "Digital flagships engineered with fluid micro-interactions, smooth scroll engineering, and editorial layout precision that translate brand aesthetics into interactive reality.",
    deliverables: ["60fps Scroll Interactions", "Editorial Typography Styling", "Custom Micro-Animations", "Interactive Product Modules"],
  },
  {
    icon: Zap,
    num: "05",
    title: "Landing Page Development",
    description:
      "Lightweight, conversion-engineered landing pages coded for ultra-fast load times, clear narrative progression, and reliable integration with marketing analytics tools.",
    deliverables: ["High-Conversion Page Code", "Analytics & Tracking Hooks", "Form Submission Handlers", "Speed-Optimized Assets"],
  },
  {
    icon: ShoppingBag,
    num: "06",
    title: "E-Commerce Website Development",
    description:
      "Fast, responsive online storefront implementations with intuitive product filtering, interactive galleries, mini-cart sidebars, and streamlined checkout pathways.",
    deliverables: ["Product Grid & Detail Views", "Interactive Filter Logic", "Cart & Checkout Frontend", "Mobile-Optimized Shopping"],
  },
  {
    icon: FileCode2,
    num: "07",
    title: "CMS & Content-Driven Websites",
    description:
      "Headless content management integrations (such as Sanity or Strapi) providing client teams with an intuitive editorial dashboard to manage blogs, case studies, and pages.",
    deliverables: ["Headless CMS Architecture", "Dynamic Content Schemas", "Client Editorial Dashboard", "Automated Content Revalidation"],
  },
  {
    icon: RefreshCw,
    num: "08",
    title: "Frontend Code Maintenance",
    description:
      "Technical audits, speed enhancements, modern component refactoring, and code updates for businesses seeking to modernize their existing web presence.",
    deliverables: ["Codebase Quality Audits", "Core Web Vitals Tuning", "Component Library Modernization", "Ongoing Technical Support"],
  },
];

const designVsDevelopment = [
  {
    category: "WEB DESIGN",
    focus: "Visual Form, Experience & Psychology",
    color: "border-stone-300 bg-white/40",
    points: [
      { label: "User Experience (UX)", detail: "Mapping user journeys, sitemaps, information architecture, and intuitive task completion." },
      { label: "User Interface (UI)", detail: "Crafting visual screens, color palettes, elevation shadows, and button aesthetics in Figma." },
      { label: "Visual Hierarchy", detail: "Guiding the visitor's eye through deliberate typographic scale, contrast, and layout whitespace." },
      { label: "Typography & Motifs", detail: "Selecting font pairings, line heights, editorial layouts, and signature brand patterns." },
      { label: "Interaction Concepting", detail: "Designing hover states, modal triggers, and transition flows before coding begins." },
    ],
  },
  {
    category: "WEBSITE DEVELOPMENT",
    focus: "Engineering, Functionality & Delivery",
    color: "border-gold/40 bg-ivory shadow-luxury",
    points: [
      { label: "Frontend Implementation", detail: "Writing clean, semantic HTML5, CSS3, TypeScript, and React code that matches designs." },
      { label: "Responsive Engineering", detail: "Coding fluid multi-device layouts that function reliably across all mobile and desktop screens." },
      { label: "Reusable Components", detail: "Building structured, modular component libraries that ensure scalability and easy maintenance." },
      { label: "Functionality & Forms", detail: "Connecting inquiry forms, custom inputs, interactive tabs, filtering systems, and validation." },
      { label: "Technical Foundations", detail: "Implementing semantic tags, fast rendering strategies, schema markup, and production hosting." },
    ],
  },
];

const websiteTypes = [
  {
    num: "01",
    title: "Business & Corporate Websites",
    description:
      "Professional web platforms built for established enterprises to present capabilities, highlight client results, and capture qualified inbound opportunities.",
  },
  {
    num: "02",
    title: "Brand Flagship Websites",
    description:
      "Art-directed digital showcases developed to communicate prestige, craftsmanship, and brand philosophy through refined interactive storytelling.",
  },
  {
    num: "03",
    title: "Professional Service Websites",
    description:
      "Structured digital hubs for consultancies, studios, and agencies engineered for clear service breakdowns, case study proof, and direct consultation booking.",
  },
  {
    num: "04",
    title: "Portfolio & Studio Showcases",
    description:
      "Minimalist, image-first web experiences designed for creators and design firms to display high-resolution creative work with fast, smooth page transitions.",
  },
  {
    num: "05",
    title: "High-Conversion Landing Pages",
    description:
      "Focused promotional pages developed for product launches, marketing campaigns, and paid advertising funnels that maximize conversion efficiency.",
  },
  {
    num: "06",
    title: "E-Commerce Web Storefronts",
    description:
      "Modern retail interfaces developed for direct-to-consumer lifestyle brands, combining luxury presentation with clean, responsive shopping utilities.",
  },
];

const developmentPrinciples = [
  {
    icon: Smartphone,
    title: "Responsive-First Engineering",
    description: "Every page layout is programmed with mobile ergonomics as a primary consideration, ensuring tap targets and typography feel natural on any device.",
  },
  {
    icon: Layers,
    title: "Clean Component Architecture",
    description: "We organize code into modular, reusable components that make ongoing updates, content additions, and site expansions straightforward and reliable.",
  },
  {
    icon: Zap,
    title: "Performance Awareness",
    description: "Lightweight asset loading, optimized script execution, and modern static rendering ensure pages feel crisp and respond instantaneously to user input.",
  },
  {
    icon: ShieldCheck,
    title: "Accessibility (WCAG Standards)",
    description: "Accessible markup, high-contrast color balances, keyboard navigability, and semantic DOM trees so all visitors enjoy an inclusive experience.",
  },
  {
    icon: Settings,
    title: "Long-Term Maintainability",
    description: "We avoid fragile page builders and convoluted plugins, delivering clean TypeScript codebases that any qualified developer can read and maintain.",
  },
  {
    icon: Eye,
    title: "SEO-Friendly Foundations",
    description: "Semantic HTML5 heading hierarchies, fast static prerendering, OpenGraph tags, and structured JSON-LD schemas embedded directly into the page.",
  },
  {
    icon: Sparkles,
    title: "Strict Brand & UI Fidelity",
    description: "We honor the approved design down to the exact pixel, ensuring typography, spatial margins, and color values match the creative vision.",
  },
  {
    icon: Cpu,
    title: "Cross-Browser Compatibility",
    description: "Rigorous testing across Safari, Chrome, Firefox, and Edge to ensure uniform styling and consistent functionality across all operating systems.",
  },
];

const whoItsFor = [
  {
    num: "01",
    tag: "GROWING BUSINESSES",
    title: "Commercial Growth Companies",
    description:
      "Businesses that have outgrown amateur templates or slow page builders and need a clean, professional web platform that matches their market stature.",
  },
  {
    num: "02",
    tag: "STARTUPS & TECH",
    title: "High-Growth Ventures",
    description:
      "Founders who need a fast, modern digital presence built with scalable technologies to launch products, gain traction, and build market trust.",
  },
  {
    num: "03",
    tag: "REGIONAL LEADERS",
    title: "Gujarat & Pan-India Enterprises",
    description:
      "Established organizations across Vadodara, Ahmedabad, Surat, and across India seeking a reliable digital engineering partner for modern web solutions.",
  },
  {
    num: "04",
    tag: "SERVICE FIRMS",
    title: "Consultancies & Specialists",
    description:
      "Professional service firms that require an authoritative web presence with clear service architectures, team profiles, and direct client inquiry flows.",
  },
  {
    num: "05",
    tag: "D2C & PRODUCT",
    title: "Consumer Brands",
    description:
      "Product-led brands that need immersive web storefronts with smooth interactive galleries, responsive product displays, and reliable cart experiences.",
  },
  {
    num: "06",
    tag: "WEBSITE REBUILDS",
    title: "Companies Replacing Outdated Sites",
    description:
      "Businesses burdened with slow, difficult-to-edit legacy websites seeking a modern, responsive rebuild engineered for the contemporary web.",
  },
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Technical Scope",
    description:
      "We unpack your functional objectives, user workflows, content inventory, and performance criteria to establish a rock-solid technical blueprint.",
  },
  {
    step: "02",
    title: "Architecture & Stack Planning",
    description:
      "We define the component structure, routing strategy, asset optimization pipeline, and content management schema tailored to your project scope.",
  },
  {
    step: "03",
    title: "Design Alignment & Specs",
    description:
      "We review approved Figma design screens, clarifying interactive states, responsive breakpoint behaviors, and typography scales before coding.",
  },
  {
    step: "04",
    title: "Frontend Engineering",
    description:
      "We build the website using modern technologies like Next.js, React, and Tailwind CSS, engineering clean components and fluid micro-interactions.",
  },
  {
    step: "05",
    title: "Testing & Quality Assurance",
    description:
      "We test multi-device responsiveness across phones, tablets, and laptops, verifying form validations, navigation menus, and cross-browser stability.",
  },
  {
    step: "06",
    title: "Refinement & Polish",
    description:
      "We optimize asset payloads, fine-tune transition timings, and conduct usability sweeps based on collaborative review milestones.",
  },
  {
    step: "07",
    title: "Deployment & Handoff",
    description:
      "We configure production hosting, verify SSL certificates, submit XML sitemaps, and provide comprehensive guidance on site management.",
  },
];

const faqItems = [
  {
    question: "What does a website development agency do?",
    answer:
      "A website development agency writes the actual software code that turns approved visual designs into functional, interactive, and responsive websites. While web design establishes the aesthetics and visual layouts, website development focuses on frontend engineering (using technologies like Next.js, React, HTML, and CSS), responsive behavior across devices, component architecture, form handling, CMS integrations, and hosting configuration.",
  },
  {
    question: "What is the difference between web design and web development?",
    answer:
      "Web design encompasses the visual layout, typography, color palettes, user interface (UI), and user experience (UX)—determining how the website looks and feels. Website development is the technical engineering that brings those designs to life through clean, production-grade code, ensuring the site loads quickly, functions smoothly, adapts to any screen, and handles user interactions reliably.",
  },
  {
    question: "Does NOVEXA develop responsive websites for all screen sizes?",
    answer:
      "Yes, absolutely. Responsive multi-device engineering is foundational to every website we build. We rigorously develop and test layouts across smartphones, tablets, laptops, and ultra-wide desktop monitors, ensuring typography remains legible, navigation menus work seamlessly on touch screens, and interactive components perform flawlessly.",
  },
  {
    question: "Can NOVEXA build a website from an existing approved design?",
    answer:
      "Yes. If you already have approved Figma, Adobe XD, or Sketch designs, our development team can step in to code the frontend with pixel-perfect accuracy. We carefully review your design system tokens, assets, and responsive specifications to ensure the developed site faithfully reflects your creative vision.",
  },
  {
    question: "Can NOVEXA develop e-commerce websites?",
    answer:
      "Yes. We develop modern, responsive e-commerce storefronts that emphasize speed, visual elegance, and intuitive purchasing flows. This includes responsive product catalogs, interactive photo galleries, faceted filtering, slide-out mini-carts, and streamlined checkout pathways designed to provide frictionless shopping experiences.",
  },
  {
    question: "Can NOVEXA redesign and rebuild an existing website?",
    answer:
      "Yes. We frequently partner with companies burdened by slow, outdated, or brittle websites built on bloated page builders. We can provide complete end-to-end design and development, preserving your valuable brand equity while modernizing the frontend into a fast, component-driven digital flagship.",
  },
  {
    question: "How does a website development project work from start to finish?",
    answer:
      "We guide you through a structured 7-phase methodology: Discovery & Technical Scope → Architecture & Stack Planning → Design Alignment → Frontend Engineering → Quality Assurance Testing → Refinement & Polish → Production Deployment. We maintain clear review checkpoints throughout each phase to ensure transparent, dependable progress.",
  },
];

export default function WebsiteDevelopmentServicePage() {
  // Verified real digital/web projects from projectsData
  const relevantSlugs = [
    "chronos-luxury-timepiece",
    "anaqah-luxury-ecommerce",
    "novexa-wordmark-system",
    "nirvaan-logo-mark",
  ];
  const portfolioShowcase = projectsData.filter((p) =>
    relevantSlugs.includes(p.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Development Services",
    serviceType: "Website Development Agency",
    provider: {
      "@type": "Organization",
      name: "NOVEXA AGENCY",
      url: "https://novexaagency.com",
      logo: "https://novexaagency.com/assets/work/logo/MAIN.jpg",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "State",
        name: "Gujarat",
      },
      {
        "@type": "City",
        name: "Vadodara",
      },
      {
        "@type": "City",
        name: "Ahmedabad",
      },
      {
        "@type": "City",
        name: "Surat",
      },
    ],
    description:
      "NOVEXA is a website development agency building responsive, modern and scalable websites for growing businesses, brands and digital experiences.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://novexaagency.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://novexaagency.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Website Development",
        item: "https://novexaagency.com/website-development/",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16 space-y-24 md:space-y-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 01 // HERO SECTION */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-200/80 border border-stone-300 font-mono text-xs text-charcoal tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>01 // WEBSITE DEVELOPMENT AGENCY</span>
            </div>

            <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-charcoal leading-[1.08]">
              Website Development Built for{" "}
              <span className="gold-gradient-text font-normal">Growing Businesses</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-stone-700 max-w-2xl font-light leading-relaxed">
              NOVEXA is a website development agency in India building reliable, responsive, and brand-led websites. We transform approved designs into high-performing digital platforms using clean frontend architecture, modular component systems, and meticulous technical precision.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/start-a-project"
                data-cursor="START"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-charcoal text-ivory font-mono text-xs tracking-widest font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-luxury"
              >
                <span>START A DEVELOPMENT PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/web-design"
                data-cursor="DESIGN"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card border border-stone-300 text-charcoal font-mono text-xs tracking-widest font-semibold hover:border-gold hover:text-gold transition-all duration-300"
              >
                <span>EXPLORE WEB DESIGN</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-8 border-t border-stone-200 flex flex-wrap gap-8 font-mono text-xs text-stone-500">
              <div>
                <span className="text-gold block font-semibold">CRAFT FOCUS</span>
                <span>NEXT.JS × COMPONENT ARCHITECTURE × 60FPS MOTION</span>
              </div>
              <div>
                <span className="text-gold block font-semibold">STUDIO LOCATION</span>
                <span>VADODARA, GUJARAT / SERVING INDIA</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-card border border-stone-300 shadow-luxury group">
              <Image
                src="/assets/work/ui-ux/watch web page ui.jpg"
                alt="NOVEXA Website Development Agency Portfolio — Chronos Timepieces Interactive Web Experience"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-75" />

              <div className="absolute bottom-6 left-6 right-6 p-4 glass-nav rounded-2xl border border-ivory/30 flex items-center justify-between text-charcoal">
                <div>
                  <span className="font-mono text-[10px] text-gold tracking-widest uppercase block">
                    FEATURED WEB ENGINEERING
                  </span>
                  <span className="editorial-title text-base md:text-lg font-medium">
                    Chronos Interactive Platform
                  </span>
                </div>
                <Link
                  href="/work/chronos-luxury-timepiece"
                  className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-charcoal hover:bg-ivory transition-colors"
                  aria-label="View Chronos Case Study"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 // WHAT WEBSITE DEVELOPMENT MEANS */}
      <section className="space-y-12">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              02 // THE ENGINEERING FOUNDATION
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Website Development Turns Strategic Design into <span className="italic">Functional Reality</span>.
            </h2>
            <p className="font-sans text-base md:text-lg text-stone-700 font-light leading-relaxed">
              While design conceptualizes how a website looks, website development is the engineering discipline that makes it work. It encompasses responsive layout coding, reusable component structures, smooth interaction states, accessible markup, form handling, and clean code that remains maintainable over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-200">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Component Architecture</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                We organize frontend code into modular, reusable components with clean prop structures, ensuring scalable design implementation without code repetition.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Multi-Device Fluidity</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                Our responsive engineering guarantees layouts, media assets, and navigation menus adapt naturally across all screen sizes and mobile touch environments.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Performance & Semantics</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                Semantic HTML5 markup, optimized asset delivery, and static compilation deliver rapid page load speeds and accessible code search engines love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // WEBSITE DEVELOPMENT SERVICES */}
      <section id="services-breakdown" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              03 // CORE CAPABILITIES
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Website Development Services
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Focused website engineering services built on modern web technologies, clean component architecture, and dependable delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {developmentServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                className="glass-card p-8 rounded-3xl border border-stone-200 shadow-luxury flex flex-col justify-between space-y-6 hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-gold font-semibold tracking-widest">
                      // {service.num}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-stone-200/60 flex items-center justify-center text-charcoal group-hover:text-gold transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="editorial-title text-xl font-medium text-charcoal leading-snug">
                    {service.title}
                  </h3>

                  <p className="font-sans text-xs text-stone-600 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/60 space-y-2">
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">
                    DELIVERABLES
                  </span>
                  <ul className="space-y-1 font-mono text-[11px] text-stone-700">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-gold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 04 // WEB DESIGN VS WEBSITE DEVELOPMENT */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              04 // CLARITY OF ROLES
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Web Design vs. Website Development
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Understanding how creative design and technical engineering work together to create an exceptional digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {designVsDevelopment.map((col, idx) => (
            <div
              key={idx}
              className={`p-8 md:p-12 rounded-3xl border ${col.color} space-y-8`}
            >
              <div className="space-y-2">
                <span className="font-mono text-xs text-gold tracking-widest uppercase font-semibold block">
                  // {col.category}
                </span>
                <h3 className="editorial-title text-2xl md:text-3xl font-light text-charcoal">
                  {col.focus}
                </h3>
              </div>

              <div className="space-y-4 pt-4 border-t border-stone-200">
                {col.points.map((pt, pIdx) => (
                  <div key={pIdx} className="space-y-1">
                    <div className="flex items-center gap-2 text-charcoal font-medium text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      <span>{pt.label}</span>
                    </div>
                    <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                      {pt.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05 // TYPES OF WEBSITES WE DEVELOP */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              05 // DIGITAL FORMATS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Types of Websites We Develop
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Custom frontend engineering tailored to specific business objectives, user workflows, and industry demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteTypes.map((type) => (
            <div
              key={type.num}
              className="glass-card p-8 rounded-3xl border border-stone-200 shadow-luxury space-y-4 hover:border-gold/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-gold font-semibold">// {type.num}</span>
                <span className="w-2 h-2 rounded-full bg-stone-300" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">
                {type.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}

          {/* Callout Card */}
          <div className="glass-card p-8 rounded-3xl border border-gold/30 bg-gold/5 shadow-luxury flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold font-semibold tracking-widest uppercase block">
                // COMPONENT-DRIVEN CODE
              </span>
              <h3 className="editorial-title text-xl md:text-2xl font-medium text-charcoal">
                No Fragile Page Builders
              </h3>
              <p className="font-sans text-xs md:text-sm text-stone-700 font-light leading-relaxed">
                We develop websites with clean, hand-crafted codebases. Your team receives an organized, maintainable site that does not break with plugin updates.
              </p>
            </div>
            <Link
              href="/start-a-project"
              className="inline-flex items-center gap-2 font-mono text-xs text-charcoal hover:text-gold tracking-widest font-semibold pt-2"
            >
              <span>DISCUSS YOUR DEVELOPMENT PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* 06 // DEVELOPMENT PRINCIPLES */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              06 // CODE PHILOSOPHY
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Our Website Development Principles
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Standards that ensure every website we code delivers long-term reliability, seamless usability, and maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {developmentPrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-stone-200 shadow-luxury space-y-4 hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="editorial-title text-lg font-medium text-charcoal">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-stone-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 07 // WHO NOVEXA BUILDS FOR */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              07 // CLIENT PARTNERSHIPS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Who We Build Websites For
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            We collaborate with ambitious organizations seeking dependable web development that turns visitors into business opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoItsFor.map((item) => (
            <div
              key={item.num}
              className="glass-card p-8 rounded-3xl border border-stone-200 shadow-luxury space-y-4"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-gold font-semibold">{item.num} //</span>
                <span className="px-2.5 py-1 rounded-full bg-stone-200/70 text-charcoal text-[10px] tracking-wider">
                  {item.tag}
                </span>
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">
                {item.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 08 // DEVELOPMENT PROCESS */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              08 // OUR METHODOLOGY
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Our Website Development Process
            </h2>
          </div>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 font-mono text-xs text-gold tracking-widest hover:underline"
          >
            <span>VIEW FULL AGENCY METHODOLOGY</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {developmentProcess.map((step) => (
            <div
              key={step.step}
              className="glass-card p-8 rounded-3xl border border-stone-200 shadow-luxury space-y-4"
            >
              <span className="font-mono text-2xl text-gold font-light block">
                {step.step}
              </span>
              <h3 className="editorial-title text-xl font-medium text-charcoal">
                {step.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 09 // SELECTED DIGITAL / WEBSITE WORK */}
      <section id="selected-work" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              09 // PROVEN WORK
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Selected Digital & Website Projects
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Real client case studies demonstrating our focus on interactive performance, component precision, and responsive execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioShowcase.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              aspectRatio="aspect-[4/3]"
            />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/work"
            data-cursor="ALL WORK"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-stone-400 text-charcoal font-mono text-xs tracking-widest font-semibold hover:border-gold hover:text-gold transition-all duration-300"
          >
            <span>VIEW ALL CASE STUDIES</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 10 // WHY WORK WITH NOVEXA */}
      <section className="space-y-12">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              10 // THE NOVEXA DIFFERENCE
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Why Choose NOVEXA for Website Development
            </h2>
            <p className="font-sans text-base text-stone-700 font-light leading-relaxed">
              Based in Vadodara, Gujarat, NOVEXA builds custom web platforms for ambitious companies across Gujarat (Vadodara, Ahmedabad, Surat), throughout India, and internationally. We unite creative vision with engineering discipline so your website performs reliably and delivers business results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-stone-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Design & Code in Harmony</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                No finger-pointing between designers and coders. We build what was designed with exact fidelity to approved typography and spacing.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Clean, Modular Architecture</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Engineered with organized component trees and clear styling tokens, making long-term site updates intuitive and reliable.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Responsive-First Execution</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Mobile-first layout development guarantees navigation, forms, and typography work comfortably on smartphones and tablets.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Direct Founder Collaboration</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Work directly with our technology leadership throughout development, ensuring direct communication and meticulous quality control.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 font-mono text-xs text-stone-600">
            <Link href="/about" className="text-gold hover:underline flex items-center gap-1">
              <span>Learn more about our agency & founders</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/web-design" className="text-gold hover:underline flex items-center gap-1">
              <span>Explore web design services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/services" className="text-gold hover:underline flex items-center gap-1">
              <span>Explore all agency capabilities</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/branding" className="text-gold hover:underline flex items-center gap-1">
              <span>Explore branding services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11 // FREQUENTLY ASKED QUESTIONS */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              11 // CLARITY & DETAILS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Answers to common questions about our website development process, technical stack, responsiveness, and maintenance.
          </p>
        </div>

        <WebsiteDevelopmentFAQ items={faqItems} />
      </section>

      {/* 12 // FINAL CALL TO ACTION */}
      <section>
        <div className="bg-charcoal text-ivory rounded-3xl p-10 md:p-20 bg-grain border border-stone-800 text-center space-y-8 relative overflow-hidden shadow-luxury">
          <span className="font-mono text-xs text-gold tracking-widest uppercase">
            12 // BUILD YOUR DIGITAL FOUNDATION
          </span>

          <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Build a Fast, Modern Website for Your{" "}
            <span className="italic text-gold">Business?</span>
          </h2>

          <p className="font-sans text-sm md:text-base text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Whether developing a new brand flagship or upgrading an outdated site with clean, modern code, let&apos;s build a website that delivers commercial impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/start-a-project"
              data-cursor="START"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gold text-charcoal font-mono text-xs tracking-widest font-semibold hover:bg-ivory hover:text-charcoal transition-all duration-300 shadow-glass-gold"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              data-cursor="WORK"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-stone-700 text-stone-300 font-mono text-xs tracking-widest font-semibold hover:border-ivory hover:text-ivory transition-all duration-300"
            >
              <span>EXPLORE ALL WORK</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
