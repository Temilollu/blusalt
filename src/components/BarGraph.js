import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    pv: 900,
  },
  {
    name: "Feb",
    pv: 700,
  },
  {
    name: "Mar",
    pv: 400,
  },
  {
    name: "Apr",
    pv: 1000,
  },
  {
    name: "May",
    pv: 800,
  },
];

export default function BarGraph() {
  return (
    <ResponsiveContainer width={"100%"} height={220}>
      <BarChart
        style={{
          background: "#990D81",
        }}
        width={"100%"}
        height={220}
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: -10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" stroke="white" />
        <YAxis stroke="white" />
        <Bar dataKey="pv" fill="white" barSize={6} radius={5} />
      </BarChart>
    </ResponsiveContainer>
  );
}
