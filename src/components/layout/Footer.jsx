import styles from './Footer.module.css';
import logo from '../../assets/stripeslogo.png';

export default function Footer({ setActivePage }) {
  const nav = (page, e) => {
    e.preventDefault();
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.footerLogo}>
  <img src={logo} alt="Stripes Academy Logo" />
</div>
          <p className={styles.tagline}>
            Maritime navigation and bridge decision training grounded in real accident analysis. Mumbai · Manila.
          </p>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Courses</div>
          <div className={styles.colLinks}>
            <a href="#courses" onClick={e => nav('courses', e)}>Navigation Refresher</a>
            <a href="#courses" onClick={e => nav('courses', e)}>COLREGS Decision Making</a>
            <a href="#courses" onClick={e => nav('courses', e)}>ECDIS Excellence</a>
            <a href="#courses" onClick={e => nav('courses', e)}>Radar &amp; ARPA</a>
            <a href="#courses" onClick={e => nav('courses', e)}>Bridge Team Management</a>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Institute</div>
          <div className={styles.colLinks}>
            <a href="#about" onClick={e => nav('about', e)}>About Stripes</a>
            <a href="#about" onClick={e => nav('about', e)}>Meet the Instructor</a>
            <a href="#cases" onClick={e => nav('cases', e)}>Case Studies</a>
            <a href="#companies" onClick={e => nav('companies', e)}>For Companies</a>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Contact</div>
          <div className={styles.colLinks}>
            <a href="#contact" onClick={e => nav('contact', e)}>Mumbai Office</a>
            <a href="#contact" onClick={e => nav('contact', e)}>Manila Training Centre</a>
            <a href="#contact" onClick={e => nav('contact', e)}>Enquire About Courses</a>
            <a href="#contact" onClick={e => nav('contact', e)}>Download Brochure</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>© {new Date().getFullYear()} Stripes Academy · All Rights Reserved · Mumbai, India</div>
        <div className={styles.social}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialLink}>in</a>
          <a href="mailto:training@stripesacademy.net" className={styles.socialLink}>✉</a>
        </div>
      </div>
    </footer>
  );
}
