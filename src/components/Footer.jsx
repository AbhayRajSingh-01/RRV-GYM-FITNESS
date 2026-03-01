import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="logo">RRV <span className="logo-accent">GYM</span></Link>
          <p>Premium fitness facility dedicated to helping you become the strongest version of yourself.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <Link to="/about">About</Link>
            <Link to="/membership">Membership</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">Home</Link>
          </div>
          <div>
            <h4>Support</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/contact">FAQ</Link>
            <Link to="/contact">Careers</Link>
            <Link to="/contact">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RRV Gym Fitness. All rights reserved.</p>
        <p className="designer-credit">Designed by <span className="designer-name">Abhay Raj Singh</span></p>
      </div>
    </footer>
  )
}
