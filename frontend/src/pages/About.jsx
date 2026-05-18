import { FaHeart, FaHandHoldingHeart, FaGlobeAmericas, FaUsers, FaChild, FaEye, FaBullseye, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  const values = [
    { icon: <FaHeart />, title: 'Compassion', desc: 'We lead with empathy, treating every individual with dignity and respect.' },
    { icon: <FaCheckCircle />, title: 'Transparency', desc: 'Every donation is tracked, every project is documented, every outcome is shared.' },
    { icon: <FaGlobeAmericas />, title: 'Sustainability', desc: 'We build solutions that last, empowering communities to thrive independently.' },
    { icon: <FaUsers />, title: 'Community', desc: 'We work alongside communities, not above them, fostering ownership and pride.' },
  ];

  const team = [
    { name: 'Dr. Meera Patel', role: 'Founder & CEO', initials: 'MP', color: '#2d6a4f' },
    { name: 'Arjun Singh', role: 'Director of Programs', initials: 'AS', color: '#d4a373' },
    { name: 'Kavitha Rao', role: 'Head of Fundraising', initials: 'KR', color: '#e74c3c' },
    { name: 'Vikram Joshi', role: 'Field Operations', initials: 'VJ', color: '#3498db' },
  ];

  const milestones = [
    { year: '2009', event: 'HopeHands founded with a mission to educate 100 children' },
    { year: '2012', event: 'Expanded to 5 states, launched clean water initiative' },
    { year: '2015', event: 'Reached 10,000 beneficiaries across India' },
    { year: '2018', event: 'International expansion to 10 countries' },
    { year: '2021', event: 'COVID relief provided to 25,000 families' },
    { year: '2024', event: '50,000+ lives impacted, operating in 25+ countries' },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="container">
          <h1>About <span className="highlight">HopeHands</span></h1>
          <p>Fifteen years of compassion, impact, and unwavering commitment to building a better world for the most vulnerable.</p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon"><FaBullseye /></div>
              <h3>Our Mission</h3>
              <p>To empower underprivileged communities through education, healthcare, clean water, and sustainable livelihoods, creating pathways out of poverty and toward a life of dignity.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon"><FaEye /></div>
              <h3>Our Vision</h3>
              <p>A world where every person has access to basic necessities, quality education, and the opportunity to reach their full potential, regardless of where they were born.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <div className="section-title" style={{ textAlign: 'left' }}>
                <h2>Our Story</h2>
                <div className="accent-line" style={{ margin: '15px 0' }} />
              </div>
              <p>HopeHands Foundation was born in 2009 from a simple belief: that every child deserves a chance to learn, grow, and dream. Our founder, Dr. Meera Patel, started with just 100 children in a small village school in rural India.</p>
              <p>What began as a local education initiative has grown into a global movement touching lives in over 25 countries. Today, we run comprehensive programs spanning education, healthcare, clean water, food security, and women empowerment.</p>
              <p>Our strength lies in our community-first approach. We do not just provide aid; we build capacity, train local leaders, and create sustainable systems that continue to deliver long after we leave.</p>
            </div>
            <div className="story-image">
              <div className="story-img-placeholder">
                <FaChild className="story-icon" />
                <span>Empowering Communities Since 2009</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <div className="accent-line" />
            <p>The principles that guide every decision we make and every life we touch.</p>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Journey</h2>
            <div className="accent-line" />
            <p>Key milestones in our mission to create lasting change.</p>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <span className="timeline-year">{m.year}</span>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <div className="accent-line" />
            <p>Dedicated leaders driving our mission forward every day.</p>
          </div>
          <div className="team-grid">
            {team.map((t, i) => (
              <div key={i} className="team-card">
                <div className="team-avatar" style={{ background: t.color }}>{t.initials}</div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Ready to Make a Difference?</h2>
          <p>Join thousands of supporters who are transforming lives every day.</p>
          <div className="about-cta-buttons">
            <Link to="/donate" className="btn btn-primary">Donate Now <FaHeart /></Link>
            <Link to="/contact" className="btn btn-secondary">Get Involved</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
