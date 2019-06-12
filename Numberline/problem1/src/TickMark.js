import React from 'react';

class TickMark extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fill : 'black',
            showCircle : true,
            hover : false,
        };

        this.makeCircle = this.makeCircle.bind(this);
    }

    hoverOver = () => {
        this.setState({showCircle : true});
        this.setState({hover: true});
        //this.setState({hover : true});
        this.props.callbackHover(this.props.x);

    };

    hoverLeave = () => {
        if(this.state.hover === true) {
            this.setState({showCircle: false});
            this.props.callbackLeave();
        }
        this.setState({hover: false});
    };

    makeCircle = () => {
        this.props.callbackHover(this.props.x);
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

    render() {

        // x-position of text changes based on number of digits and if negative
        let textPosX = (this.props.number > 9 || this.props.number < -9) ? this.props.x - 15 : this.props.x - 10;
        let textNegX = (this.props.number > 9 || this.props.number < -9) ? this.props.x - 10 : this.props.x - 5;
        let textY = this.props.lineY - 15;

        //tickMark information
        let tickTop = this.props.lineY - 10;
        let tickBottom = this.props.lineY + 10;

        return (
            <svg height={this.props.height} width={this.props.width}>
                {(this.props.number < 0) ?
                    <text x={textPosX} y={textY}> {this.props.number} </text> :
                    <text x={textNegX} y={textY}> {this.props.number} </text>}
                <line x1={this.props.x} y1={tickTop} x2={this.props.x} y2={tickBottom} style={{stroke: this.state.fill}} onMouseEnter={this.hoverOver} onMouseLeave={this.hoverLeave} onClick={this.makeCircle}/>
            </svg>
        );
    }

}

export default TickMark;