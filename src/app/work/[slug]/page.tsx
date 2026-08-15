import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Play } from "lucide-react";
import { projectsData } from "@/lib/data/projects";

export function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — NOVEXA AGENCY`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const projectIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const project = projectsData[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];
  const isVideo = project.type === "video" && !!project.videoSrc;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16 space-y-16">
      {/* Back Link */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 font-mono text-xs text-stone-500 hover:text-gold transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> BACK TO PORTFOLIO
      </Link>

      {/* Case Study Header */}
      <div className="space-y-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-gold">
          <span className="px-3 py-1 rounded-full bg-stone-200 text-charcoal font-semibold uppercase flex items-center gap-1.5">
            {isVideo && <Play className="w-3 h-3 fill-charcoal" />}
            {project.category}
          </span>
          <span>// {project.year}</span>
          <span>// CLIENT: {project.client}</span>
        </div>

        <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light text-charcoal leading-tight">
          {project.title}
        </h1>

        <p className="font-sans text-lg md:text-xl text-stone-700 font-light leading-relaxed">
          {project.subtitle}
        </p>
      </div>

      {/* Hero Media (Video or Image) */}
      <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden glass-card border border-stone-200 shadow-luxury bg-charcoal">
        {isVideo ? (
          <video
            src={project.videoSrc}
            controls
            autoPlay
            muted
            loop
            playsInline
            poster={project.thumbnail}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}
      </div>

      {/* Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-stone-200">
        <div className="lg:col-span-4 space-y-6">
          <div>
            <span className="font-mono text-xs text-stone-400 tracking-widest uppercase block mb-1">
              CATEGORIES
            </span>
            <div className="flex flex-wrap gap-1 font-mono text-xs text-charcoal">
              {project.categories.map((cat, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-stone-200 font-medium">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-xs text-stone-400 tracking-widest uppercase block mb-1">
              YEAR
            </span>
            <span className="font-mono text-sm text-charcoal">{project.year}</span>
          </div>

          <div>
            <span className="font-mono text-xs text-stone-400 tracking-widest uppercase block mb-1">
              CLIENT
            </span>
            <span className="font-mono text-sm text-charcoal">{project.client}</span>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-12">
          {/* Summary */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              01 // OVERVIEW
            </span>
            <p className="font-sans text-base md:text-lg text-stone-700 font-light leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              02 // THE CHALLENGE
            </span>
            <p className="font-sans text-base text-stone-700 font-light leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Approach */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              03 // THE APPROACH & EXECUTION
            </span>
            <p className="font-sans text-base text-stone-700 font-light leading-relaxed">
              {project.approach}
            </p>
            <ul className="space-y-2 pt-2 font-mono text-xs text-stone-800">
              {project.designHighlights.map((h, hIdx) => (
                <li key={hIdx} className="flex items-center gap-2">
                  <span className="text-gold">✦</span> {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Result */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block">
              04 // THE RESULT
            </span>
            <p className="font-sans text-base text-stone-700 font-light leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Gallery */}
      {project.gallery.length > 0 && (
        <div className="space-y-8 pt-12 border-t border-stone-200">
          <span className="font-mono text-xs text-gold tracking-widest uppercase block">
            VISUAL ASSETS & PRESENTATION
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, gIdx) => (
              <div
                key={gIdx}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass-card border border-stone-200 shadow-luxury group"
              >
                <Image
                  src={img}
                  alt={`${project.title} asset ${gIdx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next Project Link */}
      <div className="bg-charcoal text-ivory rounded-3xl p-10 md:p-16 bg-grain flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
            NEXT CASE STUDY
          </span>
          <h2 className="editorial-title text-3xl md:text-5xl font-light text-ivory">
            {nextProject.title}
          </h2>
        </div>

        <Link
          href={`/work/${nextProject.slug}`}
          data-cursor="NEXT"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-charcoal font-mono text-xs tracking-widest font-semibold hover:bg-ivory hover:text-charcoal transition-all"
        >
          <span>VIEW NEXT PROJECT</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
