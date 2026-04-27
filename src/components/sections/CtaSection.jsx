import styles from './CtaSection.module.css';
import Button from '../ui/Button';

export default function CtaSection({ setActivePage }) {
  const nav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.bg} aria-hidden="true">STRIPES</div>
      <div className={styles.inner}>
        <div className={`section-tag ${styles.tag}`}>Get Started</div>
        <h2 className={styles.title}>
          Ready to Build a Stronger<br /><em>Bridge Team?</em>
        </h2>
        <p className={styles.sub}>
          Whether you're an individual officer or a shipping company, contact us to discuss the right training programme.
        </p>
        <div className={styles.buttons}>
          <Button variant="primary" onClick={() => nav('contact')}>Enquire About Courses</Button>
          <Button variant="outline" onClick={() => nav('contact')}>Download Brochure</Button>
        </div>
        <div className={styles.locs}>
          {['Mumbai, India', 'Manila, Philippines'].map(l => (
            <div key={l} className={styles.loc}>
              <div className={styles.dot} />{l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
