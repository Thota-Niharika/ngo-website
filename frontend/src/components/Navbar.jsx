import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <FaHeart className="logo-icon" />
          <span>HopeHands</span>
        </Link>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/causes" className={location.pathname === '/causes' ? 'active' : ''}>Causes</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <Link to="/donate" className="nav-donate-btn">
            <FaHeart /> Donate Now
          </Link>
        </div>
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
