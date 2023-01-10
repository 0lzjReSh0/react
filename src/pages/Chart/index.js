import React, { Component } from 'react'
import * as RecordsAPI from '../../api/RecordsAPI';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// Access - Control - Allow - Origin: *
export default class index extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            datas: [],
            numList:[]
        };
    }


    componentDidMount() {
        // Simple GET request using fetch
        RecordsAPI.getAll().then(
            response => this.setState({
                datas: response.data,
                isLoaded: true
            })
        ).catch(
            error => this.setState({
                isLoaded: true,
                error
            })
        )


    }
    credits() {
        let credits = this.state.datas.filter((data) => {
            return data.amount >=0;
        })
        return credits.reduce((prev, curr) => {
            // return Number.parseInt(curr.amount, 0)
            return prev + Number.parseInt(curr.amount, 0)
        }, 0
        )
    }
    debits() {
        let credits = this.state.datas.filter((data) => {
            return data.amount < 0;
        })
        return credits.reduce((prev, curr) => {
            return prev + Number.parseInt(curr.amount, 0)
        }, 0
        )
    }
    balance() {
        return this.credits() + this.debits();
    }
    // stringToJson(data) {
    //     return JSON.parse(data);
    // }

    render() {
        const data = [{
            name: "credits",
            amt:200,
            now: this.credits()
        }, {
                name: "debits",
                amt: 200,
                now: this.debits()
            }, {
                name: "balance",
                amt: 200,
                now: this.balance()
            }]
        return (
            <div>
                <>

                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="now" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>


                </>
            </div>

        )
    }
}
