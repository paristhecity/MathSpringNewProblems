import React from 'react';
import TickMark from './TickMark.js';

class NumberLine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
            length: 16,
            circleFill: 'blue',
            tickMarks: [],
            dots: [],
        }
    }

    handleClick = () =>  {
        alert("1");
        this.setState({color: 'blue'});
        //return <circle cx="50" cy="50" r="40" stroke="black" fill="red"/>
    };

    emptyDot = () => {
        for(let i = this.state.tickMarks.length; i > 0; i--) {
            this.state.dots.pop();
        }
    };

    clearTickMarks = () => {
        alert("Check");
        this.setState({tickMarks : []});
        this.emptyDot();
        for(let i = 25; i < 400; i+=25) {
            this.state.dots.push(<TickMark x={i} callback={this.clearTickMarks}/>);
        }
        alert(this.state.dots);
        alert("Done");
    };

    makeTicks = () => {
        for(let i = 25; i < 400; i+=25) {
            this.state.tickMarks.push(<TickMark x={i} callback={this.clearTickMarks}/>);
        }
        return this.state.tickMarks;
    };

    makeDots = () => {
        for(let i = 25; i < 400; i+=25) {
            this.state.dots.push(<TickMark x={i} callback={this.clearTickMarks}/>);
        }
        return this.state.dots;
    };

    render() {
        this.emptyObject();
        this.makeTicks();
        this.makeDots();

        return(
            <div className="numberline">
                <svg height={200} width={500}>
                    <line  x1="5" y1="50" x2="400" y2="50" style={{stroke: 'black'}}/>
                    <polyline points="10 45 5 50 10 55"/>
                    <polyline points="395 45 400 50 395 55"/>
                    {this.state.tickMarks}
                    {this.state.dots}
                </svg>
            </div>
        );
    }
}

export default NumberLine;

