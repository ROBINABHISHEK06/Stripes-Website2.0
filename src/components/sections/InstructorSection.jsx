import styles from './InstructorSection.module.css';
import { instructor } from '../../data/siteData';

export default function InstructorSection() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.visual}>
        <div className={styles.photoBox}>
          <div className={styles.photoPlaceholder}>
            <div className={styles.photoIcon}>👤</div>
            <span>Instructor Photo</span>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeRole}>Lead Instructor</div>
            <div className={styles.badgeName}>Capt. V. Fernandes</div>
          </div>
        </div>
        <div className={styles.accentBox} />
      </div>

      <div className={styles.content}>
        <div className="section-tag">Meet the Instructor</div>
        <div className={styles.name}>Captain Vincent<br />Fernandes</div>
        <div className={styles.rank}>{instructor.rank}</div>
        {instructor.bio.map((p, i) => (
          <p key={i} className={styles.bio}>{p}</p>
        ))}
        <div className={styles.credentials}>
          {instructor.credentials.map(c => (
            <div key={c} className={styles.credential}>
              <div className={styles.dot} />
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
