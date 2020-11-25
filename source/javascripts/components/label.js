import React, { Component } from "react";
import ReactDOM from "react-dom";
import { getPrice } from "../cl"

class Label extends Component {
    constructor() {
        super();

        this.state = {
            value: ""
        };
    }
    componentDidMount() {
        getPrice(document.getElementById("SKU").value).then(price => this.setState({ value: price })).catch(e => console.log(e.message))
    }


    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
            </div>
        );
    }
}

export default Label;

const wrapper = document.getElementById("price_label");
wrapper ? ReactDOM.render(<Label />, wrapper) : false;