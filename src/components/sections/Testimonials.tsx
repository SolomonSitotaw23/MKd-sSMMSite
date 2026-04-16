"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Quote } from "lucide-react";

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="section-padding bg-forest text-cream overflow-hidden text-center"
    >
      <div className="container max-w-5xl space-y-24">
        
        <div className="testimonial-reveal space-y-8">
           <div className="flex flex-col items-center gap-4">
              <div className="h-12 w-[1px] bg-mustard"></div>
              <span className="text-[10px] font-condensed tracking-[0.5em] text-mustard font-bold uppercase">The Endorsements</span>
           </div>
           <h2 className="text-6xl md:text-8xl font-playfair font-black text-cream leading-[0.9]">
             Voices of <br />
             <span className="italic font-light">Heritage</span>
           </h2>
        </div>

        <div className="testimonial-reveal space-y-12">
          <div className="flex justify-center text-mustard opacity-40">
            <Quote size={60} />
          </div>
          
          <blockquote className="space-y-10">
            <p className="text-3xl md:text-5xl font-playfair font-black leading-tight max-w-4xl mx-auto italic">
              "Mekdis has a rare ability to capture the soul of a luxury house and translate it into a digital ecosystem that feels both historic and contemporary."
            </p>
            <footer className="space-y-2">
              <cite className="not-italic text-2xl font-playfair font-bold text-mustard">Julian de la Maison</cite>
              <p className="text-[10px] font-condensed tracking-widest text-cream/40 uppercase font-bold">Director of Fine Arts, Paris</p>
            </footer>
          </blockquote>
        </div>

      </div>
    </section>
  );
}
