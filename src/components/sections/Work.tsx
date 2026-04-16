"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


const projects = [
  {
    title: "Aura Skincare",
    category: "Creative Direction / SMM",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1200",
    className: "md:col-span-8",
  },
  {
    title: "L'Héritage Paris",
    category: "Brand Strategy / Styling",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    className: "md:col-span-4",
  },
  {
    title: "Maison de Luxe",
    category: "Visual Storytelling",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    className: "md:col-span-12",
  },
];

export function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-card", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-padding bg-cream overflow-hidden">
      <div className="container space-y-32">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-mustard"></div>
              <span className="text-[10px] font-condensed tracking-[0.4em] text-mustard font-bold uppercase underline decoration-mustard/30 underline-offset-8">Selected Collaborations</span>
            </div>
            <h2 className="text-7xl md:text-9xl font-playfair font-black text-forest leading-[0.85] tracking-tighter">
              The Digital <br />
              <span className="italic font-light">Archives</span>
            </h2>
          </div>
          <p className="text-forest/50 text-xl font-light max-w-sm leading-relaxed">
            Curated narratives and strategic visual directions engineered for global luxury dominance.
          </p>
        </div>

        {/* Project Grid (Clean Bento) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 auto-rows-[450px] md:auto-rows-[600px]">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className={`work-card group relative overflow-hidden rounded-[3rem] bg-forest/5 shadow-2xl transition-all duration-700 hover:-translate-y-2 min-h-[450px] md:min-h-[600px] ${project.className}`}
            >

              {/* Media Layer */}
              <div className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-[1500ms]">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/10 transition-colors"></div>
              </div>

              {/* Information Layer (Strictly Pinned) */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-forest/90 via-forest/20 to-transparent">
                <div className="space-y-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                  <span className="text-mustard text-[11px] font-condensed tracking-[0.3em] font-bold uppercase">
                    {project.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h4 className="text-4xl md:text-6xl font-playfair font-black text-cream italic leading-none truncate">
                      {project.title}
                    </h4>
                    <div className="w-16 h-16 rounded-full bg-mustard text-forest flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
                      <ArrowUpRight size={28} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Outline */}
              <div className="absolute inset-0 border border-white/5 rounded-[3rem] pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
