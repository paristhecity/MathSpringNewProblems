import React from 'react';

class Dot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            circleFill : 'blue',
            showCircle : true,
            hover : false,
        };
    }

    changeCircleVisibility = () => {
        if(this.state.hover && this.state.showCircle){
            this.setState({showCircle : true});
            this.setState({hover: false});
        }
        else if(!this.state.hover && this.state.showCircle){
            this.setState({showCircle : false});
            this.setState({hover: false});
        }
        else {
            this.setState({showCircle : false});
            this.setState({hover: false});
        }
    };

    hoverOver = () => {
        this.setState({showCircle: true});
        this.setState({hover: true});
        this.props.callbackHover(this.props.x);
    };

    hoverLeave = () => {
        if(this.state.hover === true) {
            this.setState({showCircle: false});
            this.props.callbackLeave();
        }
    };

    render() {
        return (
            (this.state.showCircle) ?
                <circle cx={this.props.x} cy={this.props.y} r={this.props.r} style={{fill: this.state.circleFill}} onMouseEnter={this.hoverOver} onMouseLeave={this.hoverLeave} onClick={this.changeCircleVisibility} /> :
                <circle cx={this.props.x} cy={this.props.y} r={this.props.r} style={{fill: 'none'}} onMouseEnter={this.hoverOver} onMouseLeave={this.hoverLeave} onClick={this.changeCircleVisibility} />
        );
    }

}

export default Dot;