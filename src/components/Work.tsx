import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import styles from './Work.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Aura Skincare",
    category: "Creative Direction / SMM",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1200",
    className: styles.colSpan8,
  },
  {
    title: "L'Héritage Paris",
    category: "Brand Strategy / Styling",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    className: styles.colSpan4,
  },
  {
    title: "Maison de Luxe",
    category: "Visual Storytelling",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    className: styles.colSpan12,
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
    <section id="work" ref={sectionRef} className={`section-padding ${styles.workSection}`}>
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

        {/* Project Grid (Clean Bento) */}
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className={`work-card ${styles.card} ${project.className}`}
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

              {/* Information Layer (Strictly Pinned) */}
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
