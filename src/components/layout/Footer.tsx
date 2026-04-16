"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 md:py-32 bg-forest text-cream overflow-hidden border-t border-white/5">
      <div className="container space-y-24">
        
        {/* Top Grid: Signature & Nav */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-12 xl:col-span-6 space-y-12">
            <Link href="/" className="text-4xl md:text-6xl font-playfair font-black tracking-tighter hover:text-mustard transition-colors">
              Mekdis<span className="text-mustard">.</span>
            </Link>
            <p className="text-cream/30 text-lg md:text-xl font-light leading-relaxed max-w-sm italic">
              "Archiving luxury, one cinematic narrative at a time."
            </p>
          </div>

          <div className="lg:col-span-12 xl:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-condensed tracking-widest text-mustard font-bold uppercase">General</h4>
              <ul className="space-y-4 text-cream/40 text-[11px] font-bold uppercase tracking-widest">
                <li className="hover:text-cream transition-colors"><Link href="#work">Archives</Link></li>
                <li className="hover:text-cream transition-colors"><Link href="#about">Profile</Link></li>
                <li className="hover:text-cream transition-colors"><Link href="#contact">Inquiry</Link></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[10px] font-condensed tracking-widest text-mustard font-bold uppercase">Social</h4>
              <ul className="space-y-4 text-cream/40 text-[11px] font-bold uppercase tracking-widest">
                <li className="hover:text-cream transition-colors"><Link href="#">LinkedIn</Link></li>
                <li className="hover:text-cream transition-colors"><Link href="#">Instagram</Link></li>
                <li className="hover:text-cream transition-colors"><Link href="#">Behance</Link></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col justify-end items-start md:items-end">
               <button 
                onClick={scrollToTop}
                className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-mustard hover:text-forest transition-all"
               >
                 <ArrowUp size={24} />
               </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-condensed tracking-widest text-cream/20 font-bold uppercase">
            © {currentYear} Mekdis Teshane. All Rights Reserved.
          </p>
          <div className="flex gap-12 text-[10px] font-condensed tracking-widest text-cream/20 font-bold uppercase">
             <Link href="#" className="hover:text-cream transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-cream transition-colors">Digital Excellence</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
