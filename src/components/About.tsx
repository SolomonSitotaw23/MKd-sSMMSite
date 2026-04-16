import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin, Mail, ExternalLink } from 'lucide-react';
import styles from './About.module.css';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className={`section-padding ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.grid}>
          
          {/* Left Column: Image with stable detail */}
          <div className="about-reveal">
            <div className={styles.imageFrame}>
              <img 
                src="/images/photo_2025-08-18_15-39-12.jpg" 
                alt="Mekdes Professional" 
              />
              <div className={styles.imageGradient}></div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className={styles.bioContainer}>
            <div className="about-reveal">
              <div className={styles.ethosLabel}>
                <div className={styles.ethosLine}></div>
                <span className={styles.ethosText}>The Ethos</span>
              </div>
              <h2 className={styles.title}>
                Digital <br />
                <span>Storytelling</span>
              </h2>
            </div>
            
            <div className={`about-reveal ${styles.textBlock}`}>
              <p className={styles.leadText}>
                I am a creative strategist specializing in social media marketing and brand growth. I bridge the story of modern brands with the pulse of digital ecosystems.
              </p>
              <p className={styles.subText}>
                Based in Addis Ababa, Ethiopia, I transform digital presences into engaging social platforms. My approach is rooted in consistent quality, high-fidelity visual storytelling, and strategic growth.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className={`about-reveal ${styles.contactGrid}`}>
              <div className={styles.contactItem}>
                <div className={styles.contactHeader}>
                  <MapPin size={18} />
                  <span className={styles.contactLabel}>Location</span>
                </div>
                <p className={styles.contactValue}>Addis Ababa / Global</p>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactHeader}>
                  <Mail size={18} />
                  <span className={styles.contactLabel}>Inquiry</span>
                </div>
                <p className={styles.contactValue}>hello@Mekdes.com</p>
              </div>
            </div>

            <div className="about-reveal">
              <a href="#" className={styles.externalLink}>
                <span>Full Profile on LinkedIn</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
