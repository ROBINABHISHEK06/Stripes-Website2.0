import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { navLinks } from '../../data/siteData';
import logo from '../../assets/stripeslogo.png'

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href, e) => {
    e.preventDefault();
    const page = href.replace('#', '');
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
<div className={styles.logo}>
  <img src={logo} alt="Stripes Academy Logo" />
</div>

        <ul className={styles.links}>
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => handleNav(l.href, e)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <button className={styles.cta} onClick={e => handleNav('#contact', e)}>
          Enquire Now
        </button>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={e => handleNav(l.href, e)}>
            {l.label}
          </a>
        ))}
        <button className={styles.mobileCta} onClick={e => handleNav('#contact', e)}>
          Enquire Now
        </button>
      </div>
    </>
  );
}
