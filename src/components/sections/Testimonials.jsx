import styles from './Testimonials.module.css';
import { testimonials } from '../../data/siteData';

export default function Testimonials({ limit }) {
  const shown = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <section className={styles.section}>
      <div className="section-tag">What Officers Say</div>
      <h2 className="section-title">
        From the People <em>Who've Done the Course</em>
      </h2>
      <div className={styles.grid}>
        {shown.map((t, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.quote}>"</span>
            <p className={styles.text}>{t.text}</p>
            <div className={styles.author}>
              {t.author} — <span className={styles.company}>{t.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
