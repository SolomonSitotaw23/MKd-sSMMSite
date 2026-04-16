import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import styles from './Work.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Milo Dermatology",
    category: "SMM / Brand Aesthetics",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1200",
    className: styles.colSpan12,
  },
  {
    title: "Kuriftu Resorts",
    category: "Creative Direction / Lifestyle",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200",
    className: styles.colSpan8,
  },
  {
    title: "Enzi Footwear",
    category: "Brand Strategy / E-Commerce",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=1200",
    className: styles.colSpan4,
  },
  {
    title: "Zemen Bank Premium",
    category: "Corporate Identity / SMM",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    className: styles.colSpan12,
  },
];

export function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Animation
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

      // Floating Label Interaction
      const moveLabel = (e: MouseEvent) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      window.addEventListener('mousemove', moveLabel);
      return () => window.removeEventListener('mousemove', moveLabel);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const arrowBox = card.querySelector(`.${styles.arrowBox}`) as HTMLElement;
    if (!arrowBox) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Magnetic pull for the arrow box
    const centerX = rect.width - 64; // Approx position of arrow box
    const centerY = rect.height - 64;
    
    const deltaX = (x - centerX) * 0.15;
    const deltaY = (y - centerY) * 0.15;

    gsap.to(arrowBox, {
      x: deltaX,
      y: deltaY,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const arrowBox = e.currentTarget.querySelector(`.${styles.arrowBox}`);
    gsap.to(arrowBox, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <section id="work" ref={sectionRef} className={`section-padding ${styles.workSection}`}>
      {/* Custom Floating Label */}
      <div ref={cursorRef} className={styles.floatingLabel}>
        See Narrative
      </div>

      <div className={`container ${styles.container}`}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.label}>
              <div className={styles.labelLine}></div>
              <span className={styles.labelText}>Selected Collaborations</span>
            </div>
            <h2 className={styles.title}>
              The Digital <br />
              <span>Archives</span>
            </h2>
          </div>
          <p className={styles.desc}>
            Curated narratives and strategic visual directions engineered for global luxury dominance.
          </p>
        </div>

        {/* Project Grid */}
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className={`work-card ${styles.card} ${project.className}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Media Layer */}
              <div className={styles.mediaLayer}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
                <div className={styles.mediaOverlay}></div>
              </div>

              {/* Information Layer */}
              <div className={styles.infoLayer}>
                <div className={styles.infoContent}>
                  <span className={styles.category}>
                    {project.category}
                  </span>
                  <div className={styles.titleRow}>
                    <h4 className={styles.cardTitle}>
                      {project.title}
                    </h4>
                    <div className={styles.arrowBox}>
                      <ArrowUpRight size={28} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Outline */}
              <div className={styles.subtleOutline}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
