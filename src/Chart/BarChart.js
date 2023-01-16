import React, { Component } from 'react';
import Index from "./index.jsx"
class BarChart extends React.Component {
    async componentWillMount() {
        console.log('#enter componentWillMount');
        const res = await fetch('https://63b7eec34d97e82aa3c9af8d.mockapi.io/api/v1/records')
        console.log('#after get response in componentWillMount');
        const json = await res.json()
        console.log('#after get json in componentWillMount');
        this.setState({ reduxStargazersCount: json.stargazers_count });
    }

    async shouldComponentUpdate() {
        console.log('#enter shouldComponentUpdate');
        return false;
    }

    render() {
        console.log('#enter render');
        return (
            <div>
                <div>React stargazers count: {this.state.reactStargazersCount} </div>
                <div>Redux stargazers count: {this.state.reduxStargazersCount} </div>
            </div>
        );
    }

    async componentDidMount() {
        console.log('#enter componentDidMount');
        const res = await fetch('https://api.github.com/repos/facebook/react')
        console.log('#after get response in componentDidMount');
        const json = await res.json()
        console.log('#after get json in componentDidMount');
        this.setState({ reactStargazersCount: json.stargazers_count });
    }
};

export default BarChart;