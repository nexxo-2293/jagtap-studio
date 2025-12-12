// app/page.tsx
"use client";
import { useState, useEffect } from "react"; // Import useEffect
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Camera, Film, Users, ArrowRight } from "lucide-react";
// Import HERO_SLIDES here
import { PORTFOLIO, SITE_DATA, PROCESS_STEPS, HERO_SLIDES } from "./data";

export default function Home() {
  const [filter, setFilter] = useState("all");
  // State to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredItems = filter === "all" 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.type === filter);

  // Logic to automatically change slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % HERO_SLIDES.length);
    }, 5000); // Change 5000 to make it faster or slower (in milliseconds)

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      
      {/* 1. HERO SECTION WITH SLIDESHOW */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
        
        {/* --- START: Background Slideshow --- */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }} // Smooth 1.5s crossfade
              className="absolute inset-0"
            >
              <Image 
                src={HERO_SLIDES[currentSlide].src}
                alt={HERO_SLIDES[currentSlide].alt}
                fill
                className="object-cover"
                priority // Load this image first
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {/* --- END: Background Slideshow --- */}

        {/* Dark Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        {/* Main Content Layer */}
        <div className="relative z-20 text-center max-w-4xl mx-auto mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-4">Welcome to</h2>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 text-white">
              JAGTAP <span className="text-neutral-400">STUDIO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              {SITE_DATA.tagline} with <span className="text-white font-medium">Satyajeet Jagtap</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/book" className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-bold transition duration-300 flex items-center gap-2">
                Book a Shoot <ArrowRight size={20} />
              </Link>
              <Link href="/services" className="px-8 py-4 border border-neutral-500 text-neutral-300 hover:bg-white hover:text-black hover:border-white rounded-full font-medium transition duration-300">
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT / INTRO SECTION */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">More Than Just a Camera.</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              At <strong>{SITE_DATA.name}</strong>, we don't just press a button. We craft visual legacies. 
              Whether it's the raw emotion of a wedding or the sharp precision of a commercial product shoot, 
              our approach is rooted in storytelling.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                <Camera className="mx-auto mb-2 text-amber-500" />
                <div className="font-bold">4K/8K</div>
                <div className="text-xs text-gray-500">Quality</div>
              </div>
              <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                <Film className="mx-auto mb-2 text-amber-500" />
                <div className="font-bold">Cinema</div>
                <div className="text-xs text-gray-500">Grading</div>
              </div>
              <div className="text-center p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                <Users className="mx-auto mb-2 text-amber-500" />
                <div className="font-bold">Expert</div>
                <div className="text-xs text-gray-500">Team</div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20">
             {/* Ideally replace this with a photo of your brother/team */}
             <Image 
               src="/logo.jpg" 
               alt="Team working" 
               fill 
               className="object-cover"
             />
          </div>
        </div>
      </section>

      {/* 3. THE PORTFOLIO GALLERY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
          <div className="flex gap-6 justify-center text-sm font-medium text-gray-400">
            {["all", "photo", "video"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`uppercase tracking-widest hover:text-white transition ${filter === tab ? "text-amber-500 border-b-2 border-amber-500" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={item.id}
                className="relative aspect-[4/5] group overflow-hidden rounded-lg bg-neutral-900 cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.category}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                  <div>
                    <p className="text-amber-500 text-xs font-bold uppercase">{item.type}</p>
                    <p className="text-white font-bold text-lg">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="text-gray-400 hover:text-white border-b border-gray-600 hover:border-white transition pb-1">
            See All Services & Pricing
          </Link>
        </div>
      </section>

      {/* 4. PROCESS SECTION (How we work) */}
      <section className="py-24 px-6 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="p-8 border border-neutral-800 rounded-2xl bg-neutral-900/50 hover:border-amber-500/30 transition duration-300">
                <div className="text-5xl font-bold text-neutral-800 mb-4">0{index + 1}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}