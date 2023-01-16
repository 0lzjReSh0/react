import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Calculate from "./Calculate";
// Access - Control - Allow - Origin: *
export default class Chart extends Calculate {
  render() {
    console.log(this.credits());
    const data = [
      {
        name: "credits",
        amt: 200,
        now: this.credits(),
      },
      {
        name: "debits",
        amt: 200,
        now: this.debits(),
      },
      {
        name: "balance",
        amt: 200,
        now: this.balance(),
      },
    ];
    return (
      <div>
        <>
          <BarChart
            width={1200}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 300,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 50, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="now" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </>
      </div>
    );
  }
}
