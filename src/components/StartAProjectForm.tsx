"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Copy, Check, ChevronDown, AlertCircle, ArrowUpRight } from "lucide-react";

interface RoleOption {
  num: string;
  label: string;
}

const roleOptions: RoleOption[] = [
  { num: "01", label: "Founder" },
  { num: "02", label: "Co-Founder" },
  { num: "03", label: "Marketing" },
  { num: "04", label: "Design" },
  { num: "05", label: "Product" },
  { num: "06", label: "Other" },
];

interface ServiceOption {
  num: string;
  label: string;
}

const serviceOptions: ServiceOption[] = [
  { num: "01", label: "Brand Identity" },
  { num: "02", label: "Logo Design" },
  { num: "03", label: "UI/UX Design" },
  { num: "04", label: "Website Design" },
  { num: "05", label: "Website Development" },
  { num: "06", label: "E-commerce Website" },
  { num: "07", label: "App Design" },
  { num: "08", label: "App Development" },
  { num: "09", label: "Social Media" },
  { num: "10", label: "Video Editing" },
  { num: "11", label: "Marketing" },
  { num: "12", label: "Other" },
];

const goalPrompts = [
  "MORE CUSTOMERS",
  "STRONGER BRAND",
  "BETTER CONVERSIONS",
  "NEW DIGITAL PRODUCT",
  "NEW LAUNCH",
  "SOCIAL GROWTH",
];

const assetOptions = [
  "Yes — Logo",
  "Yes — Brand Guidelines",
  "Yes — Content",
  "Yes — Website",
  "Yes — Social Media",
  "No — Starting From Scratch",
  "Other",
];

const timelineOptions = [
  "AS SOON AS POSSIBLE",
  "WITHIN 2 WEEKS",
  "WITHIN 1 MONTH",
  "1–3 MONTHS",
  "3+ MONTHS",
  "NOT SURE YET",
];

const investmentOptions = [
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "₹2,50,000+",
  "I'M NOT SURE YET",
  "CUSTOM BUDGET",
];

interface ProgressStep {
  id: string;
  num: string;
  label: string;
}

const progressSteps: ProgressStep[] = [
  { id: "sec-about", num: "01", label: "ABOUT YOU" },
  { id: "sec-business", num: "02", label: "BUSINESS" },
  { id: "sec-project", num: "03", label: "PROJECT" },
  { id: "sec-direction", num: "04", label: "DIRECTION" },
  { id: "sec-timeline", num: "05", label: "TIMELINE" },
  { id: "sec-action", num: "06", label: "FINAL" },
];

export function StartAProjectForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectDescription, setProjectDescription] = useState("");
  const [goals, setGoals] = useState("");
  const [references, setReferences] = useState("");
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [investment, setInvestment] = useState("");
  const [customBudget, setCustomBudget] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [validationError, setValidationError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [prepStatus, setPrepStatus] = useState<string | null>(null);
  const [dossierHighlight, setDossierHighlight] = useState(false);
  const [activeStepId, setActiveStepId] = useState<string>("sec-about");
  const [mobileDossierOpen, setMobileDossierOpen] = useState(false);

  // Currency helper formatting Indian Rupees (e.g. 75000 -> ₹75,000)
  const formatIndianCurrency = (rawInput: string): string => {
    const digits = rawInput.replace(/\D/g, "");
    if (!digits) return "";
    const num = parseInt(digits, 10);
    if (isNaN(num)) return "";
    return "₹" + num.toLocaleString("en-IN");
  };

  const getEffectiveInvestment = (): string => {
    if (investment === "CUSTOM BUDGET" || investment === "ENTER YOUR BUDGET") {
      return customBudget.trim() ? formatIndianCurrency(customBudget) : "";
    }
    return investment;
  };

  // Trigger dossier highlight animation on change
  const triggerDossierHighlight = () => {
    setDossierHighlight(true);
    setTimeout(() => setDossierHighlight(false), 500);
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 250;
          for (let i = progressSteps.length - 1; i >= 0; i--) {
            const el = document.getElementById(progressSteps[i].id);
            if (el && el.offsetTop <= scrollPos) {
              const nextId = progressSteps[i].id;
              setActiveStepId((prev) => (prev !== nextId ? nextId : prev));
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleService = (service: string) => {
    triggerDossierHighlight();
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const toggleAsset = (asset: string) => {
    triggerDossierHighlight();
    setSelectedAssets((prev) =>
      prev.includes(asset) ? prev.filter((a) => a !== asset) : [...prev, asset]
    );
  };

  const addGoalPrompt = (promptText: string) => {
    triggerDossierHighlight();
    setGoals((prev) => {
      if (prev.includes(promptText)) return prev;
      return prev ? `${prev}, ${promptText}` : promptText;
    });
  };

  const isValidEmail = (str: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str.trim());
  };

  const validateForm = (): boolean => {
    if (!fullName.trim()) {
      setValidationError("Please enter your full name.");
      return false;
    }
    if (!email.trim() || !isValidEmail(email)) {
      setValidationError("Please enter a valid email address.");
      return false;
    }
    if (!phone.trim()) {
      setValidationError("Please enter your Phone / WhatsApp number.");
      return false;
    }
    if (selectedServices.length === 0) {
      setValidationError("Please select at least one service required from NOVEXA.");
      return false;
    }
    if (!projectDescription.trim()) {
      setValidationError("Please describe your project requirements.");
      return false;
    }
    if ((investment === "CUSTOM BUDGET" || investment === "ENTER YOUR BUDGET") && !customBudget.trim()) {
      setValidationError("Please enter your budget.");
      return false;
    }

    setValidationError(null);
    return true;
  };

  const buildFormattedBrief = (): string => {
    const sections: string[] = [];

    // Title
    sections.push("*NOVEXA — NEW PROJECT BRIEF*\n\nI'd like to discuss a project with your agency.");

    // Section 1: ABOUT YOU
    const aboutYouFields: string[] = [];
    if (fullName.trim()) aboutYouFields.push(`*Name:* **${fullName.trim()}**`);
    if (email.trim()) aboutYouFields.push(`*Email:* **${email.trim()}**`);
    if (phone.trim()) aboutYouFields.push(`*Phone / WhatsApp:* **${phone.trim()}**`);
    if (company.trim()) aboutYouFields.push(`*Company / Brand:* **${company.trim()}**`);
    if (role.trim()) aboutYouFields.push(`*Role:* **${role.trim()}**`);
    if (aboutYouFields.length > 0) {
      sections.push(`*ABOUT YOU*\n\n${aboutYouFields.join("\n\n")}`);
    }

    // Section 2: BUSINESS
    if (businessDescription.trim()) {
      sections.push(`*BUSINESS*\n\n*About the Business:*\n\n${businessDescription.trim()}`);
    }

    // Section 3: PROJECT
    const projectItems: string[] = [];

    // Services Required as Vertical Bullet List
    if (selectedServices.length > 0) {
      const serviceBullets = selectedServices.map((s) => `• ${s}`).join("\n");
      projectItems.push(`*Services Required:*\n\n${serviceBullets}`);
    }

    // Project Description
    if (projectDescription.trim()) {
      if (projectDescription.trim().length < 40 && !projectDescription.includes("\n")) {
        projectItems.push(`*Project:* **${projectDescription.trim()}**`);
      } else {
        projectItems.push(`*Project Requirements:*\n\n${projectDescription.trim()}`);
      }
    }

    // Goals as Vertical Bullet List
    if (goals.trim()) {
      const goalList = goals
        .split(",")
        .map((g) => g.trim())
        .filter(Boolean);

      if (goalList.length > 1) {
        const formattedGoals = goalList
          .map((g) => {
            const lower = g.toLowerCase();
            const capital = lower.charAt(0).toUpperCase() + lower.slice(1);
            return `• ${capital}`;
          })
          .join("\n");
        projectItems.push(`*Goals:*\n\n${formattedGoals}`);
      } else {
        projectItems.push(`*Goals:*\n\n${goals.trim()}`);
      }
    }

    // References / Inspiration
    if (references.trim()) {
      projectItems.push(`*References / Inspiration:*\n\n${references.trim()}`);
    } else {
      projectItems.push(`*References / Inspiration:*\n\nNo references provided.`);
    }

    // Brand Assets as Vertical Bullet List
    if (selectedAssets.length > 0) {
      const assetBullets = selectedAssets
        .map((a) => {
          const cleanAsset = a.replace(/^Yes —\s*/i, "").replace(/^No —\s*/i, "");
          return `• ${cleanAsset}`;
        })
        .join("\n");
      projectItems.push(`*Brand Assets:*\n\n${assetBullets}`);
    }

    if (projectItems.length > 0) {
      sections.push(`*PROJECT*\n\n${projectItems.join("\n\n")}`);
    }

    // Section 4: TIMELINE & INVESTMENT
    const effInv = getEffectiveInvestment();
    const timeInvFields: string[] = [];
    if (timeline.trim()) {
      const lowerT = timeline.trim().toLowerCase();
      const capT = lowerT.charAt(0).toUpperCase() + lowerT.slice(1);
      timeInvFields.push(`*Timeline:* **${capT}**`);
    }
    if (effInv.trim()) {
      timeInvFields.push(`*Budget:* **${effInv.trim()}**`);
    }
    if (timeInvFields.length > 0) {
      sections.push(`*TIMELINE & INVESTMENT*\n\n${timeInvFields.join("\n\n")}`);
    }

    // Section 5: ADDITIONAL INFORMATION
    if (additionalNotes.trim()) {
      sections.push(`*ADDITIONAL INFORMATION*\n\n${additionalNotes.trim()}`);
    }

    // Footer Signature
    sections.push("────────────────────────\n\nSubmitted via *NOVEXA Agency*\n\nThank you.");

    return sections.join("\n\n\n");
  };

  const handleSendWhatsApp = () => {
    if (!validateForm()) return;

    const briefText = buildFormattedBrief();
    const whatsappUrl = `https://wa.me/919227025524?text=${encodeURIComponent(briefText)}`;
    
    setPrepStatus("Your project brief has been prepared. Complete the send in WhatsApp to reach NOVEXA.");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleSendEmail = () => {
    if (!validateForm()) return;

    const briefText = buildFormattedBrief();
    const clientName = fullName.trim() || company.trim() || "Client";
    const subject = `NOVEXA — New Project Inquiry — ${clientName}`;
    const mailtoUrl = `mailto:work@novexaagency.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(briefText)}`;

    setPrepStatus("Your project brief has been prepared. Complete the send in your mail app to reach NOVEXA.");
    window.location.href = mailtoUrl;
  };

  const handleCopyBrief = () => {
    const briefText = buildFormattedBrief();
    navigator.clipboard.writeText(briefText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToStep = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const activeStepObj = progressSteps.find((s) => s.id === activeStepId) || progressSteps[0];
  const effectiveInvestment = getEffectiveInvestment();

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16 space-y-20 relative">
      
      {/* Editorial Hero */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8 max-w-4xl border-b border-stone-300/80 pb-16 relative overflow-hidden"
      >
        {/* Ghosted Background Watermark */}
        <span className="absolute -top-10 right-0 text-[18vw] font-serif font-bold text-stone-900/[0.03] select-none pointer-events-none leading-none">
          BRIEF.
        </span>

        <div className="flex items-center gap-3 relative z-10">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-mono text-xs text-gold tracking-widest uppercase font-semibold">
            START A PROJECT
          </span>
        </div>

        <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-charcoal leading-tight relative z-10">
          LET&apos;S BUILD <br className="hidden sm:inline" />
          SOMETHING <span className="italic text-gold font-normal">REMARKABLE.</span>
        </h1>

        <p className="font-sans text-base md:text-xl text-stone-600 font-light leading-relaxed max-w-2xl relative z-10">
          Tell us what you&apos;re building, where you want to go, and how NOVEXA can help turn the idea into something remarkable.
        </p>

        <div className="pt-4 flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest relative z-10">
          <span>SCROLL TO BEGIN</span>
          <span className="text-gold animate-bounce">↓</span>
        </div>
      </motion.div>

      {/* Mobile Sticky Progress & Dossier Toggle Header */}
      <div className="lg:hidden sticky top-24 z-30 bg-stone-100/95 border border-stone-200 rounded-2xl p-4 flex items-center justify-between backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-2 font-mono text-xs text-charcoal font-semibold uppercase">
          <span className="text-gold">✦</span>
          <span>{activeStepObj.num} / 06</span>
          <span className="text-stone-400">// {activeStepObj.label}</span>
        </div>

        <button
          onClick={() => setMobileDossierOpen(!mobileDossierOpen)}
          className="font-mono text-xs text-gold underline uppercase flex items-center gap-1"
        >
          <span>DOSSIER</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${mobileDossierOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Mobile Expandable Dossier Card */}
      {mobileDossierOpen && (
        <div className="lg:hidden glass-card p-6 rounded-2xl border border-stone-200 space-y-4 font-mono text-xs bg-white/95">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <span className="text-charcoal font-bold">PROJECT DOSSIER</span>
            <span className="text-gold text-[10px]">LIVE PREVIEW</span>
          </div>

          <div className="space-y-2">
            {fullName.trim() && <div><span className="text-stone-400 block text-[9px]">CLIENT</span>{fullName.trim()}</div>}
            {company.trim() && <div><span className="text-stone-400 block text-[9px]">COMPANY</span>{company.trim()}</div>}
            {selectedServices.length > 0 && <div><span className="text-stone-400 block text-[9px]">SERVICES</span><span className="text-gold">{selectedServices.join(", ")}</span></div>}
            {timeline.trim() && <div><span className="text-stone-400 block text-[9px]">TIMELINE</span>{timeline.trim()}</div>}
            {effectiveInvestment && <div><span className="text-stone-400 block text-[9px]">INVESTMENT</span>{effectiveInvestment}</div>}
          </div>
        </div>
      )}

      {/* Master 3-Column Desktop Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        
        {/* Desktop Slim Sticky Progress Rail */}
        <aside className="hidden lg:block lg:col-span-2 sticky top-32 space-y-6">
          <div className="font-mono text-[10px] text-stone-400 tracking-widest uppercase mb-4 border-b border-stone-200 pb-2">
            PROGRESS
          </div>
          <nav className="space-y-3 font-mono text-xs">
            {progressSteps.map((step) => {
              const isActive = activeStepId === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => scrollToStep(step.id)}
                  className={`w-full text-left transition-all duration-300 flex items-center gap-2 group ${
                    isActive ? "text-gold font-semibold pl-2 border-l-2 border-gold" : "text-stone-500 hover:text-charcoal"
                  }`}
                >
                  <span className={isActive ? "text-gold" : "text-stone-400 group-hover:text-gold"}>
                    {step.num}
                  </span>
                  <span className="truncate">{step.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Center Main Form Column */}
        <div className="lg:col-span-7 space-y-20">
          
          {/* SECTION 01 — ABOUT YOU */}
          <section id="sec-about" className="space-y-8 scroll-mt-32 border-b border-stone-300/80 pb-16">
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold tracking-widest font-semibold uppercase block">
                01 // ABOUT YOU
              </span>
              <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
                LET&apos;S START WITH YOU.
              </h2>
              <p className="font-sans text-sm md:text-base text-stone-600 font-light leading-relaxed">
                A few details help us understand who we&apos;re working with.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
              <div className="space-y-2">
                <label htmlFor="full-name" className="block text-xs font-mono text-charcoal uppercase font-medium">
                  FULL NAME *
                </label>
                <input
                  id="full-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    triggerDossierHighlight();
                  }}
                  placeholder="e.g. Hetvi Patel"
                  className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-stone-300/80 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none text-charcoal text-sm transition-all shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono text-charcoal uppercase font-medium">
                  EMAIL *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    triggerDossierHighlight();
                  }}
                  placeholder="e.g. name@company.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-stone-300/80 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none text-charcoal text-sm transition-all shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs font-mono text-charcoal uppercase font-medium">
                  PHONE / WHATSAPP *
                </label>
                <input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    triggerDossierHighlight();
                  }}
                  placeholder="e.g. +91 92270 25524"
                  className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-stone-300/80 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none text-charcoal text-sm transition-all shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block text-xs font-mono text-charcoal uppercase font-medium">
                  COMPANY / BRAND NAME
                </label>
                <input
                  id="company"
                  type="text"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                    triggerDossierHighlight();
                  }}
                  placeholder="e.g. NOVEXA Agency"
                  className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-stone-300/80 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none text-charcoal text-sm transition-all shadow-sm"
                />
              </div>

              {/* Role Selection */}
              <div className="sm:col-span-2 space-y-3 pt-2">
                <label id="role-label" className="block text-xs font-mono text-charcoal uppercase font-medium">
                  ROLE / POSITION
                </label>
                <div aria-labelledby="role-label" className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                  {roleOptions.map((r) => {
                    const isSelected = role === r.label;
                    return (
                      <button
                        key={r.label}
                        type="button"
                        onClick={() => {
                          setRole(isSelected ? "" : r.label);
                          triggerDossierHighlight();
                        }}
                        className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between hover:-translate-y-1 ${
                          isSelected
                            ? "bg-charcoal text-white border-gold shadow-md"
                            : "bg-ivory text-stone-700 border-stone-300/80 hover:border-stone-400"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={isSelected ? "text-gold" : "text-stone-400"}>{r.num}</span>
                          <span className="font-medium">{r.label}</span>
                        </div>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 02 — YOUR BUSINESS */}
          <section id="sec-business" className="space-y-6 scroll-mt-32 border-b border-stone-300/80 pb-16">
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold tracking-widest font-semibold uppercase block">
                02 // YOUR BUSINESS
              </span>
              <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
                GIVE US THE CONTEXT.
              </h2>
              <p className="font-sans text-sm md:text-base text-stone-600 font-light leading-relaxed">
                The better we understand your business, the better we can shape the right solution.
              </p>
            </div>

            <div className="space-y-2 font-sans">
              <div className="flex justify-between items-center">
                <label htmlFor="business-desc" className="block text-xs font-mono text-charcoal uppercase font-medium">
                  TELL US ABOUT YOUR BUSINESS
                </label>
                <span className="font-mono text-[10px] text-stone-400">
                  {businessDescription.length} / 800
                </span>
              </div>
              <textarea
                id="business-desc"
                rows={4}
                maxLength={800}
                value={businessDescription}
                onChange={(e) => {
                  setBusinessDescription(e.target.value);
                  triggerDossierHighlight();
                }}
                placeholder="What does your business do? Who are your customers? What are you building or growing?"
                className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-stone-300/80 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none text-charcoal text-sm transition-all leading-relaxed shadow-sm"
              />
            </div>
          </section>

          {/* SECTION 03 — YOUR PROJECT */}
          <section id="sec-project" className="space-y-10 scroll-mt-32 border-b border-stone-300/80 pb-16">
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold tracking-widest font-semibold uppercase block">
                03 // YOUR PROJECT
              </span>
              <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
                WHAT ARE WE BUILDING?
              </h2>
              <p className="font-sans text-sm md:text-base text-stone-600 font-light leading-relaxed">
                Select everything you think you need. We&apos;ll help define the right scope together.
              </p>
            </div>

            {/* Service Selection */}
            <div className="space-y-3 font-sans">
              <label id="services-label" className="block text-xs font-mono text-charcoal uppercase font-medium">
                WHAT DO YOU NEED FROM NOVEXA? *
              </label>
              <div aria-labelledby="services-label" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
                {serviceOptions.map((s) => {
                  const isSelected = selectedServices.includes(s.label);
                  return (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => toggleService(s.label)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between hover:-translate-y-1 ${
                        isSelected
                          ? "bg-charcoal text-white border-gold shadow-md"
                          : "bg-ivory text-stone-700 border-stone-300/80 hover:border-stone-400"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className={isSelected ? "text-gold" : "text-stone-400"}>{s.num}</span>
                        <span className="font-medium truncate">{s.label}</span>
                      </div>
                      <span className={`text-xs font-bold ${isSelected ? "text-gold" : "text-stone-400"}`}>↗</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detailed Project Description */}
            <div className="space-y-2 font-sans">
              <div className="flex justify-between items-center">
                <label htmlFor="project-desc" className="block text-xs font-mono text-charcoal uppercase font-medium">
                  WHAT SHOULD WE CREATE? *
                </label>
                <span className="font-mono text-[10px] text-stone-400">
                  {projectDescription.length} / 1200
                </span>
              </div>
              <textarea
                id="project-desc"
                rows={5}
                maxLength={1200}
                value={projectDescription}
                onChange={(e) => {
                  setProjectDescription(e.target.value);
                  triggerDossierHighlight();
                }}
                placeholder="Describe what you want NOVEXA to create, redesign, develop, or improve."
                className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-stone-300/80 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none text-charcoal text-sm transition-all leading-relaxed shadow-sm"
              />
            </div>

            {/* Main Goals & Prompts */}
            <div className="space-y-3 font-sans">
              <label htmlFor="project-goals" className="block text-xs font-mono text-charcoal uppercase font-medium">
                WHAT WOULD SUCCESS LOOK LIKE?
              </label>
              <textarea
                id="project-goals"
                rows={3}
                value={goals}
                onChange={(e) => {
                  setGoals(e.target.value);
                  triggerDossierHighlight();
                }}
                placeholder="What would make this project successful for you?"
                className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-stone-300/80 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none text-charcoal text-sm transition-all leading-relaxed shadow-sm"
              />
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="font-mono text-[10px] text-stone-400 uppercase py-1">PROMPTS:</span>
                {goalPrompts.map((promptText) => (
                  <button
                    key={promptText}
                    type="button"
                    onClick={() => addGoalPrompt(promptText)}
                    className="px-3 py-1 rounded-full bg-stone-200/70 hover:bg-gold hover:text-charcoal text-charcoal font-mono text-[10px] transition-colors"
                  >
                    + {promptText}
                  </button>
                ))}
              </div>
            </div>

            {/* Inspiration Links */}
            <div className="space-y-2 font-sans">
              <label htmlFor="project-refs" className="block text-xs font-mono text-charcoal uppercase font-medium flex items-center justify-between">
                <span>REFERENCE / INSPIRATION</span>
                <span className="text-gold font-mono">↗</span>
              </label>
              <textarea
                id="project-refs"
                rows={3}
                value={references}
                onChange={(e) => {
                  setReferences(e.target.value);
                  triggerDossierHighlight();
                }}
                placeholder="Have a website, Instagram profile, Pinterest board, competitor, or reference you like?"
                className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-stone-300/80 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none text-charcoal text-sm transition-all leading-relaxed shadow-sm"
              />
            </div>

            {/* Existing Brand Assets */}
            <div className="space-y-3 font-sans">
              <label id="assets-label" className="block text-xs font-mono text-charcoal uppercase font-medium">
                DO YOU ALREADY HAVE BRAND ASSETS?
              </label>
              <div aria-labelledby="assets-label" className="flex flex-wrap gap-2.5 font-mono text-xs">
                {assetOptions.map((asset) => {
                  const isSelected = selectedAssets.includes(asset);
                  return (
                    <button
                      key={asset}
                      type="button"
                      onClick={() => toggleAsset(asset)}
                      className={`px-4 py-2.5 rounded-full transition-all duration-300 border ${
                        isSelected
                          ? "bg-charcoal text-gold border-gold font-semibold shadow-sm"
                          : "bg-ivory text-stone-700 border-stone-300/80 hover:border-stone-400"
                      }`}
                    >
                      {asset}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SECTION 04 — CREATIVE DIRECTION MOMENT */}
          <section id="sec-direction" className="scroll-mt-32 border-b border-stone-300/80 pb-16 py-6">
            <div className="glass-card p-8 md:p-12 rounded-3xl border border-stone-300/80 shadow-luxury space-y-4 bg-gradient-to-br from-white/90 via-stone-100/60 to-gold/10">
              <span className="font-mono text-xs text-gold tracking-widest uppercase font-semibold block">
                04 // DIRECTION
              </span>
              <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal leading-tight">
                GOOD DESIGN <br />
                STARTS WITH <span className="italic text-gold font-normal">GOOD DIRECTION.</span>
              </h2>
              <p className="font-sans text-stone-600 font-light text-sm md:text-base leading-relaxed max-w-xl">
                These details help us understand your schedule, scope, and budget.
              </p>
            </div>
          </section>

          {/* SECTION 05 — TIMELINE & INVESTMENT */}
          <section id="sec-timeline" className="space-y-10 scroll-mt-32 border-b border-stone-300/80 pb-16">
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold tracking-widest font-semibold uppercase block">
                05 // TIMELINE & INVESTMENT
              </span>
              <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
                WHEN ARE WE MAKING THIS HAPPEN?
              </h2>
            </div>

            {/* Timeline Options */}
            <div className="space-y-3 font-sans">
              <label id="timeline-label" className="block text-xs font-mono text-charcoal uppercase font-medium">
                START TIMELINE
              </label>
              <div aria-labelledby="timeline-label" className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                {timelineOptions.map((t) => {
                  const isSelected = timeline === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => {
                        setTimeline(isSelected ? "" : t);
                        triggerDossierHighlight();
                      }}
                      className={`p-3.5 rounded-xl border text-center transition-all duration-300 ${
                        isSelected
                          ? "bg-charcoal text-gold border-gold font-semibold shadow-md"
                          : "bg-ivory text-stone-700 border-stone-300/80 hover:border-stone-400"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Investment Options with Custom Budget Input Integration */}
            <div className="space-y-3 font-sans pt-4">
              <h3 className="editorial-title text-2xl md:text-3xl font-light text-charcoal">
                WHAT RANGE ARE YOU WORKING WITH?
              </h3>
              <p className="font-sans text-xs text-stone-500 font-light">
                This helps us recommend the right scope and plan for your project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs pt-2">
                {investmentOptions.map((inv) => {
                  const isSelected = investment === inv;
                  return (
                    <button
                      key={inv}
                      type="button"
                      onClick={() => {
                        setInvestment(isSelected ? "" : inv);
                        triggerDossierHighlight();
                      }}
                      className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between ${
                        isSelected
                          ? "bg-charcoal text-gold border-gold font-semibold shadow-md"
                          : "bg-ivory text-stone-700 border-stone-300/80 hover:border-stone-400"
                      }`}
                    >
                      <span>{inv}</span>
                      {isSelected && <span className="text-gold">✦</span>}
                    </button>
                  );
                })}
              </div>

              {/* Custom Budget Input Field (Revealed when CUSTOM BUDGET is selected) */}
              {(investment === "CUSTOM BUDGET" || investment === "ENTER YOUR BUDGET") && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-4 space-y-2 font-sans"
                >
                  <label htmlFor="custom-budget-input" className="block text-xs font-mono text-charcoal uppercase font-medium">
                    YOUR BUDGET
                  </label>
                  <input
                    id="custom-budget-input"
                    type="text"
                    value={customBudget ? formatIndianCurrency(customBudget) : ""}
                    onChange={(e) => {
                      const rawDigits = e.target.value.replace(/\D/g, "");
                      setCustomBudget(rawDigits);
                      triggerDossierHighlight();
                    }}
                    placeholder="Enter your approximate budget"
                    className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-gold focus:ring-1 focus:ring-gold focus:outline-none text-charcoal text-sm transition-all shadow-sm font-mono"
                  />
                  <p className="font-sans text-[11px] text-stone-500 font-light">
                    Enter your estimated budget in INR (digits are automatically formatted into Indian currency).
                  </p>
                </motion.div>
              )}
            </div>
          </section>

          {/* SECTION 06 — ADDITIONAL INFORMATION */}
          <section className="space-y-6 border-b border-stone-300/80 pb-16">
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold tracking-widest font-semibold uppercase block">
                ANYTHING WE MISSED?
              </span>
              <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
                ADDITIONAL INFORMATION
              </h2>
              <p className="font-sans text-sm text-stone-600 font-light leading-relaxed">
                Anything else you&apos;d like us to know before we start?
              </p>
            </div>

            <div className="space-y-2 font-sans">
              <textarea
                id="additional-notes"
                rows={3}
                value={additionalNotes}
                onChange={(e) => {
                  setAdditionalNotes(e.target.value);
                  triggerDossierHighlight();
                }}
                placeholder="Share any special notes, deadlines, or launch dates."
                className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-stone-300/80 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none text-charcoal text-sm transition-all leading-relaxed shadow-sm"
              />
            </div>
          </section>

          {/* Visual Pause Statement */}
          <div className="text-center py-6 space-y-2">
            <p className="editorial-title text-xl md:text-3xl text-stone-500 font-light">
              THERE&apos;S NO PERFECT BRIEF. JUST A GOOD PLACE TO START.
            </p>
            <span className="font-mono text-xs text-gold uppercase tracking-widest font-bold block">
              NOVEXA.
            </span>
          </div>

          {/* SECTION 07 — FINAL ACTION AREA */}
          <section id="sec-action" className="space-y-8 scroll-mt-32">
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold tracking-widest font-semibold uppercase block">
                06 // READY WHEN YOU ARE
              </span>
              <h2 className="editorial-title text-4xl sm:text-6xl font-light text-charcoal leading-tight">
                YOUR IDEA <br />
                IS READY TO MOVE.
              </h2>
              <p className="font-sans text-stone-600 font-light text-base leading-relaxed max-w-xl">
                You&apos;ve given us everything we need to understand the direction. Choose how you&apos;d like to send your project brief to NOVEXA.
              </p>
            </div>

            {/* Validation Warning */}
            {validationError && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 font-mono text-xs"
              >
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>{validationError}</span>
              </motion.div>
            )}

            {/* Preparation Banner */}
            {prepStatus && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-mono text-xs"
              >
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{prepStatus}</span>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-gold/40 shadow-glass-gold space-y-6 bg-gradient-to-br from-white/95 via-stone-50/90 to-gold/10">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  data-cursor="TALK"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold text-charcoal font-mono text-xs tracking-widest font-semibold hover:bg-charcoal hover:text-ivory transition-all duration-300 shadow-glass-gold group"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>SEND VIA WHATSAPP</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  data-cursor="TALK"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-charcoal text-ivory font-mono text-xs tracking-widest font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4" />
                  <span>SEND VIA EMAIL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              {/* Copy Project Brief */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 bg-white/90 text-stone-700 hover:border-gold hover:text-gold font-mono text-xs transition-all shadow-sm"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "BRIEF COPIED ✓" : "COPY PROJECT BRIEF"}</span>
                </button>
              </div>

              {/* Direct Info & Privacy */}
              <div className="pt-4 border-t border-stone-200/80 space-y-2 text-xs font-mono text-stone-500">
                <div className="flex flex-wrap gap-6">
                  <span>WhatsApp: <strong className="text-charcoal">+91 9227025524</strong></span>
                  <span>Email: <strong className="text-charcoal">work@novexaagency.com</strong></span>
                </div>
                <p className="font-sans text-xs text-stone-500 font-light pt-1 leading-relaxed">
                  Your information is used only to prepare your project inquiry for NOVEXA. Nothing is submitted to a NOVEXA server through this form.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Right Desktop Sticky Live Project Dossier */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32 space-y-4">
          <div
            className={`glass-card p-6 rounded-3xl border shadow-luxury space-y-5 transition-all duration-300 ${
              dossierHighlight ? "border-gold ring-2 ring-gold/30 shadow-glass-gold scale-[1.01]" : "border-stone-200"
            }`}
          >
            <div className="border-b border-stone-200 pb-3">
              <span className="editorial-title text-xl font-bold tracking-tight text-charcoal block">
                NOVEXA<span className="text-gold font-normal">.</span>
              </span>
              <div className="flex items-center justify-between pt-1">
                <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">
                  PROJECT DOSSIER
                </span>
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {fullName.trim() && (
                <div>
                  <span className="text-stone-400 uppercase block text-[9px]">CLIENT</span>
                  <span className="text-charcoal font-semibold">{fullName.trim()}</span>
                </div>
              )}

              {company.trim() && (
                <div>
                  <span className="text-stone-400 uppercase block text-[9px]">COMPANY</span>
                  <span className="text-charcoal font-semibold">{company.trim()}</span>
                </div>
              )}

              {email.trim() && (
                <div>
                  <span className="text-stone-400 uppercase block text-[9px]">EMAIL</span>
                  <span className="text-charcoal truncate block">{email.trim()}</span>
                </div>
              )}

              {phone.trim() && (
                <div>
                  <span className="text-stone-400 uppercase block text-[9px]">PHONE</span>
                  <span className="text-charcoal">{phone.trim()}</span>
                </div>
              )}

              {selectedServices.length > 0 && (
                <div>
                  <span className="text-stone-400 uppercase block text-[9px]">SERVICES</span>
                  <span className="text-gold font-semibold block leading-tight">{selectedServices.join(", ")}</span>
                </div>
              )}

              {timeline.trim() && (
                <div>
                  <span className="text-stone-400 uppercase block text-[9px]">TIMELINE</span>
                  <span className="text-charcoal">{timeline.trim()}</span>
                </div>
              )}

              {effectiveInvestment && (
                <div>
                  <span className="text-stone-400 uppercase block text-[9px]">INVESTMENT</span>
                  <span className="text-charcoal font-semibold">{effectiveInvestment}</span>
                </div>
              )}

              {!fullName.trim() &&
                !email.trim() &&
                !phone.trim() &&
                !company.trim() &&
                selectedServices.length === 0 &&
                !timeline.trim() &&
                !effectiveInvestment && (
                  <p className="font-sans text-xs text-stone-400 font-light italic leading-relaxed">
                    Fill out the brief fields on the left to see your live dossier populate in real-time.
                  </p>
                )}
            </div>

            <div className="pt-3 border-t border-stone-200 space-y-1 font-mono text-[10px] text-stone-500">
              <span className="text-stone-400 uppercase block">DIRECT AGENCY CONTACT</span>
              <p>WhatsApp: +91 9227025524</p>
              <p>Email: work@novexaagency.com</p>
            </div>
          </div>
        </aside>

      </div>

      {/* Pre-Footer Visual Transition */}
      <div className="border-t border-stone-300/80 pt-16 text-center space-y-3">
        <h2 className="editorial-title text-2xl sm:text-4xl md:text-5xl font-light text-charcoal">
          GOOD PROJECTS START WITH <span className="italic text-gold font-normal">GOOD CONVERSATIONS.</span>
        </h2>
        <span className="font-mono text-xs text-stone-400 uppercase tracking-widest block font-semibold">
          NOVEXA AGENCY
        </span>
      </div>
    </div>
  );
}
