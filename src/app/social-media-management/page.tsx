import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Share2,
  Instagram,
  Compass,
  Calendar,
  Palette,
  Film,
  FileText,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Award,
  Layers,
  Eye,
  MessageSquare,
  Zap,
} from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/lib/data/projects";
import { SocialMediaManagementFAQ } from "./SocialMediaManagementFAQ";

export const metadata: Metadata = {
  title: "Social Media Management Agency in India | NOVEXA Agency",
  description:
    "NOVEXA is a social media management agency helping growing brands build stronger Instagram and social media presence through strategy, content, design and consistent execution.",
  alternates: {
    canonical: "https://novexaagency.com/social-media-management/",
  },
  openGraph: {
    title: "Social Media Management Agency in India | NOVEXA Agency",
    description:
      "NOVEXA is a social media management agency helping growing brands build stronger Instagram and social media presence through strategy, content, design and consistent execution.",
    url: "https://novexaagency.com/social-media-management/",
    siteName: "NOVEXA",
    images: [
      {
        url: "/assets/work/posters/cream banner 02.jpg",
        width: 1200,
        height: 630,
        alt: "NOVEXA Social Media Management Agency — Content Strategy & Visual Curation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management Agency in India | NOVEXA Agency",
    description:
      "NOVEXA is a social media management agency helping growing brands build stronger Instagram and social media presence through strategy, content, design and consistent execution.",
    images: ["/assets/work/posters/cream banner 02.jpg"],
  },
};

const socialMediaServices = [
  {
    icon: Instagram,
    num: "01",
    title: "Instagram Management",
    description:
      "End-to-end Instagram feed curation, grid visual balance, story sequence programming, and reel packaging tailored to elevate brand perception and daily audience engagement.",
    deliverables: ["Curated Grid Aesthetics", "Weekly Story Sequences", "Bio & Highlight Packaging", "Publishing Schedule Execution"],
  },
  {
    icon: Compass,
    num: "02",
    title: "Social Media Strategy",
    description:
      "Data-informed positioning frameworks identifying your ideal audience, competitor content gaps, content pillar architecture, and thematic messaging angles.",
    deliverables: ["Content Pillar Framework", "Audience Persona Insights", "Competitor Content Benchmarks", "Channel Growth Roadmap"],
  },
  {
    icon: Calendar,
    num: "03",
    title: "Content Planning & Calendars",
    description:
      "Structured monthly editorial roadmaps that align promotional launches, educational topics, and cultural milestones into a cohesive, dependable publishing cadence.",
    deliverables: ["Monthly Editorial Calendar", "Topic Ideation Banks", "Campaign Milestone Tracking", "Asset Production Timelines"],
  },
  {
    icon: Palette,
    num: "04",
    title: "Social Media Graphic Design",
    description:
      "Bespoke, art-directed static graphics, multi-slide educational carousels, and promotional announcement creatives designed strictly within your brand identity system.",
    deliverables: ["Editorial Carousel Decks", "Single Post Visuals", "Quote & Announcement Templates", "Vector Iconography & Badges"],
  },
  {
    icon: Film,
    num: "05",
    title: "Reels & Motion Content",
    description:
      "Dynamic short-form video editing, kinetic motion typography, beat-matched transitions, and hook-optimized pacing engineered for high retention across Instagram Reels.",
    deliverables: ["Short-Form Reel Edits", "Kinetic Text Overlays", "Hook-Optimized Cuts", "Audio Trend Matching"],
  },
  {
    icon: FileText,
    num: "06",
    title: "Caption & Content Direction",
    description:
      "Engaging, conversational copywriting written in your distinct brand tone, paired with strategic hook lines, community conversation prompts, and clear calls to action.",
    deliverables: ["Brand-Aligned Captions", "Scroll-Stopping Hook Lines", "Actionable Calls to Action", "Hashtag & Keyword Targeting"],
  },
  {
    icon: Layers,
    num: "07",
    title: "Brand Consistency",
    description:
      "Systematic brand guideline application ensuring typography, color palettes, spacing rhythm, and visual tone remain unified across Instagram, LinkedIn, and social touchpoints.",
    deliverables: ["Social Visual Style Sheets", "Color Palette Tokens", "Typographic Feed Hierarchy", "Asset Quality Control"],
  },
  {
    icon: Sparkles,
    num: "08",
    title: "Monthly Content Systems",
    description:
      "Reliable recurring production batches that deliver finalized graphics, video reels, and scheduled copy ahead of time, eliminating last-minute content stress.",
    deliverables: ["Batch Content Deliveries", "Staged Assets for Review", "Performance Feedback Loops", "Agile Creative Iterations"],
  },
];

const instagramPillars = [
  {
    icon: Eye,
    title: "Strategic Visual Direction",
    description: "Your feed is your modern storefront. We craft art-directed layouts, cohesive palette tones, and balanced image rhythms that make your profile instantly memorable.",
  },
  {
    icon: Calendar,
    title: "Consistent Content Planning",
    description: "No sporadic, haphazard posting. We organize monthly themes, balancing educational carousels, entertaining reels, and commercial announcements with intentional timing.",
  },
  {
    icon: Sparkles,
    title: "Polished Profile Presentation",
    description: "From custom highlight covers and bio optimization to pinned post strategies, every element of your profile is curated to turn profile visitors into followers and clients.",
  },
  {
    icon: Layers,
    title: "Scalable Content Systems",
    description: "We build modular graphic and video frameworks that ensure your brand identity remains unmistakable while keeping content creation agile and consistent.",
  },
];

const contentFormats = [
  {
    num: "01",
    title: "Static Single-Image Posts",
    description:
      "High-craft visual posters, product spotlights, quote cards, and announcements designed with editorial typographic elegance and spatial balance.",
  },
  {
    num: "02",
    title: "Multi-Slide Carousels",
    description:
      "Engaging multi-frame visual decks engineered to educate, tell brand stories, break down complex concepts, and generate high save and share rates.",
  },
  {
    num: "03",
    title: "Reels & Video Edits",
    description:
      "Rhythm-matched short-form videos with kinetic captions, sound design, and sharp transitions engineered for viewer retention on Instagram Reels.",
  },
  {
    num: "04",
    title: "Daily Story Systems",
    description:
      "Interactive story sequences, Q&A prompts, behind-the-scenes glimpses, and poll frames designed to keep your brand top-of-mind every day.",
  },
  {
    num: "05",
    title: "Promotional & Launch Creatives",
    description:
      "High-impact campaign visuals celebrating new product releases, festive collections, seasonal offers, and brand milestones.",
  },
  {
    num: "06",
    title: "Educational & Insight Content",
    description:
      "Authority-building industry breakdowns, how-to guides, and curated tips that demonstrate your team's domain mastery and build trust.",
  },
  {
    num: "07",
    title: "Campaign Creative Series",
    description:
      "Cohesive multi-asset suites unifying posters, banners, and video snippets around a central thematic message or seasonal push.",
  },
];

const whoWeWorkWith = [
  {
    num: "01",
    tag: "GROWING BUSINESSES",
    title: "Scaling Commercial Brands",
    description:
      "Companies that have moved past ad-hoc social posting and require an authoritative, dependable agency partner to manage their social channels with polish.",
  },
  {
    num: "02",
    tag: "LOCAL BRANDS",
    title: "Gujarat & Pan-India Brands",
    description:
      "Ambitious businesses in Vadodara, Ahmedabad, Surat, and across India looking to turn strong regional reputations into recognized digital leadership.",
  },
  {
    num: "03",
    tag: "CAFES & CULINARY",
    title: "Hospitality & Dining Venues",
    description:
      "Cafes, artisanal eateries, and dining concepts that need appetite-inducing photography art direction, menu highlights, and aesthetic feed vibes.",
  },
  {
    num: "04",
    tag: "JEWELLERY & LUXURY",
    title: "Fine Jewellery & Lifestyle",
    description:
      "High-craft jewellery and luxury artisan brands where macro detail, refined serif typography, and opulent visual storytelling are paramount.",
  },
  {
    num: "05",
    tag: "FOUNDERS & EXECUTIVES",
    title: "Personal Brands & Leaders",
    description:
      "Entrepreneurs, creative directors, and founders seeking authoritative visual identities and thought-leadership carousels on social channels.",
  },
  {
    num: "06",
    tag: "SERVICE BUSINESSES",
    title: "Consultancies & Studios",
    description:
      "Professional service firms that require clean, trust-building social content showcasing case studies, methodologies, and team expertise.",
  },
  {
    num: "07",
    tag: "E-COMMERCE BRANDS",
    title: "Direct-to-Consumer Creators",
    description:
      "Online retail brands requiring continuous product styling, user-benefit breakdowns, unboxing reels, and seasonal campaign content.",
  },
];

const socialProcess = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "We audit your current social channels, audience demographics, top-performing content, and competitive landscape to establish a baseline.",
  },
  {
    step: "02",
    title: "Strategy & Pillars",
    description:
      "We define core content pillars, tone of voice, visual aesthetic direction, and optimal publishing schedules aligned with commercial goals.",
  },
  {
    step: "03",
    title: "Content Direction & Calendar",
    description:
      "We develop a monthly content calendar outlining specific topics, visual concepts, post formats, and promotional angles for approval.",
  },
  {
    step: "04",
    title: "Design & Production",
    description:
      "Our creative studio crafts bespoke static graphics, multi-slide carousels, reel video edits, and polished brand-aligned captions.",
  },
  {
    step: "05",
    title: "Collaborative Review",
    description:
      "You review all scheduled content through organized batches, allowing transparent feedback and refinements before anything goes live.",
  },
  {
    step: "06",
    title: "Publishing & Execution",
    description:
      "We handle scheduled deployment across your channels with optimized visual tagging, formatted captions, and active launch timing.",
  },
  {
    step: "07",
    title: "Insights & Optimization",
    description:
      "We analyze content reach, engagement patterns, and audience feedback monthly, refining creative strategies for compounding growth.",
  },
];

const faqItems = [
  {
    question: "What does a social media management agency do?",
    answer:
      "A social media management agency handles the end-to-end planning, strategy, creative design, copywriting, publishing, and visual aesthetic of your social channels. At NOVEXA, we focus on helping growing brands establish a strong, cohesive Instagram and social media presence through strategic content planning, art-directed graphic design, short-form video reels, and consistent monthly execution.",
  },
  {
    question: "Why is visual consistency important on Instagram?",
    answer:
      "Your Instagram profile is often the first visual impression a prospective client has of your business. Visual consistency across color palettes, typography, image treatments, and layout balance builds instant credibility and recognition. When your feed looks intentional and polished, customers perceive your brand as authoritative, reliable, and premium.",
  },
  {
    question: "What is included in your monthly social media management services?",
    answer:
      "Our monthly social media management engagements typically include content strategy development, monthly editorial calendar planning, custom graphic design for posts and carousels, short-form reel video editing with kinetic typography, caption writing with brand-aligned tone of voice, story sequences, scheduled publishing, and monthly review iterations.",
  },
  {
    question: "Do you create both graphic posts and video reels?",
    answer:
      "Yes. Modern social media algorithms reward a healthy mix of static graphics, multi-slide educational carousels, and high-retention video reels. We create both formats, ensuring your feed maintains a balanced rhythm of informative visual decks and engaging short-form video content.",
  },
  {
    question: "How does NOVEXA maintain our brand's unique tone of voice?",
    answer:
      "During our initial discovery phase, we document your brand persona, target audience vocabulary, value propositions, and messaging dos and don'ts. Every caption, hook, and graphic is crafted to reflect your unique personality—whether that is refined and understated, bold and conversational, or authoritative and educational.",
  },
  {
    question: "Can NOVEXA manage existing brand accounts without starting over?",
    answer:
      "Yes. You do not need to delete your existing account or history. We conduct a thorough audit of your current channels, identify what has worked well, and introduce an elevated visual direction, refined content pillars, and disciplined posting consistency that smoothly transitions your page into a higher-tier presence.",
  },
  {
    question: "Where is NOVEXA based, and do you work with brands across India?",
    answer:
      "NOVEXA is headquartered in Vadodara, Gujarat, India. We partner locally with businesses across Vadodara, Ahmedabad, Surat, and Gujarat, as well as ambitious brands nationwide in Mumbai, Delhi, Bengaluru, and internationally. Our digital content pipelines and collaborative review systems make cross-city collaboration effortless.",
  },
];

export default function SocialMediaManagementServicePage() {
  // Verified real social media projects from projectsData
  const relevantSlugs = [
    "aura-cosmetics-campaign",
    "pulse-acoustics-campaign",
    "apex-vraj-vihar-digital-media",
    "nike-urban-art-direction",
  ];
  const portfolioShowcase = projectsData.filter((p) =>
    relevantSlugs.includes(p.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Social Media Management Services",
    serviceType: "Social Media Management Agency",
    provider: {
      "@type": "Organization",
      name: "NOVEXA AGENCY",
      url: "https://novexaagency.com/",
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
      "NOVEXA is a social media management agency helping growing brands build stronger Instagram and social media presence through strategy, content, design and consistent execution.",
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
        name: "Social Media Management",
        item: "https://novexaagency.com/social-media-management/",
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
              <span>01 // SOCIAL MEDIA MANAGEMENT AGENCY</span>
            </div>

            <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-charcoal leading-[1.08]">
              Social Media Management for Brands That{" "}
              <span className="gold-gradient-text font-normal">Want to Be Seen</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-stone-700 max-w-2xl font-light leading-relaxed">
              NOVEXA is a social media management agency in India helping ambitious businesses build an unmistakable social presence. We combine strategic content direction, art-directed graphic design, and engaging short-form video reels into consistent monthly systems that earn attention and build brand equity.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/start-a-project"
                data-cursor="START"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-charcoal text-ivory font-mono text-xs tracking-widest font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-luxury"
              >
                <span>START A SOCIAL MEDIA PROJECT</span>
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
                <span>STRATEGY × VISUAL CURATION × REELS & MOTION</span>
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
                alt="NOVEXA Social Media Agency Portfolio — Aura Botanicals Visual Campaign Series"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-75" />

              <div className="absolute bottom-6 left-6 right-6 p-4 glass-nav rounded-2xl border border-ivory/30 flex items-center justify-between text-charcoal">
                <div>
                  <span className="font-mono text-[10px] text-gold tracking-widest uppercase block">
                    FEATURED VISUAL CAMPAIGN
                  </span>
                  <span className="editorial-title text-base md:text-lg font-medium">
                    Aura Botanicals Social Series
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

      {/* 02 // SOCIAL MEDIA STRATEGY */}
      <section className="space-y-12">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              02 // STRATEGIC DIRECTION
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Social Media Management Rooted in <span className="italic">Brand Positioning</span> and Real Engagement.
            </h2>
            <p className="font-sans text-base md:text-lg text-stone-700 font-light leading-relaxed">
              Random posting does not build brand equity. Our social media management combines strategic positioning, clear audience psychology, editorial typography, and platform-specific execution to ensure every post reinforces authority and drives genuine connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-200">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Positioning & Voice</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                We define your unique perspective, industry angles, and conversational tone so your content communicates distinct value instead of blending into feed noise.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Planning & Cadence</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                Structured monthly content calendars replace reactive panic with dependable publishing rhythms, aligning educational posts, entertainment reels, and offers.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">Visual Consistency</h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                Every carousel, poster, and reel is developed within your visual identity guidelines, creating an instantly recognizable look across all feeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // SOCIAL MEDIA SERVICES */}
      <section id="services-breakdown" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              03 // CORE CAPABILITIES
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Social Media Management Services
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Full-spectrum social media management and creative production designed to build authority, engage audiences, and protect brand consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialMediaServices.map((service) => {
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

      {/* 04 // INSTAGRAM MANAGEMENT FOCUS */}
      <section className="space-y-12">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              04 // PLATFORM MASTERY
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Dedicated Instagram Management for Growing Brands
            </h2>
            <p className="font-sans text-base text-stone-700 font-light leading-relaxed">
              Instagram is the modern portfolio, catalog, and credibility check for discerning customers. We structure your Instagram presence around cohesive aesthetic pacing, engaging short-form reels, and intentional profile packaging that converts passive scrollers into long-term advocates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-stone-200">
            {instagramPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-gold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="editorial-title text-lg font-medium text-charcoal">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs text-stone-600 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 // CONTENT TYPES */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              05 // CONTENT FORMATS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Content Formats We Craft
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            A balanced mix of visual mediums designed to capture attention, communicate authority, and inspire community interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentFormats.map((format) => (
            <div
              key={format.num}
              className="glass-card p-8 rounded-3xl border border-stone-200 shadow-luxury space-y-4 hover:border-gold/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-gold font-semibold">// {format.num}</span>
                <span className="w-2 h-2 rounded-full bg-stone-300" />
              </div>
              <h3 className="editorial-title text-xl font-medium text-charcoal">
                {format.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                {format.description}
              </p>
            </div>
          ))}

          {/* Callout Card */}
          <div className="glass-card p-8 rounded-3xl border border-gold/30 bg-gold/5 shadow-luxury flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold font-semibold tracking-widest uppercase block">
                // SYSTEMATIC PRODUCTION
              </span>
              <h3 className="editorial-title text-xl md:text-2xl font-medium text-charcoal">
                Predictable Content Delivery
              </h3>
              <p className="font-sans text-xs md:text-sm text-stone-700 font-light leading-relaxed">
                Everything is produced in organized monthly batches. You review and approve your upcoming content in advance, keeping your publishing consistent and stress-free.
              </p>
            </div>
            <Link
              href="/start-a-project"
              className="inline-flex items-center gap-2 font-mono text-xs text-charcoal hover:text-gold tracking-widest font-semibold pt-2"
            >
              <span>INQUIRE ABOUT SOCIAL MANAGEMENT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* 06 // WHO WE WORK WITH */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              06 // CLIENT PARTNERSHIPS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Who We Create Content For
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            We partner with ambitious organizations and visionary creators who recognize that a generic social presence costs more than it saves.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeWorkWith.map((item) => (
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

      {/* 07 // OUR SOCIAL MEDIA PROCESS */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              07 // OUR METHODOLOGY
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Our Social Media Process
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
          {socialProcess.map((step) => (
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

      {/* 08 // WHY NOVEXA */}
      <section className="space-y-12">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              08 // THE NOVEXA DIFFERENCE
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Why Choose NOVEXA for Social Media Management
            </h2>
            <p className="font-sans text-base text-stone-700 font-light leading-relaxed">
              Based in Vadodara, Gujarat, NOVEXA operates as a dedicated creative partner for brands across Gujarat (Vadodara, Ahmedabad, Surat), throughout India, and internationally. We combine deep strategic thinking with art-directed visual craft so your social media presence reflects true quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-stone-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Strategy & Design Together</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                We do not create visuals without purpose. Every design and reel is grounded in audience psychology and clear brand positioning.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Premium Art Direction</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Say goodbye to generic stock Canva templates. We craft bespoke visual assets that elevate your perceived brand equity.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Practical Content Systems</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Organized monthly production batches that remove daily operational headaches and ensure dependable publishing.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <h3 className="editorial-title text-lg font-medium">Digital-First Thinking</h3>
              </div>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed pl-6">
                Because we also build brand identities and digital web platforms, your social media presence integrates seamlessly with your broader business.
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
              <span>Explore all agency capabilities</span>
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

      {/* 09 // SELECTED SOCIAL MEDIA WORK */}
      <section id="selected-work" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              09 // PROVEN WORK
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Selected Social Media & Content Work
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Real client campaigns highlighting our commitment to art direction, typographic clarity, and audience engagement.
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
            Answers to common questions about our social media management workflow, content deliverables, review processes, and packages.
          </p>
        </div>

        <SocialMediaManagementFAQ items={faqItems} />
      </section>

      {/* 11 // FINAL CALL TO ACTION */}
      <section>
        <div className="bg-charcoal text-ivory rounded-3xl p-10 md:p-20 bg-grain border border-stone-800 text-center space-y-8 relative overflow-hidden shadow-luxury">
          <span className="font-mono text-xs text-gold tracking-widest uppercase">
            11 // ELEVATE YOUR SOCIAL PRESENCE
          </span>

          <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Build a Social Media Presence People{" "}
            <span className="italic text-gold">Notice?</span>
          </h2>

          <p className="font-sans text-sm md:text-base text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Whether upgrading an existing Instagram presence or establishing a consistent monthly content system, let&apos;s build an audience that values what you do.
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
