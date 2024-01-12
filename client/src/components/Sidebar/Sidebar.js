import "./index.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  BsAward,
  BsClipboard2Plus,
  BsPeopleFill,
  BsList,
  BsPersonBadge,
  BsFileText,
  BsX,
  BsBoxArrowInLeft,
} from "react-icons/bs"; // Import Bootstrap icons
import { FaSchool } from "react-icons/fa6";
import HeaderRight from "./shildren/HeaderRight";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../redux/apiCalls/authApiCall";
const Sidebar = ({ show, toggleShow }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogout = () => {
    dispatch(LogoutUser(navigate("/login")));
  };

  const closeIcon = show ? <BsX size={30} /> : <BsList size={30} />;
  const logoutIcon = <BsBoxArrowInLeft />;
  const Links = [
    {
      name: "Commune",
      link: "/commune",
      icon: BsAward,
      show: user && user.user.isAdmin,
    },
    {
      name: "Etablissement",
      link: "/etablissement",
      icon: FaSchool,
      show: true,
    },
    {
      name: "Enseignant",
      link: "/enseignant",
      icon: BsPeopleFill,
      show: true,
    },
    {
      name: "Responsable",
      link: "/responsable",
      icon: BsPersonBadge,
      show: user && user.user.isAdmin,
    },
    {
      name: "Absence",
      link: "/absence",
      icon: BsClipboard2Plus,
      show: true,
    },
    {
      name: "Document",
      link: "/document",
      icon: BsFileText,
      show: true,
    },
  ];

  return (
    <>
      <header className={` header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={toggleShow}>
          {closeIcon}
        </div>
        <div> {user && <HeaderRight user={user} />}</div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo d-flex align-items-center ">
              <img src="/logo.png" className="imag-logo" alt="logo" />
              <span className="nav-logo-name">Blog</span>
            </Link>

            <div className="nav-list">
              {Links.map(
                (link, index) =>
                  link.show && (
                    <NavLink
                      to={link.link}
                      className="nav-link-iteme d-flex align-items-center fw-bold"
                      key={index}
                    >
                      {<link.icon className="nav-link-icon" size={20} />}{" "}
                      {/* Render the Bootstrap icon directly */}
                      <span className="nav-link-name">{link.name}</span>
                    </NavLink>
                  )
              )}
            </div>
          </div>

          <button
            to="/logout"
            className="nav-link-iteme btn d-flex align-items-center fw-bold"
            onClick={handelLogout}
          >
            {logoutIcon}
            <span className="nav-link-name">Logout</span>
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
