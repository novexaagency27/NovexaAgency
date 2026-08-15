import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, CheckCircle, Layers, ShieldCheck, Zap } from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceAccordion } from "@/components/ServiceAccordion";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { FounderCard } from "@/components/FounderCard";
import { projectsData } from "@/lib/data/projects";
import { siteConfig } from "@/lib/data/siteConfig";

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <div className="space-y-24 md:space-y-36 pb-20">
      {/* 01 HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-4 md:pt-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-200/80 border border-stone-300 font-mono text-xs text-charcoal tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>NOVEXA / CREATIVE DIGITAL AGENCY</span>
            </div>

            <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-charcoal leading-[1.05]">
              WE CREATE <span className="italic font-normal">DIGITAL</span> EXPERIENCES THAT PEOPLE{" "}
              <span className="gold-gradient-text font-normal">REMEMBER.</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-stone-700 max-w-2xl font-light leading-relaxed">
              NOVEXA is a creative digital agency blending strategy, visual design, and modern technology to build brands, experiences, and digital products that stand out internationally.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/work"
                data-cursor="EXPLORE"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-charcoal text-ivory font-mono text-xs tracking-widest font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-luxury"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/start-a-project"
                data-cursor="LET'S TALK"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card border border-stone-300 text-charcoal font-mono text-xs tracking-widest font-semibold hover:border-gold hover:text-gold transition-all duration-300"
              >
                <span>LET&apos;S TALK</span>
              </Link>
            </div>

            {/* Metadata badges */}
            <div className="pt-8 border-t border-stone-200/80 flex flex-wrap gap-8 font-mono text-xs text-stone-500">
              <div>
                <span className="text-gold block font-semibold">POSITIONING</span>
                <span>DESIGN × TECHNOLOGY × STRATEGY</span>
              </div>
              <div>
                <span className="text-gold block font-semibold">SERVICES</span>
                <span>LOGO / UI/UX / WEB / DIGITAL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Art-Directed Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-card border border-stone-300 shadow-luxury group">
              <Image
                src="/assets/work/ui-ux/anaqah page.png"
                alt="NOVEXA Featured Case Study — Anaqah Luxury"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-80" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-nav rounded-2xl border border-ivory/30 flex items-center justify-between text-charcoal">
                <div>
                  <span className="font-mono text-[10px] text-gold tracking-widest uppercase block">
                    FEATURED DIRECTORY
                  </span>
                  <span className="editorial-title text-lg font-medium">
                    Anaqah Luxury Platform
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-charcoal">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 MARQUEE TICKER */}
      <Marquee />

      {/* 03 SELECTED WORK SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              01 // PORTFOLIO
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              SELECTED WORK
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Selected projects where strategy, visual design, and technology come together.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card 1: Wide */}
          <div className="md:col-span-8">
            <ProjectCard project={featuredProjects[0]} aspectRatio="aspect-[16/9]" />
          </div>
          {/* Card 2: Square */}
          <div className="md:col-span-4">
            <ProjectCard project={featuredProjects[1]} aspectRatio="aspect-[4/5]" />
          </div>
          {/* Card 3: Square */}
          <div className="md:col-span-5">
            <ProjectCard project={featuredProjects[2]} aspectRatio="aspect-[4/5]" />
          </div>
          {/* Card 4: Wide */}
          <div className="md:col-span-7">
            <ProjectCard project={featuredProjects[3]} aspectRatio="aspect-[16/9]" />
          </div>
        </div>

        <div className="text-center pt-6">
          <Link
            href="/work"
            data-cursor="ALL WORK"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-stone-400 text-charcoal font-mono text-xs tracking-widest font-semibold hover:border-gold hover:text-gold transition-all duration-300"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 04 SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              02 // CAPABILITIES
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              WHAT WE DO
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Creative thinking backed by digital execution across brand strategy, product design, and custom web development.
          </p>
        </div>

        <ServiceAccordion />
      </section>

      {/* 05 ABOUT & PHILOSOPHY SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-stone-200 shadow-luxury space-y-12">
          <div className="max-w-3xl space-y-6">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              03 // ABOUT NOVEXA
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
              DESIGN WITH PURPOSE.<br />
              TECHNOLOGY WITH INTENT.
            </h2>
            <p className="font-sans text-base md:text-lg text-stone-700 font-light leading-relaxed">
              NOVEXA brings creative thinking and digital technology together to help brands communicate better, look sharper, and create experiences people remember.
            </p>
          </div>

          {/* 4 Core Philosophy Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-stone-200">
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold font-semibold">01 //</span>
              <h3 className="editorial-title text-xl font-medium text-charcoal">DESIGN-FIRST</h3>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed">
                We believe design must serve a purpose. Beautiful visual design builds instant trust and leaves a lasting impression.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-gold font-semibold">02 //</span>
              <h3 className="editorial-title text-xl font-medium text-charcoal">DETAIL-OBSESSED</h3>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed">
                From crisp layouts to smooth animations, every detail is carefully crafted for a seamless experience.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-gold font-semibold">03 //</span>
              <h3 className="editorial-title text-xl font-medium text-charcoal">DIGITAL-NATIVE</h3>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed">
                We build fast, responsive websites using modern technology standards.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-gold font-semibold">04 //</span>
              <h3 className="editorial-title text-xl font-medium text-charcoal">BUILT TO STAND OUT</h3>
              <p className="font-sans text-xs text-stone-600 font-light leading-relaxed">
                We never use generic templates. Every project is custom designed to help your brand stand out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              04 // METHODOLOGY
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              FROM IDEA TO IMPACT
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Our clear 5-step process keeps every project organized, transparent, and on schedule.
          </p>
        </div>

        <ProcessTimeline />
      </section>

      {/* 07 FOUNDERS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              05 // LEADERSHIP
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              THE PEOPLE BEHIND NOVEXA
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Combining design, strategy, and engineering to build modern digital products.
          </p>
        </div>

        <FounderCard />
      </section>

      {/* 08 FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-charcoal text-ivory rounded-3xl p-10 md:p-20 bg-grain border border-stone-800 text-center space-y-8 relative overflow-hidden shadow-luxury">
          <span className="font-mono text-xs text-gold tracking-widest uppercase">
            LET&apos;S COLLABORATE
          </span>

          <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight max-w-4xl mx-auto leading-tight">
            LET&apos;S BUILD SOMETHING THAT <span className="italic text-gold">MATTERS.</span>
          </h2>

          <p className="font-sans text-sm md:text-base text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Have a project, idea, or brand that needs a stronger digital presence? Let&apos;s talk about building your digital product.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/start-a-project"
              data-cursor="START"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gold text-charcoal font-mono text-xs tracking-widest font-semibold hover:bg-ivory hover:text-charcoal transition-all duration-300 shadow-glass-gold"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              data-cursor="WORK"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-stone-700 text-stone-300 font-mono text-xs tracking-widest font-semibold hover:border-ivory hover:text-ivory transition-all duration-300"
            >
              <span>VIEW OUR WORK</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
