import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CompaniesPage from './pages/CompaniesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './styles/globals.css';

const PAGES = {
  home:      HomePage,
  courses:   CoursesPage,
  cases:     CaseStudiesPage,
  companies: CompaniesPage,
  about:     AboutPage,
  contact:   ContactPage,
};

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const PageComponent = PAGES[activePage] || HomePage;

  return (
    <div>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>
        <PageComponent setActivePage={setActivePage} />
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
