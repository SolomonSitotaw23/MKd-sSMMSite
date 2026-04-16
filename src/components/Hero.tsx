import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "expo.out",
        stagger: 0.1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroGrid}>
          
          {/* Left Column: Narrative */}
          <div>
            <div className={`hero-reveal ${styles.catalystLabel}`}>
              <div className={styles.catalystLine}></div>
              <span className={styles.catalystText}>Digital Creative Catalyst</span>
            </div>
            <h1 className={styles.title}>
              Mekides <br />
              <span>Demissie</span>
            </h1>
            <p className={`hero-reveal ${styles.desc}`}>
              Architecting cinematic brand experiences and high-fidelity social narratives for luxury legends and visionary entrepreneurs.
            </p>
            <div className={`hero-reveal ${styles.actions}`}>
              <a href="#work" className="btn-primary">View Archives</a>
              <a href="#about" className={styles.discoverLink}>
                <span>Discover the story</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual framing */}
          <div className="hero-reveal" style={{ position: 'relative' }}>
            <div className={styles.imageFrame}>
              <img 
                src="/images/photo_2025-08-18_15-39-10.jpg" 
                alt="Mekdis Profile" 
                loading="eager"
              />
              <div className={styles.imageGradient}></div>
            </div>
            <div className={styles.locationBadge}>
              <p className={styles.locationLabel}>Based in</p>
                <p className={styles.locationText}>Addis Ababa <br/> Ethiopia</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
