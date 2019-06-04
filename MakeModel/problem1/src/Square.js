import React, {Component} from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'white',
            width: 300,
        };

        this.changed = 0;
        this.fillSquare = this.fillSquare.bind(this);
    }

    componentDidUpdate() {
        this.shareColor();
    }

    shareColor = () => {
        let num;
        if(this.changed === 0)
            num = this.state.background !== 'white' ? 1 : 0;
        else {
            num = -1;
            this.changed = 0;
        }
        this.props.callBack(num);
    };

    fillSquare = () => {
        if(this.state.background === 'white')
            this.setState({background: 'blue'});
        else {
            this.setState({background: 'white'});
            this.changed = 1;
        }
    };

    render() {
        return (
            <div className="square" onClick={this.fillSquare} style={{background: this.state.background, width: this.props.width}}>
            </div>
        );
    }
}

export default Square;