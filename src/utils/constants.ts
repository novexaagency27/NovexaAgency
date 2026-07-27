/**
 * NOVEXA Brand Constants
 * Single source of truth for all brand data.
 * Never modify colors, names, or founder info.
 */

// ============================================================
// BRAND IDENTITY
// ============================================================
export const BRAND = {
  name: 'NOVEXA',
  tagline: 'Digital Growth Partner',
  mission: 'Building Brands. Driving Growth. Creating Impact.',
  description:
    'We build meaningful digital experiences that connect businesses with their audience and drive measurable results.',
  quote: "We don't just build brands, we build legacies.",
  promise: 'One Agency. Limitless Growth.',
  email: 'Novexaagency27@gmail.com',
  phone: '+91 9227025524',
  whatsappNumber: '919227025524',
  instagram: 'https://www.instagram.com/designbynovexa',
} as const;

// ============================================================
// TEAM
// ============================================================
export const TEAM = [
  {
    id: 'hetvi-koradiya',
    name: 'Hetvi Koradiya',
    role: 'Founder',
    bio: 'Creative strategist with a passion for building brands that leave lasting impressions.',
  },
  {
    id: 'krish-patel',
    name: 'Krish Patel',
    role: 'Co-Founder',
    bio: 'Digital architect focused on delivering premium experiences that drive real business growth.',
  },
] as const;

// ============================================================
// SERVICES
// ============================================================
export const SERVICES = [
  {
    id: 'brand-identity',
    number: '01',
    title: 'Brand Identity',
    shortTitle: 'Branding',
    description:
      'Create timeless logos, visual systems, typography, colors, and brand guidelines that make businesses memorable.',
    icon: 'RiBrush2Line',
    category: 'Design',
  },
  {
    id: 'website-design',
    number: '02',
    title: 'Website Design',
    shortTitle: 'Web Design',
    description:
      'Beautiful, modern websites designed to impress visitors and convert them into customers.',
    icon: 'RiLayout3Line',
    category: 'Digital',
  },
  {
    id: 'website-development',
    number: '03',
    title: 'Website Development',
    shortTitle: 'Development',
    description:
      'Fast, responsive, SEO-friendly websites built with modern technologies and premium user experiences.',
    icon: 'RiCodeSSlashLine',
    category: 'Digital',
  },
  {
    id: 'video-editing',
    number: '04',
    title: 'Video Editing',
    shortTitle: 'Video',
    description:
      'Professional cinematic videos, advertisements, reels, promotional content, and motion graphics.',
    icon: 'RiFilmLine',
    category: 'Motion',
  },
  {
    id: 'social-media-management',
    number: '05',
    title: 'Social Media Management',
    shortTitle: 'Social Media',
    description:
      'Content planning, post design, captions, scheduling, and account growth strategies.',
    icon: 'RiInstagramLine',
    category: 'Marketing',
  },
  {
    id: 'graphic-design',
    number: '06',
    title: 'Graphic Design',
    shortTitle: 'Graphics',
    description:
      'Marketing materials, brochures, presentations, banners, packaging, and promotional creatives.',
    icon: 'RiPenNibLine',
    category: 'Design',
  },
] as const;

// ============================================================
// PROCESS STEPS
// ============================================================
export const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We learn about your business, goals, audience, and challenges to understand what truly matters.',
    icon: 'RiChatSmile2Line',
  },
  {
    step: '02',
    title: 'Research',
    description:
      'We analyze your industry, competitors, and audience to uncover insights that shape the right strategy.',
    icon: 'RiSearchLine',
  },
  {
    step: '03',
    title: 'Strategy',
    description:
      'We create a tailored strategy and roadmap aligned with your goals, brand, and target audience.',
    icon: 'RiEdit2Line',
  },
  {
    step: '04',
    title: 'Design',
    description:
      'We craft creative concepts, visuals, and experiences that bring your brand to life and make an impact.',
    icon: 'RiLightbulbFlashLine',
  },
  {
    step: '05',
    title: 'Develop',
    description:
      'We build fast, responsive, and high-performing solutions using modern technologies and best practices.',
    icon: 'RiCodeSSlashLine',
  },
  {
    step: '06',
    title: 'Launch & Grow',
    description:
      'We launch your project and continue to support, optimize, and help your brand grow consistently.',
    icon: 'RiRocketLine',
  },
] as const;

// ============================================================
// PORTFOLIO PROJECTS — Only real projects from brand document
// ============================================================
export const PORTFOLIO = [
  {
    id: 'crafted-spaces',
    title: 'Crafted Spaces Architecture',
    category: 'Website Design & Development',
    categoryShort: 'Website',
    description:
      'A modern, minimal website for an interior design studio showcasing their projects with elegance and clarity.',
    software: ['Figma', 'React', 'Vite', 'Framer Motion'],
    metrics: [
      { value: '120%', label: 'Increase in Website Traffic' },
      { value: '85%', label: 'Increase in Leads' },
      { value: '48%', label: 'Improvement in Engagement' },
    ],
    image: '/portfolio/crafted-spaces.jpg',
    featured: true,
  },
  {
    id: 'verde-cafe',
    title: 'Verde Cafe & Bistro Identity',
    category: 'Brand Identity',
    categoryShort: 'Branding',
    description:
      'Complete brand identity including logo, color palette, typography, menu collateral, and brand guidelines.',
    software: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    metrics: [
      { value: 'Strong', label: 'Brand Recognition' },
      { value: 'Consistent', label: 'Brand Presence' },
      { value: 'Premium', label: 'Brand Positioning' },
    ],
    image: '/portfolio/verde-cafe.jpg',
    featured: true,
  },
  {
    id: 'bare-skin',
    title: 'Bare Skin Skincare Social',
    category: 'Social Media Management',
    categoryShort: 'Social Media',
    description:
      'End-to-end Instagram management including content strategy, post design, captions, and organic growth.',
    software: ['Figma', 'Photoshop', 'Lightroom'],
    metrics: [
      { value: '12K+', label: 'Followers Growth' },
      { value: '300%', label: 'Increase in Reach' },
      { value: '90%', label: 'Profile Visits Increase' },
    ],
    image: '/portfolio/bare-skin.jpg',
    featured: true,
  },
  {
    id: 'noir-fragrance',
    title: 'Noir Fragrance Commercial',
    category: 'Video Editing',
    categoryShort: 'Video Editing',
    description:
      'Cinematic promotional video created for a luxury fragrance brand for global product launch.',
    software: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    metrics: [
      { value: '250K+', label: 'Views' },
      { value: '18K+', label: 'Engagements' },
      { value: '6.2%', label: 'Engagement Rate' },
    ],
    image: '/portfolio/noir-fragrance.jpg',
    featured: true,
  },
  {
    id: 'website-01',
    title: 'Luxray Watch E-Commerce',
    category: 'Website Design',
    categoryShort: 'Website',
    description:
      'Full-screen editorial grid layout built for luxury timepiece e-commerce and showcase platform.',
    software: ['Figma', 'React', 'GSAP'],
    metrics: [
      { value: '98/100', label: 'Lighthouse Score' },
      { value: '2.1x', label: 'Conversion Lift' },
    ],
    image: '/portfolio/watch-web-ui.jpg',
    featured: false,
  },
  {
    id: 'website-02',
    title: 'Anaqah Web Platform',
    category: 'Website Development',
    categoryShort: 'Website',
    description:
      'High-performance, responsive React application showcasing custom interactive product galleries and web app.',
    software: ['React', 'TypeScript', 'Vite'],
    metrics: [
      { value: '1.2s', label: 'Page Load Time' },
      { value: '100%', label: 'Responsive Mobile' },
    ],
    image: '/portfolio/ui-home-page.jpg',
    featured: false,
  },
  {
    id: 'branding-01',
    title: 'Artisan Brand Monogram',
    category: 'Brand Identity',
    categoryShort: 'Branding',
    description:
      'Custom typography system, color palette tokens, and bespoke monogram logo system for luxury brand.',
    software: ['Adobe Illustrator', 'Photoshop'],
    metrics: [
      { value: 'Full Kit', label: 'Brand Guidelines' },
      { value: 'Vector', label: 'Master Files' },
    ],
    image: '/portfolio/logo-main.jpg',
    featured: false,
  },
  {
    id: 'branding-02',
    title: 'Botanical Coffee Packaging',
    category: 'Packaging Design',
    categoryShort: 'Packaging',
    description:
      'Luxury coffee packaging dielines, tactile label design, and unboxing customer experience.',
    software: ['Illustrator', 'InDesign', 'Photoshop'],
    metrics: [
      { value: 'Print-Ready', label: 'Master Vector Files' },
      { value: '3D Mockup', label: 'Studio Presentation' },
    ],
    image: '/portfolio/coffee-pack.jpg',
    featured: false,
  },
  {
    id: 'social-01',
    title: 'Footwear Campaign Social',
    category: 'Social Media Management',
    categoryShort: 'Social Media',
    description:
      'Cohesive Instagram grid curation, campaign poster design, reel graphics, and story templates.',
    software: ['Figma', 'Photoshop', 'Canva Pro'],
    metrics: [
      { value: '4.8x', label: 'Engagement Increase' },
      { value: 'Daily', label: 'Content Pipeline' },
    ],
    image: '/portfolio/shoes-poster.jpg',
    featured: false,
  },
  {
    id: 'logo-01',
    title: 'Nirvaan Handtag & Monogram',
    category: 'Graphic Design',
    categoryShort: 'Branding',
    description:
      'Custom apparel tag mark, icon system, and digital brand collateral.',
    software: ['Adobe Illustrator'],
    metrics: [
      { value: 'Scalable', label: 'Vector SVG' },
      { value: 'Dark/Light', label: 'Color Variations' },
    ],
    image: '/portfolio/logo-handtag.jpg',
    featured: false,
  },
  {
    id: 'video-01',
    title: 'Vraj Vihar Video Commercial',
    category: 'Video Editing',
    categoryShort: 'Video Editing',
    description:
      'Fast-paced promotional cutdown, motion typography, color grading, and sound design.',
    software: ['Premiere Pro', 'After Effects'],
    metrics: [
      { value: '4K 60fps', label: 'Master Video' },
      { value: 'Cinematic', label: 'Color Grade' },
    ],
    image: '/portfolio/vraj-vihar-thumb.jpg',
    featured: false,
  },
  {
    id: 'ui-ux-design',
    title: 'Anaqah Mobile Application UI',
    category: 'UI/UX Design',
    categoryShort: 'UI UX',
    description:
      'High-fidelity wireframes, mobile design system, interactive prototypes, and component kit.',
    software: ['Figma', 'Protopie'],
    metrics: [
      { value: '100%', label: 'Design Tokens' },
      { value: 'iOS/Android', label: 'Design System' },
    ],
    image: '/portfolio/anaqah-home.jpg',
    featured: false,
  },
  {
    id: 'poster-01',
    title: 'Commercial Product Campaign',
    category: 'Graphic Design',
    categoryShort: 'Social Media',
    description:
      'High-impact visual advertising poster design for premium consumer electronics campaign.',
    software: ['Photoshop', 'Illustrator'],
    metrics: [
      { value: 'High Res', label: 'Print & Digital' },
      { value: 'Custom', label: 'Lighting Effects' },
    ],
    image: '/portfolio/poster-main.jpg',
    featured: false,
  },
  {
    id: 'casio-watch',
    title: 'Casio Timepiece Poster',
    category: 'Packaging Design',
    categoryShort: 'Packaging',
    description:
      'Product packaging display poster with custom studio lighting and photorealistic render compositing.',
    software: ['Photoshop', 'Lightroom'],
    metrics: [
      { value: 'Product', label: 'Key Visual' },
      { value: '3D Render', label: 'Studio Composition' },
    ],
    image: '/portfolio/casio-watch.jpg',
    featured: false,
  },
  {
    id: 'earbuds-poster',
    title: 'Wireless Earbuds Ad Campaign',
    category: 'Graphic Design',
    categoryShort: 'Social Media',
    description:
      'Minimalist dark-mode audio product advertising layout with neon typography details.',
    software: ['Photoshop', 'Illustrator'],
    metrics: [
      { value: 'Viral', label: 'Social Reach' },
      { value: 'Modern', label: 'Visual System' },
    ],
    image: '/portfolio/earbuds.jpg',
    featured: false,
  },
  {
    id: 'space-poster',
    title: 'Celestial Space Exhibition Poster',
    category: 'Graphic Design',
    categoryShort: 'Branding',
    description:
      'Artistic poster design featuring astronomical graphics, custom typography, and deep color composition.',
    software: ['Photoshop', 'InDesign'],
    metrics: [
      { value: 'Exhibition', label: 'Key Art' },
      { value: 'Bespoke', label: 'Typography' },
    ],
    image: '/portfolio/space-poster.jpg',
    featured: false,
  },
] as const;

// ============================================================
// NAVIGATION LINKS
// ============================================================
export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/portfolio' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
] as const;

// ============================================================
// FOOTER LINKS
// ============================================================
export const FOOTER_SERVICES = [
  { label: 'Brand Identity', href: '/services#brand-identity' },
  { label: 'Website Design', href: '/services#website-design' },
  { label: 'Website Development', href: '/services#website-development' },
  { label: 'Video Editing', href: '/services#video-editing' },
  { label: 'Social Media', href: '/services#social-media-management' },
  { label: 'Graphic Design', href: '/services#graphic-design' },
] as const;

// ============================================================
// STATS / NUMBERS
// ============================================================
export const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '3+', label: 'Years of Excellence' },
  { value: '100%', label: 'Client Satisfaction' },
] as const;

// ============================================================
// CORE VALUES
// ============================================================
export const VALUES = [
  {
    title: 'Excellence',
    description: 'We pursue excellence in everything we do. From strategy to execution, we never compromise on quality.',
    icon: 'RiGemLine',
  },
  {
    title: 'Integrity',
    description: 'We believe in honesty, transparency, and ethical practices. We build trust in every relationship.',
    icon: 'RiShieldLine',
  },
  {
    title: 'Creativity',
    description: 'Creativity is at the heart of our work. We challenge the ordinary to craft extraordinary solutions.',
    icon: 'RiLightbulbLine',
  },
  {
    title: 'Growth',
    description: 'We are growth partners. We focus on measurable results that help brands scale and succeed.',
    icon: 'RiLineChartLine',
  },
  {
    title: 'Impact',
    description: 'We create work that makes a difference — for our clients, their audience, and the world around us.',
    icon: 'RiHeartLine',
  },
] as const;

// ============================================================
// WHATSAPP UTILITY
// ============================================================
export const WHATSAPP_MESSAGES = {
  default: "Hi NOVEXA! I'd like to discuss a project with you.",
  services: "Hi NOVEXA! I'm interested in your creative services.",
  branding: "Hi NOVEXA! I'd like to discuss brand identity for my business.",
  website: "Hi NOVEXA! I need a premium website for my business.",
  consultation: "Hi NOVEXA! I'd like to book a free consultation.",
  portfolio: "Hi NOVEXA! I saw your portfolio and would love to work together.",
} as const;

export function getWhatsAppUrl(message?: keyof typeof WHATSAPP_MESSAGES): string {
  if (message && WHATSAPP_MESSAGES[message]) {
    const text = encodeURIComponent(WHATSAPP_MESSAGES[message]);
    return `https://wa.me/919227025524?text=${text}`;
  }
  return `https://wa.me/919227025524`;
}
