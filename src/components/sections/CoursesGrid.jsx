import styles from './CoursesGrid.module.css';
import { courses } from '../../data/siteData';

export default function CoursesGrid({ limit, setActivePage }) {
  const shown = limit ? courses.slice(0, limit) : courses;

  const nav = () => {
    setActivePage('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={styles.section} id="courses">
      <div className="section-tag">Our Programmes</div>
      <h2 className="section-title">
        Courses for <em>Every Stage</em><br />of a Navigation Career
      </h2>

      <div className={styles.grid}>
        {shown.map(c => (
          <div key={c.id} className={styles.card} onClick={nav}>
            <div className={styles.cardNum}>{c.num} — {c.category}</div>
            <div className={styles.cardTitle}>{c.title}</div>
            <p className={styles.cardDesc}>{c.desc}</p>
            <div className={styles.cardFooter}>
              <span className={styles.duration}>{c.duration} · {c.locations}</span>
              <div className={styles.arrow}>→</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
