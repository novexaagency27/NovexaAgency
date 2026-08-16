export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "UI/UX" | "LOGO" | "GRAPHIC DESIGN" | "SOCIAL MEDIA" | "VIDEO";
  categories: string[];
  year: string;
  client: string;
  featured?: boolean;
  type?: "image" | "video";
  thumbnail: string;
  videoSrc?: string;
  heroImage: string;
  gallery: string[];
  summary: string;
  challenge: string;
  approach: string;
  designHighlights: string[];
  result: string;
}

export const projectsData: Project[] = [
  {
    id: "01",
    slug: "anaqah-luxury-ecommerce",
    title: "ANAQAH LUXURY",
    subtitle: "High-End E-Commerce & Interface for Artisanal Fragrance",
    category: "UI/UX",
    categories: ["UI/UX", "Digital"],
    year: "2026",
    client: "Anaqah Maison",
    featured: true,
    type: "image",
    thumbnail: "/assets/work/ui-ux/anaqah page.png",
    heroImage: "/assets/work/ui-ux/anaqah page.png",
    gallery: [
      "/assets/work/ui-ux/anaqah 1.jpg",
      "/assets/work/ui-ux/anaqah  2.png",
      "/assets/work/ui-ux/anaqah 5.png",
      "/assets/work/ui-ux/anaqah 6.11.jpg",
      "/assets/work/ui-ux/anaqah  3.jpg",
    ],
    summary:
      "A sophisticated digital storefront designed for Anaqah Luxury, elevating high-end fragrance shopping into an immersive editorial experience.",
    challenge:
      "Luxury fragrance brands often suffer from standard e-commerce templates that fail to evoke sensory resonance or high brand equity.",
    approach:
      "We crafted a warm ivory editorial layout with subtle champagne micro-interactions, custom interactive notes visualizer, and seamless cart flows.",
    designHighlights: [
      "Editorial typography with generous spatial breathing room",
      "Dynamic luxury scent notes visualization engine",
      "Glassmorphic navigation with low visual noise",
      "Mobile-optimized high-conversion checkout experience",
    ],
    result:
      "Transformed Anaqah into a standout digital luxury brand with increased session duration and strong brand positioning.",
  },
  {
    id: "02",
    slug: "novexa-motion-showreel",
    title: "NOVEXA MOTION REEL",
    subtitle: "Cinematic Visual FX & Agency Motion Exploration",
    category: "VIDEO",
    categories: ["VIDEO", "Motion"],
    year: "2026",
    client: "NOVEXA Studios",
    featured: true,
    type: "video",
    thumbnail: "/assets/work/thumbnails/vraj vihar mashup-Thumbnail.jpg",
    videoSrc: "/assets/work/videos/main intro.mp4",
    heroImage: "/assets/work/thumbnails/vraj vihar mashup-Thumbnail.jpg",
    gallery: [
      "/assets/work/thumbnails/vraj vihar mashup-Thumbnail.jpg",
      "/assets/work/videos/costaly rw matirals-Thumbnail.jpg",
    ],
    summary:
      "High-energy agency showreel demonstrating kinetic motion typography, liquid transitions, and visual FX execution.",
    challenge:
      "Combining diverse motion sequences into a unified 60fps cinematic reel.",
    approach:
      "Utilized custom frame timing, audio-reactive motion triggers, and high-impact visual cuts.",
    designHighlights: [
      "Sub-second frame pacing for high engagement",
      "Audio-visual sync and custom color grading",
      "High-resolution canvas rendering",
    ],
    result:
      "Created NOVEXA's flagship motion showcase for international brand presentations.",
  },
  {
    id: "03",
    slug: "nirvaan-logo-mark",
    title: "NIRVAAN LOGO MARK",
    subtitle: "Monogram Mark & Luxury Hangtag Identity System",
    category: "LOGO",
    categories: ["LOGO", "GRAPHIC DESIGN"],
    year: "2025",
    client: "Nirvaan Apparel",
    featured: true,
    type: "image",
    thumbnail: "/assets/work/logo/hand tag nirvaan.jpg",
    heroImage: "/assets/work/logo/hand tag nirvaan.jpg",
    gallery: [
      "/assets/work/logo/MAIN.jpg",
      "/assets/work/branding/busniess  card main.jpg",
      "/assets/work/logo/sss.jpg",
    ],
    summary:
      "A minimalist luxury identity architecture including monoline logo mark, tactile foil hangtags, and card systems.",
    challenge:
      "Synthesizing contemporary streetwear culture with timeless high-fashion minimalism.",
    approach:
      "Created a geometric monogram mark paired with tactile foil-stamped hangtag cards and textured paper mockups.",
    designHighlights: [
      "Geometric monoline logo mark designed for versatile embroidery and print",
      "Custom textured hangtag card design system",
      "Cohesive brand color tokens and typography scale",
    ],
    result:
      "Established a distinct physical and digital presence for Nirvaan's collection launch.",
  },
  {
    id: "04",
    slug: "chronos-luxury-timepiece",
    title: "CHRONOS TIMEPIECES",
    subtitle: "Interactive Digital Experience & Horology Showcase",
    category: "UI/UX",
    categories: ["UI/UX", "Digital"],
    year: "2026",
    client: "Chronos Horizons",
    featured: true,
    type: "image",
    thumbnail: "/assets/work/ui-ux/watch web page ui.jpg",
    heroImage: "/assets/work/ui-ux/watch web page ui.jpg",
    gallery: [
      "/assets/work/posters/WATCH AD APPLE copy.jpg",
      "/assets/work/posters/casiowatch.jpg",
      "/assets/work/ui-ux/watch web page ui.jpg",
    ],
    summary:
      "A cinematic web experience for precision horology, blending dark mode elegance with fluid product interaction.",
    challenge:
      "Showcasing intricate watch craftsmanship on digital screens without losing texture and mechanical detail.",
    approach:
      "Designed dark charcoal layout with gold metallic accents, macro photography grids, and interactive bezel animation sequences.",
    designHighlights: [
      "Macro detail zoom interactive inspection controls",
      "High-contrast dark luxury background architecture",
      "Precision spec typography with custom numeric tables",
    ],
    result:
      "Delivered a digital flagship experience recognized for visual excellence and interactive refinement.",
  },
  {
    id: "05",
    slug: "novexa-wordmark-system",
    title: "NOVEXA WORDMARK SYSTEM",
    subtitle: "Geometric Monogram & Visual Identity Exploration",
    category: "LOGO",
    categories: ["LOGO", "GRAPHIC DESIGN"],
    year: "2026",
    client: "NOVEXA AGENCY",
    featured: false,
    type: "image",
    thumbnail: "/assets/work/logo/MAIN.jpg",
    heroImage: "/assets/work/logo/MAIN.jpg",
    gallery: [
      "/assets/work/logo/sss.jpg",
      "/assets/work/branding/kp front.jpg",
    ],
    summary:
      "Exploration of geometric symmetry, proportion, and line grid dynamics for the official NOVEXA identity mark.",
    challenge:
      "Designing a brand symbol that remains memorable at 16px icon scale and 10-foot studio signage.",
    approach:
      "Built on a strict golden-ratio grid with high-precision optical vector paths.",
    designHighlights: [
      "Golden ratio grid construction",
      "Vector scale clarity from 16px to infinity",
      "Monochrome and champagne gold variations",
    ],
    result:
      "Created the foundational identity system used across all NOVEXA touchpoints.",
  },
  {
    id: "06",
    slug: "shadow-effect-motion",
    title: "SHADOW KINETIC MOTION",
    subtitle: "3D Light & Shadow Motion Graphics Series",
    category: "VIDEO",
    categories: ["VIDEO", "Motion"],
    year: "2025",
    client: "Studio Kinetic",
    featured: false,
    type: "video",
    thumbnail: "/assets/work/thumbnails/real engineering poster.jpg",
    videoSrc: "/assets/work/videos/shadow effect.mp4",
    heroImage: "/assets/work/thumbnails/real engineering poster.jpg",
    gallery: [
      "/assets/work/thumbnails/real engineering poster.jpg",
      "/assets/work/thumbnails/SOLAR LOSS-Thumbnail.jpg",
    ],
    summary:
      "An experimental visual study exploring realistic light refraction, volumetric shadow, and typography motion.",
    challenge:
      "Achieving fluid 60fps shadow animation without heavy client-side WebGL rendering.",
    approach:
      "Pre-rendered 3D light fields composited into lightweight HTML5 video loops.",
    designHighlights: [
      "Volumetric shadow depth rendering",
      "Seamless infinite loop playback",
    ],
    result:
      "Adopted as background motion assets for digital campaign launches.",
  },
  {
    id: "07",
    slug: "aura-cosmetics-campaign",
    title: "AURA COSMETICS",
    subtitle: "Art-Directed Visual Campaign & Product Posters",
    category: "GRAPHIC DESIGN",
    categories: ["GRAPHIC DESIGN", "SOCIAL MEDIA"],
    year: "2025",
    client: "Aura Botanicals",
    featured: false,
    type: "image",
    thumbnail: "/assets/work/posters/cream banner 02.jpg",
    heroImage: "/assets/work/posters/cream banner 02.jpg",
    gallery: [
      "/assets/work/posters/cream banner 03.jpg",
      "/assets/work/posters/main cream 001.jpg",
      "/assets/work/posters/shampoo.jpg",
    ],
    summary:
      "Editorial skincare poster campaign showcasing natural texture highlights, clean compositions, and modern typography.",
    challenge:
      "Communicating organic purity alongside premium science-backed efficacy.",
    approach:
      "Used warm stone backgrounds, gentle lighting highlights, and minimalist product placements.",
    designHighlights: [
      "Natural lighting composition with soft shadows",
      "Clean serif & sans-serif hierarchy",
      "Multi-platform banner adaptations",
    ],
    result:
      "Created high-performing marketing assets across print banners and digital campaigns.",
  },
  {
    id: "08",
    slug: "nike-urban-art-direction",
    title: "URBAN MOTION / NIKE ART",
    subtitle: "High-Energy Poster & Kinetic Visual Campaign",
    category: "GRAPHIC DESIGN",
    categories: ["GRAPHIC DESIGN", "SOCIAL MEDIA"],
    year: "2025",
    client: "Urban Motion Series",
    featured: false,
    type: "image",
    thumbnail: "/assets/work/posters/main thumbnail of poster design in nike shoese.jpg",
    heroImage: "/assets/work/posters/main thumbnail of poster design in nike shoese.jpg",
    gallery: [
      "/assets/work/posters/SHOES.jpg",
      "/assets/work/ui-ux/SHOES.jpg",
    ],
    summary:
      "A dynamic visual exploration combining bold typography, kinetic blur, and high-impact footwear photography.",
    challenge:
      "Capturing athletic energy and speed in static poster mediums.",
    approach:
      "Exploded typographic layouts with directional blur and vibrant color contrasts.",
    designHighlights: [
      "Kinetic typography layout with asymmetric grid balance",
      "Dynamic background layering and photo cutouts",
    ],
    result:
      "Gained widespread acclaim across digital design communities for visual impact.",
  },
  {
    id: "09",
    slug: "cut-effect-edit-reel",
    title: "CUT EFFECT FX REEL",
    subtitle: "Fast-Paced Editorial Video Editing & Visual Transitions",
    category: "VIDEO",
    categories: ["VIDEO", "Motion"],
    year: "2025",
    client: "Creative Edits",
    featured: false,
    type: "video",
    thumbnail: "/assets/work/thumbnails/i love mahisagr thumbnail.png",
    videoSrc: "/assets/work/videos/cut effect msin.mp4",
    heroImage: "/assets/work/thumbnails/i love mahisagr thumbnail.png",
    gallery: [
      "/assets/work/thumbnails/i love mahisagr thumbnail.png",
      "/assets/work/thumbnails/festival thumbnail.jpg",
    ],
    summary:
      "A showreel demonstrating high-frequency jump cuts, match transitions, and kinetic text overlays.",
    challenge:
      "Maintaining high visual pace while keeping narrative flow coherent.",
    approach:
      "Rhythm-matched cuts aligned to dynamic audio beats with custom light leaks.",
    designHighlights: [
      "Precision beat-synced editing",
      "Custom visual transition wipes",
    ],
    result:
      "Generated high engagement across social media promo releases.",
  },
  {
    id: "10",
    slug: "apex-vraj-vihar-digital-media",
    title: "VRAJ VIHAR & APEX MEDIA",
    subtitle: "Real Estate & Architecture Social Visuals",
    category: "SOCIAL MEDIA",
    categories: ["SOCIAL MEDIA", "GRAPHIC DESIGN"],
    year: "2025",
    client: "Apex Real Engineering",
    featured: false,
    type: "image",
    thumbnail: "/assets/work/thumbnails/luxray thumbnaisl.jpeg",
    heroImage: "/assets/work/thumbnails/luxray thumbnaisl.jpeg",
    gallery: [
      "/assets/work/thumbnails/real engineering poster.jpg",
      "/assets/work/thumbnails/SOLAR LOSS-Thumbnail.jpg",
      "/assets/work/thumbnails/festival thumbnail.jpg",
    ],
    summary:
      "A suite of high-engagement thumbnails, promotional posters, and social media content for luxury real estate and engineering.",
    challenge:
      "Transforming complex engineering and real estate content into captivating, high-click digital assets.",
    approach:
      "Bold visual hierarchy, custom color branding, clear value callouts, and clean architectural framing.",
    designHighlights: [
      "High-contrast thumbnail compositions optimized for mobile feeds",
      "Architectural image treatment with warm stone tones",
    ],
    result:
      "Increased digital media reach and viewer conversion for client campaigns.",
  },
  {
    id: "11",
    slug: "vv-mix-creative-reel",
    title: "VV MIX CREATIVE REEL",
    subtitle: "Rhythmic Video Editing & Social Promo Showcase",
    category: "VIDEO",
    categories: ["VIDEO", "SOCIAL MEDIA"],
    year: "2025",
    client: "VV Productions",
    featured: false,
    type: "video",
    thumbnail: "/assets/work/thumbnails/gym thubnail4.png",
    videoSrc: "/assets/work/videos/VV MIX.mp4",
    heroImage: "/assets/work/thumbnails/gym thubnail4.png",
    gallery: [
      "/assets/work/thumbnails/gym thubnail4.png",
      "/assets/work/videos/costaly rw matirals-Thumbnail.jpg",
    ],
    summary:
      "A promotional video edit featuring color accents, kinetic typographic overlays, and seamless video loops.",
    challenge:
      "Optimizing video playback across mobile feeds without quality loss.",
    approach:
      "Targeted encoding profiles with high-contrast color highlights.",
    designHighlights: [
      "Mobile-optimized 1080p encoding",
      "Custom typography lower thirds",
    ],
    result:
      "Delivered high-performing video content for campaign distribution.",
  },
  {
    id: "12",
    slug: "pulse-acoustics-campaign",
    title: "PULSE ACOUSTICS",
    subtitle: "Earbuds & Mobile Product Social Series",
    category: "SOCIAL MEDIA",
    categories: ["SOCIAL MEDIA", "GRAPHIC DESIGN"],
    year: "2025",
    client: "Pulse Audio",
    featured: false,
    type: "image",
    thumbnail: "/assets/work/posters/EARBUDS.jpg",
    heroImage: "/assets/work/posters/EARBUDS.jpg",
    gallery: [
      "/assets/work/posters/PHONE 01.jpg",
      "/assets/work/posters/phone 02.jpg",
    ],
    summary:
      "Social media visual campaign introducing high-fidelity audio hardware with sleek product photography.",
    challenge:
      "Positioning budget-friendly audio accessories as premium tech essentials.",
    approach:
      "Studio dark lighting with neon champagne outlines and bold typography.",
    designHighlights: [
      "High-contrast product highlights",
      "Social grid card series layout",
    ],
    result:
      "Elevated client social engagement and product click-through rates.",
  },
];
