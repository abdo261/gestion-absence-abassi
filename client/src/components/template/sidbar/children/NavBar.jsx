import { NavLink } from "react-router-dom";
import { FaCity,FaSchool , FaUser, FaCalendar, FaFileAlt } from 'react-icons/fa';


const NavBar = () => {
  const Links = [
    { name: "Commune", path: "/commune", icon: <FaCity size={20} /> },
    { name: "Etablissement", path: "/etablissement", icon: <FaSchool size={20}   /> }, 
    { name: "Responsable", path: "/responsable", icon: <FaUser size={20} /> },
    { name: "Absence", path: "/absence", icon: <FaCalendar size={20} /> },
    { name: "Document", path: "/document", icon: <FaFileAlt size={20} /> }
  ];
  return (
    <ul className="navbar-nav">
      {
        Links.map((l, i) => (
          <li key={i} className="nav-item">
            <NavLink to={l.path} className='nav-link d-flex align-items-center gap-2 fw-bold'>
              {l.icon} <span>{l.name}</span> 
            </NavLink>
          </li>
        ))
      }
    </ul>
  );
};

export default NavBar;
