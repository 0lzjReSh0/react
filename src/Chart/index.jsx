import React, {useContext } from 'react'

// import { MainContext } from "../components/Records";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

async function Fetch() {
    const url = "https://63b7eec34d97e82aa3c9af8d.mockapi.io/api/v1/records";
    try{
        const res = await fetch(url);
    if (!res.ok) {
        return;
    }
    const data = await res.json();

    console.log(data[0]);
    return data[0]
}
    catch(error){
        console.log(error);
    }

}


const MainContext = Fetch();





const Chart = () => {



    const totalCredits = 0;
    for (let index = 0; index < MainContext.length; index++) {
        totalCredits += MainContext[index].amount;

    }
    const data = JSON.stringify(MainContext);
    console.log(MainContext);
    const data1 = [
        {
            name: "credits",
            pre: 100,
            now: data.amount,
            amt: 2210
        },
        {
            name: "debits",
            pre: -100,
            now: data,
            amt: 2290
        },
        {
            name: "balance",
            pre: 200,
            now: data,
            amt: 2400
        },

    ];
    return (
        <div>
            <div>
                <>
                    <BarChart
                        width={500}
                        height={300}
                        data={data1}

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
        </div>
    );
};

export default Chart;