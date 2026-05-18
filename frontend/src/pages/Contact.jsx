import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(API_URL + '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: 'Our Office', details: ['123 Hope Street', 'New Delhi, India 110001'] },
    { icon: <FaPhone />, title: 'Phone', details: ['+91 98765 43210', '+91 11 2345 6789'] },
    { icon: <FaEnvelope />, title: 'Email', details: ['info@hopehands.org', 'donate@hopehands.org'] },
    { icon: <FaClock />, title: 'Working Hours', details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'] },
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="container">
          <h1>Get In <span className="highlight">Touch</span></h1>
          <p>Have questions, want to volunteer, or need more information? We would love to hear from you.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-cards">
              {contactInfo.map((info, i) => (
                <div key={i} className="contact-info-card">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div>
                    <h4>{info.title}</h4>
                    {info.details.map((d, j) => <p key={j}>{d}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="contact-success">
                  <FaCheckCircle className="success-icon" />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We will get back to you within 24 hours.</p>
                  <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Send Us a Message</h3>
                  <div className="contact-form-row">
                    <input type="text" placeholder="Your Name *" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
                    <input type="email" placeholder="Your Email *" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
                  </div>
                  <input type="text" placeholder="Subject *" value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} required />
                  <textarea placeholder="Your Message *" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} rows="5" required />
                  <button type="submit" className="btn btn-primary contact-submit-btn" disabled={loading}>
                    {loading ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-placeholder">
            <FaMapMarkerAlt className="map-icon" />
            <h3>Visit Our Office</h3>
            <p>123 Hope Street, New Delhi, India</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
