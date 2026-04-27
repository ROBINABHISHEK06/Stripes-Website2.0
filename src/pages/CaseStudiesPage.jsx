import PageHeader from '../components/ui/PageHeader';
import CtaSection from '../components/sections/CtaSection';
import { caseStudies } from '../data/siteData';
import styles from './CaseStudiesPage.module.css';

export default function CaseStudiesPage({ setActivePage }) {
  return (
    <>
      <PageHeader
        tag="Case Studies"
        title="Learning from<br /><em>What Actually Happened</em>"
        sub="Every Stripes course draws on documented accident investigations. Real events. Real decisions. Real lessons for today's bridge officers."
        bgWord="CASES"
      />

      <div className={styles.section}>
        <p className={styles.intro}>
          Maritime accidents rarely happen because a single person did one thing wrong. They happen because of chains of decisions — some made days before the incident, some made in seconds. Our case study approach breaks those chains down so officers understand not just <em>what</em> happened, but <em>why</em> it made sense to the people involved at the time.
        </p>

        <div className={styles.grid}>
          {caseStudies.map(c => (
            <div key={c.id} className={styles.card}>
              <div className={styles.cardLeft}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardLoc}>{c.location}</span>
                  <div className={styles.tags}>
                    {c.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>
                </div>
                <div className={styles.cardTitle}>{c.title}</div>
                <p className={styles.cardSummary}>{c.summary}</p>
              </div>
              <div className={styles.cardRight}>
                <div className={styles.lessonsLabel}>Key Lessons</div>
                <div className={styles.lessons}>
                  {c.lessons.map(l => (
                    <div key={l} className={styles.lesson}>{l}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CtaSection setActivePage={setActivePage} />
    </>
  );
}
