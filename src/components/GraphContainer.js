import React from "react";
import BarGraph from "./BarGraph";
import Dot from "./Dot";
import Graph from "./Graph";

const GraphContainer = () => {
  return (
    <div className="graph-container">
      <div className="graph-1">
        <div className="heading">
          <div className="flex">
            <div className="left">
              <p className="bg">User Inflow Statistics</p>
            </div>
            <div className="right">
              <div className="first">
                <Dot color="#5F2EEA" />
                <p className="sm">AGENTS</p>
              </div>
              <div className="second">
                <Dot color="#4BDE97" /> <p className="sm"> USERS</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="left">
              <p className="month">Nov - July</p>
            </div>
            <div className="right numb-right">
              <div className="first" style={{ marginRight: "43px" }}>
                <p className="numb">475 273</p>
              </div>
              <div className="second" style={{ marginRight: "-20px" }}>
                <p className="numb"> 782 396</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 26 }}>
          <Graph />
        </div>
      </div>
      <div className="graph-2">
        <BarGraph />
        <div className="texts">
          <p className="users">New Users</p>
          <p className="value">
            <span>(+23%)</span> than last week
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraphContainer;
