import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>
            <i className='fas fa-home'></i> Home
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <i className='fas fa-user'></i> About Me
          </Link>
        </li>
        <li>
          <Link to='/projects'>
            <i className='fas fa-code'></i> Projects
          </Link>
        </li>
        <li>
          <Link to='/portfolio'>
            <i className='fas fa-briefcase'></i> Portfolio
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <i className='fas fa-envelope'></i> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
