import React, {Component} from 'react';
import Square from './Square.js';
import "./App.css";

import { Fraction } from 'algebra.js';

class SquareGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 1,
            size: 300.0,
            reset: 0,
        };
        this.group = [];

        this.numColored = 0;
        this.makeSquares = this.makeSquares.bind(this);
        this.reset = this.reset.bind(this);
        this.splitSquare = this.splitSquare.bind(this);
        this.mergeSquare = this.mergeSquare.bind(this);
    }

    calculateFraction = (number) => {
        this.numColored += number;
        const fraction = new Fraction(this.numColored, this.state.amount);
        this.props.callBack(fraction);
    };

    makeSquares = () => {
        let g = [];
        if(this.state.reset === 1) //Not currently used
        {
            this.setState({amount: 1});
            this.setState({reset: 0});
        }
        for(let i = 0; i < this.state.amount; i++) {
            g.push(<Square ref={this.child} callBack={this.calculateFraction} width={this.state.size/this.state.amount}/>);
        }
        this.group = g;
        return g;
    };

    reset = () => {
        window.location.reload();
    };

    splitSquare = () => {
        this.setState({amount: this.state.amount + 1});
    };

    mergeSquare = () => {
        if(this.state.amount > 1)
            this.setState({amount: this.state.amount - 1});
    };

    render() {
        return (
            <div>
                {this.makeSquares()}
                <br/>
                <button className="Reset" type="button" onClick={this.reset}>Reset</button>
                &nbsp;
                <button className="More" type="button" onClick={this.splitSquare}>More</button>
                &nbsp;
                <button className="Less" type="button" onClick={this.mergeSquare}>Less</button>
            </div>
        );
    }
}

export default SquareGroup;