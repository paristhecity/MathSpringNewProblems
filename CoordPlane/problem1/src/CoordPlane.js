import React from "react";
import Dot from "./Dot.js";
import HoverSquare from "./HoverSquare.js";
import XLine from "./XLine";
import YLine from "./YLine";

class CoordPlane extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            coordLines : [],
            squares : [],
            squareSize : 10,
            dots : [],
        };
    }

    //MOUSE INTERACTIONS
    //If the mouse is leaving the dot vicinity and there has been no click =>
    removeDot = (show) => {
        let g = [];
        for(let i = 0; i < this.state.dots.length; i++)
            g.push(this.state.dots[i]);
        if(!show)
            g.pop();
        this.setState({dots : g});
    };

    //If the dot has been clicked =>
    clickDot = (x, y) => {
        let g = [];
        let index = -1;

        for(let i = 0; i < this.state.dots.length-1; i++){
            g.push(this.state.dots[i]);
            if(this.state.dots[i].id === x+","+y){
                index = i;
            }
        }
        if(g[index] && g[index].visible){
            g.splice(index, 1);
            if(g.length > 1)
                g.shift();
            this.setState({dots: g});
        } else {
            g.push({
                id: x + "," + y,
                dot: <Dot x={x} y={y} r={7} callbackHover={this.hoverDot} callbackLeave={this.removeDot}/>,
                visible: true
            });
            if(g.length > 1){
                g.shift();
                this.setState({dots : g});
            }
            this.setState({dots: g});
        }
        //this.setState({dots: g});
    };

    //If the mouse is entering the dot vicinity =>
    hoverDot = (x, y) => {
        let g = [];
        for(let i = 0; i < this.state.dots.length; i++){
            g.push(this.state.dots[i]);
        }
        g.push({
            id: x+","+y,
            dot: <Dot x={x} y={y} r={7} callbackHover={this.hoverDot} callbackLeave={this.removeDot}/>,
            visible: false
        });
        this.setState({dots : g});
    };

    //CREATING COMPONENTS
    makeHoverSquares = () => {
        let squareSize = this.state.squareSize;
        let color = 'white';

        for(let i = 0; i < this.props.xMax; i++) {
            for(let j = 0; j < this.props.yMax; j++) {
                this.state.squares.push(
                    <HoverSquare windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth} x={(this.props.xPlace + this.props.xMeasure * i)-(squareSize/2)} y={(this.props.yPlace + this.props.yMeasure * j)-(this.state.squareSize/2)} size={this.state.squareSize} color={color} callbackClick={this.clickDot} callbackHover={this.hoverDot} callbackLeave={this.removeDot}/>
                );
                this.state.squares.push(
                    <HoverSquare windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth} x={(this.props.xPlace - this.props.xMeasure * i)-(squareSize/2)} y={(this.props.yPlace + this.props.yMeasure * j)-(this.state.squareSize/2)} size={this.state.squareSize} color={color} callbackClick={this.clickDot} callbackHover={this.hoverDot} callbackLeave={this.removeDot}/>
                );
                this.state.squares.push(
                    <HoverSquare windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth} x={(this.props.xPlace + this.props.xMeasure * i)-(squareSize/2)} y={(this.props.yPlace - this.props.yMeasure * j)-(this.state.squareSize/2)} size={this.state.squareSize} color={color} callbackClick={this.clickDot} callbackHover={this.hoverDot} callbackLeave={this.removeDot}/>
                );
                this.state.squares.push(
                    <HoverSquare windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth} x={(this.props.xPlace - this.props.xMeasure * i)-(squareSize/2)} y={(this.props.yPlace - this.props.yMeasure * j)-(this.state.squareSize/2)} size={this.state.squareSize} color={color} callbackClick={this.clickDot} callbackHover={this.hoverDot} callbackLeave={this.removeDot}/>
                );
            }

        }
    };

    makeXLines = () => {
        let x1 = this.props.xStart;
        let x2 = this.props.xLength;
        let label = 0;

        for(let i = 0; i < this.props.yMax; i++) {
            this.state.coordLines.push(
                <XLine className="coordline" text={label} xStart={x1} xEnd={x2}
                       y={this.props.yPlace - this.props.yMeasure * i} color='black'
                       windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth}/>
            );
            this.state.coordLines.push(
                <XLine className="coordline" text={label} xStart={x1} xEnd={x2}
                       y={this.props.yPlace + this.props.yMeasure * i} color='black'
                       windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth}/>
            );
            label++;
        }
    };

    makeYLines = () => {
        let y1 = this.props.yStart;
        let y2 = this.props.yLength;
        let label = 0;

        for(let i = 0; i < this.props.xMax; i++) {
            this.state.coordLines.push(
                <YLine className="coordline" text={label} x={this.props.xPlace + this.props.xMeasure * i}
                       yStart={y1} yEnd={y2} color='black'
                       windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth}/>
            );
            this.state.coordLines.push(
                <YLine className="coordline" text={label} x={this.props.xPlace - this.props.xMeasure * i}
                       yStart={y1} yEnd={y2} color='black'
                       windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth}/>
            );
            label++;
        }
    };

    makeArrowLines = () => {
        let arrowEndX = this.props.xLength - 5;
        let arrowStartX = this.props.xStart + 5;
        let arrowEndPointsX = arrowEndX+" "+(this.props.yPlace - 5)+" "
            +this.props.xLength+" "+this.props.yPlace+" "
            +arrowEndX+" "+(this.props.yPlace + 5);
        let arrowStartPointsX = arrowStartX+" "+(this.props.yPlace - 5)+" "
            +this.props.xStart+" "+this.props.yPlace+" "
            +arrowStartX+" "+(this.props.yPlace + 5);

        let arrowEndY = this.props.yLength - 5;
        let arrowStartY = this.props.yStart + 5;
        let arrowEndPointsY = (this.props.xPlace - 5)+" "+arrowEndY+" "
            +this.props.xPlace+" "+this.props.yLength+" "
            +(this.props.xPlace + 5)+" "+arrowEndY;
        let arrowStartPointsY = (this.props.xPlace - 5)+" "+arrowStartY+" "
            +this.props.xPlace+" "+this.props.yStart+" "
            +(this.props.xPlace + 5)+" "+arrowStartY;

        return (
            <svg height={this.props.windowHeight} width={this.props.windowWidth}>
                <line x1={this.props.xStart} y1={this.props.yPlace}
                      x2={this.props.xLength} y2={this.props.yPlace} style={{stroke: this.props.color}}/>
                <polyline points={arrowStartPointsX} style={{stroke: this.props.color}}/>
                <polyline points={arrowEndPointsX} style={{stroke: this.props.color}}/>

                <line x1={this.props.xPlace} y1={this.Y_START}
                      x2={this.props.xPlace} y2={this.props.yLength} style={{stroke: this.props.color}}/>
                <polyline points={arrowStartPointsY} style={{stroke: this.props.color}}/>
                <polyline points={arrowEndPointsY} style={{stroke: this.props.color}}/>
            </svg>
        );
    };

    //RENDER FUNCTIONS
    renderCoordLines = () => {
        return this.state.coordLines;
    };

    renderHoverSquares = () => {
        return this.state.squares;
    };

    renderDots = () => {
        let dots = [];
        for(let i = 0; i < this.state.dots.length; i++)
            dots.push(this.state.dots[i].dot);
        return dots;
    };

    render() {

        this.makeHoverSquares();
        this.makeYLines();
        this.makeXLines();

        return (
            <svg height={this.props.windowHeight} width={this.props.windowWidth}>

                {this.renderHoverSquares()}
                {this.renderCoordLines()}
                {this.makeArrowLines()}
                {this.renderDots()}

            </svg>
        );
    }
}

export default CoordPlane;