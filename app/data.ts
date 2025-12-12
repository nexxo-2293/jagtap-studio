// app/data.ts

export const SITE_DATA = {
  name: "Jagtap Studio", // UPDATED NAME
  tagline: "Capturing Reality, Creating Legacy",
  description: "Jagtap Studio is a premier photography and videography agency based in Pune. We specialize in turning fleeting moments into timeless digital assets for brands and families.",
  contactEmail: "contact@jagtapstudio.com",
};

export const SERVICES = [
  {
    id: "wedding",
    title: "Wedding Cinema",
    price: "From ₹50,000",
    description: "Cinematic storytelling that captures the emotion and grandeur of your big day.",
    features: ["Full Day Coverage", "Candid Photography", "Drone Cinematography", "Teaser & Full Film"],
  },
  {
    id: "commercial",
    title: "Brand Commercials",
    price: "From ₹25,000",
    description: "High-impact visuals designed to stop the scroll and convert viewers into customers.",
    features: ["Concept Development", "Product Videography", "Reels & Shorts", "Ad-ready Editing"],
  },
  {
    id: "events",
    title: "Event Coverage",
    price: "From ₹15,000",
    description: "Professional documentation for corporate events, concerts, and private parties.",
    features: ["Multi-cam Setup", "Live Streaming", "Same-day Edits", "Photo Documentation"],
  },
];

export const PROCESS_STEPS = [
  { title: "Consultation", desc: "We discuss your vision, mood board, and logistics to ensure we align perfectly." },
  { title: "Production", desc: "Our team arrives with top-tier gear to capture high-fidelity audio and visuals." },
  { title: "Post-Production", desc: "We color grade, edit, and sound design your footage into a masterpiece." },
];

export const PORTFOLIO = [
  { id: 1, type: "photo", src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80", category: "Portrait" },
  { id: 2, type: "video", src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80", category: "Nature" },
  { id: 3, type: "photo", src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80", category: "Product" },
  { id: 4, type: "photo", src: "https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&w=800&q=80", category: "Portrait" },
  { id: 5, type: "video", src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?auto=format&fit=crop&w=800&q=80", category: "Commercial" },
  { id: 6, type: "photo", src: "https://images.unsplash.com/photo-1520390138845-fd2d229dd552?auto=format&fit=crop&w=800&q=80", category: "Wedding" },
];

// app/data.ts

// ... keep your existing SITE_DATA, SERVICES, PROCESS_STEPS ...

// --- ADD THIS NEW SECTION ---
export const HERO_SLIDES = [
  {
    id: 1,
    src: "/INKAS-Land-Rover-2023-Defender-1.jpg",
    alt: "Cinematic nature shot",
  },
  {
    id: 2,
    src: "/TOYOTA-FORTUNER-1.jpg.webp",
    alt: "Professional portrait",
  },
  {
    id: 3,
    src: "/1680x756_0 (1)_0.jpg",
    alt: "Commercial product shoot",
  },
  {
    id: 4,
    src: "/Indian_Wedding_Traditions_Rituals_and_Etiquette_for_Brides_Grooms_and_Guests_97b1e009-09d3-48ee-b636-0da63a28c9a0.webp",
    alt: "Wedding celebration",
  },
];

// ... keep your existing PORTFOLIO array ...