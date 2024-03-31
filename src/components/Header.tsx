import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faClock,
  faSignOutAlt,
  faUserPlus,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import "../css/Header.css";
import Clock from "./Clock";
import Home from "./Home";

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
      {menuOpen && (
        <div className="menu">
          <ul>
            <li>
              <FontAwesomeIcon icon={faHome} /> Home
              <a href="/Home"></a>
            </li>
            <li>
              <FontAwesomeIcon icon={faUserPlus} /> Add Team Members
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} /> Guide Members 
              <a href="/GuideMembers"></a>
            </li>
            <li>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
