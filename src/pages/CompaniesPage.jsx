import PageHeader from '../components/ui/PageHeader';
import CtaSection from '../components/sections/CtaSection';
import Testimonials from '../components/sections/Testimonials';
import { companyBenefits } from '../data/siteData';
import styles from './CompaniesPage.module.css';

const steps = [
  { num: '01', title: 'Initial Consultation', text: 'We discuss your fleet, trading areas, recent incidents and the specific skills gaps you want to address. No generic proposals — everything starts with your situation.' },
  { num: '02', title: 'Programme Design', text: 'We design a course or series of courses around your officers. Vessel type, trade area, your incident history, and your company procedures all shape the content.' },
  { num: '03', title: 'Training Delivery', text: 'Training is delivered at our Mumbai or Manila centres, at your office, or onboard your vessels. Small groups. Focused sessions. Practical exercises based on your scenarios.' },
  { num: '04', title: 'Assessment & Reporting', text: 'Officers complete pre and post-course assessments. You receive a detailed report on individual performance, knowledge gaps identified, and recommended follow-up.' },
];

export default function CompaniesPage({ setActivePage }) {
  return (
    <>
      <PageHeader
        tag="For Shipping Companies"
        title="Training Designed<br /><em>Around Your Fleet</em>"
        sub="Stripes works directly with shipping companies to design and deliver navigation training that targets the specific risks your officers face."
        bgWord="CORPORATE"
      />

      <div className={styles.section}>
        <p className={styles.intro}>
          Generic training rarely moves the needle. Officers complete the course, receive the certificate, and return to the same habits. Stripes works differently — every corporate programme begins with understanding your vessels, your routes, and your incident history, and builds training that addresses the exact gaps that matter to your company.
        </p>

        <div className={styles.benefitsGrid}>
          {companyBenefits.map(b => (
            <div key={b.title} className={styles.benefit}>
              <span className={styles.benefitIcon}>{b.icon}</span>
              <div className={styles.benefitTitle}>{b.title}</div>
              <p className={styles.benefitText}>{b.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.processSection}>
          <div className="section-tag">How It Works</div>
          <h2 className={styles.processTitle}>
            From First Call to<br /><em>Measurable Improvement</em>
          </h2>
          <div className={styles.steps}>
            {steps.map(s => (
              <div key={s.num} className={styles.step}>
                <div className={styles.stepNum}>{s.num}</div>
                <div>
                  <div className={styles.stepTitle}>{s.title}</div>
                  <p className={styles.stepText}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.companiesStrip}>
          <div className={styles.stripTitle}>Trusted By</div>
          <p className={styles.stripText}>
            "Stripes is our preferred training partner for COLREGS and ECDIS. The improvement in officer performance after the course is consistent and measurable."
          </p>
        </div>
      </div>

      <Testimonials limit={3} />
      <CtaSection setActivePage={setActivePage} />
    </>
  );
}
