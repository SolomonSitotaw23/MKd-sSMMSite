import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Navbar.module.css';

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          delay: 0.5
        }
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          Mekdis<span>.</span>
        </a>

        <div className={styles.navLinks}>
          <a href="#work" className={styles.navLink}>Archives</a>
          <a href="#about" className={styles.navLink}>Profile</a>
          <a href="#resume" className={styles.navLink}>Curriculum</a>
          <a href="#services" className={styles.navLink}>Expertise</a>
        </div>

        <a href="#footer" className={styles.connectBtn}>Connect</a>
      </div>
    </nav>
  );
}
