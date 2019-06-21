import React from 'react';


class XLine extends React.Component {

    render() {
        return(
            <svg height={this.props.windowHeight} width={this.props.windowWidth}>
                <line className="coordline" x1={this.props.xStart} y1={this.props.y} x2={this.props.xEnd} y2={this.props.y} style={{stroke: this.props.color}}/>
                <text x={this.props.xEnd/2 + 3} y={this.props.y - 3} >{this.props.text}</text>
            </svg>
        );
    }
}

export default XLine;

