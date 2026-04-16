import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

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
              Mekdes <br />
              <span>Demissie</span>
            </h1>
            <p className={`hero-reveal ${styles.desc}`}>
              Architecting cinematic brand experiences and engaging social media content for visionary entrepreneurs and modern brands.
            </p>
            <div className={`hero-reveal ${styles.actions}`}>
              <a href="#work" className="btn-primary">View Archives</a>
              <a href="#about" className={styles.discoverLink}>
                <span>Discover the story</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Gorgeous Social Bar */}
            <div className={`hero-reveal ${styles.socialBar}`}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Telegram">
                <TelegramIcon />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Right Column: Visual framing */}
          <div className="hero-reveal" style={{ position: 'relative' }}>
            <div className={styles.imageFrame}>
              <img 
                src="/images/photo_2025-08-18_15-39-10.jpg" 
                alt="Mekdes Profile" 
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
