import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Layout,
  Smartphone,
  Laptop,
  Sliders,
  Code2,
  ShieldCheck,
  TrendingUp,
  Award,
  Compass,
  Eye,
  Zap,
  Grid,
  Cpu,
  MousePointer,
  FileCode2,
  Boxes,
  Maximize2,
  Search,
  Workflow,
} from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/lib/data/projects";
import { UiUxDesignFAQ } from "./UiUxDesignFAQ";

export const metadata: Metadata = {
  title: "UI UX Design Agency in India | Product & Interface Design | NOVEXA",
  description:
    "NOVEXA is a UI/UX design agency in India crafting intuitive web and mobile app interfaces, design systems and interactive prototypes for growing businesses.",
  alternates: {
    canonical: "https://novexaagency.com/ui-ux-design/",
  },
  openGraph: {
    title: "UI UX Design Agency in India | Product & Interface Design | NOVEXA",
    description:
      "NOVEXA is a UI/UX design agency in India crafting intuitive web and mobile app interfaces, design systems and interactive prototypes for growing businesses.",
    url: "https://novexaagency.com/ui-ux-design/",
    siteName: "NOVEXA",
    images: [
      {
        url: "/assets/work/ui-ux/ui design .jpg",
        width: 1200,
        height: 630,
        alt: "NOVEXA UI/UX Design Agency — Web & Mobile Interface Design Systems",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI UX Design Agency in India | Product & Interface Design | NOVEXA",
    description:
      "NOVEXA is a UI/UX design agency in India crafting intuitive web and mobile app interfaces, design systems and interactive prototypes for growing businesses.",
    images: ["/assets/work/ui-ux/ui design .jpg"],
  },
};

const uiUxServices = [
  {
    icon: Laptop,
    num: "01",
    title: "Web App UI Design",
    description:
      "Complex web application interfaces, responsive portals, and data-driven software layouts engineered with visual elegance, clear component hierarchy, and seamless desktop-to-tablet responsiveness.",
    deliverables: ["Web App UI Layouts", "Responsive Breakpoints", "Interactive State Specs", "Component Wireframes"],
  },
  {
    icon: Smartphone,
    num: "02",
    title: "Mobile App UI/UX Design",
    description:
      "Touch-first iOS and Android mobile interfaces engineered for thumb-zone ergonomics, fluid gesture interactions, micro-animations, and comfortable mobile typography that drive daily active retention.",
    deliverables: ["iOS & Android UI Kits", "Mobile Navigation Flows", "Touch-Optimized Controls", "Micro-Interaction Specs"],
  },
  {
    icon: Layout,
    num: "03",
    title: "SaaS & Dashboard Interfaces",
    description:
      "Clean, readable administrative portals, metrics dashboards, and B2B SaaS workflows that transform dense numerical data and multi-step actions into intuitive visual controls.",
    deliverables: ["Analytics Dashboard Views", "Data Table Systems", "Filter & Search Architecture", "Modal & Drawer Specs"],
  },
  {
    icon: MousePointer,
    num: "04",
    title: "Interactive Prototyping in Figma",
    description:
      "High-fidelity clickable Figma prototypes that simulate realistic user journeys, page transitions, and micro-interactions for rapid stakeholder validation and user testing before engineering starts.",
    deliverables: ["Clickable Figma Prototypes", "Smart-Animate Transitions", "User Testing Previews", "Developer Inspection Flows"],
  },
  {
    icon: Boxes,
    num: "05",
    title: "Design Systems & Design Tokens",
    description:
      "Comprehensive, centralized Figma component libraries with strict design tokens for color, typography, spacing, elevation, and component variants that keep digital products consistent as they scale.",
    deliverables: ["Figma Component Library", "Design Token Variables", "State Variants (Hover/Active)", "Design Documentation"],
  },
  {
    icon: Workflow,
    num: "06",
    title: "UX Research & Wireframing",
    description:
      "User persona modeling, user journey mapping, and low-to-mid fidelity wireframes that stress-test product logic, information architecture, and core task completion pathways early.",
    deliverables: ["User Journey Maps", "Information Architecture", "Low-Fidelity Wireframes", "UX Usability Blueprints"],
  },
  {
    icon: Sliders,
    num: "07",
    title: "E-Commerce Usability",
    description:
      "Frictionless product discovery grids, faceted filtering systems, interactive product detail pages, and distraction-free checkout flows engineered to reduce cart abandonment and increase conversion rates.",
    deliverables: ["Product Detail UI", "Frictionless Cart Drawers", "Checkout Flow Optimization", "Mobile Storefront UX"],
  },
  {
    icon: Search,
    num: "08",
    title: "UX Audits & Usability Reviews",
    description:
      "In-depth heuristic evaluations of existing digital products to identify usability friction points, cognitive bottlenecks, drop-off barriers, and accessibility improvements with an actionable design roadmap.",
    deliverables: ["Heuristic UX Audit Report", "Friction Point Heatmaps", "Usability Recommendations", "UI Refinement Roadmap"],
  },
];

const designSystemPillars = [
  {
    num: "01",
    title: "Figma Component Libraries",
    description:
      "Atomic design architecture with modular master components, auto-layout constraints, and comprehensive variant matrices for buttons, inputs, modals, cards, and navigation bars.",
  },
  {
    num: "02",
    title: "Design Tokens & Variables",
    description:
      "Centralized design variables for primary and accent color palettes, dark and light theme tokens, typographic scales, spacing units, border radii, and elevation shadows.",
  },
  {
    num: "03",
    title: "Typography & Visual Hierarchy",
    description:
      "Editorial display headers paired with highly legible modern sans-serifs, calibrated line-height formulas, and optical font weights for effortless readability across desktop and mobile screens.",
  },
  {
    num: "04",
    title: "Component States & Micro-Interactions",
    description:
      "Complete visual coverage of default, hover, active, focused, disabled, loading, and error states so engineers never have to guess interactive edge cases.",
  },
  {
    num: "05",
    title: "Developer Handoff Specifications",
    description:
      "Clean auto-layout structures, production-ready vector SVG assets, pixel-accurate redline spacing specs, and interactive Figma links ready for seamless frontend development.",
  },
];

const digitalPlatforms = [
  {
    num: "01",
    tag: "BROWSER PLATFORMS",
    title: "Web Applications & Portals",
    description:
      "Custom web platforms, customer portals, cloud software, and productivity suites that require responsive multi-column layouts and deep functional hierarchy.",
  },
  {
    num: "02",
    tag: "NATIVE & HYBRID",
    title: "iOS & Android Mobile Apps",
    description:
      "Touch-first mobile applications engineered with platform-native conventions, bottom sheets, swipe gestures, and thumb-friendly interaction zones.",
  },
  {
    num: "03",
    tag: "B2B & ENTERPRISE",
    title: "SaaS Dashboards & Tools",
    description:
      "Analytical interfaces, administrative control panels, multi-tenant software tools, and data-heavy operational platforms designed for cognitive clarity.",
  },
  {
    num: "04",
    tag: "DIGITAL COMMERCE",
    title: "E-Commerce Storefronts",
    description:
      "High-conversion direct-to-consumer shopping interfaces, interactive product configurators, and streamlined mobile checkout pathways.",
  },
];

const whoWeDesignFor = [
  {
    num: "01",
    tag: "EARLY & SEED STAGE",
    title: "SaaS & Software Startups",
    description:
      "Founders turning innovative business logic and algorithms into intuitive, investment-ready digital platforms that drive immediate user adoption.",
  },
  {
    num: "02",
    tag: "GROWING TEAMS",
    title: "Scaling Digital Brands",
    description:
      "Growing companies upgrading from fragmented MVP interfaces to unified, professional design systems that compete with established category leaders.",
  },
  {
    num: "03",
    tag: "APP FOUNDERS",
    title: "Mobile-First Products",
    description:
      "Entrepreneurs building consumer apps, lifestyle platforms, and on-demand mobile experiences where effortless UX and retention are critical.",
  },
  {
    num: "04",
    tag: "MODERN ENTERPRISES",
    title: "Businesses Building Digital Platforms",
    description:
      "Established organizations modernizing internal workflow software, customer portals, and legacy tools into fast, elegant modern web interfaces.",
  },
];

const uiUxProcess = [
  {
    step: "01",
    title: "Discovery & Product Scope",
    description:
      "We unpack your business goals, target user personas, technical constraints, and competitive benchmarks to establish clear product objectives.",
  },
  {
    step: "02",
    title: "User Journeys & Architecture",
    description:
      "We map out core user flows, decision trees, and information architecture to ensure every task pathway is logical, concise, and frictionless.",
  },
  {
    step: "03",
    title: "Wireframing & Structural Logic",
    description:
      "We create low-to-mid fidelity wireframes to iterate on screen layouts, content priority, and functional features before investing in visual styling.",
  },
  {
    step: "04",
    title: "Design System Architecture",
    description:
      "We establish design tokens, color systems, typography hierarchies, and foundational component primitives within Figma for complete consistency.",
  },
  {
    step: "05",
    title: "High-Fidelity UI Design",
    description:
      "We apply refined visual aesthetics, modern typography, optical balance, and spatial elegance to craft stunning, production-ready screen layouts.",
  },
  {
    step: "06",
    title: "Interactive Prototyping",
    description:
      "We link screens into realistic, clickable Figma prototypes with smooth micro-interactions for stakeholder demonstration and user testing.",
  },
  {
    step: "07",
    title: "Developer Handoff & Specs",
    description:
      "We organize design files, document component states, export production assets, and provide clear technical specifications for your engineering team.",
  },
];

const faqItems = [
  {
    question: "What does a UI/UX design agency do?",
    answer:
      "A UI/UX design agency focuses on the usability, structure, and visual interface of digital products like web applications, mobile apps, and SaaS platforms. At NOVEXA, we handle the entire product design lifecycle—from user journey mapping and wireframing to high-fidelity Figma UI design, interactive prototyping, and design system creation—ensuring your product is both beautiful and effortless to use.",
  },
  {
    question: "What UI/UX services does NOVEXA provide?",
    answer:
      "Our UI/UX design capabilities include web application interface design, iOS and Android mobile app design, SaaS dashboard UI, interactive clickable prototyping in Figma, comprehensive design systems with reusable token libraries, UX research and wireframing, e-commerce checkout usability optimization, and heuristic UX audits of existing digital products.",
  },
  {
    question: "Does NOVEXA design mobile apps?",
    answer:
      "Yes. We design touch-optimized mobile interfaces for both iOS and Android applications. We adhere strictly to Apple Human Interface Guidelines and Google Material Design principles while infusing your brand's unique personality, thumb-zone ergonomics, fluid micro-interactions, and accessible typography.",
  },
  {
    question: "Does NOVEXA design web applications and SaaS dashboards?",
    answer:
      "Yes. Designing data-rich web applications, SaaS tools, and administrative dashboards is one of our primary specialties. We focus on organizing complex business workflows, multi-level navigation, data tables, filtering panels, and modal interactions into clean, distraction-free interfaces that minimize user cognitive load.",
  },
  {
    question: "Does NOVEXA use Figma for UI/UX design?",
    answer:
      "Yes. Figma is our primary collaborative design tool. We utilize advanced Figma capabilities including Auto-Layout, component variant matrices, token variables (for colors, spacing, and typography), interactive Smart-Animate prototypes, and organized page structures that make design review and testing seamless.",
  },
  {
    question: "Does NOVEXA provide developer handoff?",
    answer:
      "Yes. Smooth developer handoff is a hallmark of our process. Because our studio also builds custom web applications, we know exactly what engineers need. We provide fully organized Figma files with redline spacing annotations, component state variations (default, hover, pressed, disabled, error), export-ready SVG assets, and interactive prototype links.",
  },
  {
    question: "How long does a UI/UX design project take?",
    answer:
      "A typical UI/UX design engagement spans between 3 to 8 weeks, depending on the product's scope, number of unique screens, and interactive complexity. A focused mobile app MVP or SaaS dashboard usually takes 3 to 5 weeks, while a comprehensive multi-platform product with an exhaustive design system may take 6 to 8 weeks with regular milestone reviews.",
  },
];

export default function UiUxDesignServicePage() {
  // Verified real digital product & UI/UX case studies from projectsData
  const relevantSlugs = [
    "anaqah-luxury-ecommerce",
    "chronos-luxury-timepiece",
    "novexa-wordmark-system",
    "aura-cosmetics-campaign",
  ];
  const portfolioShowcase = projectsData.filter((p) =>
    relevantSlugs.includes(p.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "UI/UX Design Services",
    serviceType: "UI/UX Design Agency",
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
      "NOVEXA is a UI/UX design agency in India crafting intuitive web and mobile app interfaces, design systems and interactive prototypes for growing businesses.",
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
        name: "UI/UX Design",
        item: "https://novexaagency.com/ui-ux-design/",
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
              <span>01 // UI/UX DESIGN AGENCY</span>
            </div>

            <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-charcoal leading-[1.08]">
              UI/UX Design Agency for Digital Products That{" "}
              <span className="gold-gradient-text font-normal">Feel Intuitive</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-stone-700 max-w-2xl font-light leading-relaxed">
              NOVEXA is a UI/UX design agency in India crafting clear, intuitive digital product interfaces. As a product design agency and UI/UX design company, we combine user research, wireframing, Figma design systems, and interactive prototyping to build web and mobile app experiences that reduce cognitive friction and accelerate user engagement.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/start-a-project"
                data-cursor="START"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-charcoal text-ivory font-mono text-xs tracking-widest font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-luxury"
              >
                <span>START A UI/UX PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/web-design"
                data-cursor="EXPLORE"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card border border-stone-300 text-charcoal font-mono text-xs tracking-widest font-semibold hover:border-gold hover:text-gold transition-all duration-300"
              >
                <span>EXPLORE WEB DESIGN</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-8 border-t border-stone-200 flex flex-wrap gap-8 font-mono text-xs text-stone-500">
              <div>
                <span className="text-gold block font-semibold">CRAFT FOCUS</span>
                <span>PRODUCT UI × UX ARCHITECTURE × FIGMA SYSTEMS</span>
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
                src="/assets/work/ui-ux/ui design .jpg"
                alt="NOVEXA UI/UX Design Agency Portfolio — Mobile Application Interface & Component System"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-75" />

              <div className="absolute bottom-6 left-6 right-6 p-4 glass-nav rounded-2xl border border-ivory/30 flex items-center justify-between text-charcoal">
                <div>
                  <span className="font-mono text-[10px] text-gold tracking-widest uppercase block">
                    FEATURED MOBILE UI/UX
                  </span>
                  <span className="editorial-title text-base md:text-lg font-medium">
                    Mobile Product Interface System
                  </span>
                </div>
                <Link
                  href="/work/anaqah-luxury-ecommerce"
                  className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-charcoal hover:bg-ivory transition-colors"
                  aria-label="View UI/UX Case Study"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 // PRODUCT PHILOSOPHY: REDUCING FRICTION */}
      <section className="space-y-12">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              02 // PRODUCT PHILOSOPHY
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Intuitive Interfaces Eliminate Friction. Clear UX Drives{" "}
              <span className="italic">Product Adoption</span>.
            </h2>
            <p className="font-sans text-base md:text-lg text-stone-700 font-light leading-relaxed">
              A digital product shouldn&apos;t require an explanation. Great UI/UX design bridges human psychology and technology, transforming complex user workflows into effortless, delightful interactions that keep users engaged and coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-200">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">User Psychology & Journeys</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                Before designing screens, we analyze user intent and mental models to map intuitive task flows from onboarding to high-frequency actions.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Cognitive Ease & Hierarchy</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                We structure visual information so users immediately understand where they are, what data matters most, and what action to take next.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Systematic Design Tokens</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                We architect scalable component libraries and spatial grids so every interface element feels unified, familiar, and predictable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // UI/UX DESIGN SERVICES */}
      <section id="services-breakdown" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              03 // CORE CAPABILITIES
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              UI/UX Design Services
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            End-to-end interface and product design services grounded in user research, design token architecture, and Figma prototyping precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uiUxServices.map((service) => {
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

      {/* 04 // DESIGN SYSTEM & TOKEN ARCHITECTURE */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              04 // DESIGN SYSTEM ARCHITECTURE
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Built on Scalable Design Systems & Tokens
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            We don&apos;t create isolated screens. We architect scalable design systems that empower engineering teams to build with speed, consistency, and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designSystemPillars.map((pillar) => (
            <div
              key={pillar.num}
              className="glass-card p-8 rounded-3xl border border-stone-200 shadow-luxury space-y-4 hover:border-gold/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-gold font-semibold">// {pillar.num}</span>
                <span className="w-2 h-2 rounded-full bg-stone-300" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">
                {pillar.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}

          {/* Callout Card */}
          <div className="glass-card p-8 rounded-3xl border border-gold/30 bg-gold/5 shadow-luxury flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold font-semibold tracking-widest uppercase block">
                // ENGINEERING READINESS
              </span>
              <h3 className="editorial-title text-xl md:text-2xl font-medium text-charcoal">
                Design That Bridges Product & Engineering
              </h3>
              <p className="font-sans text-xs md:text-sm text-stone-700 font-light leading-relaxed">
                No guessing, no fragmented files. You receive production-ready Figma files with named layers, responsive auto-layout, and token variables ready for developers.
              </p>
            </div>
            <Link
              href="/start-a-project"
              className="inline-flex items-center gap-2 font-mono text-xs text-charcoal hover:text-gold tracking-widest font-semibold pt-2"
            >
              <span>INQUIRE ABOUT A DESIGN SYSTEM</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 // DIGITAL PLATFORMS */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              05 // PRODUCT ENVIRONMENTS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Digital Platforms & Product Types
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Tailored UI/UX architecture designed specifically for the unique ergonomic and technical requirements of modern digital environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalPlatforms.map((platform) => (
            <div
              key={platform.num}
              className="glass-card p-8 rounded-3xl border border-stone-200 shadow-luxury space-y-4"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-gold font-semibold">{platform.num} //</span>
                <span className="px-2.5 py-1 rounded-full bg-stone-200/70 text-charcoal text-[10px] tracking-wider">
                  {platform.tag}
                </span>
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">
                {platform.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 06 // WHO WE DESIGN FOR */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              06 // CLIENT PARTNERSHIPS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Who We Build Interfaces For
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            We partner with visionary founders and product teams who recognize that superior user experience is their ultimate competitive moat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoWeDesignFor.map((item) => (
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

      {/* 07 // 7-PHASE UI/UX PROCESS */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              07 // OUR METHODOLOGY
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Our 7-Phase UI/UX Design Process
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {uiUxProcess.map((step) => (
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

      {/* 08 // WHY CHOOSE NOVEXA */}
      <section className="space-y-12">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              08 // THE NOVEXA DIFFERENCE
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Why Choose NOVEXA as Your UI/UX Design Agency
            </h2>
            <p className="font-sans text-base text-stone-700 font-light leading-relaxed">
              Based in Vadodara, Gujarat, NOVEXA operates as a strategic UI/UX design agency partner for startups and digital businesses throughout Gujarat (Ahmedabad, Surat, Vadodara), across India, and worldwide. We believe world-class interface design requires rigorous user psychology, mathematical spacing, and obsessive aesthetic craft.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-stone-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Strategic Logic + Visual Craft</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                We don&apos;t just decorate screens. We optimize task completion pathways, reduce cognitive load, and align interfaces with core commercial metrics.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Figma Precision & Autolayout</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Every screen is constructed with disciplined auto-layout structures, responsive resizing constraints, and organized design token variables.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Developer-Friendly Handoff</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Because our studio also engineers production web applications, our UI/UX designs are technically feasible, cleanly structured, and effortless to code.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Direct Founder Collaboration</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                You work directly with lead designers from our Vadodara studio, ensuring rapid feedback cycles, transparent communication, and zero bloated agency friction.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 font-mono text-xs text-stone-600">
            <Link href="/web-design" className="text-gold hover:underline flex items-center gap-1">
              <span>Explore website design services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/website-development" className="text-gold hover:underline flex items-center gap-1">
              <span>Explore website development capabilities</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/branding" className="text-gold hover:underline flex items-center gap-1">
              <span>Explore brand identity design</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/graphic-design" className="text-gold hover:underline flex items-center gap-1">
              <span>Explore graphic design</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 09 // SELECTED UI/UX WORK */}
      <section id="selected-work" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              09 // PROVEN WORK
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Selected UI/UX & Product Design Work
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Real digital product and interface projects demonstrating our commitment to user clarity, interaction elegance, and scalable design systems.
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

      {/* 10 // FREQUENTLY ASKED QUESTIONS */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              10 // CLARITY & DETAILS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Clear, transparent answers about our UI/UX design workflow, Figma deliverables, mobile app design, and collaboration model.
          </p>
        </div>

        <UiUxDesignFAQ items={faqItems} />
      </section>

      {/* 11 // FINAL CALL TO ACTION */}
      <section>
        <div className="bg-charcoal text-ivory rounded-3xl p-10 md:p-20 bg-grain border border-stone-800 text-center space-y-8 relative overflow-hidden shadow-luxury">
          <span className="font-mono text-xs text-gold tracking-widest uppercase">
            11 // BUILD YOUR DIGITAL PRODUCT
          </span>

          <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Build a Digital Product People{" "}
            <span className="italic text-gold">Love Using?</span>
          </h2>

          <p className="font-sans text-sm md:text-base text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Whether designing a new mobile app, SaaS platform, or modernizing an existing digital interface, let&apos;s create a product that sets your brand apart.
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
