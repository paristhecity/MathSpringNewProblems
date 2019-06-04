import React, {Component} from 'react';
import "./App.css";
import Arc from "./Arc";

//import { Fraction } from 'algebra.js';

class Circle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            background: 'white',
            transform: [],
            amount: 12,
        };
        this.group = [];
    }

    transformList = () => {
        let angle = 360/this.state.amount;
        for(let i = 0; i < 360; i+=angle)  {
            this.state.transform.push(i);
        }
    }

    makeArcs = () => {
        this.transformList();
        let g = [];
        if(this.state.reset === 1) //Not currently used
        {
            this.setState({amount: 1});
            this.setState({reset: 0});
        }
        let skew = (360/this.state.amount) - 90;
        //let skew = 0;
        for(let i = 0; i < this.state.amount; i++) {
            g.push(<Arc rotate={this.state.transform[i]} skew={skew}/>);
        }
        this.group = g;
        return g;
    };

    reset = () => {
        window.location.reload();
    };

    splitArc= () => { //NEEDS FIXING
        this.setState({amount: this.state.amount + 1});
    };

    mergeArc = () => { //NEEDS FIXING
        if(this.state.amount > 1)
            this.setState({amount: this.state.amount - 1});
    };

    render() {
        return (
            <div>
                <div className="circle">
                    {this.makeArcs()}
                    <br/>
                </div>
                <div>
                    <button className="Reset" type="button" onClick={this.reset}>Reset</button>
                    &nbsp;
                    <button className="More" enabled="true" type="button" onClick={this.splitArc} disabled>More</button>
                    &nbsp;
                    <button className="Less" enabled="true" type="button" onClick={this.mergeArc} disabled>Less</button>
                </div>
            </div>

        );
    }

}

export default Circle;
