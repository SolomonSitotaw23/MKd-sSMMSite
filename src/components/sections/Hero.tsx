"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "expo.out",
        stagger: 0.1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] bg-forest flex flex-col justify-center py-20 md:py-32 overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-12">
            <div className="hero-reveal space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-mustard"></div>
                <span className="text-[10px] font-condensed tracking-[0.5em] text-mustard font-bold uppercase">
                  Digital Creative Catalyst
                </span>
              </div>
              <h1 
                ref={titleRef}
                className="text-7xl md:text-[9rem] xl:text-[11rem] font-playfair font-black text-cream leading-[0.8] tracking-tighter"
              >
                Mekdis <br />
                <span className="text-mustard italic font-light">Teshane</span>
              </h1>
            </div>

            <p className="hero-reveal text-cream/50 text-xl md:text-2xl font-light leading-relaxed max-w-xl">
              Architecting cinematic brand experiences and high-fidelity social narratives for luxury legends and visionary entrepreneurs.
            </p>

            <div className="hero-reveal flex flex-wrap gap-8 items-center pt-4">
              <Link 
                href="#work" 
                className="px-10 py-5 bg-mustard text-forest rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-xl"
              >
                View Archives
              </Link>
              <Link 
                href="#about" 
                className="flex items-center gap-4 group text-[11px] font-condensed tracking-[0.3em] font-bold text-cream uppercase"
              >
                <span>Discover the story</span>
                <ArrowRight size={16} className="text-mustard group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual framing */}
          <div className="lg:col-span-5 relative">
            <div className="hero-reveal relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
                alt="Mekdis Profile" 
                fill 
                className="object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-[2000ms]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent"></div>
            </div>
            
            {/* Minimal Detail */}
            <div className="absolute -bottom-8 -left-8 bg-forest p-8 rounded-2xl border border-white/5 hidden xl:block">
              <p className="text-[10px] font-condensed tracking-widest text-mustard font-bold uppercase mb-2">Based in</p>
              <p className="font-playfair text-2xl font-black text-cream">Paris, France</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
