# NOVEXA — PROJECT BRAIN & MEMORY DOCUMENT

> **IMPORTANT DIRECTIVE FOR FUTURE AGENTS:**
> **READ THIS FILE BEFORE MAKING ANY CHANGE TO THIS CODEBASE.**
>
> NOVEXA WEBSITE IS AN APPROVED, PRODUCTION-READY PROJECT.
> Do not assume something needs improvement simply because you would personally design it differently.
> Do not redesign existing work unless the user explicitly asks for a redesign.
> Do not modify anything outside the user's requested scope.

---

## 1. Project Overview & Identity

- **Project Name**: NOVEXA Agency (`novexa-website`)
- **Type**: Premium Creative Digital Agency Website
- **Tagline**: WE CREATE DIGITAL EXPERIENCES THAT PEOPLE REMEMBER.
- **Positioning**: NOVEXA is a premium creative and digital agency blending strategy, design, and technology to build brands, digital products, and high-end web applications.
- **Core Services**:
  - Logo & Visual Identity
  - UI/UX Design (Web & Mobile)
  - Website Development (Next.js, GSAP, Tailwind)
  - App Development (iOS & Android)
  - Social Media & Motion Graphics
  - Interactive Digital Experiences
- **Project Context Directory**: `/Users/krishpatel/work by novexa`

---

## 2. Protected Project Principle

> **NOVEXA is an approved website. Treat existing design and functionality as intentional. Do not improve, redesign, refactor, replace, or restructure anything unless the user explicitly asks for that specific change.**

---

## 3. Brand Identity & Visual Language

The visual direction of NOVEXA is **locked and approved**:

- **Aesthetic**: Premium, editorial, modern, minimal yet visually rich.
- **Color Palette**:
  - Backgrounds: Warm ivory / off-white (`#FAFAF8`, `#F9F8F3`)
  - Typography: Charcoal / black (`#121212`, `#1A1A1A`)
  - Accents: Refined metallic gold (`#D4AF37`)
  - Borders: Subtle neutral stone tones (`border-stone-200`, `border-stone-300`)
- **Typography System**:
  - Display/Headlines: Elegant editorial serif typography (`editorial-title`)
  - Supporting Copy: Clean modern sans-serif
  - Labels & Metadata: Technical monospace (`font-mono`, tracking-widest)
- **Visual Elements**: Glassmorphic overlays (`glass-card`, `glass-nav`), soft rounded card corners (`rounded-3xl`), grain texture backgrounds (`bg-grain`), and 60fps fluid micro-interactions.

---

## 4. Logo Protection Rules

- **Official Logo**: Lock existing official NOVEXA logo assets.
- **Strict Prohibitions**:
  - NEVER redraw the logo.
  - NEVER replace or generate AI substitutes for the logo.
  - NEVER distort logo proportions or alter official brand logo colors without explicit instruction.

---

## 5. Website Architecture & Primary Routes

The website contains **7 canonical static routes**:

```text
/                       ──> Homepage
/work                   ──> Portfolio Showcase
/work/[slug]            ──> Individual Case Studies
/services               ──> Agency Capabilities
/about                  ──> Studio Philosophy & Founders
/process                ──> 5-Phase Methodology
/legal                  ──> Legal Center (Terms, Policies, Agreements)
/start-a-project        ──> Single Official Inquiry / Brief Page
```

### Route Rules:
- **NO `/contact` ROUTE**: The old `/contact` page has been **completely deleted**.
- Do NOT recreate `/contact`, do NOT create fallback redirects, and do NOT add secondary contact form pages.

---

## 6. Global Navigation Matrix

### Global Header (`src/components/Navbar.tsx`)
- **Links**: `WORK` (`/work`), `SERVICES` (`/services`), `ABOUT` (`/about`), `PROCESS` (`/process`), `LEGAL` (`/legal`).
- **CTA Button**: `LET'S TALK ↗` -> MUST ALWAYS point to `/start-a-project`.

### Global Footer (`src/components/Footer.tsx`)
- **Sitemap Index**:
  - `01 // WORK` -> `/work`
  - `02 // SERVICES` -> `/services`
  - `03 // ABOUT` -> `/about`
  - `04 // PROCESS` -> `/process`
  - `05 // START A PROJECT` -> `/start-a-project`
  - `06 // LEGAL CENTER` -> `/legal`
- **Footer CTA**: `START A PROJECT ↗` -> MUST ALWAYS point to `/start-a-project`.

---

## 7. Single Inquiry Architecture

NOVEXA operates on a **Single Inquiry Destination** architecture:

- **Canonical Inquiry Page**: `/start-a-project`
- **All Inquiry CTAs across the entire website point to `/start-a-project`**:
  - `LET'S TALK` -> `/start-a-project`
  - `START A CONVERSATION` -> `/start-a-project`
  - `START A PROJECT` -> `/start-a-project`
  - `BOOK THIS SERVICE` -> `/start-a-project`
  - `INQUIRE FOR THIS SERVICE` -> `/start-a-project`

---

## 8. Start A Project Page (`/start-a-project`)

The project inquiry page features an interactive 6-step briefing experience ([`src/components/StartAProjectForm.tsx`](file:///Users/krishpatel/Novexa%20Website/src/components/StartAProjectForm.tsx)):

```text
01 // ABOUT YOU            (Name, Email, Phone, Company, Role)
02 // BUSINESS             (Business Description)
03 // PROJECT              (Services Multi-Select, Requirements, Goals, References, Brand Assets)
04 // DIRECTION            (Creative Direction Context)
05 // TIMELINE & INVESTMENT (Timeline Options, Investment Ranges & Custom Budget)
06 // FINAL                (Additional Notes, Dossier Summary, WhatsApp & Email Action)
```

---

## 9. Custom Budget & Indian Currency Auto-Formatting

- **Options**: `₹25,000 – ₹50,000`, `₹50,000 – ₹1,00,000`, `₹1,00,000 – ₹2,50,000`, `₹2,50,000+`, `I'M NOT SURE YET`, `CUSTOM BUDGET`.
- **Custom Budget Behavior**:
  - Selecting `CUSTOM BUDGET` reveals an input field labeled `YOUR BUDGET` with placeholder `Enter your approximate budget`.
  - Automatically formats raw digits to Indian Rupees (e.g. typing `75000` formats to `₹75,000`).
  - Output value formats as `₹75,000` in the live Dossier, WhatsApp draft, Email body, and copied brief.

---

## 10. Live Project Dossier

- **Feature**: Real-time sticky Dossier rail tracking selected services, project scope, goals, brand assets, timeline, budget, and client contact details.
- **Rule**: Do not remove, alter logic, or redesign the Live Project Dossier.

---

## 11. Official Contact Integrations

- **Official Email**: `work@novexaagency.com`
  - *Prohibition*: Old email `Novexaagency27@gmail.com` is permanently removed and must NEVER be reintroduced.
- **Official WhatsApp**: `+91 92270 25524` (`https://wa.me/919227025524`)
- **Official Instagram**: `@designbynovexa` (`https://www.instagram.com/designbynovexa`)

---

## 12. Executive Brief Formatting Engine

The generated WhatsApp and Email message format must follow executive agency brief layout:

```text
*NOVEXA — NEW PROJECT BRIEF*

I'd like to discuss a project with your agency.


*ABOUT YOU*

*Name:* **Krish Patel**
*Email:* **krish.old.photos@gmail.com**
*Phone / WhatsApp:* **+91 95741 88628**
*Company / Brand:* **Crafttick**
*Role:* **Co-Founder**


*BUSINESS*

*About the Business:*

it is stickymark generation


*PROJECT*

*Services Required:*

• Video Editing
• Marketing
• Social Media
• App Development

*Project:* **logo**

*Goals:*

• More customers
• Stronger brand
• Better conversions

*References / Inspiration:*

no

*Brand Assets:*

• Logo
• Brand Guidelines
• Website


*TIMELINE & INVESTMENT*

*Timeline:* **As soon as possible**
*Budget:* **₹75,000**


*ADDITIONAL INFORMATION*

krish


────────────────────────

Submitted via *NOVEXA Agency*

Thank you.
```

### Brief Formatting Rules:
- **Bold Section Headings**: `*ABOUT YOU*`, `*BUSINESS*`, `*PROJECT*`, `*TIMELINE & INVESTMENT*`, `*ADDITIONAL INFORMATION*`.
- **Bold Labels & Short Values**: E.g., `*Name:* **Krish Patel**`, `*Timeline:* **As soon as possible**`, `*Budget:* **₹75,000**`.
- **Vertical Bulleted Lists**: Multi-selected services, goals, and brand assets render as itemized vertical lists (`• Item`).
- **Unmodified User Input**: Long descriptions are rendered in regular weight font weight without AI rewriting.

---

## 13. User Data Sacred Principle

> **USER-ENTERED FORM DATA IS SACRED.**
> Never use AI rewriting on client-entered information. If the user enters `"it is stickymark generation"`, `"logo"`, `"no"`, or `"krish"`, keep the exact text unaltered.

---

## 14. Easy English Writing Style Standard

Website copy uses **clear, direct, accessible business English**:
- Simple vocabulary, short sentences, and active voice.
- Prohibit agency jargon (e.g. "scalable ecosystems", "digital paradigms", "holistic synergies", "cutting-edge end-to-end transformation").
- Prohibit generic AI clichés (e.g. "where creativity meets technology", "unlock your potential", "take your brand to the next level").

---

## 15. Legal Center Protection Rule

- **Canonical Route**: `/legal`
- **Rule**: Non-legal introductory copy may be simplified for clarity, but legally meaningful terms (Terms, Payment Policy, Revision Rules, Refunds, IP Ownership, Privacy, Liability) must NEVER be altered without explicit instruction.

---

## 16. Technical Stack & Environment

- **Framework**: Next.js 14.2.5 (App Router)
- **Core Libraries**: React 18, TypeScript 5.5, Tailwind CSS 3.4
- **Animation & Motion**: Framer Motion 11.3, GSAP 3.12 (`@gsap/react`), Lenis Smooth Scroll 1.1
- **Icons**: Lucide React (`lucide-react`)
- **Development Server**: `npm run dev` (Local: `http://localhost:3000`)
- **Production Build Command**: `npm run build`

---

## 17. Development & Verification Rules

1. **Smallest Change Principle**: Modify only what the user explicitly requests. Do not refactor unrelated components.
2. **Build Verification Requirement**: Run `npm run build` after making code edits to ensure static compilation completes across all 25 static routes.
3. **No Unsolicited Modifications**: Do not perform design polish or architectural changes unless requested.

---

## 18. QA Checklist for Future Agents

Before completing any task, verify:
- [ ] No `/contact` links or routes exist.
- [ ] Header `LET'S TALK ↗` and Footer `START A PROJECT ↗` point to `/start-a-project`.
- [ ] Email is `work@novexaagency.com` and WhatsApp is `+91 92270 25524`.
- [ ] Visual identity (ivory background, charcoal text, gold accents) remains intact.
- [ ] Client form entries are not altered by AI rewriting.
- [ ] `npm run build` compiles with 0 errors.

---

## 19. Future Agent Workflow

1. **Step 1**: Read [`BRAIN.md`](file:///Users/krishpatel/Novexa%20Website/BRAIN.md).
2. **Step 2**: Understand the user's explicit request.
3. **Step 3**: Inspect relevant source files before editing.
4. **Step 4**: Apply the minimal necessary edit.
5. **Step 5**: Run `npm run build` to verify compilation.
6. **Step 6**: Report exact changes clearly to the user.
