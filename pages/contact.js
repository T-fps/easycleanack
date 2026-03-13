import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // For Vercel deployment, integrate with Formspree, Resend, or similar.
    // Replace the action URL below with your Formspree endpoint.
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Easy Clean ACK</title>
      </Head>

      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <div className="section-label">Reach Out</div>
          <h1 className="section-title light">Contact Us</h1>
          <p>Chat with us so that we can work together!</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactInner}>

          {/* LEFT - INFO */}
          <div className={styles.infoCol}>
            <h2 className="section-title">Get In Touch</h2>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Phone</div>
              <a href="tel:4133338401" className={styles.infoValue}>413 333 8401</a>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Email</div>
              <a href="mailto:easycleanack@gmail.com" className={styles.infoValue}>easycleanack@gmail.com</a>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Location</div>
              <div className={styles.infoValue}>Nantucket Island, MA</div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Social Media</div>
              <div className={styles.socialRow}>
                <a href="https://www.facebook.com/profile.php?id=61575697125537" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  Facebook
                </a>
                <a href="https://www.instagram.com/easycleanack/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/tygrod/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className={styles.formCol}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3>Thanks for reaching out!</h3>
                <p>We'll be in touch shortly.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-gold">Send Message</button>
                <p className={styles.formNote}>
                  * To receive form submissions by email, connect a service like{' '}
                  <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">Formspree</a>
                  {' '}in the contact page code.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
