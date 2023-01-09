import React, { Component } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

export default class index extends Component {
    
  render() {
    const { balance, debits, credits, out} = this.props;
    console.log(out);
    console.log(balance);
      const data = [
          {
              name: "credits",
              pre: 100,
              now: credits,
              amt: 2210
          },
          {
              name: "debits",
              pre: -100,
              now: debits,
              amt: 2290
          },
          {
              name: "balance",
              pre: 200,
              now: balance,
              amt: 2400
          },

      ];
    return (
      <div>
            <>
                {1223}
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    
                    margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pre" fill="#8884d8" />
                    <Bar dataKey="now" fill="#82ca9d" />
                </BarChart>
            </>
      </div>
      
    )
  }
}
