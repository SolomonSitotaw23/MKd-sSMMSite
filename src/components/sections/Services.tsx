"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Camera, BarChart3, Users, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Cinematic Content",
    description: "High-end visual storytelling that captures the essence of your brand heritage.",
    icon: Camera,
  },
  {
    title: "Growth Blueprints",
    description: "Strategic roadmaps specifically engineered for market dominance.",
    icon: BarChart3,
  },
  {
    title: "Elite Community",
    description: "Prestige engagement strategies for high-net-worth audiences.",
    icon: Users,
  },
  {
    title: "Identity Refinement",
    description: "Aligning your digital aesthetic with the exacting standards of global luxury.",
    icon: Sparkles,
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="section-padding bg-cream overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-6 max-w-xl">
             <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-mustard"></div>
                <span className="text-[10px] font-condensed tracking-[0.4em] text-mustard font-bold uppercase">Our Expertise</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-playfair font-black text-forest leading-tight">
                Curating <span className="italic font-light">Excellence</span>
             </h2>
          </div>
          <p className="max-w-sm text-forest/50 text-lg font-light leading-relaxed">
            We provide a holistic approach to social management, ensuring every touchpoint reflects uncompromising luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-reveal group p-12 bg-white border border-forest/5 hover:border-mustard transition-all duration-500 hover:shadow-2xl"
            >
              <div className="mb-10 p-4 bg-forest/5 text-mustard w-fit group-hover:bg-mustard group-hover:text-forest transition-colors duration-500 rounded-2xl">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-playfair font-black text-forest mb-6 group-hover:text-mustard transition-colors duration-500">
                {service.title}
              </h4>
              <p className="text-forest/60 text-base font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
