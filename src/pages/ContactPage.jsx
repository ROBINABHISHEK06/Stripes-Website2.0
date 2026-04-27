import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', course: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHeader
        tag="Contact"
        title="Enquire About<br /><em>Training</em>"
        sub="Get in touch to discuss courses, corporate programmes or to request the Stripes Academy brochure."
        bgWord="CONTACT"
      />

      <div className={styles.section}>
        <div className={styles.grid}>
          {/* Form */}
          <div>
            <div className="section-tag">Send an Enquiry</div>
            <h2 className="section-title" style={{ marginBottom: '36px' }}>
              Let's Discuss<br /><em>Your Requirements</em>
            </h2>

            {sent ? (
              <div className={styles.successMsg}>
                ✓ Thank you — we'll be in touch within one working day.
              </div>
            ) : (
              <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Full Name *</label>
                    <input className={styles.input} name="name" value={form.name} onChange={onChange} placeholder="Captain / Mr / Ms ..." required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Company</label>
                    <input className={styles.input} name="company" value={form.company} onChange={onChange} placeholder="Shipping company / self" />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Email Address *</label>
                    <input className={styles.input} type="email" name="email" value={form.email} onChange={onChange} placeholder="your@email.com" required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Phone / WhatsApp</label>
                    <input className={styles.input} name="phone" value={form.phone} onChange={onChange} placeholder="+91 ..." />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Course of Interest</label>
                  <select className={styles.select} name="course" value={form.course} onChange={onChange}>
                    <option value="">Select a course...</option>
                    <option>Navigation Refresher &amp; Bridge Judgement</option>
                    <option>COLREGS Decision Making</option>
                    <option>ECDIS Excellence</option>
                    <option>Radar &amp; ARPA Mastery</option>
                    <option>Bridge Resource Management</option>
                    <option>Corporate Training Programme</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Message</label>
                  <textarea className={styles.textarea} name="message" value={form.message} onChange={onChange} placeholder="Tell us about your training requirements, number of officers, preferred dates, location..." />
                </div>
                <button type="submit" className={styles.submitBtn}>Send Enquiry →</button>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="section-tag">Contact Details</div>
            <h2 className="section-title" style={{ marginBottom: '32px' }}>
              Reach<br /><em>Us Directly</em>
            </h2>
            <div className={styles.info}>
              <div className={styles.infoCard}>
                <div className={styles.infoTitle}>Mumbai — Primary Centre</div>
                <div className={styles.infoValue}>
                St. Xavier's Campus Shilpalaya, Vinayalaya Mahakali Caves Road Behind Holy Family Church, Andheri, Mumbai 400093, INDIA
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoTitle}>Manila — Training Centre</div>
                <div className={styles.infoValue}>
                  Stripes Academy - Manila, Unit 1512, 1515, 1516 & 1517 - 15th Floor Trium Square Building Sen. Gil Puyat Avenue, corner Leveriza, Pasay, 1300 Metro Manila, Philippines
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoTitle}>Email</div>
                <div className={styles.infoValue}>
                  <a href="mailto:training@stripesacademy.net">training@stripesacademy.net</a>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoTitle}>LinkedIn</div>
                <div className={styles.infoValue}>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">Stripes Academy on LinkedIn</a>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoTitle}>Brochure</div>
                <div className={styles.infoValue}>
                  Download the full Stripes Academy course brochure — include your email in the form and we'll send it directly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
