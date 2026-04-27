import styles from './CaseStudiesSection.module.css';
import { caseStudies } from '../../data/siteData';

export default function CaseStudiesSection() {
  return (
    <section className={styles.section} id="cases">
      <div className={styles.grid}>
        <div>
          <div className="section-tag">Case Studies</div>
          <h2 className="section-title">
            Learning from<br /><em>What Actually Happened</em>
          </h2>
          <p className={styles.body}>
            Every Stripes course draws on documented accident investigations. Officers analyse the decisions made — and unmade — in the minutes before an incident. This is how bridge judgement is genuinely improved.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Understanding what went wrong on the bridge of <em>MV Polesie</em> before the collision with <em>Verity</em></li>
            <li className={styles.listItem}>Radar interpretation errors that contributed to the <em>Costa Concordia</em> grounding</li>
            <li className={styles.listItem}>Lookout and communication failures in high-traffic COLREGS situations</li>
            <li className={styles.listItem}>ECDIS over-reliance and passage planning shortfalls in recent PSC detentions</li>
          </ul>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelTitle}>// Recent Case Analysis Modules</div>
          {caseStudies.map(c => (
            <div key={c.id} className={styles.incidentCard}>
              <div className={styles.incidentTitle}>{c.title}</div>
              <div className={styles.incidentMeta}>{c.location}</div>
              <div className={styles.tags}>
                {c.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
