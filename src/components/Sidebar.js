import React from "react";
import footerImage from "../images/footerImage.svg";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../styles/sidebar.css";
import logo from "../images/Vector.svg";
import home from "../images/Home.svg";
import users from "../images/3 User.svg";
import folder from "../images/Folder.svg";
import setting from "../images/Setting.svg";
import message from "../images/rename.svg";
import kyc from "../images/kyc.svg";
import reports from "../images/Document.svg";
import arrowDownCircles from "../images/arrowDown.svg";
const Aside = ({ toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div className="sidebar-logo">
          <img src={logo} alt="" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          <MenuItem icon={<img src={home} alt="" />} className="active">
            dashboard
          </MenuItem>
          <MenuItem icon={<img src={message} alt="" />} className="menu-item">
            Requests
          </MenuItem>
          <MenuItem icon={<img src={kyc} alt="" />} className="menu-item">
            KYCs
          </MenuItem>
          <MenuItem icon={<img src={reports} alt="" />}>Reports</MenuItem>
          <MenuItem icon={<img src={folder} alt="" />} className="menu-item">
            <div className="sub-menu-container">
              <span>Audit trial</span> <img src={arrowDownCircles} alt="" />
            </div>
          </MenuItem>
          <MenuItem icon={<img src={users} alt="" />} className="menu-item">
            users
          </MenuItem>
          <MenuItem icon={<img src={setting} alt="" />} className="menu-item">
            settings
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ padding: "50px 10px", borderTop: "none" }}>
        <div className="sidebar-footer-container">
          <img src={footerImage} alt="" />
          <div className="text">
            <p className="name">Nafisa Sh.</p>
            <p className="title">Support manager</p>
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
