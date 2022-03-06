import React from "react";
import user1 from "../images/team-2.svg";
import user2 from "../images/ivana-square.svg";
import user3 from "../images/marie.svg";
import user4 from "../images/kal-visuals-square.svg";
import arrow from "../images/Arrow - Down Circle.svg";
const tableData = [
  {
    name: "Michael Olu",
    email: "michael@mail.com",
    image: user1,
    status: "Pending",
    type: "New Agent",
    date: "23/04/18",
  },
  {
    name: "Chioma James",
    email: "alexa@mail.com",
    image: user2,
    status: "Pending",
    type: "Account Deactivation",
    date: "02/09/15",
  },
  {
    name: "Boluwatife Ade",
    email: "laure@mail.com",
    image: user3,
    status: "Active",
    type: "Email Auth",
    date: "23/09/18",
  },
  {
    name: "Miriam Eric",
    email: "miriam@mail.com",
    image: user4,
    status: "Active",
    type: "New User",
    date: "03/04/11",
  },
];

const Requests = () => {
  const pendingStyle = {
    background: "rgba(255, 172, 50, 0.1)",
    borderRadius: "100px",
    padding: "5px 15px",
    fontWeight: " 500",
    fontSize: "12px",
    lineHeight: "20px",
    color: "#FFB648",
  };

  const activeStyle = {
    background: "rgba(99, 182, 127, 0.1)",
    borderRadius: "50px",
    padding: "5px 15px",
    fontWeight: " 500",
    fontSize: "12px",
    lineHeight: "12px",
    color: "#63B67F",
  };
  return (
    <div className="requests-container">
      <p className="heading">Recent Requests</p>
      <div className="table">
        <div className="table-head">
          <p className="name-email">Name/Email</p>
          <p className="type">Type</p>
          <p className="status">Status</p>
          <p className="date">Date</p>
        </div>
        <div className="table-body">
          {tableData.map((item) => (
            <div className="table-item" key={item.email}>
              <div className="name-email-container">
                <img src={item.image} alt="" />
                <div className="name-email">
                  <p className="name">{item.name}</p>
                  <p className="email">{item.email}</p>
                </div>
              </div>
              <div className="type">{item.type}</div>
              <div className="status">
                <span
                  style={item.status === "Pending" ? pendingStyle : activeStyle}
                >
                  {item.status}
                </span>
              </div>
              <div className="date">
                <span> {item.date}</span>
                <img src={arrow} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Requests;
