import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  const links = [
    ['Home', '/'],
    ['About Us', '/about'],
    ['Collection', '/gallery'],
    ['Contact Us', '/contact'],
  ] as const;

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <NavLink to="/" className="brand" aria-label="The Vintage Cottage home">
          <span>The Vintage Cottage</span>
          <small>Antique Shop</small>
        </NavLink>
        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="primary-links"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span>
        </button>
        <div id="primary-links" className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 