import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBlog,
  faProjectDiagram,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          My Blog
        </Link>
        <ul className='navbar-links'>
          <li>
            <Link to='/'>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to='/blog'>
              <FontAwesomeIcon icon={faBlog} /> Blog
            </Link>
          </li>
          <li>
            <Link to='/projects'>
              <FontAwesomeIcon icon={faProjectDiagram} /> Projects
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
