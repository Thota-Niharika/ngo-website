import { Link } from 'react-router-dom';
import { FaHeart, FaHandHoldingHeart, FaGlobeAmericas, FaUsers, FaChild, FaGraduationCap, FaTint, FaUtensils, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import './Home.css';

function Home() {
  const stats = [
    { icon: <FaUsers />, number: '50,000+', label: 'Lives Impacted' },
    { icon: <FaGlobeAmericas />, number: '25+', label: 'Countries Reached' },
    { icon: <FaHandHoldingHeart />, number: '$2M+', label: 'Funds Raised' },
    { icon: <FaChild />, number: '10,000+', label: 'Children Educated' },
  ];

  const causes = [
    { icon: <FaGraduationCap />, title: 'Education for All', description: 'Providing quality education to underprivileged children, breaking the cycle of poverty through knowledge.', raised: 75000, goal: 100000 },
    { icon: <FaTint />, title: 'Clean Water Access', description: 'Building wells and water purification systems in communities that lack access to safe drinking water.', raised: 45000, goal: 80000 },
    { icon: <FaUtensils />, title: 'End Hunger', description: 'Distributing nutritious meals and supporting sustainable farming in food-insecure regions.', raised: 60000, goal: 90000 },
  ];

  const testimonials = [
    { name: 'Priya Sharma', role: 'Donor since 2020', text: 'HopeHands transformed my perspective on giving. Every rupee I donate, I can see the real impact it creates in communities.', avatar: 'PS' },
    { name: 'Rahul Mehta', role: 'Volunteer', text: 'Being part of HopeHands has been the most fulfilling experience. The team is transparent and truly dedicated to making a difference.', avatar: 'RM' },
    { name: 'Anita Desai', role: 'Monthly Donor', text: 'The updates I receive about where my donations go give me so much joy. HopeHands is doing incredible work on the ground.', avatar: 'AD' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${3 + Math.random() * 4}s` }} />
          ))}
        </div>
        <div className="hero-content container">
          <div className="hero-badge">Trusted by 50,000+ Supporters Worldwide</div>
          <h1>Together, We Can <span className="highlight">Change Lives</span></h1>
          <p>Every act of kindness creates a ripple of hope. Join HopeHands Foundation in our mission to uplift communities, educate children, and build a world where everyone thrives.</p>
          <div className="hero-buttons">
            <Link to="/donate" className="btn btn-primary hero-btn">
              <FaHeart /> Donate Now
            </Link>
            <Link to="/causes" className="btn btn-secondary hero-btn">
              Explore Causes <FaArrowRight />
            </Link>
          </div>
          <div className="hero-trust">
            <div className="trust-avatars">
              {['AK', 'RS', 'PM', 'SD', 'VK'].map((initials, i) => (
                <div key={i} className="trust-avatar" style={{ animationDelay: `${i * 0.1}s` }}>{initials}</div>
              ))}
            </div>
            <span>Join 10,000+ monthly donors making a difference</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-images">
              <div className="about-img-main">
                <div className="img-placeholder img-1">
                  <FaChild className="placeholder-icon" />
                  <span>Empowering Children</span>
                </div>
              </div>
              <div className="about-img-secondary">
                <div className="img-placeholder img-2">
                  <FaHandHoldingHeart className="placeholder-icon" />
                  <span>Community Care</span>
                </div>
              </div>
              <div className="experience-badge">
                <span className="exp-number">15+</span>
                <span className="exp-text">Years of Impact</span>
              </div>
            </div>
            <div className="about-text">
              <div className="section-title" style={{ textAlign: 'left' }}>
                <h2>Creating Hope, Changing Futures</h2>
                <div className="accent-line" style={{ margin: '15px 0' }} />
              </div>
              <p className="about-desc">At HopeHands Foundation, we believe every person deserves the opportunity to live with dignity. Since 2009, we have been working tirelessly to provide education, healthcare, clean water, and sustainable livelihoods to the most vulnerable communities.</p>
              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon"><FaHeart /></div>
                  <div>
                    <h4>100% Transparent</h4>
                    <p>Every donation is tracked and reported</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon"><FaGlobeAmericas /></div>
                  <div>
                    <h4>Global Reach</h4>
                    <p>Working across 25+ countries</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">Learn More About Us <FaArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="causes-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Active Causes</h2>
            <div className="accent-line" />
            <p>Your generosity fuels real change. See how your donations are creating impact in communities worldwide.</p>
          </div>
          <div className="causes-grid">
            {causes.map((cause, i) => (
              <div key={i} className="cause-card" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="cause-icon">{cause.icon}</div>
                <h3>{cause.title}</h3>
                <p>{cause.description}</p>
                <div className="progress-section">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${(cause.raised / cause.goal) * 100}%` }} />
                  </div>
                  <div className="progress-info">
                    <span className="raised">${cause.raised.toLocaleString()} raised</span>
                    <span className="goal">of ${cause.goal.toLocaleString()}</span>
                  </div>
                </div>
                <Link to="/donate" className="btn btn-primary cause-btn">Donate to This Cause</Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/causes" className="btn btn-accent">View All Causes <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <div className="cta-heart"><FaHeart /></div>
            <h2>Your $10 Can Feed a Child for a Month</h2>
            <p>No amount is too small. Every contribution brings us closer to a world where no child goes hungry, no community lacks clean water, and every person has access to education.</p>
            <div className="cta-buttons">
              <Link to="/donate" className="btn btn-primary">Donate Now <FaHeart /></Link>
              <Link to="/contact" className="btn btn-secondary">Become a Volunteer</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Supporters Say</h2>
            <div className="accent-line" />
            <p>Hear from the amazing people who make our mission possible through their generosity and dedication.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" style={{ animationDelay: `${i * 0.2}s` }}>
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.avatar}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Connected With Our Mission</h2>
            <p>Subscribe to our newsletter and get updates on how your support is creating real impact.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
