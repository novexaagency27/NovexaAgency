import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Palette,
  Layout,
  Share2,
  FileText,
  Printer,
  ShieldCheck,
  TrendingUp,
  Award,
} from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/lib/data/projects";
import { GraphicDesignFAQ } from "./GraphicDesignFAQ";

export const metadata: Metadata = {
  title: "Graphic Design Agency in India | NOVEXA Agency",
  description:
    "NOVEXA is a graphic design agency helping growing brands create clear, memorable visual communication across digital and marketing channels.",
  alternates: {
    canonical: "https://novexaagency.com/graphic-design/",
  },
  openGraph: {
    title: "Graphic Design Agency in India | NOVEXA Agency",
    description:
      "NOVEXA is a graphic design agency helping growing brands create clear, memorable visual communication across digital and marketing channels.",
    url: "https://novexaagency.com/graphic-design/",
    siteName: "NOVEXA",
    images: [
      {
        url: "/assets/work/posters/cream banner 02.jpg",
        width: 1200,
        height: 630,
        alt: "NOVEXA Graphic Design Agency Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Agency in India | NOVEXA Agency",
    description:
      "NOVEXA is a graphic design agency helping growing brands create clear, memorable visual communication across digital and marketing channels.",
    images: ["/assets/work/posters/cream banner 02.jpg"],
  },
};

const graphicDesignServices = [
  {
    icon: Share2,
    num: "01",
    title: "Social Media Graphics",
    description:
      "High-engagement social media graphic design and cohesive visual feeds tailored for Instagram, LinkedIn, and performance networks that turn casual viewers into loyal brand advocates.",
    deliverables: ["Instagram Feed Systems", "Story & Reel Templates", "Carousel Decks", "Header & Banner Art"],
  },
  {
    icon: TrendingUp,
    num: "02",
    title: "Marketing & Performance Creatives",
    description:
      "Click-optimized advertising visuals and promotional designs engineered to increase conversion rates across paid search, display ads, and social acquisition funnels.",
    deliverables: ["Meta & Google Ad Sets", "Promotional Graphic Banners", "Email Marketing Graphics", "Retargeting Creatives"],
  },
  {
    icon: Palette,
    num: "03",
    title: "Campaign Graphics & Posters",
    description:
      "Striking, art-directed visual campaign graphics and editorial product posters that capture attention, celebrate product launches, and communicate brand narratives with punch.",
    deliverables: ["Product Launch Graphics", "Event & Keynote Posters", "Editorial Visual Systems", "Feature Highlight Collateral"],
  },
  {
    icon: Layout,
    num: "04",
    title: "Digital Graphics & Web Assets",
    description:
      "Pixel-perfect digital graphics, custom website banners, and interface graphic elements that seamlessly complement modern digital products and web storefronts.",
    deliverables: ["Hero Section Graphics", "Blog & Article Artwork", "Custom Infographics", "Digital Showcase Assets"],
  },
  {
    icon: FileText,
    num: "05",
    title: "Presentation & Pitch Deck Design",
    description:
      "Executive keynote, investor deck, and sales presentation design that transforms complex business data and strategic ideas into compelling, high-craft visual narratives.",
    deliverables: ["Investor Pitch Decks", "Sales & Capabilities Decks", "Keynote Presentation Decks", "Annual Review Templates"],
  },
  {
    icon: Printer,
    num: "06",
    title: "Print-Ready Collateral & Packaging",
    description:
      "Meticulously formatted print design assets, packaging graphics, and stationery created with precise prepress calibration, correct color profiles, and bleed standards.",
    deliverables: ["Product Packaging Mockups", "Tactile Business Cards", "Brochures & Lookbooks", "Trade Show & Print Banners"],
  },
  {
    icon: Layers,
    num: "07",
    title: "Brand Communication Materials",
    description:
      "Unified brand communication graphics ensuring every single customer touchpoint reinforces authority, credibility, and polished brand consistency.",
    deliverables: ["Brand Style Sheets", "Newsletter Header Graphics", "Brand Factsheets", "Corporate Stationery Kits"],
  },
  {
    icon: Sparkles,
    num: "08",
    title: "Visual Assets for Growing Businesses",
    description:
      "Scalable graphic design services that supply scaling companies with agile design support, removing production bottlenecks and keeping brand communication sharp.",
    deliverables: ["Multi-Format Visual Assets", "Vector Iconography", "Visual Guideline Extensions", "On-Demand Creative Production"],
  },
];

const whoItsFor = [
  {
    num: "01",
    tag: "DTC & E-COMMERCE",
    title: "Direct-to-Consumer Brands",
    description:
      "Brands requiring scroll-stopping social media graphics, product launch visuals, and polished marketing collateral that elevate perceived product value and build trust.",
  },
  {
    num: "02",
    tag: "GROWING STARTUPS",
    title: "Fast-Paced Tech & SaaS Companies",
    description:
      "Teams that need high-caliber presentation decks, feature announcement graphics, and consistent digital assets without hiring bloated in-house creative departments.",
  },
  {
    num: "03",
    tag: "ESTABLISHED BUSINESSES",
    title: "Service Firms & Consultancies",
    description:
      "Professional organizations seeking to replace generic marketing materials with bespoke editorial layouts, refined print stationery, and authoritative collateral.",
  },
  {
    num: "04",
    tag: "FOUNDERS & LEADERS",
    title: "Visionary Brand Creators",
    description:
      "Entrepreneurs preparing new ventures who recognize that world-class visual design is the fastest shortcut to market credibility and customer recognition.",
  },
];

const designProcess = [
  {
    step: "01",
    title: "Discovery & Briefing",
    description:
      "We unpack your business goals, target demographic, and visual tone to define creative guidelines and ensure every design choice serves a distinct commercial purpose.",
  },
  {
    step: "02",
    title: "Visual Strategy & Concepts",
    description:
      "Our design team establishes art direction, moodboards, typographic hierarchy, and initial composition directions tailored specifically to your brand identity.",
  },
  {
    step: "03",
    title: "High-Craft Design & Refinement",
    description:
      "We craft detailed graphic design deliverables, refining compositions, color harmony, and micro-details based on collaborative review milestones.",
  },
  {
    step: "04",
    title: "Production & Asset Delivery",
    description:
      "All finalized assets are packaged in organized, production-grade formats—including print-ready CMYK PDFs, vector sources, and optimized digital web/social files.",
  },
];

const faqItems = [
  {
    question: "What types of graphic design work does NOVEXA handle?",
    answer:
      "As a full-spectrum creative design agency, NOVEXA designs complete visual communication systems. This encompasses social media graphics and Instagram content systems, performance marketing creatives, campaign posters, digital web banners, executive presentation pitch decks, print collateral, and packaging assets. We focus on craft that builds lasting brand equity.",
  },
  {
    question: "What is your typical turnaround time for graphic design projects?",
    answer:
      "Turnaround timelines depend on project scope. Individual marketing creative batches or social media graphic sets typically take 3 to 5 business days. Broader visual campaign systems, comprehensive stationery collections, or multi-slide presentation decks generally range between 1 to 2 weeks with clear review checkpoints throughout.",
  },
  {
    question: "Do you supply print-ready files and original source assets?",
    answer:
      "Yes. Every completed graphic design deliverable is supplied with production-ready source files. For print collateral, we provide high-resolution, bleed-compliant vector and PDF files. For digital graphics, we provide responsive, retina-optimized formats (PNG, JPG, WebP) along with organized master design files.",
  },
  {
    question: "Can NOVEXA work with our existing brand guidelines?",
    answer:
      "Yes, absolutely. We frequently collaborate with companies that already have brand standards, logos, and color palettes established. Our role as your graphic design company is to honor and elevate your existing aesthetic, ensuring every new promotional graphic or campaign poster looks completely cohesive.",
  },
  {
    question: "Where is NOVEXA located, and do you work with clients outside your city?",
    answer:
      "NOVEXA is a creative design agency headquartered in Vadodara, Gujarat, India. While we take pride in serving businesses locally as a graphic design agency in Vadodara and Gujarat, our digital workflow enables seamless partnerships with ambitious clients across Mumbai, Delhi, Bengaluru, and internationally across North America, Europe, and the Middle East.",
  },
  {
    question: "How do we get started with a graphic design project?",
    answer:
      "Getting started is simple. Visit our project inquiry page at /start-a-project, select Graphic Design from the services list, and outline your requirements, timeline, and goals. We will review your brief within 24 hours and schedule a direct consultation to discuss scope and pricing.",
  },
];

export default function GraphicDesignServicePage() {
  // Filter relevant Graphic Design projects from verified data
  const relevantSlugs = [
    "aura-cosmetics-campaign",
    "nike-urban-art-direction",
    "pulse-acoustics-campaign",
    "nirvaan-logo-mark",
  ];
  const portfolioShowcase = projectsData.filter((p) =>
    relevantSlugs.includes(p.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Graphic Design Services",
    serviceType: "Graphic Design Agency",
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
    ],
    description:
      "NOVEXA is a graphic design agency helping growing brands create clear, memorable visual communication across digital and marketing channels.",
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
        name: "Graphic Design",
        item: "https://novexaagency.com/graphic-design/",
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
              <span>01 // GRAPHIC DESIGN AGENCY</span>
            </div>

            <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-charcoal leading-[1.08]">
              Graphic Design Agency for{" "}
              <span className="gold-gradient-text font-normal">Growing Brands</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-stone-700 max-w-2xl font-light leading-relaxed">
              NOVEXA provides professional graphic design services that help forward-thinking businesses communicate clearly, project authority, and build a cohesive visual presence across digital and print touchpoints.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/start-a-project"
                data-cursor="INQUIRE"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-charcoal text-ivory font-mono text-xs tracking-widest font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-luxury"
              >
                <span>START A DESIGN PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="#services-breakdown"
                data-cursor="EXPLORE"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card border border-stone-300 text-charcoal font-mono text-xs tracking-widest font-semibold hover:border-gold hover:text-gold transition-all duration-300"
              >
                <span>EXPLORE SERVICES</span>
              </a>
            </div>

            <div className="pt-8 border-t border-stone-200 flex flex-wrap gap-8 font-mono text-xs text-stone-500">
              <div>
                <span className="text-gold block font-semibold">CRAFT FOCUS</span>
                <span>DIGITAL × MARKETING × PRINT</span>
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
                src="/assets/work/posters/cream banner 02.jpg"
                alt="NOVEXA Graphic Design Agency Portfolio — Art Directed Campaign Poster"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-75" />

              <div className="absolute bottom-6 left-6 right-6 p-4 glass-nav rounded-2xl border border-ivory/30 flex items-center justify-between text-charcoal">
                <div>
                  <span className="font-mono text-[10px] text-gold tracking-widest uppercase block">
                    FEATURED POSTER DESIGN
                  </span>
                  <span className="editorial-title text-base md:text-lg font-medium">
                    Aura Botanicals Visual Series
                  </span>
                </div>
                <Link
                  href="/work/aura-cosmetics-campaign"
                  className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-charcoal hover:bg-ivory transition-colors"
                  aria-label="View Aura Cosmetics Case Study"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 // WHAT NOVEXA PROVIDES (AGENCY POSITIONING) */}
      <section className="space-y-12">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              02 // STRATEGIC VALUE
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Visual Communication That Builds <span className="italic">Trust</span> and Drives Action.
            </h2>
            <p className="font-sans text-base md:text-lg text-stone-700 font-light leading-relaxed">
              In a crowded marketplace, ordinary graphics get scrolled past. As a specialized graphic design agency in India, NOVEXA helps ambitious companies cut through noise with art-directed visual assets that convey quality at first glance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-200">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Cohesive Identity</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                We align typography, palette hierarchy, and spatial balance so your marketing materials look unmistakably like your brand.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Commercial Intent</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                Design is not just decorative. Our graphic design services prioritize clear message hierarchy, strong focal points, and user engagement.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Zero Generic Templates</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                Every banner, presentation slide, and promotional poster is built from a blank canvas to give your brand a genuine unfair advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // GRAPHIC DESIGN SERVICES BREAKDOWN */}
      <section id="services-breakdown" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              03 // CORE CAPABILITIES
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Graphic Design Services
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Comprehensive creative design agency solutions spanning digital campaigns, social channels, and tactile print collateral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {graphicDesignServices.map((service) => {
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

      {/* 04 // WHO THIS SERVICE IS FOR */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              04 // CLIENT PARTNERSHIPS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Who We Design For
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            We partner with businesses that understand good design is a fundamental growth driver, not an afterthought.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* 05 // OUR APPROACH / METHODOLOGY */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              05 // HOW WE WORK
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Our Design Process
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
          {designProcess.map((step) => (
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

      {/* 06 // SELECTED WORK / RELEVANT PORTFOLIO */}
      <section id="selected-work" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              06 // PROVEN WORK
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Selected Graphic Design Work
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Real client projects highlighting our focus on art direction, typographic clarity, and brand consistency.
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

      {/* 07 // WHY WORK WITH NOVEXA */}
      <section className="space-y-12">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              07 // THE NOVEXA DIFFERENCE
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Why Choose NOVEXA as Your Graphic Design Company
            </h2>
            <p className="font-sans text-base text-stone-700 font-light leading-relaxed">
              Based in Vadodara, Gujarat, NOVEXA works as a dedicated creative partner for brands across India and internationally. When you collaborate with us, you work directly with passionate design leaders who take ownership of your visual reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-stone-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Direct Founder Involvement</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                No middle managers or game of telephone. You collaborate directly with experienced designers who care deeply about the craft.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Fast, Transparent Turnarounds</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Clear deadlines, iterative updates, and dependable delivery schedules that keep your marketing campaigns moving forward.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Cross-Disciplinary Integration</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Because we also build websites and digital products, our graphic design work natively translates across modern digital screens and print specs.
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
              <span>Explore our full agency capabilities</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 08 // FREQUENTLY ASKED QUESTIONS */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              08 // CLARITY & DETAILS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Answers to common questions about our graphic design services, workflow, formats, and engagement models.
          </p>
        </div>

        <GraphicDesignFAQ items={faqItems} />
      </section>

      {/* 09 // STRONG FINAL CALL TO ACTION */}
      <section>
        <div className="bg-charcoal text-ivory rounded-3xl p-10 md:p-20 bg-grain border border-stone-800 text-center space-y-8 relative overflow-hidden shadow-luxury">
          <span className="font-mono text-xs text-gold tracking-widest uppercase">
            09 // ELEVATE YOUR BRAND
          </span>

          <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Build a Stronger <span className="italic text-gold">Visual Presence?</span>
          </h2>

          <p className="font-sans text-sm md:text-base text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Whether you need a high-impact social media campaign, promotional marketing graphics, or full brand collateral design, let&apos;s collaborate to make your brand unforgettable.
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
