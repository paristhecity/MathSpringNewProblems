import React, {Component} from "react";
import Option from "./Option.js";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';

const options = [">", "<", "="];
const defaultOption = options[0];


class Menu extends Component {
    constructor() {
        super();
        this.state = {
            display: false,
            name: "Select One...",
        }

        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.addResponse = this.addResponse.bind(this);

    };

    showMenu(event) {
        event.preventDefault();
        this.setState({display: true}, () => {
            document.addEventListener('click', this.hideMenu);
        });
    }

    hideMenu(event) {
        event.preventDefault();
        this.setState({display: false}, () => {
            document.addEventListener('click', this.showMenu);
        });
    }



    render() {
        return (
            <Dropdown options={options} onChange={this.changeText} value={defaultOption} placeholder="Select an option"/>

        );
    }
}

export default Menu;