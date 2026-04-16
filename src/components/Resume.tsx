import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import styles from './Resume.module.css';

export function Resume() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".resume-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const experience = [
    {
      year: "2023 — Present",
      title: "Senior Brand Strategist",
      company: "L'Agence Elite, Paris",
      desc: "Architecting high-fidelity digital ecosystems and cinematic content strategies for luxury heritage houses."
    },
    {
      year: "2021 — 2023",
      title: "Content Director",
      company: "Vogue Hospitality Group",
      desc: "Led multi-platform creative direction, achieving 300% growth in high-net-worth engagement for luxury estates."
    }
  ];

  const education = [
    {
      degree: "MBA in Luxury Management",
      school: "International University, Paris",
      year: "2020 — 2021"
    },
    {
      degree: "BA in Creative Communication",
      school: "Academy of Fine Arts, Rome",
      year: "2017 — 2020"
    }
  ];

  return (
    <section id="resume" ref={containerRef} className={`section-padding ${styles.resumeSection}`}>
      <div className="container">
        <div className={styles.grid}>
          
          {/* Left: Professional Journey */}
          <div className={styles.journeyContainer}>
            <div className="resume-reveal">
              <div className={styles.headerLabel}>
                <div className={styles.headerLine}></div>
                <span className={styles.headerText}>The Professional</span>
              </div>
              <h2 className={styles.title}>
                Journey & <br />
                <span>Legacy</span>
              </h2>
            </div>

            <div className={styles.experienceList}>
              {experience.map((job, idx) => (
                <div key={idx} className={`resume-reveal ${styles.jobItem}`}>
                  <div className={styles.jobHeader}>
                    <span className={styles.jobYear}>{job.year}</span>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                  </div>
                  <div className={styles.jobCompany}>
                    <Briefcase size={14} />
                    <span>{job.company}</span>
                  </div>
                  <p className={styles.jobDesc}>{job.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Academic & Mastery */}
          <div className={styles.academicContainer}>
            
            {/* Academic Section */}
            <div className={styles.sectionGroup}>
              <div className={`resume-reveal ${styles.sectionHeader}`}>
                <div className={styles.iconBox}>
                  <GraduationCap size={24} />
                </div>
                <h3 className={styles.sectionTitle}>Foundation</h3>
              </div>
              
              <div className={styles.educationList}>
                {education.map((edu, idx) => (
                  <div key={idx} className={`resume-reveal ${styles.eduItem}`}>
                    <span className={styles.eduYear}>{edu.year}</span>
                    <h4 className={styles.eduDegree}>{edu.degree}</h4>
                    <p className={styles.eduSchool}>{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mastery Grid */}
            <div className={`resume-reveal ${styles.masteryCard}`}>
              <div className={styles.sectionHeader}>
                 <div className={styles.iconBox}>
                  <Award size={24} />
                 </div>
                 <h3 className={styles.sectionTitle} style={{fontStyle: 'normal'}}>Mastery</h3>
              </div>
              
              <div className={styles.masteryGrid}>
                 <div className={styles.skillGroup}>
                    <p className={styles.skillLabel}>Logic</p>
                    <ul className={styles.skillList}>
                      <li>Luxury Strategy</li>
                      <li>Brand Ecology</li>
                      <li>Growth Design</li>
                    </ul>
                 </div>
                 <div className={styles.skillGroup}>
                    <p className={styles.skillLabel}>Aesthetic</p>
                    <ul className={styles.skillList}>
                      <li>Creative Direction</li>
                      <li>Visual Styling</li>
                      <li>Contextual Design</li>
                    </ul>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
