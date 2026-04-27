import styles from './Hero.module.css';
import Button from '../ui/Button';
import { heroStats, trustItems } from '../../data/siteData';

export default function Hero({ setActivePage }) {
  const nav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className={styles.hero} id="home">
        <div className={styles.bg} />

        {/* Radar — pure SVG, works locally in all browsers */}
        <div className={styles.radarWrap} aria-hidden="true">
          <svg
            className={styles.radarSvg}
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="rgba(232,130,26,0)" />
                <stop offset="100%" stopColor="rgba(232,130,26,0.95)" />
              </linearGradient>
              <radialGradient id="sweepFan" cx="0%" cy="50%" r="100%">
                <stop offset="0%"   stopColor="rgba(232,130,26,0.22)" />
                <stop offset="100%" stopColor="rgba(232,130,26,0)" />
              </radialGradient>
            </defs>

            {/* Concentric rings */}
            <circle className={styles.radarRing} style={{ animationDelay: '0s' }}   cx="250" cy="250" r="48"  />
            <circle className={styles.radarRing} style={{ animationDelay: '0.5s' }} cx="250" cy="250" r="98"  />
            <circle className={styles.radarRing} style={{ animationDelay: '1s' }}   cx="250" cy="250" r="146" />
            <circle className={styles.radarRing} style={{ animationDelay: '1.5s' }} cx="250" cy="250" r="194" />
            <circle className={styles.radarRing} style={{ animationDelay: '2s' }}   cx="250" cy="250" r="238" />

            {/* Crosshair */}
            <line className={styles.crosshairLine} x1="250" y1="12"  x2="250" y2="488" />
            <line className={styles.crosshairLine} x1="12"  y1="250" x2="488" y2="250" />

            {/* Sweep arm — inline style is the reliable cross-browser fix */}
            <g className={styles.sweepGroup}>
              <path
                d="M250,250 L488,250 A238,238 0 0,0 419,81 Z"
                fill="url(#sweepFan)"
                opacity="0.7"
              />
              <line
                x1="250" y1="250" x2="488" y2="250"
                stroke="url(#sweepGrad)"
                strokeWidth="2.5"
              />
              <circle cx="488" cy="250" r="3.5" fill="rgba(232,130,26,1)" />
            </g>

            {/* Blip dots */}
            <circle className={styles.blipDot} style={{ animationDelay: '1s' }}   cx="355" cy="142" r="4.5" />
            <circle className={styles.blipDot} style={{ animationDelay: '2.5s' }} cx="192" cy="308" r="4.5" />
            <circle className={styles.blipDot} style={{ animationDelay: '0.5s' }} cx="278" cy="370" r="4.5" />
          </svg>
        </div>

        <div className={styles.horizonLine} />

        {/* Hero text */}
        <div className={styles.content}>
          <div className={styles.tag}>Maritime Training Institute</div>

          <h1 className={styles.title}>
            Advanced Bridge<br />
            Decision &amp; Navigation<br />
            <em>Training.</em>
          </h1>

          <p className={styles.sub}>
            COLREGS, ECDIS, Radar and Bridge Resource Management training
            grounded in real accident analysis — for navigating officers who
            lead from the bridge.
          </p>

          <div className={styles.buttons}>
            <Button variant="primary"  onClick={() => nav('courses')}>View Courses</Button>
            <Button variant="outline"  onClick={() => nav('companies')}>For Shipping Companies</Button>
          </div>

          <div className={styles.stats}>
            {heroStats.map(s => (
              <div key={s.label}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className={styles.trustBar}>
        {trustItems.map((item, i) => (
          <div key={item.text} style={{ display: 'contents' }}>
            {i > 0 && <div className={styles.sep} />}
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>{item.icon}</span>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
