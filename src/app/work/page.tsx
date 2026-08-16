"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Work & Portfolio — NOVEXA",
    url: "https://novexaagency.com/work",
    description:
      "Explore selected work and case studies by NOVEXA across UI/UX, brand identity, graphic design, social media content, and motion video.",
    provider: {
      "@type": "Organization",
      name: "NOVEXA AGENCY",
      url: "https://novexaagency.com",
    },
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
        name: "Work",
        item: "https://novexaagency.com/work",
      },
    ],
  };

  const categories = ["ALL", "UI/UX", "LOGO", "GRAPHIC DESIGN", "SOCIAL MEDIA", "VIDEO"];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projectsData
      : projectsData.filter((p) =>
          p.category.toLowerCase() === selectedCategory.toLowerCase() ||
          p.categories.some((cat) => cat.toLowerCase() === selectedCategory.toLowerCase())
        );

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header */}
      <div className="space-y-6 max-w-4xl">
        <span className="font-mono text-xs text-gold tracking-widest uppercase block">
          PORTFOLIO ARCHIVE
        </span>
        <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light text-charcoal leading-tight">
          SELECTED WORK{" "}
          <span className="italic font-normal text-stone-400">
            ({filteredProjects.length})
          </span>
        </h1>
        <p className="font-sans text-base text-stone-600 font-light leading-relaxed">
          A collection of selected projects spanning digital experiences, visual identities, graphic design, social content and motion.
        </p>
      </div>

      {/* Filter Row */}
      <div className="flex flex-wrap items-center gap-3 border-b border-stone-200 pb-6 font-mono text-xs">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-[1px] ${
                isActive
                  ? "bg-charcoal text-ivory border border-gold font-semibold shadow-sm flex items-center gap-2"
                  : "bg-white/60 text-stone-600 border border-stone-200 hover:text-charcoal hover:bg-stone-200"
              }`}
              data-cursor="FILTER"
            >
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Animated Project Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-24 text-center space-y-4 glass-card rounded-3xl border border-stone-200">
          <span className="font-mono text-xs text-gold tracking-widest uppercase block">
            COMING SOON
          </span>
          <h3 className="editorial-title text-3xl font-light text-charcoal">
            MORE WORK COMING SOON.
          </h3>
          <p className="font-sans text-xs text-stone-500 font-light max-w-sm mx-auto">
            Our team is preparing new case studies for this category. Check back soon.
          </p>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isFullWidth = project.featured || (idx % 4 === 0);
              const colSpan = isFullWidth ? "lg:col-span-12" : "lg:col-span-6";
              const aspect = isFullWidth ? "aspect-[16/9]" : "aspect-[4/3]";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={colSpan}
                >
                  <ProjectCard project={project} aspectRatio={aspect} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
