import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 space-y-6">
      <span className="font-mono text-xs text-gold tracking-widest uppercase">
        ERROR 404
      </span>
      <h1 className="editorial-title text-7xl md:text-9xl font-light text-charcoal">
        404
      </h1>
      <p className="font-sans text-base md:text-lg text-stone-600 font-light max-w-md">
        Looks like this page took a different direction.
      </p>
      <Link
        href="/"
        data-cursor="HOME"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal text-ivory font-mono text-xs tracking-widest font-semibold hover:bg-gold hover:text-charcoal transition-all shadow-luxury"
      >
        <ArrowLeft className="w-4 h-4" /> BACK TO HOMEPAGE
      </Link>
    </div>
  );
}
