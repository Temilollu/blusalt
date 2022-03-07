import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Dec",
    uv: 25,
    pv: 17,
    amt: 2400,
  },
  {
    name: "Jan",
    uv: 25,
    pv: 25,
    amt: 2210,
  },
  {
    name: "Feb",
    uv: 46,
    pv: 24,
    amt: 2290,
  },
  {
    name: "Mar",
    uv: 17,
    pv: 26,
    amt: 2000,
  },
  {
    name: "Apr",
    uv: 30,
    pv: 22,
    amt: 2181,
  },
  {
    name: "May",
    uv: 42,
    pv: 45,
    amt: 2500,
  },
  {
    name: "Jun",
    uv: 17,
    pv: 25,
    amt: 2100,
  },
  {
    name: "Jul",
    uv: 60,
    pv: 24,
    amt: 2400,
  },
  {
    name: "Aug",
    uv: 17,
    pv: 13,
    amt: 2210,
  },
  {
    name: "Sept",
    uv: 23,
    pv: 23,
    amt: 2290,
  },
  {
    name: "Oct",
    uv: 42,
    pv: 25,
    amt: 2000,
  },
  {
    name: "Nov",
    uv: 23,
    pv: 13,
    amt: 2181,
  },
  {
    name: "Dec",
    uv: 19,
    pv: 55,
    amt: 2500,
  },
];

export default function Graph() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart
        width={0}
        height={220}
        data={data}
        margin={{
          top: 5,
          left: -30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1" horizontal={false} />
        <XAxis dataKey="name" />
        <YAxis />

        <Line type="monotone" dataKey="pv" stroke="#4BDE97" dot={false} />
        <Line type="monotone" dataKey="uv" stroke="#5F2EEA" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
