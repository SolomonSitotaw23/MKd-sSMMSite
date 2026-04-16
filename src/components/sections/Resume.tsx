"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Briefcase, GraduationCap, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Resume() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".resume-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const experience = [
    {
      year: "2023 — Present",
      title: "Senior Brand Strategist",
      company: "L'Agence Elite, Paris",
      desc: "Architecting high-fidelity digital ecosystems and cinematic content strategies for luxury heritage houses."
    },
    {
      year: "2021 — 2023",
      title: "Content Director",
      company: "Vogue Hospitality Group",
      desc: "Led multi-platform creative direction, achieving 300% growth in high-net-worth engagement for luxury estates."
    }
  ];

  const education = [
    {
      degree: "MBA in Luxury Management",
      school: "International University, Paris",
      year: "2020 — 2021"
    },
    {
      degree: "BA in Creative Communication",
      school: "Academy of Fine Arts, Rome",
      year: "2017 — 2020"
    }
  ];

  return (
    <section id="resume" ref={containerRef} className="section-padding bg-forest text-cream overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          
          {/* Left: Professional Journey */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-20">
            <div className="resume-reveal space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-mustard"></div>
                <span className="text-[10px] font-condensed tracking-[0.4em] text-mustard font-bold uppercase">The Professional</span>
              </div>
              <h2 className="text-6xl md:text-[5rem] font-playfair font-black leading-tight italic">
                Journey & <br />
                <span className="not-italic text-mustard">Legacy</span>
              </h2>
            </div>

            <div className="space-y-16">
              {experience.map((job, idx) => (
                <div key={idx} className="resume-reveal group space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <span className="text-mustard font-condensed tracking-widest font-bold text-xs uppercase">{job.year}</span>
                    <h3 className="text-3xl md:text-4xl font-playfair font-bold italic">{job.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-cream/30 text-[10px] font-condensed tracking-widest font-bold uppercase">
                    <Briefcase size={14} />
                    <span>{job.company}</span>
                  </div>
                  <p className="text-cream/50 text-lg font-light leading-relaxed max-w-xl">
                    {job.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Academic & Mastery */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-20">
            
            {/* Academic Section */}
            <div className="space-y-12">
              <div className="resume-reveal flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-mustard/10 flex items-center justify-center text-mustard">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-3xl font-playfair font-bold italic">Foundation</h3>
              </div>
              
              <div className="space-y-10">
                {education.map((edu, idx) => (
                  <div key={idx} className="resume-reveal space-y-2">
                    <span className="text-[10px] font-condensed tracking-widest font-bold text-mustard uppercase">{edu.year}</span>
                    <h4 className="text-xl font-playfair font-bold text-cream">{edu.degree}</h4>
                    <p className="text-cream/40 text-sm">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mastery Grid */}
            <div className="resume-reveal space-y-12 p-8 md:p-12 lg:p-14 bg-white/5 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 rounded-2xl bg-mustard/10 flex items-center justify-center text-mustard">
                  <Award size={24} />
                 </div>
                 <h3 className="text-2xl font-playfair font-bold text-cream">Mastery</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                 <div className="space-y-4">
                    <p className="text-[10px] font-condensed tracking-widest text-mustard font-bold uppercase">Logic</p>
                    <ul className="space-y-3 text-cream/50 text-base font-light">
                      <li>Luxury Strategy</li>
                      <li>Brand Ecology</li>
                      <li>Growth Design</li>
                    </ul>
                 </div>
                 <div className="space-y-4">
                    <p className="text-[10px] font-condensed tracking-widest text-mustard font-bold uppercase">Aesthetic</p>
                    <ul className="space-y-3 text-cream/50 text-base font-light">
                      <li>Creative Direction</li>
                      <li>Visual Styling</li>
                      <li>Contextual Design</li>
                    </ul>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
