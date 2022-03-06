import React from "react";
import { FaSistrix, FaAngleDown, FaBars } from "react-icons/fa";
import "../styles/header.css";
import first from "../images/Group 7.svg";
import second from "../images/Group 6.svg";
import third from "../images/team-4-800x800.svg";
const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="header-container">
      <div className="mobile-heading">
        <p className="title">Dashboard</p>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars fontSize={20} />
        </div>
      </div>
      <p className="title">Dashboard</p>
      <div className="other-items">
        <div className="input">
          <FaSistrix />
          <input type="search" name="" id="" placeholder="Enter keywords..." />
        </div>
        <p className="en">
          {" "}
          EN <FaAngleDown />
        </p>
        <img src={first} alt="" />
        <img src={second} alt="" />
        <img src={third} alt="" className="third" />
      </div>
    </div>
  );
};

export default Header;
