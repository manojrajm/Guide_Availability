import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faClock,
  faSignOutAlt,
  faUserPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../css/Header.css";
import Clock from "./Clock";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="logo">Emorite</div>
      <div className="clock">
        <FontAwesomeIcon icon={faClock} /> <Clock />
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} /> <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team-members">
              {" "}
              <FontAwesomeIcon icon={faUserPlus} /> Add Team Members
            </Link>
          </li>
          <li>
            <Link to="/guide-members">
              {" "}
              <FontAwesomeIcon icon={faUser} /> Guide Members{" "}
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
