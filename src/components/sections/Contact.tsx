"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, MessageSquare, ExternalLink, Link } from "lucide-react";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
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
      id="contact"
      ref={containerRef}
      className="section-padding bg-cream text-forest overflow-hidden"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          
          {/* Left: Engagement Hook */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-16">
            <div className="contact-reveal space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-mustard"></div>
                <span className="text-[10px] font-condensed tracking-[0.4em] text-mustard font-bold uppercase">The Connection</span>
              </div>
              <h2 className="text-7xl md:text-[8rem] xl:text-[10rem] font-playfair font-black text-forest leading-[0.8] tracking-tighter">
                Lead with <br />
                <span className="italic font-light text-mustard">Intention</span>
              </h2>
            </div>

            <p className="contact-reveal text-forest/60 text-xl md:text-2xl font-light leading-relaxed max-w-xl">
              Currently accepting limited luxury collaborations for Q3/Q4 2026. Let's initiate a cinematic shift for your brand.
            </p>

            <div className="contact-reveal flex flex-wrap gap-8 pt-10 border-t border-forest/5">
              <div className="group space-y-4 cursor-pointer">
                <span className="text-[10px] font-condensed tracking-widest text-mustard font-bold uppercase">Digital ID</span>
                <p className="text-2xl font-playfair font-black group-hover:text-mustard transition-colors">hello@mekdis.com</p>
              </div>
              <div className="group space-y-4 cursor-pointer">
                <span className="text-[10px] font-condensed tracking-widest text-mustard font-bold uppercase">Social Reach</span>
                <div className="flex gap-6 pt-2">
                  <ExternalLink className="hover:text-mustard transition-colors" />
                  <Link className="hover:text-mustard transition-colors" />
                  <MessageSquare className="hover:text-mustard transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Direct Action */}
          <div className="lg:col-span-12 xl:col-span-5 flex items-center">
            <div className="contact-reveal w-full p-12 md:p-20 bg-forest text-cream rounded-[3rem] shadow-2xl space-y-10 group overflow-hidden relative">
              <div className="relative z-10 space-y-8">
                <h3 className="text-4xl md:text-5xl font-playfair font-black leading-tight italic">
                  Initiate a <br />
                  <span className="not-italic">Collaboration</span>
                </h3>
                <p className="text-cream/40 text-sm font-light leading-relaxed">
                  Brief inquiries receive priority. Expect a curated response within 48 hours.
                </p>
                <div className="pt-6">
                  <a 
                    href="mailto:hello@mekdis.com"
                    className="inline-flex items-center gap-6 px-10 py-5 bg-mustard text-forest rounded-full text-[11px] font-bold uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-xl"
                  >
                    <span>Send Inquiry</span>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-mustard/10 rounded-full blur-3xl group-hover:bg-mustard/20 transition-all duration-1000"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
