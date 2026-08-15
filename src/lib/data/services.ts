export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "logo-graphic-design",
    number: "01",
    title: "Logo & Visual Identity",
    description:
      "We design complete visual identity systems, logos, and brand assets that build instant authority, trust, and recognition across all platforms.",
    details: [
      "Visual identity strategy & logo positioning",
      "Logo design, monograms & visual symbols",
      "Typography system selection & custom rules",
      "Color hierarchy & tactile brand assets",
      "Packaging, print collateral & marketing design",
    ],
    deliverables: ["Identity Guide", "Logo Systems", "Packaging Mockups", "Print Collateral"],
  },
  {
    id: "social-media",
    number: "02",
    title: "Social Media & Motion",
    description:
      "Strategic content creation, video editing, and motion graphics designed to grow your audience and build a strong social media presence.",
    details: [
      "Art direction for Instagram & social feeds",
      "High-click thumbnail & poster design",
      "Reels & video content post-production",
      "Content strategy & monthly campaign planning",
      "Brand aesthetic management across platforms",
    ],
    deliverables: ["Content Systems", "Video Edits", "Social Banners", "Campaign Assets"],
  },
  {
    id: "ui-ux-design",
    number: "03",
    title: "UI/UX Design",
    description:
      "User-focused digital product interfaces designed for clear navigation, effortless usability, and beautiful visual appeal.",
    details: [
      "Web & mobile interface design",
      "Design tokens & design system architecture",
      "Interactive wireframing & high-fidelity prototypes",
      "E-commerce funnel & checkout optimization",
      "User research & accessibility compliance",
    ],
    deliverables: ["Figma Design Specs", "Design Systems", "Interactive Prototypes", "UX Audits"],
  },
  {
    id: "website-development",
    number: "04",
    title: "Website Development",
    description:
      "Custom frontend web development that transforms visual designs into fast, smooth, and high-performing web applications.",
    details: [
      "Next.js & React custom web development",
      "GSAP & ScrollTrigger motion engineering",
      "Headless CMS integration (Sanity/Strapi)",
      "SEO optimization & semantic HTML structure",
      "Sub-second load times & 60fps interaction",
    ],
    deliverables: ["Next.js Codebase", "CMS Integration", "SEO Architecture", "Performance Score"],
  },
  {
    id: "app-development",
    number: "05",
    title: "App Development",
    description:
      "Custom mobile app development for iOS and Android, focused on smooth user flows, intuitive features, and reliable performance.",
    details: [
      "Cross-platform React Native / Flutter apps",
      "Native iOS & Android mobile experiences",
      "API integrations & state management",
      "Offline caching & real-time synchronization",
    ],
    deliverables: ["Mobile Apps", "App Store Publishing", "API Architecture"],
  },
  {
    id: "digital-experiences",
    number: "06",
    title: "Digital Experiences",
    description:
      "Interactive microsites, launch pages, and custom digital showcases designed to engage your audience and highlight your brand.",
    details: [
      "Interactive product launch microsites",
      "3D canvas & WebGL visual effects",
      "Kinetic typography & audio-reactive visuals",
      "Award-level agency portfolio experiences",
    ],
    deliverables: ["Launch Microsites", "Interactive Displays", "Creative Tech Prototypes"],
  },
];
