"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { MapPin, Mail, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about"
      ref={containerRef}
      className="section-padding bg-cream relative overflow-hidden"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
          
          {/* Left Column: Image with stable detail */}
          <div className="lg:col-span-12 xl:col-span-6 about-reveal">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl grayscale contrast-110 hover:grayscale-0 transition-all duration-[2000ms]">
              <Image 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200" 
                alt="Mekdis Professional" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-12">
            <div className="about-reveal space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-mustard"></div>
                <span className="text-[10px] font-condensed tracking-[0.4em] text-mustard font-bold uppercase">The Ethos</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-playfair font-black text-forest leading-[0.9]">
                Cinematic <br />
                <span className="italic font-light">Narratives</span>
              </h2>
            </div>
            
            <div className="about-reveal space-y-8 max-w-xl">
              <p className="text-forest/70 text-lg md:text-2xl font-light leading-relaxed">
                I am a creative strategist specializing in the art of luxury brand elevation. I bridge the heritage of boutique houses with the pulse of modern digital ecosystems.
              </p>
              <p className="text-forest/50 text-base md:text-lg font-light leading-relaxed">
                Based in Europe, I transform digital presences into curated galleries of prestige. My approach is rooted in uncompromising quality, high-fidelity visual storytelling, and strategic growth.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="about-reveal grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-forest/5">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-mustard">
                  <MapPin size={18} />
                  <span className="text-[10px] font-condensed tracking-widest font-bold uppercase">Location</span>
                </div>
                <p className="text-forest text-lg font-playfair font-bold">Paris / Global</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-mustard">
                  <Mail size={18} />
                  <span className="text-[10px] font-condensed tracking-widest font-bold uppercase">Inquiry</span>
                </div>
                <p className="text-forest text-lg font-playfair font-bold">hello@mekdis.com</p>
              </div>
            </div>

            <div className="about-reveal pt-8">
              <a 
                href="#" 
                className="inline-flex items-center gap-4 group text-[11px] font-condensed tracking-[0.3em] font-bold text-mustard uppercase"
              >
                <span>Full Profile on LinkedIn</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
