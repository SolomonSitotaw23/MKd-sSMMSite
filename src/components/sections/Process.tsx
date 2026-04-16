"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discovery & Immersion",
    description: "We dive deep into your brand heritage, vision, and the nuances of your niche to understand the foundation of your legacy.",
  },
  {
    number: "02",
    title: "Curated Strategy",
    description: "A bespoke roadmap, specifically engineered to navigate the intersection of art and analytics for high-net-worth engagement.",
  },
  {
    number: "03",
    title: "Executive Execution",
    description: "Seamless, white-glove management of every digital touchpoint, ensuring consistent luxury across all platforms.",
  },
  {
    number: "04",
    title: "Brand Elevation",
    description: "Continuous refinement and strategic pivoting to ensure your brand doesn't just grow—it dominates and endures.",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        
        gsap.from(step, {
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-32">
          <h2 className="text-sm uppercase tracking-[0.5em] text-gold font-bold mb-6">The Methodology</h2>
          <h3 className="text-5xl md:text-7xl font-playfair text-espresso leading-tight">
            The <span className="italic">Concierge</span> <br /> 
            Experience
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => { stepRefs.current[index] = el; }}
              className="flex flex-col space-y-8"
            >
              <span className="text-6xl font-playfair text-gold/20 leading-none">
                {step.number}
              </span>
              <div className="max-w-md">
                <h4 className="text-2xl font-playfair text-espresso mb-6">
                  {step.title}
                </h4>
                <p className="text-espresso/60 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
