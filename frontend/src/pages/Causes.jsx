import { Link } from 'react-router-dom';
import { FaGraduationCap, FaTint, FaUtensils, FaHeartbeat, FaFemale, FaTree, FaHome, FaLaptop, FaHeart, FaArrowRight } from 'react-icons/fa';
import './Causes.css';

function Causes() {
  const causes = [
    { icon: <FaGraduationCap />, title: 'Education for All', description: 'Providing quality education, school supplies, and scholarships to underprivileged children. Building schools in remote areas and training teachers.', raised: 75000, goal: 100000, donors: 1250, color: '#2d6a4f' },
    { icon: <FaTint />, title: 'Clean Water Access', description: 'Building wells, installing water purification systems, and providing hygiene education in communities that lack access to safe drinking water.', raised: 45000, goal: 80000, donors: 890, color: '#3498db' },
    { icon: <FaUtensils />, title: 'End Hunger', description: 'Distributing nutritious meals to families in need and supporting sustainable farming initiatives to achieve long-term food security.', raised: 60000, goal: 90000, donors: 1100, color: '#e67e22' },
    { icon: <FaHeartbeat />, title: 'Healthcare Access', description: 'Setting up mobile health clinics, providing essential medicines, and training community health workers in underserved regions.', raised: 38000, goal: 75000, donors: 720, color: '#e74c3c' },
    { icon: <FaFemale />, title: 'Women Empowerment', description: 'Providing vocational training, microfinance support, and leadership programs to help women become financially independent.', raised: 52000, goal: 85000, donors: 950, color: '#9b59b6' },
    { icon: <FaTree />, title: 'Environmental Conservation', description: 'Planting trees, protecting natural habitats, and promoting sustainable practices to combat climate change.', raised: 28000, goal: 60000, donors: 650, color: '#27ae60' },
    { icon: <FaHome />, title: 'Shelter & Housing', description: 'Building safe, affordable homes for families displaced by natural disasters or living in extreme poverty.', raised: 42000, goal: 70000, donors: 580, color: '#d4a373' },
    { icon: <FaLaptop />, title: 'Digital Literacy', description: 'Providing computers, internet access, and digital skills training to bridge the technology gap in rural communities.', raised: 22000, goal: 50000, donors: 420, color: '#2c3e50' },
  ];

  return (
    <div className="causes-page">
      <section className="causes-hero">
        <div className="causes-hero-overlay" />
        <div className="container">
          <h1>Our <span className="highlight">Causes</span></h1>
          <p>Every cause is a promise to make the world better. Choose one that speaks to your heart and help us create lasting change.</p>
        </div>
      </section>

      <section className="all-causes">
        <div className="container">
          <div className="section-title">
            <h2>Make Your Impact Today</h2>
            <div className="accent-line" />
            <p>Browse our active causes and find the one that resonates with you. Every donation, no matter how small, creates ripples of change.</p>
          </div>
          <div className="causes-page-grid">
            {causes.map((cause, i) => (
              <div key={i} className="cause-page-card">
                <div className="cause-page-header" style={{ background: `linear-gradient(135deg, ${cause.color}, ${cause.color}dd)` }}>
                  <div className="cause-page-icon">{cause.icon}</div>
                  <h3>{cause.title}</h3>
                </div>
                <div className="cause-page-body">
                  <p>{cause.description}</p>
                  <div className="cause-stats-row">
                    <div className="cause-stat">
                      <strong>{cause.donors.toLocaleString()}</strong>
                      <span>Donors</span>
                    </div>
                    <div className="cause-stat">
                      <strong>{Math.round((cause.raised / cause.goal) * 100)}%</strong>
                      <span>Funded</span>
                    </div>
                  </div>
                  <div className="progress-section">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${(cause.raised / cause.goal) * 100}%`, background: `linear-gradient(135deg, ${cause.color}, ${cause.color}cc)` }} />
                    </div>
                    <div className="progress-info">
                      <span className="raised" style={{ color: cause.color }}>${cause.raised.toLocaleString()} raised</span>
                      <span className="goal">of ${cause.goal.toLocaleString()}</span>
                    </div>
                  </div>
                  <Link to="/donate" className="btn btn-primary cause-donate-btn" style={{ background: `linear-gradient(135deg, ${cause.color}, ${cause.color}dd)` }}>
                    <FaHeart /> Donate Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="causes-cta">
        <div className="container">
          <div className="causes-cta-content">
            <h2>Cannot Decide? Donate to Our General Fund</h2>
            <p>Your general donation will be allocated where it is needed most, ensuring maximum impact across all our programs.</p>
            <Link to="/donate" className="btn btn-primary">Donate to General Fund <FaArrowRight /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Causes;
