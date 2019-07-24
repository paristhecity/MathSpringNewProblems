import React from 'react';

class Dot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            circleFill : 'red',
        };

    }

    render() {
        return (
                <circle className="dot"
                        cx={this.props.x}
                        cy={this.props.y}
                        r={this.props.r}
                        style={{fill: this.state.circleFill}}/>
        );
    }

}

export default Dot;