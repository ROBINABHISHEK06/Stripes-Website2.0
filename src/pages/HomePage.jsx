import Hero from '../components/sections/Hero';
import Differentiators from '../components/sections/Differentiators';
import CoursesGrid from '../components/sections/CoursesGrid';
import CaseStudiesSection from '../components/sections/CaseStudiesSection';
import InstructorSection from '../components/sections/InstructorSection';
import Testimonials from '../components/sections/Testimonials';
import CtaSection from '../components/sections/CtaSection';

export default function HomePage({ setActivePage }) {
  return (
    <>
      <Hero setActivePage={setActivePage} />
      <Differentiators />
      <CoursesGrid limit={4} setActivePage={setActivePage} />
      <CaseStudiesSection />
      <InstructorSection />
      <Testimonials limit={3} />
      <CtaSection setActivePage={setActivePage} />
    </>
  );
}
