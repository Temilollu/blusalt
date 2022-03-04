import React from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaGithub } from "react-icons/fa";
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
const Aside = ({ collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="sm"
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
            Audit trial
          </MenuItem>
          <MenuItem icon={<img src={users} alt="" />} className="menu-item">
            users
          </MenuItem>
          <MenuItem icon={<img src={setting} alt="" />} className="menu-item">
            settings
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              viewSource
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
