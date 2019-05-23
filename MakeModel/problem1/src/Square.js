import React, {Component} from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'white',
            width: 300,
        };

        this.emptySquare = this.emptySquare.bind(this);
        this.fillSquare = this.fillSquare.bind(this);
    }

    componentDidUpdate() {
        this.shareColors();
    }

    shareColors = () => {
        this.props.callBack(this.state.background);
    };

    fillSquare = () => {
        if(this.state.background === 'white')
            this.setState({background: 'blue'});
        else
            this.setState({background: 'white'});
    };

    emptySquare = () => {
        this.setState({background: 'white'});
    };

    render() {
        return (
            <div className="square" onClick={this.fillSquare} style={{background: this.state.background, width: this.props.width}}>
            </div>
        );
    }
}

export default Square;