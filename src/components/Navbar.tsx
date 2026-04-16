import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav ref={navRef} className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo} onClick={closeMenu}>
          <img src="/logo.png" alt="Mekdes Logo" className={styles.logoIcon} />
          <span>Mekdes<span>.</span></span>
        </a>

        {/* Desktop Links */}
        <div className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
          <a href="#work" className={styles.navLink} onClick={closeMenu}>Archives</a>
          <a href="#about" className={styles.navLink} onClick={closeMenu}>Profile</a>
          <a href="#resume" className={styles.navLink} onClick={closeMenu}>Curriculum</a>
          <a href="#services" className={styles.navLink} onClick={closeMenu}>Expertise</a>
          
          <a href="#footer" className={`${styles.connectBtn} ${styles.mobileConnectBtn}`} onClick={closeMenu}>Connect</a>
        </div>

        <div className={styles.navActions}>
          <a href="#footer" className={styles.connectBtn}>Connect</a>
          
          <button className={styles.hamburgerBtn} onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
