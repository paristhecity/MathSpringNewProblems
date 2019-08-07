import React, {Component} from 'react';

class Arc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'grey',
        };

        this.fillArc = this.fillArc.bind(this);
    }

    fillArc = () => {
        if(this.state.background === 'grey')
            this.setState({background: 'blue'});
        else {
            this.setState({background: 'grey'});
            this.changed = 1;
        }

    };

    render() {
        let trans = "rotate("+this.props.rotate+"deg) skewY("+this.props.skew+"deg)";
        return (
            <div className="arc"
                 onClick={this.fillArc}
                 style={{background: this.state.background,
                     transform: trans}}>
            </div>
        );
    }

}

export default Arc;