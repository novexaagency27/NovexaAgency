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
  FileText,
  Compass,
  ShieldCheck,
  TrendingUp,
  Award,
  Type,
  Maximize2,
  BookOpen,
  Share2,
} from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/lib/data/projects";
import { BrandingFAQ } from "./BrandingFAQ";

export const metadata: Metadata = {
  title: "Branding Agency in India | NOVEXA Agency",
  description:
    "NOVEXA is a branding agency helping growing businesses build clear, memorable brand identities through strategy, visual identity, logo design and consistent brand systems.",
  alternates: {
    canonical: "https://novexaagency.com/branding/",
  },
  openGraph: {
    title: "Branding Agency in India | NOVEXA Agency",
    description:
      "NOVEXA is a branding agency helping growing businesses build clear, memorable brand identities through strategy, visual identity, logo design and consistent brand systems.",
    url: "https://novexaagency.com/branding/",
    siteName: "NOVEXA",
    images: [
      {
        url: "/assets/work/logo/hand tag nirvaan.jpg",
        width: 1200,
        height: 630,
        alt: "NOVEXA Branding Agency — Brand Identity and Design Systems",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding Agency in India | NOVEXA Agency",
    description:
      "NOVEXA is a branding agency helping growing businesses build clear, memorable brand identities through strategy, visual identity, logo design and consistent brand systems.",
    images: ["/assets/work/logo/hand tag nirvaan.jpg"],
  },
};

const brandingServices = [
  {
    icon: Compass,
    num: "01",
    title: "Brand Strategy & Positioning",
    description:
      "Strategic foundation mapping that defines your unique market position, customer perception, and competitive advantage so your brand stands distinct from day one.",
    deliverables: ["Market Positioning Framework", "Brand Persona & Tone", "Core Messaging Architecture", "Value Proposition Definition"],
  },
  {
    icon: Sparkles,
    num: "02",
    title: "Logo Design & Monogram Systems",
    description:
      "Timeless, mathematically proportioned logo marks, custom wordmarks, and responsive monogram symbols crafted to remain memorable at every scale from favicon to studio signage.",
    deliverables: ["Primary & Secondary Marks", "Responsive Wordmarks", "Monogram Symbols", "Vector Master Assets"],
  },
  {
    icon: Palette,
    num: "03",
    title: "Visual Identity Systems",
    description:
      "Cohesive visual grammar unifying shapes, patterns, art direction, and graphic elements to ensure your business projects immediate authority across all touchpoints.",
    deliverables: ["Comprehensive Visual Grammar", "Custom Graphic Motifs", "Art Direction Rules", "Texture & Grid Systems"],
  },
  {
    icon: Type,
    num: "04",
    title: "Typography & Color Systems",
    description:
      "Curated editorial typography scales and scientifically calibrated color palettes designed for flawless harmony across high-resolution screens and tactile print.",
    deliverables: ["Primary & Secondary Color Palettes", "CMYK, RGB & HEX Specs", "Editorial Font Pairing Hierarchy", "Typographic Scale Tokens"],
  },
  {
    icon: BookOpen,
    num: "05",
    title: "Brand Guidelines & Design Tokens",
    description:
      "Comprehensive identity manuals that provide internal teams and external partners with clear, unambiguous rules for logo usage, spacing, alignment, and digital styling.",
    deliverables: ["Comprehensive Brand Manual", "Logo Usage & Exclusion Zones", "Digital Design Tokens", "Do's & Don'ts Playbook"],
  },
  {
    icon: FileText,
    num: "06",
    title: "Marketing Collateral & Stationery",
    description:
      "Refined corporate stationery, tactile business cards, investor presentation decks, and printed brand collateral that translate your identity into physical credibility.",
    deliverables: ["Tactile Business Cards", "Letterhead & Envelope Systems", "Corporate Stationery Sets", "Pitch Deck Master Templates"],
  },
  {
    icon: Share2,
    num: "07",
    title: "Social Media Brand Systems",
    description:
      "Art-directed social media design templates, header visual architectures, and feed layout systems that bring unmistakable brand consistency to Instagram and LinkedIn.",
    deliverables: ["Modular Feed Post Templates", "Story & Reel Visual Frames", "Profile & Banner Assets", "Social Content Style Sheets"],
  },
  {
    icon: Layout,
    num: "08",
    title: "Digital Brand Toolkits",
    description:
      "Digital-first asset suites formatted for web applications, e-commerce storefronts, and mobile products, bridging the gap between brand design and modern UI development.",
    deliverables: ["SVG Iconography & Glyphs", "Web UI Brand Assets", "Multi-Resolution Favicons", "Digital Asset Repository"],
  },
];

const identityElements = [
  {
    num: "01",
    title: "Logo & Symbol Architecture",
    description:
      "Primary wordmark, secondary badge marks, responsive emblems, and strict clear-space parameters designed for versatile deployment across digital screens and physical mediums.",
  },
  {
    num: "02",
    title: "Color System & Hierarchy",
    description:
      "A primary tone, secondary neutrals, and high-impact accent colors calibrated across digital RGB, screen HEX, print CMYK, and tactile Pantone standards.",
  },
  {
    num: "03",
    title: "Typography Framework",
    description:
      "Editorial display serifs, legible modern sans-serif body typography, and technical monospace labels paired with clear hierarchy scales and line-height formulas.",
  },
  {
    num: "04",
    title: "Visual Language & Motifs",
    description:
      "Custom graphic patterns, signature geometry, tactile textures, and photographic treatments that make your brand recognizable even before your logo is seen.",
  },
  {
    num: "05",
    title: "Layout Principles & Spacing",
    description:
      "Grid structures, spatial breathing room, typographic alignments, and compositional rhythm that guide the creation of marketing assets and digital storefronts.",
  },
  {
    num: "06",
    title: "Real-World Brand Applications",
    description:
      "Contextual mockups proving the identity across tangible business touchpoints—including packaging, luxury stationery, merchandise, and digital products.",
  },
  {
    num: "07",
    title: "Comprehensive Brand Guidelines",
    description:
      "A centralized brand book documenting every rule, token, and asset specification so your team maintains absolute visual consistency as the business expands.",
  },
];

const whoItsFor = [
  {
    num: "01",
    tag: "GROWING BUSINESSES",
    title: "Established Scaling Brands",
    description:
      "Companies that have outgrown their original DIY or template visuals and need a cohesive, professional brand identity to compete at higher market tiers.",
  },
  {
    num: "02",
    tag: "AMBITIOUS STARTUPS",
    title: "Venture-Backed & Early Startups",
    description:
      "Founders who recognize that immediate market credibility, investor confidence, and customer trust require world-class brand positioning from launch.",
  },
  {
    num: "03",
    tag: "REGIONAL LEADERS",
    title: "Gujarat & Pan-India Enterprises",
    description:
      "Leading businesses in Vadodara, Ahmedabad, Surat, and across India seeking to solidify their regional leadership into recognized nationwide brand equity.",
  },
  {
    num: "04",
    tag: "NEW VENTURES",
    title: "New Product & D2C Launches",
    description:
      "Direct-to-consumer and lifestyle creators requiring memorable packaging design, distinct brand storytelling, and high-impact digital presence.",
  },
  {
    num: "05",
    tag: "BRAND REFRESH",
    title: "Businesses Seeking Modernization",
    description:
      "Organizations with established customer bases preparing for a strategic visual refresh that honors their heritage while modernizing for digital platforms.",
  },
];

const brandingProcess = [
  {
    step: "01",
    title: "Discovery & Immersion",
    description:
      "We unpack your business objectives, target audience psychology, competitive landscape, and long-term vision to uncover what makes your offering irreplaceable.",
  },
  {
    step: "02",
    title: "Strategy & Positioning",
    description:
      "We articulate your strategic value proposition, market positioning, brand persona, and messaging pillars before touching a single pixel or sketch.",
  },
  {
    step: "03",
    title: "Direction & Moodboards",
    description:
      "We present curated visual territories, typographic atmospheres, and aesthetic directions to align on the visual tone and emotional resonance of the brand.",
  },
  {
    step: "04",
    title: "Design & Identity Architecture",
    description:
      "We craft custom logo marks, responsive symbol systems, color palettes, and typographic hierarchies, testing each element against real-world use cases.",
  },
  {
    step: "05",
    title: "Refinement & Applications",
    description:
      "Through structured feedback cycles, we refine chosen concepts and stress-test the visual identity across stationery, packaging, digital screens, and marketing assets.",
  },
  {
    step: "06",
    title: "Delivery & Brand Guidelines",
    description:
      "We deliver organized vector master packages, digital asset toolkits, and an exhaustive brand guideline document to ensure perpetual consistency.",
  },
];

const faqItems = [
  {
    question: "What does a branding agency do?",
    answer:
      "A branding agency shapes how people perceive and remember your business. Beyond just designing a logo, a branding agency develops your strategic positioning, visual identity system, color palettes, typography rules, brand voice, and guidelines. The goal is to build long-term brand equity, instant recognition, and deep consumer trust across every customer touchpoint.",
  },
  {
    question: "What is included in a complete brand identity project?",
    answer:
      "A complete brand identity engagement with NOVEXA includes brand positioning strategy, primary and secondary logo marks, responsive monograms, color systems (CMYK, RGB, HEX, Pantone), typography hierarchy, custom graphic patterns or motifs, real-world application mockups (stationery, packaging, collateral), and an exhaustive brand guideline manual detailing exact rules for consistent deployment.",
  },
  {
    question: "Does NOVEXA design logos as part of branding services?",
    answer:
      "Yes. Logo design is a core component of our branding services. We craft bespoke wordmarks, monograms, and brand symbols engineered with precision geometry and optical balance. Crucially, we design logos as part of an interconnected brand system rather than an isolated graphic, ensuring seamless legibility across 16px favicons, mobile apps, and studio signage.",
  },
  {
    question: "Why is brand consistency important for growing businesses?",
    answer:
      "Consistency builds familiarity, and familiarity drives commercial trust. When your website, packaging, social channels, presentation decks, and marketing collateral share a unified visual language, customers perceive your business as established, authoritative, and dependable. Inconsistent branding dilutes customer recall and forces you to re-earn credibility at every touchpoint.",
  },
  {
    question: "How long does a branding project take with NOVEXA?",
    answer:
      "A comprehensive brand identity project typically spans 3 to 6 weeks, depending on the scope of deliverables and application requirements. This allows adequate time for in-depth discovery, strategic positioning, iterative concepting, collateral prototyping, and final guideline authoring. We maintain clear review checkpoints throughout each phase to ensure complete alignment.",
  },
  {
    question: "Can NOVEXA help with an existing brand refresh or rebrand?",
    answer:
      "Yes. Many of our clients are established companies with outdated visual assets that no longer reflect the quality of their service. We execute strategic brand refreshes that preserve hard-earned brand equity and core recognition while modernizing typography, color palettes, digital assets, and guidelines for modern high-resolution screens and contemporary markets.",
  },
  {
    question: "Where is NOVEXA located, and do you work with clients across India?",
    answer:
      "NOVEXA is a creative agency headquartered in Vadodara, Gujarat, India. We actively collaborate with businesses locally in Vadodara, Ahmedabad, Surat, and across Gujarat, as well as ambitious brands nationwide in Mumbai, Delhi, Bengaluru, and internationally. Our digital consultation, collaborative briefing, and presentation workflows ensure a frictionless client experience regardless of geography.",
  },
];

export default function BrandingServicePage() {
  // Real branding case studies from verified projectsData
  const relevantSlugs = [
    "nirvaan-logo-mark",
    "aura-cosmetics-campaign",
    "novexa-wordmark-system",
    "anaqah-luxury-ecommerce",
  ];
  const portfolioShowcase = projectsData.filter((p) =>
    relevantSlugs.includes(p.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Branding Services",
    serviceType: "Branding Agency",
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
      "NOVEXA is a branding agency helping growing businesses build clear, memorable brand identities through strategy, visual identity, logo design and consistent brand systems.",
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
        name: "Branding",
        item: "https://novexaagency.com/branding/",
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
              <span>01 // BRANDING AGENCY</span>
            </div>

            <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-charcoal leading-[1.08]">
              Branding Agency for Brands Ready to{" "}
              <span className="gold-gradient-text font-normal">Be Remembered</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-stone-700 max-w-2xl font-light leading-relaxed">
              NOVEXA is a dedicated branding agency in India helping growing businesses craft distinctive, enduring brand identities. We combine strategic market positioning, mathematical logo design, and unified visual systems so your business commands authority and lasting recognition.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/start-a-project"
                data-cursor="START"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-charcoal text-ivory font-mono text-xs tracking-widest font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-luxury"
              >
                <span>START A BRANDING PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/graphic-design"
                data-cursor="EXPLORE"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card border border-stone-300 text-charcoal font-mono text-xs tracking-widest font-semibold hover:border-gold hover:text-gold transition-all duration-300"
              >
                <span>EXPLORE GRAPHIC DESIGN</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-8 border-t border-stone-200 flex flex-wrap gap-8 font-mono text-xs text-stone-500">
              <div>
                <span className="text-gold block font-semibold">CRAFT FOCUS</span>
                <span>STRATEGY × VISUAL IDENTITY × SYSTEMS</span>
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
                src="/assets/work/logo/hand tag nirvaan.jpg"
                alt="NOVEXA Branding Agency Portfolio — Nirvaan Luxury Monogram & Hangtag Identity System"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-75" />

              <div className="absolute bottom-6 left-6 right-6 p-4 glass-nav rounded-2xl border border-ivory/30 flex items-center justify-between text-charcoal">
                <div>
                  <span className="font-mono text-[10px] text-gold tracking-widest uppercase block">
                    FEATURED IDENTITY SYSTEM
                  </span>
                  <span className="editorial-title text-base md:text-lg font-medium">
                    Nirvaan Apparel Identity
                  </span>
                </div>
                <Link
                  href="/work/nirvaan-logo-mark"
                  className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-charcoal hover:bg-ivory transition-colors"
                  aria-label="View Nirvaan Case Study"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 // BRANDING INTRODUCTION: BEYOND A LOGO */}
      <section className="space-y-12">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              02 // BRANDING PHILOSOPHY
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Branding Is More Than a Logo. It Is Your <span className="italic">Reputation</span> at Scale.
            </h2>
            <p className="font-sans text-base md:text-lg text-stone-700 font-light leading-relaxed">
              A logo is simply a signature. True brand identity is the complete sensory and strategic ecosystem that shapes how customers perceive your value, how easily they recognize you, and why they choose you over alternatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-200">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Positioning & Perception</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                Before designing, we identify where your brand sits in your competitive landscape, ensuring your visual tone projects immediate credibility and commands respect.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Systematic Consistency</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                We develop interconnected design systems so your typography, palette, and layouts stay unified across web storefronts, social campaigns, packaging, and print.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Enduring Recognition</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                Memorable brands eliminate cognitive friction. We engineer visual identities with distinct signature motifs that make your business instantly recognizable in crowded markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // BRANDING SERVICES */}
      <section id="services-breakdown" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              03 // CORE CAPABILITIES
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Branding Services
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            End-to-end brand design agency capabilities grounded in research, meticulous craftsmanship, and digital-first execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandingServices.map((service) => {
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

      {/* 04 // WHAT A BRAND IDENTITY INCLUDES */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              04 // THE IDENTITY SYSTEM
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              What a Brand Identity Includes
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Every identity system we produce is an integrated commercial toolkit designed for seamless daily execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {identityElements.map((element) => (
            <div
              key={element.num}
              className="glass-card p-8 rounded-3xl border border-stone-200 shadow-luxury space-y-4 hover:border-gold/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-gold font-semibold">// {element.num}</span>
                <span className="w-2 h-2 rounded-full bg-stone-300" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">
                {element.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                {element.description}
              </p>
            </div>
          ))}

          {/* Callout Card */}
          <div className="glass-card p-8 rounded-3xl border border-gold/30 bg-gold/5 shadow-luxury flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold font-semibold tracking-widest uppercase block">
                // COMPREHENSIVE OUTPUT
              </span>
              <h3 className="editorial-title text-xl md:text-2xl font-medium text-charcoal">
                Built to Scale with Your Organization
              </h3>
              <p className="font-sans text-xs md:text-sm text-stone-700 font-light leading-relaxed">
                No guessing, no fragmented files. You receive production-ready master assets packaged for developers, print vendors, marketing teams, and executives.
              </p>
            </div>
            <Link
              href="/start-a-project"
              className="inline-flex items-center gap-2 font-mono text-xs text-charcoal hover:text-gold tracking-widest font-semibold pt-2"
            >
              <span>INQUIRE ABOUT AN IDENTITY SYSTEM</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 // WHO NOVEXA HELPS */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              05 // CLIENT PARTNERSHIPS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Who We Build Brands For
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            We partner with founders and business leaders who value brand equity as a foundational catalyst for long-term growth.
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

      {/* 06 // BRANDING PROCESS */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              06 // OUR METHODOLOGY
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Our Branding Process
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandingProcess.map((step) => (
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

      {/* 07 // SELECTED BRANDING WORK */}
      <section id="selected-work" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              07 // PROVEN WORK
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Selected Branding Work
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Real client case studies demonstrating our commitment to strategic positioning, mathematical precision, and tactile craft.
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

      {/* 08 // WHY WORK WITH NOVEXA */}
      <section className="space-y-12">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              08 // THE NOVEXA DIFFERENCE
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Why Choose NOVEXA as Your Branding Agency
            </h2>
            <p className="font-sans text-base text-stone-700 font-light leading-relaxed">
              Based in Vadodara, Gujarat, NOVEXA operates as a strategic branding agency partner for companies throughout Gujarat (Ahmedabad, Surat, Vadodara), across India, and worldwide. We believe world-class branding requires intimate founder collaboration, commercial discipline, and obsessive craft.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-stone-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Strategy Before Decoration</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Every line, typeface, and color is justified by positioning research and audience psychology, never arbitrary visual trends.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Clarity Over Complexity</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                We banish bloated agency jargon and unnecessary frameworks. We build clean, powerful visual identities that communicate with immediate clarity.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Unified Systems, Not One-Offs</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Instead of isolated graphics, we construct scalable design systems that make everyday marketing, packaging, and digital updates effortless.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Built for Real-World Digital</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Because we engineer custom web applications and digital interfaces, our brand systems natively excel across responsive screens, dark modes, and mobile feeds.
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
            <span className="text-stone-300">•</span>
            <Link href="/graphic-design" className="text-gold hover:underline flex items-center gap-1">
              <span>Explore graphic design services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 09 // FREQUENTLY ASKED QUESTIONS */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              09 // CLARITY & DETAILS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Clear, transparent answers about our branding services, project timelines, deliverables, and collaboration models.
          </p>
        </div>

        <BrandingFAQ items={faqItems} />
      </section>

      {/* 10 // FINAL CALL TO ACTION */}
      <section>
        <div className="bg-charcoal text-ivory rounded-3xl p-10 md:p-20 bg-grain border border-stone-800 text-center space-y-8 relative overflow-hidden shadow-luxury">
          <span className="font-mono text-xs text-gold tracking-widest uppercase">
            10 // BUILD YOUR LEGACY
          </span>

          <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Build a Brand That Gets{" "}
            <span className="italic text-gold">Remembered?</span>
          </h2>

          <p className="font-sans text-sm md:text-base text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Whether launching a new venture or elevating an established business to its next stage of growth, let&apos;s build an identity that commands respect.
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
