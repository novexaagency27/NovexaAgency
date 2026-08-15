"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, ArrowUp, ChevronDown, Clock, Calendar, ShieldCheck } from "lucide-react";

interface TocItem {
  id: string;
  num: string;
  title: string;
}

const tocItems: TocItem[] = [
  { id: "terms-conditions", num: "01", title: "Terms & Conditions" },
  { id: "payment-policy", num: "02", title: "Payment Policy" },
  { id: "revision-policy", num: "03", title: "Revision Policy" },
  { id: "refund-cancellation-policy", num: "04", title: "Refund & Cancellation Policy" },
  { id: "project-agreement-timeline", num: "05", title: "Project Agreement & Timeline" },
  { id: "client-responsibilities", num: "06", title: "Client Responsibilities" },
  { id: "agency-responsibilities", num: "07", title: "Agency Responsibilities" },
  { id: "privacy-policy", num: "08", title: "Privacy Policy" },
  { id: "cookie-policy", num: "09", title: "Cookie Policy" },
  { id: "disclaimer", num: "10", title: "Disclaimer" },
  { id: "ownership-intellectual-property", num: "11", title: "Ownership & Intellectual Property" },
  { id: "maintenance-support", num: "12", title: "Maintenance & Support" },
  { id: "additional-operational-policies", num: "13", title: "Additional Operational Policies" },
  { id: "contact-information", num: "14", title: "Contact Information" },
];

export function LegalCenter() {
  const [activeId, setActiveId] = useState<string>("terms-conditions");
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocItems[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTocClick = (id: string) => {
    setActiveId(id);
    setMobileTocOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16 space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-8 max-w-4xl border-b border-stone-300/80 pb-12"
      >
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-gold" />
          <span className="font-mono text-xs text-gold tracking-widest uppercase font-semibold">
            LEGAL CENTER
          </span>
        </div>

        <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light text-charcoal leading-tight">
          Everything You Need Before Working With <span className="italic text-gold font-normal">NOVEXA</span>
        </h1>

        <p className="font-sans text-base md:text-lg text-stone-600 font-light leading-relaxed max-w-3xl">
          Welcome to the NOVEXA Legal Center. Clear communication, transparency, and mutual trust are fundamental to our partnerships. Below you will find all terms, payment policies, revision rules, and agreements in full detail.
        </p>

        {/* Metadata Badge */}
        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-stone-500">
          <div className="flex items-center gap-2 bg-stone-100/90 px-4 py-2 rounded-full border border-stone-200">
            <Calendar className="w-3.5 h-3.5 text-gold" />
            <span>LAST REVISED: <strong className="text-charcoal font-semibold">July 2026</strong></span>
          </div>
          <div className="flex items-center gap-2 bg-stone-100/90 px-4 py-2 rounded-full border border-stone-200">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>READ TIME: <strong className="text-charcoal font-semibold">~8 min read</strong></span>
          </div>
        </div>
      </motion.div>

      {/* Main Grid: Sticky TOC Sidebar + Editorial Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        
        {/* Mobile Accordion TOC */}
        <div className="lg:hidden w-full bg-stone-100/95 border border-stone-200 rounded-2xl p-4 space-y-3 sticky top-24 z-30 backdrop-blur-md shadow-sm">
          <button
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            className="w-full flex items-center justify-between text-left font-mono text-xs text-charcoal font-semibold tracking-wider uppercase"
            aria-expanded={mobileTocOpen}
            aria-label="Toggle Table of Contents"
          >
            <span className="flex items-center gap-2">
              <span className="text-gold">✦</span> Table of Contents
            </span>
            <ChevronDown className={`w-4 h-4 text-gold transition-transform duration-300 ${mobileTocOpen ? "rotate-180" : ""}`} />
          </button>

          {mobileTocOpen && (
            <nav aria-label="Mobile Table of Contents" className="pt-3 border-t border-stone-200 max-h-[60vh] overflow-y-auto space-y-1">
              {tocItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTocClick(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-charcoal text-gold font-semibold"
                        : "text-stone-700 hover:bg-stone-200/60"
                    }`}
                  >
                    <span className="truncate">{item.num} // {item.title}</span>
                    {isActive && <span>→</span>}
                  </button>
                );
              })}
            </nav>
          )}
        </div>

        {/* Desktop Sticky Sidebar TOC */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-32 space-y-4">
          <div className="glass-card p-6 rounded-3xl border border-stone-200 shadow-luxury space-y-4">
            <h2 className="font-mono text-xs text-stone-400 tracking-widest uppercase pb-3 border-b border-stone-200 flex items-center justify-between">
              <span>Table of Contents</span>
              <span className="text-gold">14 SECTIONS</span>
            </h2>

            <nav aria-label="Table of Contents" className="space-y-1">
              {tocItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTocClick(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-mono transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? "bg-charcoal text-gold font-semibold shadow-sm border-l-4 border-gold pl-3"
                        : "text-stone-600 hover:text-charcoal hover:bg-stone-100/80"
                    }`}
                    data-cursor="SELECT"
                  >
                    <span className="truncate">
                      <span className={isActive ? "text-gold" : "text-stone-400 group-hover:text-gold"}>
                        {item.num}
                      </span>{" "}
                      // {item.title}
                    </span>
                    {isActive && <span className="text-gold text-sm font-bold">→</span>}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Editorial Content Column: Sections 01 to 14 */}
        <div className="lg:col-span-8 space-y-14">
          
          {/* SECTION 01 */}
          <section
            id="terms-conditions"
            className="border-b border-stone-300/80 pb-12 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                01
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Master Agreement</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Terms & Conditions
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-4">
              <p>
                By engaging NOVEXA for branding, website design, website development, video editing, or marketing services, you agree to comply with all terms outlined in this master agreement.
              </p>
              <p>
                Projects officially enter our active production queue only after scope approval, contract signing, and receipt of the 50% advance deposit.
              </p>
            </div>
          </section>

          {/* SECTION 02 */}
          <section
            id="payment-policy"
            className="border-b border-stone-300/80 pb-12 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                02
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Payment Schedule</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Payment Policy
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-4">
              <p>Standard payment structure for all NOVEXA client engagements:</p>
              <ul className="space-y-3 font-mono text-xs md:text-sm text-charcoal bg-stone-100/90 p-6 rounded-2xl border border-stone-200">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">✦</span>
                  <span><strong>50% Advance Payment:</strong> Required upfront before any design or development work begins.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">✦</span>
                  <span><strong>Remaining 50% Balance:</strong> Required prior to final website deployment, asset handover, or source file delivery.</span>
                </li>
              </ul>
              <p>No work begins until the 50% advance deposit is received and confirmed.</p>
              <p>Late payments outside agreed schedule will delay delivery dates.</p>
              <p>Full ownership of deliverables transfers to the client only after complete 100% payment.</p>
            </div>
          </section>

          {/* SECTION 03 */}
          <section
            id="revision-policy"
            className="border-b border-stone-300/80 pb-12 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                03
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Scope & Iterations</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Revision Policy
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-4">
              <p>Limited revisions are included per project scope to maintain high design quality and project velocity:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs md:text-sm py-2">
                <div className="bg-stone-100/90 p-4 rounded-xl border border-stone-200">
                  <span className="text-stone-500 block text-[10px] uppercase">UI/UX Design</span>
                  <span className="text-charcoal font-semibold">Up to 3 rounds included</span>
                </div>
                <div className="bg-stone-100/90 p-4 rounded-xl border border-stone-200">
                  <span className="text-stone-500 block text-[10px] uppercase">Branding Identity</span>
                  <span className="text-charcoal font-semibold">Up to 3 rounds included</span>
                </div>
                <div className="bg-stone-100/90 p-4 rounded-xl border border-stone-200">
                  <span className="text-stone-500 block text-[10px] uppercase">Website Design</span>
                  <span className="text-charcoal font-semibold">Up to 2 rounds included</span>
                </div>
                <div className="bg-stone-100/90 p-4 rounded-xl border border-stone-200">
                  <span className="text-stone-500 block text-[10px] uppercase">Video Editing</span>
                  <span className="text-charcoal font-semibold">Up to 2 rounds included</span>
                </div>
                <div className="bg-stone-100/90 p-4 rounded-xl border border-stone-200 sm:col-span-2">
                  <span className="text-stone-500 block text-[10px] uppercase">Social Media</span>
                  <span className="text-charcoal font-semibold">Up to 2 rounds included</span>
                </div>
              </div>

              <p>
                Extra revisions beyond the included rounds are billed separately. Major scope changes or additions after stage approval require a separate written quotation.
              </p>
            </div>
          </section>

          {/* SECTION 04 */}
          <section
            id="refund-cancellation-policy"
            className="border-b border-stone-300/80 pb-12 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                04
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Cancellation Terms</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Refund & Cancellation Policy
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-4">
              <p>Advance payments (50%) are strictly non-refundable once paid.</p>
              <p>Completed work and delivered design stages cannot be refunded.</p>
              <p>Cancellation before kickoff: Advance deposit is retained as administrative and resource allocation fee.</p>
              <p>Cancellation after production starts: Completed work to date is calculated and billed; outstanding balances must be cleared.</p>
            </div>
          </section>

          {/* SECTION 05 */}
          <section
            id="project-agreement-timeline"
            className="border-b border-stone-300/80 pb-12 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                05
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Kickoff Prerequisites</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Project Agreement & Timeline
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-4">
              <p>Before any project timeline officially commences:</p>
              <ul className="space-y-2.5 font-mono text-xs md:text-sm text-charcoal bg-stone-100/90 p-6 rounded-2xl border border-stone-200">
                <li className="flex items-center gap-3">
                  <span className="text-gold font-bold">1.</span>
                  <span>Client must approve the formal quotation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold font-bold">2.</span>
                  <span>Client must sign the project agreement</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold font-bold">3.</span>
                  <span>Client must provide all required brand assets, copy, and content</span>
                </li>
              </ul>
              <p className="font-medium text-charcoal pt-1">
                The official delivery timeline starts ONLY after the advance deposit and all required client assets are received by NOVEXA.
              </p>
            </div>
          </section>

          {/* SECTION 06 */}
          <section
            id="client-responsibilities"
            className="border-b border-stone-300/80 pb-12 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                06
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Client Obligations</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Client Responsibilities
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-4">
              <p>
                Clients are responsible for providing high-resolution logos, brand guidelines, text content, media assets, and timely feedback within 3 business days of receiving deliverables.
              </p>
            </div>
          </section>

          {/* SECTION 07 */}
          <section
            id="agency-responsibilities"
            className="border-b border-stone-300/80 pb-12 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                07
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Agency Commitment</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Agency Responsibilities
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-4">
              <p>
                NOVEXA is committed to delivering bespoke, handcrafted, world-class design and engineering solutions according to the approved scope, timeline, and quality standards.
              </p>
            </div>
          </section>

          {/* SECTION 08 */}
          <section
            id="privacy-policy"
            className="border-b border-stone-300/80 pb-12 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                08
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Data Protection</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Privacy Policy
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-4">
              <p>
                We collect minimal contact information (Name, Email, Phone, Company) necessary to execute services. Client information is strictly protected, kept confidential, and never sold to third parties.
              </p>
            </div>
          </section>

          {/* SECTION 09 */}
          <section
            id="cookie-policy"
            className="border-b border-stone-300/80 pb-12 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                09
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Cookie Analytics</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Cookie Policy
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-4">
              <p>
                Our site uses essential and performance cookies (including Google Analytics) to optimize page loading speed, route transitions, and user experience.
              </p>
            </div>
          </section>

          {/* SECTION 10 */}
          <section
            id="disclaimer"
            className="border-b border-stone-300/80 pb-12 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                10
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Legal Notice</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Disclaimer
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-4">
              <p>
                Website information and case studies are for portfolio presentation purposes. Past results do not guarantee identical future performance. Content does not constitute legal or financial advice.
              </p>
            </div>
          </section>

          {/* SECTION 11 */}
          <section
            id="ownership-intellectual-property"
            className="border-b border-stone-300/80 pb-12 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                11
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Intellectual Property</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Ownership & Intellectual Property
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-4">
              <p>
                NOVEXA retains complete ownership of all designs, code, and source files until full 100% payment is completed.
              </p>
              <p>
                After final payment is received, full legal ownership transfers to the client.
              </p>
              <p>
                NOVEXA reserves the right to display completed work in our agency portfolio and marketing channels unless restricted by a signed NDA.
              </p>
            </div>
          </section>

          {/* SECTION 12 */}
          <section
            id="maintenance-support"
            className="border-b border-stone-300/80 pb-12 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                12
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Post-Handover Support</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Maintenance & Support
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-4">
              <p>
                Includes 7 days of post-delivery minor support following final project handover. Ongoing maintenance, backups, security monitoring, or new feature development are billed separately.
              </p>
            </div>
          </section>

          {/* SECTION 13 */}
          <section
            id="additional-operational-policies"
            className="border-b border-stone-300/80 pb-12 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                13
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Operations & Governance</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Additional Operational Policies
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-6">
              
              <div className="space-y-2">
                <h3 className="font-mono text-xs text-gold uppercase tracking-wider font-semibold">
                  Communication Policy
                </h3>
                <p>Official channels are WhatsApp, Email, and Scheduled Meetings.</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs text-gold uppercase tracking-wider font-semibold">
                  Third-Party Costs
                </h3>
                <p>Domains, hosting, premium fonts, stock assets, plugins, and APIs are billed separately.</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs text-gold uppercase tracking-wider font-semibold">
                  Project Pause & Inactivity
                </h3>
                <p>Projects inactive for over 30 days due to client unresponsiveness may be archived. Restarting may incur a reactivation fee.</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs text-gold uppercase tracking-wider font-semibold">
                  Limitation of Liability & Force Majeure
                </h3>
                <p>NOVEXA is not liable for indirect damages or delays caused by natural disasters, internet outages, or events beyond control.</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs text-gold uppercase tracking-wider font-semibold">
                  Governing Law
                </h3>
                <p>Governed by the laws of India. Jurisdiction: Gujarat, India.</p>
              </div>

            </div>
          </section>

          {/* SECTION 14 */}
          <section
            id="contact-information"
            className="pb-6 space-y-6 scroll-mt-32"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-gold tracking-widest uppercase font-semibold">
                14
              </span>
              <span className="font-mono text-xs text-stone-400 uppercase">Legal Inquiries</span>
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
              Contact Information
            </h2>
            <div className="font-sans text-stone-700 font-light text-base leading-relaxed max-w-3xl space-y-4">
              <p>
                For any legal or contract inquiries, contact NOVEXA directly via WhatsApp at{" "}
                <a
                  href="https://wa.me/919227025524?text=Hi%20NOVEXA%2C%20I%20have%20a%20question%20regarding%20your%20legal%20policies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold font-semibold underline underline-offset-4 hover:text-charcoal transition-colors"
                >
                  +91 9227025524
                </a>{" "}
                or Email at{" "}
                <a
                  href="mailto:work@novexaagency.com"
                  className="text-gold font-semibold underline underline-offset-4 hover:text-charcoal transition-colors"
                >
                  work@novexaagency.com
                </a>.
              </p>
            </div>
          </section>

          {/* Final Contact CTA */}
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-gold/40 shadow-glass-gold space-y-6 bg-gradient-to-br from-white/90 via-stone-50/80 to-gold/10">
            <span className="font-mono text-xs text-gold tracking-widest uppercase font-semibold block">
              CLEAR COMMUNICATION
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              Have Questions?
            </h2>
            <p className="font-sans text-stone-600 font-light text-base leading-relaxed max-w-xl">
              If you have any questions regarding our legal policies, feel free to contact us before starting your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/919227025524?text=Hi%20NOVEXA%2C%20I%20have%20a%20question%20regarding%20your%20legal%20policies."
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="TALK"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold text-charcoal font-mono text-xs tracking-widest font-semibold hover:bg-charcoal hover:text-ivory transition-all duration-300 shadow-glass-gold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 9227025524)</span>
              </a>

              <a
                href="mailto:work@novexaagency.com"
                data-cursor="TALK"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-charcoal text-ivory font-mono text-xs tracking-widest font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Back to Top Control */}
          <div className="flex justify-end pt-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-stone-300 bg-white/80 text-charcoal hover:border-gold hover:text-gold font-mono text-xs tracking-widest uppercase transition-all duration-300 shadow-sm"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
