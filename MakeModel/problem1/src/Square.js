import React, {Component} from 'react';



class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color : 'white',
        }
    }

    fillSquare() {
        this.setState({color: 'blue'});
    }

    render() {
        return (
            <Square className="square" onClick={this.fillSquare} style={{background: 'red'}}>
            </Square>
        );
    }
}

export default Square;