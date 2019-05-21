import React, {Component} from 'react';


class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
        };
    }

    fillSquare = () => {
        this.setState({color: 'blue'});
    }

    render() {
        return (
            <div className="square" onClick={this.fillSquare} style={{background: this.state.color}}>
            </div>
        );
    }
}

export default Square;