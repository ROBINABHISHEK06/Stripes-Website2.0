import PageHeader from '../components/ui/PageHeader';
import CtaSection from '../components/sections/CtaSection';
import { courses } from '../data/siteData';
import styles from './CoursesPage.module.css';

export default function CoursesPage({ setActivePage }) {
  return (
    <>
      <PageHeader
        tag="Our Programmes"
        title="Maritime Training<br /><em>Courses</em>"
        sub="Practical, evidence-based training for navigating officers at every career stage. Every course is grounded in real accident analysis."
        bgWord="COURSES"
      />

      <div className={styles.detail}>
        {courses.map(c => (
          <div key={c.id} className={styles.courseDetail}>
            <div>
              <div className={styles.courseNum}>{c.num} — {c.category}</div>
              <div className={styles.courseTitle}>{c.title}</div>
              <p className={styles.courseDesc}>{c.desc}</p>
              <div className={styles.topicLabel}>Course Topics</div>
              <div className={styles.topics}>
                {c.topics.map(t => (
                  <div key={t} className={styles.topic}>{t}</div>
                ))}
              </div>
            </div>
            <div className={styles.meta}>
              <div className={styles.metaRow}>
                <div className={styles.metaLabel}>Duration</div>
                <div className={styles.metaValue}>{c.duration}</div>
              </div>
              <div className={styles.metaRow}>
                <div className={styles.metaLabel}>Locations</div>
                <div className={styles.metaValue}>{c.locations}</div>
              </div>
              <div className={styles.metaRow}>
                <div className={styles.metaLabel}>Audience</div>
                <div className={styles.metaValue}>{c.audience}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CtaSection setActivePage={setActivePage} />
    </>
  );
}
