import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h2>The Vintage Cottage</h2>
          <p>Antique shop buying and selling antiques in Pune.</p>
        </div>
        <div>
          <h2>Visit</h2>
          <address>919 Synagogue Street,<br />Pune, Maharashtra 411001,<br />India</address>
        </div>
        <div>
          <h2>Contact</h2>
          <p><a href="tel:+918668945632">086689 45632</a></p>
          <p><a href="mailto:vintagecottage919@gmail.com">vintagecottage919@gmail.com</a></p>
          <p><a href="https://www.instagram.com/the_vintage_cottagee/" target="_blank" rel="noopener noreferrer">Instagram: @the_vintage_cottagee</a></p>
        </div>
        <div>
          <h2>Information</h2>
          <p><Link to="/privacy-policy">Privacy Policy</Link></p>
          <p><Link to="/terms-and-conditions">Terms and Conditions</Link></p>
        </div>
      </div>
      <p className="copyright">&copy; {currentYear} The Vintage Cottage. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
