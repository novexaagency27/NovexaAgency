export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  outputs: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Understanding your business goals, target audience, and market position.",
    description:
      "We start by understanding your business, target audience, competitors, and main goals. This helps us define a clear strategy for the project.",
    outputs: ["Discovery Workshop", "Market Alignment", "Strategic Roadmap"],
  },
  {
    number: "02",
    title: "STRATEGIZE",
    subtitle: "Planning the visual direction, page structure, and user flow.",
    description:
      "Before designing or building, we plan the project structure, page layouts, content flow, and visual direction.",
    outputs: ["Content Architecture", "Design Concept Brief", "UX Wireframes"],
  },
  {
    number: "03",
    title: "DESIGN",
    subtitle: "Transforming ideas into a clean, modern visual identity.",
    description:
      "This is where your vision comes to life. We create custom visual designs, clear layouts, and smooth micro-interactions tailored to your brand.",
    outputs: ["Full UI/UX Design System", "Interactive Prototypes", "Visual Assets"],
  },
  {
    number: "04",
    title: "BUILD",
    subtitle: "Building clean, fast, and responsive code with precision.",
    description:
      "We convert the approved designs into fast, reliable code using modern web technologies. Every feature is built for fast loading and smooth performance.",
    outputs: ["Clean Codebase", "Animation Integration", "Cross-Browser Build"],
  },
  {
    number: "05",
    title: "LAUNCH",
    subtitle: "Testing, publishing, and supporting your digital product.",
    description:
      "We thoroughly test your website across all devices and browsers before launching. After launch, we ensure everything runs smoothly.",
    outputs: ["Production Deployment", "SEO & Speed Audit", "Handover Documentation"],
  },
];
