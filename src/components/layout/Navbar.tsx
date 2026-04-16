"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Archives", href: "#work" },
    { name: "Profile", href: "#about" },
    { name: "Curriculum", href: "#resume" },
    { name: "Inquiry", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-forest/80 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl" : "bg-transparent py-8"}`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-playfair font-black text-cream tracking-tighter">
          Mekdis<span className="text-mustard">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-condensed tracking-widest text-cream/70 hover:text-mustard transition-colors px-4 py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="px-6 py-3 bg-mustard text-forest rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-cream transition-all"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-cream" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-forest flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-4xl font-playfair font-black text-cream"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
