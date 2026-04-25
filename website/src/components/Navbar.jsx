import { NavLink } from 'react-router-dom';
import { Bus } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Domain', path: '/domain' },
    { name: 'Milestones', path: '/milestones' },
    { name: 'Documents', path: '/documents' },
    { name: 'Presentations', path: '/presentations' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="navbar glass-panel">
      <div className="container nav-container">
        <NavLink to="/" className="nav-logo">
          <Bus className="logo-icon" size={28} />
          <span className="logo-text text-gradient">SmartBus</span>
        </NavLink>
        
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
