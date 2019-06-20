import React from 'react';

class HoverSquare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showCircle : true,
        };
    }

    hoverOver = () => {
        this.setState({showCircle : false});
        this.props.callbackHover(this.props.x+(this.props.size/2), this.props.y+(this.props.size/2), this.state.showCircle);
    };

    hoverLeave = () => {
        if(this.state.showCircle === false) {
            this.props.callbackLeave(this.state.showCircle, false);
        }
    };

    makeCircle = () => {
        this.props.callbackClick(this.props.x+(this.props.size/2), this.props.y+(this.props.size/2), this.state.showCircle);
        this.setState({showCircle : !this.state.showCircle});
    };

    render() {
        return (
            <rect x={this.props.x} y={this.props.y} width={this.props.size} height={this.props.size} style={{fill: this.props.color}}
                  onClick={this.makeCircle} onMouseEnter={this.hoverOver} onMouseLeave={this.hoverLeave}  />
        );
    }
}

export default HoverSquare;