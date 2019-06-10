import React from 'react';

class TickMark extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            circleFill : 'black',
            showCircle : false,
            hover : true,
        };
    }

    initializeCircle = () => {
        //alert(this.state.showCircle);
        return (this.state.showCircle ?
            <circle cx={this.props.x} cy="50" r="5" style={{fill: 'blue'}} /> :
            <circle cx={this.props.x} cy="50" r="5" style={{fill: 'none'}} />);
    };

    hoverOver = () => {
        this.setState({showCircle : true});
        //this.setState({hover : true});
    };

    hoverLeave = () => {
        if(this.state.hover === true)
            this.setState({showCircle : false});
        //this.setState({hover : false});
    };

    changeCircle = () => {
        this.setState({showCircle : false});
    };

    makeCircle = () => {
        //Callback goes here
        this.props.callback();
        if(this.state.hover){
            this.setState({showCircle : true});
            this.setState({hover: false});
        }
        else {
            this.setState({showCircle : false});
            this.setState({hover: true})
        }
    };

    render() {

        return (
            <svg height={200} width={500}>

                <line x1={this.props.x} y1="40" x2={this.props.x} y2="60" style={{stroke: 'black'}} onMouseOver={this.hoverOver} onMouseLeave={this.hoverLeave} onClick={this.makeCircle}/>
                {this.initializeCircle()}
            </svg>
        );
    }

}

export default TickMark;