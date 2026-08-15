"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  aspectRatio?: "aspect-square" | "aspect-[4/3]" | "aspect-[16/9]" | "aspect-[3/4]" | "aspect-[4/5]";
  className?: string;
}

export function ProjectCard({
  project,
  aspectRatio = "aspect-[4/3]",
  className = "",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isVideo = project.type === "video" && !!project.videoSrc;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isVideo && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Link
      href={`/work/${project.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor={isVideo ? "WATCH" : "VIEW"}
      className={`group block relative overflow-hidden rounded-2xl glass-card transition-all duration-700 hover:shadow-luxury ${className}`}
    >
      <div className={`relative w-full ${aspectRatio} overflow-hidden bg-stone-200`}>
        {/* Poster Image */}
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 ${
            isVideo && isHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video Preview on Hover (Lazy-Loaded) */}
        {isVideo && (
          <video
            ref={videoRef}
            src={project.videoSrc}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-500" />
      </div>

      {/* Card Information Overlay */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-ivory pointer-events-none">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-charcoal/70 backdrop-blur-md border border-ivory/20 font-mono text-[10px] tracking-widest text-gold uppercase flex items-center gap-1.5">
            {isVideo && <Play className="w-2.5 h-2.5 fill-gold text-gold" />}
            {project.category}
          </span>
          <span className="font-mono text-xs text-stone-300">
            {project.year}
          </span>
        </div>

        <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
          <h3 className="editorial-title text-2xl md:text-3xl font-light text-ivory group-hover:text-gold transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-sans text-xs text-stone-300 line-clamp-1 mt-1 font-light opacity-90">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Hover Badge */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gold text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-glass-gold">
        {isVideo ? <Play className="w-4 h-4 fill-current ml-0.5" /> : <ArrowUpRight className="w-5 h-5" />}
      </div>
    </Link>
  );
}
