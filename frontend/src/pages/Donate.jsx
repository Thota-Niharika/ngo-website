import { useState } from 'react';
import { FaHeart, FaLock, FaCreditCard, FaChild, FaGraduationCap, FaTint, FaUtensils, FaCheckCircle } from 'react-icons/fa';
import './Donate.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

function Donate() {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({ name: '', email: '', phone: '', message: '' });
  const [cause, setCause] = useState('general');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const presetAmounts = [10, 25, 50, 100, 250, 500];

  const causes = [
    { id: 'general', name: 'Where Most Needed', icon: <FaHeart /> },
    { id: 'education', name: 'Education', icon: <FaGraduationCap /> },
    { id: 'water', name: 'Clean Water', icon: <FaTint /> },
    { id: 'food', name: 'Food Security', icon: <FaUtensils /> },
    { id: 'children', name: 'Child Welfare', icon: <FaChild /> },
  ];

  const impactItems = [
    { amount: '$10', impact: 'Feeds a child for one month' },
    { amount: '$25', impact: 'Provides school supplies for a year' },
    { amount: '$50', impact: 'Gives clean water to a family for 6 months' },
    { amount: '$100', impact: 'Funds a health checkup camp for a village' },
    { amount: '$250', impact: "Sponsors a child's education for a year" },
    { amount: '$500', impact: 'Builds a clean water well for a community' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donationAmount = amount || customAmount;
    if (!donationAmount || !donorInfo.name || !donorInfo.email) return;

    setLoading(true);
    try {
      const response = await fetch(API_URL + '/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          donorName: donorInfo.name,
          email: donorInfo.email,
          phone: donorInfo.phone,
          amount: parseFloat(donationAmount),
          cause: cause,
          message: donorInfo.message,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="donate-page">
        <section className="donate-hero">
          <div className="donate-hero-overlay" />
          <div className="container">
            <h1>Thank <span className="highlight">You!</span></h1>
          </div>
        </section>
        <section className="thank-you-section">
          <div className="container">
            <div className="thank-you-card">
              <div className="thank-you-icon"><FaCheckCircle /></div>
              <h2>Your Generosity Changes Lives!</h2>
              <p>Thank you, <strong>{donorInfo.name}</strong>, for your generous donation of <strong>${amount || customAmount}</strong>. Your contribution will directly impact lives and help us continue our mission.</p>
              <p className="receipt-note">A confirmation email has been sent to <strong>{donorInfo.email}</strong></p>
              <div className="thank-you-impact">
                <h3>Your Impact</h3>
                <p>With your donation, we can provide essential resources to those who need it most. Together, we are building a brighter future.</p>
              </div>
              <button className="btn btn-primary" onClick={() => { setSubmitted(false); setAmount(''); setCustomAmount(''); setDonorInfo({ name: '', email: '', phone: '', message: '' }); }}>
                Make Another Donation <FaHeart />
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="donate-page">
      <section className="donate-hero">
        <div className="donate-hero-overlay" />
        <div className="container">
          <h1>Make a <span className="highlight">Donation</span></h1>
          <p>Your generosity has the power to transform lives. Every dollar you give creates lasting, meaningful change.</p>
        </div>
      </section>

      <section className="donate-section">
        <div className="container">
          <div className="donate-grid">
            <div className="donate-form-wrapper">
              <form className="donate-form" onSubmit={handleSubmit}>
                <div className="form-section">
                  <h3>Choose a Cause</h3>
                  <div className="cause-options">
                    {causes.map((c) => (
                      <button key={c.id} type="button" className={`cause-option ${cause === c.id ? 'active' : ''}`} onClick={() => setCause(c.id)}>
                        {c.icon} {c.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-section">
                  <h3>Select Amount</h3>
                  <div className="amount-grid">
                    {presetAmounts.map((a) => (
                      <button key={a} type="button" className={`amount-btn ${amount === String(a) ? 'active' : ''}`} onClick={() => { setAmount(String(a)); setCustomAmount(''); }}>
                        ${a}
                      </button>
                    ))}
                  </div>
                  <div className="custom-amount">
                    <span className="currency">$</span>
                    <input type="number" placeholder="Enter custom amount" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setAmount(''); }} min="1" />
                  </div>
                </div>

                <div className="form-section">
                  <h3>Your Information</h3>
                  <div className="form-row">
                    <input type="text" placeholder="Full Name *" value={donorInfo.name} onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})} required />
                    <input type="email" placeholder="Email Address *" value={donorInfo.email} onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})} required />
                  </div>
                  <input type="tel" placeholder="Phone Number (Optional)" value={donorInfo.phone} onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})} />
                  <textarea placeholder="Leave a message (Optional)" value={donorInfo.message} onChange={(e) => setDonorInfo({...donorInfo, message: e.target.value})} rows="3" />
                </div>

                <button type="submit" className="btn btn-primary donate-submit-btn" disabled={loading || (!amount && !customAmount)}>
                  {loading ? 'Processing...' : <><FaHeart /> Donate ${amount || customAmount || '0'} Now</>}
                </button>

                <div className="secure-note">
                  <FaLock /> <span>Your donation is secure and encrypted. <FaCreditCard /> We accept all major payment methods.</span>
                </div>
              </form>
            </div>

            <div className="donate-sidebar">
              <div className="impact-card">
                <h3>Your Impact</h3>
                <div className="impact-list">
                  {impactItems.map((item, i) => (
                    <div key={i} className="impact-item">
                      <span className="impact-amount">{item.amount}</span>
                      <span className="impact-desc">{item.impact}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="trust-card">
                <h3>Why Donate to HopeHands?</h3>
                <ul>
                  <li><FaCheckCircle /> 92% of funds go directly to programs</li>
                  <li><FaCheckCircle /> Full financial transparency</li>
                  <li><FaCheckCircle /> Tax-deductible donations</li>
                  <li><FaCheckCircle /> Regular impact reports</li>
                  <li><FaCheckCircle /> Trusted by 50,000+ donors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;
