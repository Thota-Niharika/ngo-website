import { Link } from 'react-router-dom';
import { FaHeart, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z" fill="var(--primary-dark)" />
        </svg>
      </div>
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <h3><FaHeart className="footer-logo-icon" /> HopeHands</h3>
              <p>Empowering communities, transforming lives. Together, we can create lasting change and build a brighter future for those who need it most.</p>
              <div className="footer-social">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>
            <div className="footer-links-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/causes">Our Causes</Link></li>
                <li><Link to="/donate">Donate</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-links-section">
              <h4>Our Causes</h4>
              <ul>
                <li><a href="#">Education</a></li>
                <li><a href="#">Healthcare</a></li>
                <li><a href="#">Clean Water</a></li>
                <li><a href="#">Food Security</a></li>
                <li><a href="#">Women Empowerment</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>123 Hope Street, New Delhi, India</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>info@hopehands.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 HopeHands Foundation. All rights reserved. Made with <FaHeart className="heart-icon" /> for humanity.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
