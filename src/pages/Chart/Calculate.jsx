import { Component } from 'react';
import * as RecordsAPI from '../../api/RecordsAPI';
export default class Calculate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            datas: [],
            numList: []
        };
        this.credits = this.credits.bind(this);
        this.balance = this.balance.bind(this);
        this.debits = this.debits.bind(this);

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
            return data.amount >= 0;
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
        return false;
    }
}

