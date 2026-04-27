import PageHeader from '../components/ui/PageHeader';
import InstructorSection from '../components/sections/InstructorSection';
import CtaSection from '../components/sections/CtaSection';
import { locations } from '../data/siteData';
import styles from './AboutPage.module.css';

const values = [
  { num: '01', title: 'Evidence-Based', text: 'Every course topic traces back to a documented incident or recognised pattern of error. No generic content, no filler.' },
  { num: '02', title: 'Practical First', text: 'Theory serves the practice. Officers leave courses with applicable skills, not just certificates.' },
  { num: '03', title: 'Honest Assessment', text: 'We tell companies and officers what they need to improve — not just what they want to hear.' },
];

export default function AboutPage({ setActivePage }) {
  return (
    <>
      <PageHeader
        tag="About Stripes Academy"
        title="A Maritime Institute<br /><em>Built on Experience</em>"
        sub="Stripes Academy was founded to bridge the gap between procedural compliance and genuine bridge judgement."
        bgWord="ABOUT"
      />

      <div className={styles.section}>
        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <div className="section-tag">Our Story</div>
            <h2 className="section-title" style={{ marginBottom: '28px' }}>
              Why Stripes<br /><em>Exists</em>
            </h2>
            <p className={styles.storyBody}>
              At Stripes, we aim to forge a symbiotic relationship between training and performance. Our cutting-edge teaching methodologies serve as a bridge, seamlessly connecting theory to practice and enhancing knowledge transfer. Established in 2023, our institute, strategically located just 15 minutes from the Mumbai International Airport, boasts a tranquil campus that fosters an optimal learning environment away from the city's hustle and bustle. With state-of-the-art facilities and conference-style classrooms, we ensure a personalized learning experience. The open-air cafeteria offers a delightful space for relaxation during breaks.            </p>
            <p className={styles.storyBody}>
              Our greatest asset is our team of highly qualified trainers, renowned in maritime training, complemented by an in-house psychologist providing valuable feedback to participants. To deliver an immersive learning experience, we proudly house India's largest Full Mission Navigation Simulator by ARI. Embracing a customized approach, we collaborate with partners to tailor courses to their unique needs. We are confident that our innovative and rewarding training programs will propel you toward your goals. Thank you for considering Stripes Institute; we eagerly anticipate supporting you in your journey.            </p>
            <p className={styles.storyBody}>
              Every course is designed with a single question in mind: <em>what does this officer actually need to do better on the bridge?</em> The answer drives everything — content, exercises, scenarios, and assessment.
            </p>
          </div>

          <div>
            <div className="section-tag">Our Values</div>
            <h2 className="section-title" style={{ marginBottom: '28px' }}>
              How We<br /><em>Work</em>
            </h2>
            <div className={styles.valuesGrid} style={{ marginTop: 0 }}>
              {values.map(v => (
                <div key={v.num} className={styles.value} style={{ gridColumn: '1/-1' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '16px', alignItems: 'start' }}>
                    <div className={styles.valueNum}>{v.num}</div>
                    <div>
                      <div className={styles.valueTitle}>{v.title}</div>
                      <p className={styles.valueText}>{v.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <InstructorSection />

      <div className={styles.section}>
        <div className="section-tag">Locations</div>
        <h2 className="section-title">Training Centres in<br /><em>Mumbai &amp; Manila</em></h2>
        <div className={styles.locGrid}>
          {locations.map(l => (
            <div key={l.city} className={styles.loc}>
              <div className={styles.locType}>{l.type}</div>
              <div className={styles.locCity}>{l.city}</div>
              <div className={styles.locCountry}>{l.country}</div>
              <p className={styles.locAddress}>{l.address}</p>
            </div>
          ))}
        </div>
      </div>

      <CtaSection setActivePage={setActivePage} />
    </>
  );
}
