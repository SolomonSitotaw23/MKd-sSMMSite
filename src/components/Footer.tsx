import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer id="footer" className={styles.footerSection}>
      <div className={`container ${styles.footerContainer}`}>
        
        <div className={styles.topSection}>
          <div className={styles.brandArea}>
            <div className={styles.logo}>
              Mekdis<span>.</span>
            </div>
            <p className={styles.tagline}>
              Elevating luxury brands through cinematic content and strategic blueprints.
            </p>
          </div>

          <div className={styles.contactCTA}>
            <span className={styles.contactLabel}>Start a Conversation</span>
            <a href="mailto:hello@mekdis.com" className={styles.emailLink}>
              hello@mekdis.com
            </a>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Mekdis Teshane. All rights reserved.
          </div>

          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>Instagram</a>
            <a href="#" className={styles.socialLink}>LinkedIn</a>
            <a href="#" className={styles.socialLink}>Behance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
