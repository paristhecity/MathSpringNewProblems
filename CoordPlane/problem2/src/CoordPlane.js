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
            arrowLine : [],
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
            this.clearArrow();
            this.setState({dots: g});
        } else {
            g.push({
                id: x + "," + y,
                x: x,
                y: y,
                dot: <Dot x={x} y={y} r={7} callbackHover={this.hoverDot} callbackLeave={this.removeDot}/>,
                visible: true
            });
            if(g.length > 2){
                g.splice(g.length-2, 1);
                this.makeArrowLine(this.state.dots[0].x,
                    this.state.dots[0].y,
                    this.state.dots[this.state.dots.length-1].x,
                    this.state.dots[this.state.dots.length-1].y);
                this.setState({dots : g});
            }
            else if(g.length > 1) {
                this.makeArrowLine(this.state.dots[0].x,
                    this.state.dots[0].y,
                    this.state.dots[this.state.dots.length-1].x,
                    this.state.dots[this.state.dots.length-1].y);
            }
            this.setState({dots: g});
        }
    };

    //If the mouse is entering the dot vicinity =>
    hoverDot = (x, y) => {
        let g = [];
        for(let i = 0; i < this.state.dots.length; i++){
            g.push(this.state.dots[i]);
        }
        g.push({
            id: x+","+y,
            x: x,
            y: y,
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
                <XLine className="coordline" text={label} xStart={x1} xEnd={x2} y={this.props.yPlace - this.props.yMeasure * i} color='black' windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth}/>
            );
            this.state.coordLines.push(
                <XLine className="coordline" text={label} xStart={x1} xEnd={x2} y={this.props.yPlace + this.props.yMeasure * i} color='black' windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth}/>
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
                <YLine className="coordline" text={label} x={this.props.xPlace + this.props.xMeasure * i} yStart={y1} yEnd={y2} color='black' windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth}/>
            );
            this.state.coordLines.push(
                <YLine className="coordline" text={label} x={this.props.xPlace - this.props.xMeasure * i} yStart={y1} yEnd={y2} color='black' windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth}/>
            );
            label++;
        }
    };

    makeArrowLine = (x1, y1, x2, y2) => {
        let a = [];
        let m = (y2 - y1)/(x2 - x1);
        let b = -1 * (m * x1 - y1);

        let lineStartX;
        let lineStartY;
        let lineEndX;
        let lineEndY;
        let subLineXL;
        let subLineYL;
        let subLineXR;
        let subLineYR;
        let multiplier=1;

        if(!(isNaN(m) || Math.abs(m) === Infinity))
        {
            //Slope Calculations
            lineStartX = this.props.xStart;
            lineStartY = m*lineStartX+b;
            if(lineStartY >= this.props.yLength) {
                lineStartY = this.props.yLength;
                lineStartX= (lineStartY - b)/m;
                multiplier = 1;
            }
            else if(lineStartY <= this.props.yStart) {
                lineStartY = this.props.yStart;
                lineStartX= (lineStartY - b)/m;
                multiplier = -1;
            }

            lineEndX = this.props.xLength;
            lineEndY = m*lineEndX+b;
            if(lineEndY <= this.props.yStart) {
                lineEndY = this.props.yStart;
                lineEndX = (lineEndY - b)/m;
                multiplier = 1;
            }
            else if(lineEndY >= this.props.yLength) {
                lineEndY = this.props.yLength;
                lineEndX = (lineEndY - b)/m;
                multiplier = -1;
            }

            //Angle Calculations
            let angle = Math.atan(-m);

            let subAngle1 = (Math.PI/4) - angle;
            let subAngle2 = (Math.PI/4) + angle;

            let subLine = 10;
            subLineXL = subLine*Math.sin(subAngle2);
            subLineYL = subLine*Math.cos(subAngle2);
            subLineXR = subLine*Math.sin(subAngle1);
            subLineYR = subLine*Math.cos(subAngle1);
        } else {
            //Horizontal and Vertical Lines
            lineStartX = x1;
            lineStartY = this.props.yLength;
            lineEndX = x1;
            lineEndY = this.props.yStart;

            subLineXL = 5;
            subLineYL = -5;
            subLineXR = -5;
            subLineYR = 5;
        }
        
        let arrowEndXL = lineEndX - multiplier*subLineXL;
        let arrowEndYL = lineEndY - multiplier*subLineYL;
        let arrowEndXR = lineEndX - multiplier*subLineXR;
        let arrowEndYR = lineEndY + multiplier*subLineYR;

        let arrowStartXL = lineStartX + multiplier*subLineXL;
        let arrowStartYL = lineStartY + multiplier*subLineYL;
        let arrowStartXR = lineStartX + multiplier*subLineXR;
        let arrowStartYR = lineStartY - multiplier*subLineYR;

        let arrowEndPoints = arrowEndXL+" "+arrowEndYL+" "+lineEndX+" "+lineEndY+" "+arrowEndXR+" "+arrowEndYR;
        let arrowStartPoints = arrowStartXL+" "+arrowStartYL+" "+lineStartX+" "+lineStartY+" "+arrowStartXR+" "+arrowStartYR;




        a.push(<line x1={lineStartX} y1={lineStartY} x2={lineEndX} y2={lineEndY} style={{stroke: "black"}}/>);
        a.push(<polyline points={arrowEndPoints} style={{stroke: "black"}}/>);
        a.push(<polyline points={arrowStartPoints} style={{stroke: "black"}}/>);


        this.setState({arrowLine : a});
    };

    clearArrow = () => {
        let g = [];
        for(let i = 0; i < this.state.arrowLine.length; i++)
            g.push(this.state.arrowLine[i]);
        g.pop();
        this.setState({arrowLine : g});
    };

    //RENDER FUNCTIONS

    renderArrowLines = () => {

        let arrowEndX = this.props.xLength - 5;
        let arrowStartX = this.props.xStart + 5;
        let arrowEndPointsX = arrowEndX+" "+(this.props.yPlace - 5)+" "+this.props.xLength+" "+this.props.yPlace+" "+arrowEndX+" "+(this.props.yPlace + 5);
        let arrowStartPointsX = arrowStartX+" "+(this.props.yPlace - 5)+" "+this.props.xStart+" "+this.props.yPlace+" "+arrowStartX+" "+(this.props.yPlace + 5);

        let arrowEndY = this.props.yLength - 5;
        let arrowStartY = this.props.yStart + 5;
        let arrowEndPointsY = (this.props.xPlace - 5)+" "+arrowEndY+" "+this.props.xPlace+" "+this.props.yLength+" "+(this.props.xPlace + 5)+" "+arrowEndY;
        let arrowStartPointsY = (this.props.xPlace - 5)+" "+arrowStartY+" "+this.props.xPlace+" "+this.props.yStart+" "+(this.props.xPlace + 5)+" "+arrowStartY;


        return (
            <svg height={this.props.windowHeight} width={this.props.windowWidth}>
                <line className="axis" x1={this.props.xStart} y1={this.props.yPlace} x2={this.props.xLength} y2={this.props.yPlace} style={{stroke: this.props.color}}/>
                <polyline className="axis" points={arrowStartPointsX} style={{stroke: this.props.color}}/>
                <polyline className="axis" points={arrowEndPointsX} style={{stroke: this.props.color}}/>

                <line className="axis" x1={this.props.xPlace} y1={this.props.yStart} x2={this.props.xPlace} y2={this.props.yLength} style={{stroke: this.props.color}}/>
                <polyline className="axis" points={arrowStartPointsY} style={{stroke: this.props.color}}/>
                <polyline className="axis" points={arrowEndPointsY} style={{stroke: this.props.color}}/>
            </svg>
        );

    };

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

    renderArrow = () => {
        return this.state.arrowLine;
    }

    render() {

        this.makeHoverSquares();
        this.makeYLines();
        this.makeXLines();

        return (
            <svg height={this.props.windowHeight} width={this.props.windowWidth}>

                {this.renderHoverSquares()}
                {this.renderCoordLines()}
                {this.renderArrowLines()}
                {this.renderDots()}
                {this.renderArrow()}

            </svg>
        );
    }
}

export default CoordPlane;