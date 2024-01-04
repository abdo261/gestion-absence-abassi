import './index.css';
import { Link, NavLink } from 'react-router-dom';
import {  BsHouse, BsBuilding, BsFillPersonFill, BsClipboard, BsList, BsFileText, BsX, BsBoxArrowRight, BsBoxArrowInLeft } from 'react-icons/bs'; // Import Bootstrap icons

const Sidebar = ({ show, toggleShow }) => {
  const closeIcon = show ? <BsX /> : <BsList />;
  const logoutIcon = <BsBoxArrowInLeft />;

  const Links = [
    {
      name: 'Commune',
      link: '/commune',
      icon:BsHouse ,
    },
    {
      name: 'Etablissement',
      link: '/etablissement',
      icon: BsBuilding,
    },
    {
      name: 'Enseignant',
      link: '/enseignant',
      icon: BsFillPersonFill,
    },
    {
      name: 'Responsable',
      link: '/responsable',
      icon: BsList,
    },
    {
      name: 'Absence',
      link: '/absence',
      icon: BsClipboard,
    },
    {
      name: 'Document',
      link: '/document',
      icon: BsFileText,
    },
  ];

  return (
    <>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={toggleShow}>
          {closeIcon}
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo d-flex align-items-center '>
              <img src='/logo.png' className='imag-logo'/>
              <span className='nav-logo-name'>Blog</span>
            </Link>

            <div className='nav-list'>
              {Links.map((link, index) => (
                <NavLink to={link.link} className='nav-link-iteme d-flex align-items-center fw-normal' key={index}>
                  {<link.icon className='nav-link-icon' />} {/* Render the Bootstrap icon directly */}
                  <span className='nav-link-name'>{link.name}</span>
                </NavLink>
              ))}
            </div>
          </div>

          <Link to='/logout' className='nav-link-iteme d-flex align-items-center fw-bold'>
            {logoutIcon}
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
