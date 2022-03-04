import React from "react";
import users from "../images/users.svg";
import agents from "../images/agents.svg";
import pending from "../images/pending.svg";
import requests from "../images/approved.svg";
import green from "../images/greenUp.svg";
import red from "../images/redDown.svg";
import orange from "../images/orangeUp.svg";
const data = [
  {
    value: "1478 286",
    icon: pending,
    status: "Pending Requests",
    progress: green,
    timeline: "Last month",
    color: "#4BDE97",
  },
  {
    value: "478 520",
    icon: requests,
    status: "Approved Requests",
    progress: green,
    timeline: "Last month",
    color: "#4BDE97",
  },
  {
    value: "154 872",
    icon: agents,
    status: "Total Agents",
    progress: red,
    timeline: "Last month",
    color: "#F26464",
  },
  {
    value: "167",
    icon: users,
    status: "Total Users",
    progress: orange,
    timeline: "Last month",
    color: "#FFB648",
  },
];
const HeroSection = () => {
  return (
    <div className="hero-container">
      {data.map((item) => (
        <div className="item" key={item.value}>
          <img src={item.icon} alt="" />
          <div className="second">
            <p className="value">{item.value}</p>
            <p className="status">{item.status}</p>
            <div className="last">
              <img src={item.progress} alt="" />{" "}
              <span className="index" style={{ color: item.color }}>
                4.07
              </span>{" "}
              <span className="time">Last month</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
