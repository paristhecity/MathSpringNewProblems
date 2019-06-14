import React from 'react';
import Dot from "./Dot";

class NumberLine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            circleFill: 'blue',
            dot: '',
        };

        this.drawDot = this.drawDot.bind(this);
        this.renderDot = this.renderDot.bind(this);
    }
/*
    makeTicks = () => {
        let minT = -(this.props.tickMaxNum);
        let maxT = this.props.tickMaxNum;
        let lineLength = this.props.lineLength + this.props.lineStart;
        let tickMarks = Math.abs(minT) + Math.abs(maxT) + 1;
        let int = (lineLength - 20)/tickMarks;
        let start = this.props.lineStart + (int/2);
        let num = minT;
        for(let i = start; i < lineLength; i+=int) {
            if(num > maxT)
                break;
            this.state.tickMarks.push(<TickMark x={i} lineY={this.props.lineY} number={num} height={this.props.windowHeight} width={this.props.windowWidth} callbackHover={this.drawDot} callbackLeave={this.removeDot}/>);
            num++;
        }
        return this.state.tickMarks;
    };
    */

    drawDot = (x) => {
        this.setState({dot : <Dot x={x} y={this.props.lineY} r={7} callbackHover={this.drawDot} callbackLeave={this.removeDot}/>});
    };

    removeDot = () => {
        this.setState({dot: this.setState({showCircle: false})});
        this.setState({dot: this.setState({hover: false})});
    };

    renderDot = () => {
        return this.state.dot;
    };

    render() {
        let arrowEnd = this.props.lineLength - 5;
        let arrowStart = this.props.lineStart + 5;
        let arrowEndPoints = arrowEnd +" "+(this.props.lineY - 5)+" "+this.props.lineLength+" "+this.props.lineY+" "+arrowEnd+" "+(this.props.lineY + 5);
        let arrowStartPoints = arrowStart +" "+(this.props.lineY - 5)+" "+this.props.lineStart+" "+this.props.lineY+" "+arrowStart+" "+(this.props.lineY + 5);

        return(
            <div className="numberline">
                <svg height={this.props.windowHeight} width={this.props.windowWidth}>
                    <line  x1="5" y1={this.props.lineY} x2={this.props.lineLength} y2={this.props.lineY} style={{stroke: this.props.color}}/>
                    <polyline points={arrowStartPoints} style={{stroke: this.props.color}}/>
                    <polyline points={arrowEndPoints} style={{stroke: this.props.color}}/>
                    {this.renderDot()}
                </svg>
            </div>
        );
    }
}

export default NumberLine;

