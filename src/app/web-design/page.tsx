import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Layout,
  Smartphone,
  MousePointerClick,
  Building2,
  Sparkles,
  ShoppingBag,
  Figma,
  Component,
  ShieldCheck,
  TrendingUp,
  Award,
  Zap,
  Eye,
  Layers,
} from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/lib/data/projects";
import { WebDesignFAQ } from "./WebDesignFAQ";

export const metadata: Metadata = {
  title: "Web Design Agency in India | NOVEXA Agency",
  description:
    "NOVEXA is a web design agency creating modern, clear and conversion-focused websites for growing businesses, brands and digital experiences.",
  alternates: {
    canonical: "https://novexaagency.com/web-design/",
  },
  openGraph: {
    title: "Web Design Agency in India | NOVEXA Agency",
    description:
      "NOVEXA is a web design agency creating modern, clear and conversion-focused websites for growing businesses, brands and digital experiences.",
    url: "https://novexaagency.com/web-design/",
    siteName: "NOVEXA",
    images: [
      {
        url: "/assets/work/ui-ux/anaqah page.png",
        width: 1200,
        height: 630,
        alt: "NOVEXA Web Design Agency — Modern Digital Experiences & Website UI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Agency in India | NOVEXA Agency",
    description:
      "NOVEXA is a web design agency creating modern, clear and conversion-focused websites for growing businesses, brands and digital experiences.",
    images: ["/assets/work/ui-ux/anaqah page.png"],
  },
};

const webDesignServices = [
  {
    icon: Layout,
    num: "01",
    title: "Website UI Design",
    description:
      "Bespoke, art-directed user interfaces tailored to your brand identity, delivering visual elegance and intuitive navigation across every desktop and mobile screen.",
    deliverables: ["Custom Desktop UI Screens", "Mobile Breakpoint Layouts", "Component States & Hover Specs", "Figma Master Design Files"],
  },
  {
    icon: Smartphone,
    num: "02",
    title: "Responsive Web Design",
    description:
      "Adaptive design layouts engineered to look flawless across all screen sizes—from high-resolution ultra-wide monitors down to compact smartphone displays.",
    deliverables: ["Fluid Multi-Device Layouts", "Touch-Friendly Mobile UX", "Adaptive Typography Rules", "Responsive Grid Specifications"],
  },
  {
    icon: MousePointerClick,
    num: "03",
    title: "Landing Page Design",
    description:
      "High-impact marketing and campaign landing pages designed with ruthless message hierarchy, persuasive narrative flow, and clear conversion funnels.",
    deliverables: ["Campaign Landing Pages", "Lead Capture Wireframes", "Offer Presentation Modules", "A/B Test Visual Variations"],
  },
  {
    icon: Building2,
    num: "04",
    title: "Corporate Website Design",
    description:
      "Authoritative digital flagships for enterprises and consultancies that articulate complex offerings, establish industry leadership, and build stakeholder trust.",
    deliverables: ["Corporate Information Architecture", "Capabilities & Team Pages", "Investor Relations Modules", "Trust & Case Study Layouts"],
  },
  {
    icon: Sparkles,
    num: "05",
    title: "Brand-Led Website Design",
    description:
      "Immersive digital brand worlds that translate physical identity systems, editorial typography, and signature motifs into unforgettable interactive web experiences.",
    deliverables: ["Editorial Web Storytelling", "Custom Graphic Elements", "Micro-Interaction Directions", "Brand Palette Digital Tokens"],
  },
  {
    icon: ShoppingBag,
    num: "06",
    title: "E-Commerce Website Design",
    description:
      "Conversion-focused storefront interfaces designed to elevate product perception, simplify discovery, and create seamless, frictionless checkout experiences.",
    deliverables: ["Product Detail Page Layouts", "Collection & Filter Systems", "Mini-Cart & Checkout UX", "Mobile Shopping Interfaces"],
  },
  {
    icon: Figma,
    num: "07",
    title: "UI/UX Design & Prototyping",
    description:
      "Comprehensive wireframing, user journey mapping, and interactive clickable prototypes that validate user experience and flows before development begins.",
    deliverables: ["Low & High-Fidelity Wireframes", "Interactive Clickable Prototypes", "User Flow Diagrams", "Usability Review Checkpoints"],
  },
  {
    icon: Component,
    num: "08",
    title: "Website Design Systems",
    description:
      "Systematic design token libraries, reusable UI component matrices, and exhaustive style documentation ensuring seamless collaboration with development teams.",
    deliverables: ["Figma Component Libraries", "Typography & Color Tokens", "Form & Button States", "Developer Handoff Guide"],
  },
];

const websiteTypes = [
  {
    num: "01",
    title: "Business & Corporate Websites",
    description:
      "Professional web platforms that showcase company capabilities, establish credibility, and communicate clearly with potential clients, partners, and enterprise buyers.",
  },
  {
    num: "02",
    title: "Brand Flagship Websites",
    description:
      "Aesthetic, editorial-driven digital showcases designed to immerse visitors in brand heritage, artistic vision, and premium positioning.",
  },
  {
    num: "03",
    title: "Portfolio & Showcase Websites",
    description:
      "Minimalist, image-first digital galleries crafted for architecture firms, design studios, and creators to display high-craft case studies with elegance.",
  },
  {
    num: "04",
    title: "High-Conversion Landing Pages",
    description:
      "Focused single-objective pages structured to capture leads, launch new products, or maximize return on ad spend from paid marketing campaigns.",
  },
  {
    num: "05",
    title: "E-Commerce Web Storefronts",
    description:
      "Engaging retail experiences that combine luxurious visual presentation with intuitive navigation, faceted search, and conversion-optimized purchase flows.",
  },
  {
    num: "06",
    title: "Professional Service Websites",
    description:
      "Clear, trust-inducing websites for agencies, legal practices, medical specialists, and consultants designed to generate qualified business inquiries.",
  },
  {
    num: "07",
    title: "Startup & SaaS Marketing Websites",
    description:
      "Dynamic product marketing sites built to explain complex software propositions simply, demonstrate features, and drive product sign-ups.",
  },
];

const goodWebsitePrinciples = [
  {
    icon: Eye,
    title: "Clear Messaging",
    description: "Visitors should understand exactly what you do, who you serve, and why it matters within seconds of landing on your page.",
  },
  {
    icon: Layout,
    title: "Strong Visual Hierarchy",
    description: "Deliberate typographic scale and spatial breathing room that guide the visitor's eye smoothly from headline to core value to action.",
  },
  {
    icon: MousePointerClick,
    title: "Intuitive Navigation",
    description: "Frictionless site structure and predictable navigation patterns that let users find what they need without cognitive confusion.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsiveness",
    description: "Flawless performance across all viewport sizes, ensuring typography remains legible and touch targets stay comfortable on mobile.",
  },
  {
    icon: Zap,
    title: "Fast & Lightweight Design",
    description: "Clean layout architecture and optimized visual assets designed to load rapidly and maintain a fluid 60fps scrolling experience.",
  },
  {
    icon: ShieldCheck,
    title: "Accessible Design (WCAG)",
    description: "High-contrast typography, semantic structure, and accessible color pairings ensuring comfortable readability for all visitors.",
  },
  {
    icon: Sparkles,
    title: "Consistent Branding",
    description: "Unwavering consistency across typography, color palettes, photography styles, and icons that builds lasting brand recognition.",
  },
  {
    icon: TrendingUp,
    title: "Clear Calls to Action",
    description: "Strategic, unmistakable action triggers placed at natural decision points throughout the user journey to maximize conversions.",
  },
];

const whoItsFor = [
  {
    num: "01",
    tag: "GROWING BUSINESSES",
    title: "Scaling Commercial Brands",
    description:
      "Companies that need to graduate from amateur or template sites to a bespoke digital presence that matches their operational excellence.",
  },
  {
    num: "02",
    tag: "STARTUPS & TECH",
    title: "High-Growth Ventures",
    description:
      "Founders preparing for market launch or funding rounds who need an authoritative digital showcase that earns instant investor and customer confidence.",
  },
  {
    num: "03",
    tag: "REGIONAL LEADERS",
    title: "Gujarat & Pan-India Enterprises",
    description:
      "Established businesses across Vadodara, Ahmedabad, Surat, and nationwide looking to elevate regional dominance into recognized digital leadership.",
  },
  {
    num: "04",
    tag: "SERVICE FIRMS",
    title: "Consultancies & Agencies",
    description:
      "Professional service providers seeking high-caliber editorial layouts that convey expertise, command premium fees, and attract qualified leads.",
  },
  {
    num: "05",
    tag: "D2C & PRODUCT",
    title: "Direct-to-Consumer Brands",
    description:
      "Lifestyle and consumer brands requiring sensory digital storefronts with compelling product storytelling and frictionless browsing.",
  },
  {
    num: "06",
    tag: "WEBSITE UPGRADES",
    title: "Outdated Site Redesigns",
    description:
      "Businesses saddled with slow, clunky, or obsolete websites seeking a modern, mobile-optimized digital overhaul built for current user expectations.",
  },
];

const webDesignProcess = [
  {
    step: "01",
    title: "Discovery & Briefing",
    description:
      "We unpack your business model, customer segments, competitive landscape, and primary conversion objectives to define clear project targets.",
  },
  {
    step: "02",
    title: "Strategy & Architecture",
    description:
      "We outline the sitemap, content hierarchy, and user journey flows to guarantee effortless navigation and purposeful commercial pathways.",
  },
  {
    step: "03",
    title: "Wireframing & UX",
    description:
      "We design low-fidelity structural blueprints to test layout density, content balance, and call-to-action placement before styling.",
  },
  {
    step: "04",
    title: "Visual Direction & Moodboards",
    description:
      "We establish the artistic direction, typographic tone, color tokens, and spatial rhythm tailored specifically to your brand positioning.",
  },
  {
    step: "05",
    title: "High-Fidelity UI Design",
    description:
      "We craft pixel-precise desktop, tablet, and mobile interface screens in Figma, refining compositions, hover states, and micro-interactions.",
  },
  {
    step: "06",
    title: "Refinement & Prototyping",
    description:
      "We build interactive clickable prototypes for team review, stress-testing usability and making collaborative refinements.",
  },
  {
    step: "07",
    title: "Developer Handoff & Specs",
    description:
      "We deliver organized Figma design systems, exported SVG assets, design tokens, and clear specifications for seamless engineering.",
  },
];

const faqItems = [
  {
    question: "What does a web design agency do?",
    answer:
      "A web design agency plans, conceptualizes, and crafts the visual appearance, user experience, and structural layout of websites. This includes wireframing, information architecture, visual interface design (UI), user experience optimization (UX), responsive layout engineering across mobile and desktop, typography hierarchy, and interactive design systems. The objective is to produce a website that looks stunning, communicates clearly, and converts visitors into customers.",
  },
  {
    question: "What is included in a website design project with NOVEXA?",
    answer:
      "A standard website design engagement with NOVEXA includes discovery research, sitemap and information architecture planning, wireframes for key pages, bespoke desktop and mobile high-fidelity UI design in Figma, clickable prototypes, complete design system tokens (typography, color palettes, component states), and production-ready asset handoff packages for frontend developers.",
  },
  {
    question: "Does NOVEXA design fully responsive websites for mobile and tablet?",
    answer:
      "Yes, absolutely. Every website we design is conceived with responsive-first principles. We design dedicated layouts for mobile, tablet, laptop, and large desktop viewports to ensure navigation stays intuitive, typography remains perfectly legible, and touch targets are easy to tap on all handheld devices.",
  },
  {
    question: "What is the difference between web design and web development?",
    answer:
      "Web design focuses on the visual aesthetics, layout, usability, and user interface (how the site looks and feels to visitors). Web development is the software engineering process that turns those visual designs into working, interactive code using technologies like Next.js, React, HTML, CSS, and JavaScript. At NOVEXA, our designers understand modern frontend architecture deeply, ensuring our designs are completely viable and optimized for development.",
  },
  {
    question: "Can NOVEXA redesign an existing outdated website?",
    answer:
      "Yes. A significant portion of our work involves redesigning legacy websites that have become slow, cluttered, or out of step with current brand standards. We audit your existing site's UX, preserve valuable content, and reconstruct the visual interface into a modern, mobile-friendly digital experience that elevates your market authority.",
  },
  {
    question: "Can you design an e-commerce website?",
    answer:
      "Yes. We design high-end e-commerce interfaces that merge editorial brand storytelling with seamless shopping utility. This includes product grid layouts, interactive product detail pages, visual scent or feature selectors, streamlined cart flyouts, and distraction-free checkout flows designed to minimize cart abandonment.",
  },
  {
    question: "How does a website design project work from start to finish?",
    answer:
      "We guide you through a structured 7-phase methodology: Discovery & Briefing → Strategy & Information Architecture → Wireframes → Visual Direction → High-Fidelity UI Design → Interactive Prototyping & Refinement → Developer Handoff. We hold regular review milestones at each phase so you have complete visibility and input throughout the creative process.",
  },
];

export default function WebDesignServicePage() {
  // Verified real digital/web projects from projectsData
  const relevantSlugs = [
    "anaqah-luxury-ecommerce",
    "chronos-luxury-timepiece",
    "nirvaan-logo-mark",
    "aura-cosmetics-campaign",
  ];
  const portfolioShowcase = projectsData.filter((p) =>
    relevantSlugs.includes(p.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design Services",
    serviceType: "Web Design Agency",
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
      "NOVEXA is a web design agency creating modern, clear and conversion-focused websites for growing businesses, brands and digital experiences.",
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
        name: "Web Design",
        item: "https://novexaagency.com/web-design/",
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
              <span>01 // WEB DESIGN AGENCY</span>
            </div>

            <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-charcoal leading-[1.08]">
              Web Design Agency for{" "}
              <span className="gold-gradient-text font-normal">Modern Digital</span> Experiences
            </h1>

            <p className="font-sans text-base md:text-lg text-stone-700 max-w-2xl font-light leading-relaxed">
              NOVEXA is a web design agency in India creating modern, clear, and conversion-focused websites. We craft digital flagships centered around brand perception, intuitive usability, seamless responsiveness, and memorable visual experiences that turn casual visitors into loyal clients.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/start-a-project"
                data-cursor="START"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-charcoal text-ivory font-mono text-xs tracking-widest font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-luxury"
              >
                <span>START A WEB DESIGN PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                data-cursor="EXPLORE"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card border border-stone-300 text-charcoal font-mono text-xs tracking-widest font-semibold hover:border-gold hover:text-gold transition-all duration-300"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-8 border-t border-stone-200 flex flex-wrap gap-8 font-mono text-xs text-stone-500">
              <div>
                <span className="text-gold block font-semibold">CRAFT FOCUS</span>
                <span>UI/UX × RESPONSIVE SYSTEMS × INTERACTION</span>
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
                src="/assets/work/ui-ux/anaqah page.png"
                alt="NOVEXA Web Design Agency Portfolio — Anaqah Luxury E-Commerce Web Design"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-75" />

              <div className="absolute bottom-6 left-6 right-6 p-4 glass-nav rounded-2xl border border-ivory/30 flex items-center justify-between text-charcoal">
                <div>
                  <span className="font-mono text-[10px] text-gold tracking-widest uppercase block">
                    FEATURED WEB DESIGN
                  </span>
                  <span className="editorial-title text-base md:text-lg font-medium">
                    Anaqah Luxury Storefront
                  </span>
                </div>
                <Link
                  href="/work/anaqah-luxury-ecommerce"
                  className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-charcoal hover:bg-ivory transition-colors"
                  aria-label="View Anaqah Case Study"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 // WHAT WEB DESIGN MEANS */}
      <section className="space-y-12">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              02 // STRATEGIC VALUE
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Effective Web Design Is the Intersection of <span className="italic">Brand, Usability,</span> and Conversion.
            </h2>
            <p className="font-sans text-base md:text-lg text-stone-700 font-light leading-relaxed">
              A website is your highest-leverage digital touchpoint. Great website design is not merely decoration—it is the calculated balance of visual hierarchy, intuitive user experience, legible typography, responsive layouts, brand consistency, and accessible clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-200">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Visual Hierarchy & UX</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                We organize information with intentional spacing and typographic scales so users intuitively understand what matters most without cognitive fatigue.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Responsive Architecture</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                With mobile traffic dominating the digital landscape, our responsive layouts guarantee seamless legibility and smooth navigation across any device.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Conversion Clarity</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                Every layout is structured to guide visitors toward decisive action, combining compelling value propositions with unmistakable calls to action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // WEB DESIGN SERVICES */}
      <section id="services-breakdown" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              03 // CORE CAPABILITIES
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Web Design Services
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Comprehensive creative web design agency solutions covering digital interfaces, responsive layouts, and interactive design systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {webDesignServices.map((service) => {
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

      {/* 04 // WEBSITE DESIGN TYPES */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              04 // DIGITAL FORMATS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Website Design Types We Specialize In
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Tailored digital interfaces crafted for specific commercial use cases, user journeys, and industry requirements.
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
                // CUSTOM EXPERIENCES
              </span>
              <h3 className="editorial-title text-xl md:text-2xl font-medium text-charcoal">
                Tailored to Your Strategic Goals
              </h3>
              <p className="font-sans text-xs md:text-sm text-stone-700 font-light leading-relaxed">
                We never use off-the-shelf cookie-cutter templates. Every website layout is mapped from a blank canvas to give your business a distinctive commercial advantage.
              </p>
            </div>
            <Link
              href="/start-a-project"
              className="inline-flex items-center gap-2 font-mono text-xs text-charcoal hover:text-gold tracking-widest font-semibold pt-2"
            >
              <span>INQUIRE ABOUT A WEBSITE PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 // WHAT MAKES A GOOD WEBSITE */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              05 // DESIGN PRINCIPLES
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              What Makes a Truly Exceptional Website
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Core tenets of modern web design that separate world-class digital flagships from generic online brochures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goodWebsitePrinciples.map((item, idx) => {
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

      {/* 06 // WHO NOVEXA HELPS */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              06 // CLIENT PARTNERSHIPS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Who We Design Websites For
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            We partner with founders and business leaders who understand that their website is their most important commercial asset.
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

      {/* 07 // WEB DESIGN PROCESS */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              07 // OUR METHODOLOGY
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Our Web Design Process
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
          {webDesignProcess.map((step) => (
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

      {/* 08 // SELECTED WEB / DIGITAL WORK */}
      <section id="selected-work" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              08 // PROVEN WORK
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Selected Web & Digital Work
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Real client projects demonstrating our dedication to editorial elegance, intuitive interface architecture, and high brand equity.
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

      {/* 09 // WHY WORK WITH NOVEXA */}
      <section className="space-y-12">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              09 // THE NOVEXA DIFFERENCE
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Why Choose NOVEXA as Your Web Design Company
            </h2>
            <p className="font-sans text-base text-stone-700 font-light leading-relaxed">
              Headquartered in Vadodara, Gujarat, NOVEXA collaborates with forward-thinking businesses across Gujarat (Vadodara, Ahmedabad, Surat), throughout India, and internationally. We combine artistic sensitivity with technical precision to deliver websites that elevate brand perception and deliver commercial results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-stone-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Design Before Decoration</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Every visual element serves a purpose. We organize information logically to solve real business challenges, not merely follow fleeting trends.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Brand & Web Together</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                We ensure your website seamlessly reflects your brand identity, bringing typography, palettes, and tone of voice into complete digital alignment.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Clarity Over Complexity</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                No cluttered widgets or confusing navigation. We design streamlined digital journeys that make it effortless for users to engage and convert.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Responsive-First Thinking</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Engineered from the ground up for mobile screens, ensuring your website delivers exceptional speed, legibility, and usability on any device.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 font-mono text-xs text-stone-600">
            <Link href="/about" className="text-gold hover:underline flex items-center gap-1">
              <span>Learn more about our agency & founders</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/services" className="text-gold hover:underline flex items-center gap-1">
              <span>Explore full agency services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/branding" className="text-gold hover:underline flex items-center gap-1">
              <span>Explore branding services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/graphic-design" className="text-gold hover:underline flex items-center gap-1">
              <span>Explore graphic design services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
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
            Answers to common questions about our website design services, responsive workflows, deliverables, and engagement process.
          </p>
        </div>

        <WebDesignFAQ items={faqItems} />
      </section>

      {/* 11 // FINAL CALL TO ACTION */}
      <section>
        <div className="bg-charcoal text-ivory rounded-3xl p-10 md:p-20 bg-grain border border-stone-800 text-center space-y-8 relative overflow-hidden shadow-luxury">
          <span className="font-mono text-xs text-gold tracking-widest uppercase">
            11 // LAUNCH YOUR DIGITAL FLAGSHIP
          </span>

          <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Build a Website That Drives{" "}
            <span className="italic text-gold">Real Growth?</span>
          </h2>

          <p className="font-sans text-sm md:text-base text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Whether launching a new company or transforming an outdated online presence into an authoritative digital flagship, let&apos;s build an experience your visitors will remember.
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
