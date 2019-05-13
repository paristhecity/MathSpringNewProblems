import React, {Component} from "react";

class Option extends Component
{
    constructor() {
        super();
        this.state = {
            text : "default",
        }

        this.chooseOption = this.chooseOption.bind(this);
    }

    chooseOption(event) {
        event.preventDefault();
        alert("Works");
    }

    render() {
        return(<h1> Oy vey </h1>)
    }


}

export default Option;