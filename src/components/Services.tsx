import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Camera, BarChart3, Users, Sparkles } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    title: "Cinematic Content",
    description: "High-end visual storytelling that captures the essence of your brand heritage.",
    icon: Camera,
  },
  {
    title: "Growth Blueprints",
    description: "Strategic roadmaps specifically engineered for market dominance.",
    icon: BarChart3,
  },
  {
    title: "Elite Community",
    description: "Prestige engagement strategies for high-net-worth audiences.",
    icon: Users,
  },
  {
    title: "Brand Alignment",
    description: "Aligning your digital aesthetic with the professional standards of modern marketing.",
    icon: Sparkles,
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.service-reveal');
      
      cards.forEach((card) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
          },
          onComplete: () => {
            gsap.set(card, { clearProps: "all" });
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={`section-padding ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
             <div className={styles.expertiseLabel}>
                <div className={styles.expertiseLine}></div>
                <span className={styles.expertiseText}>Our Expertise</span>
             </div>
             <h2 className={styles.title}>
                Curating <span>Excellence</span>
             </h2>
          </div>
          <p className={styles.desc}>
            We provide a holistic approach to social management, ensuring every touchpoint reflects your brand's unique story.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={`service-reveal ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className={styles.cardTitle}>{service.title}</h4>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
