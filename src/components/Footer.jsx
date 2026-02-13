import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-icon">SAP</span>
              <span className="logo-text">Auto Mobile Solutions</span>
            </Link>
            <p className="footer-tagline">Enterprise mobility and automotive digital transformation.</p>
          </div>
          <div className="footer-links">
            <h4>Quick links</h4>
            <ul>
              <li><Link to="/#solutions">Solutions</Link></li>
              <li><Link to="/#features">Features</Link></li>
              <li><Link to="/#benefits">Benefits</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-legal">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><a href="#/">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SAP Auto Mobile Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
