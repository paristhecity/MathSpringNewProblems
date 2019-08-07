import React from 'react';


class YLine extends React.Component {

    render() {
        return(
            <svg height={this.props.windowHeight} width={this.props.windowWidth}>
                <line className="coordline"
                      x1={this.props.x} y1={this.props.yStart}
                      x2={this.props.x} y2={this.props.yEnd}
                      style={{stroke: this.props.color}}/>
                {(this.props.text !== 0) ?
                    <text x={this.props.x + 2} y={this.props.yEnd/2 - 3}>{this.props.text}</text> :
                    null
                }
            </svg>
        );
    }
}

export default YLine;

