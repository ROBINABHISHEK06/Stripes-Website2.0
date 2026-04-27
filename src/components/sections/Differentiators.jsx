import styles from './Differentiators.module.css';
import { differentiators } from '../../data/siteData';

export default function Differentiators() {
  return (
    <section className={styles.section}>
      <div className="section-tag">Why Stripes</div>
      <h2 className="section-title">
        Training Built for<br /><em>the Realities of the Bridge</em>
      </h2>

      <div className={styles.grid}>
        {differentiators.map(d => (
          <div key={d.num} className={styles.card}>
            <div className={styles.num}>{d.num}</div>
            <span className={styles.icon}>{d.icon}</span>
            <div className={styles.cardTitle}>{d.title}</div>
            <p className={styles.cardText}>{d.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
