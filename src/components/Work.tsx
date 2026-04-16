import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, X } from 'lucide-react';
import styles from './Work.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Milo Dermatology",
    category: "SMM / Brand Aesthetics",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1200",
    className: styles.colSpan12,
    instagramUrl: "https://www.instagram.com/p/DXBRskwih3A/embed/",
  },
  {
    title: "Kuriftu Resorts",
    category: "Creative Direction / Lifestyle",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200",
    className: styles.colSpan8,
    instagramUrl: "https://www.instagram.com/p/C-X-Z-ZM-Z-/embed/", // Example placeholder
  },
  {
    title: "Enzi Footwear",
    category: "Brand Strategy / E-Commerce",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=1200",
    className: styles.colSpan4,
    instagramUrl: "https://www.instagram.com/p/C_mX-Z-M-Z-/embed/", // Example placeholder
  },
  {
    title: "Lulo Coffee",
    category: "SMM / Content Creation",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
    className: styles.colSpan12,
    instagramUrl: "https://www.instagram.com/p/D-X-Z-ZM-Z-/embed/", // Example placeholder
  },
];

export function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

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
    if (!arrowBox || !cursorRef.current) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const arrowRect = arrowBox.getBoundingClientRect();
    const isOverArrow = (
      e.clientX >= arrowRect.left &&
      e.clientX <= arrowRect.right &&
      e.clientY >= arrowRect.top &&
      e.clientY <= arrowRect.bottom
    );

    if (isOverArrow) {
      cursorRef.current.innerText = "OPEN";
      cursorRef.current.classList.add(styles.floatingLabelActive);
    } else {
      cursorRef.current.innerText = "SEE NARRATIVE";
      cursorRef.current.classList.remove(styles.floatingLabelActive);
    }

    const centerX = rect.width - 64; 
    const centerY = rect.height - 64;
    
    const deltaX = (x - centerX) * 0.2;
    const deltaY = (y - centerY) * 0.2;

    gsap.to(arrowBox, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const arrowBox = e.currentTarget.querySelector(`.${styles.arrowBox}`);
    if (cursorRef.current) {
      cursorRef.current.innerText = "SEE NARRATIVE";
      cursorRef.current.classList.remove(styles.floatingLabelActive);
    }
    gsap.to(arrowBox, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1.2, 0.4)",
    });
  };

  return (
    <section id="work" ref={sectionRef} className={`section-padding ${styles.workSection}`}>
      <div ref={cursorRef} className={styles.floatingLabel}>
        SEE NARRATIVE
      </div>

      <div className={`container ${styles.container}`}>
        
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
            Curated content and strategic visual directions engineered for total market presence.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className={`work-card ${styles.card} ${project.className}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelectedPost(project.instagramUrl)}
            >
              <div className={styles.mediaLayer}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
                <div className={styles.mediaOverlay}></div>
              </div>

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

              <div className={styles.subtleOutline}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Modal Overlay */}
      <div className={`${styles.modalOverlay} ${selectedPost ? styles.modalActive : ''}`} onClick={() => setSelectedPost(null)}>
        <button className={styles.closeModal} onClick={() => setSelectedPost(null)}>
          <X size={24} />
        </button>
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
          {selectedPost && (
            <iframe 
              src={selectedPost}
              className={styles.embedFrame}
              allowTransparency={true}
              frameBorder="0"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
}
