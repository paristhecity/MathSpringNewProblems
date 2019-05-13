import React, {Component} from 'react';
import Menu from './Menu.js';
import './App.css';
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';

const options = [">", "<", "="];
const defaultOption = options[0];

class App extends Component {

    handleSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        const intro = 'The chosen answer is: ';
        alert(intro + "b");

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="Question">
                        Select from the drop-down menus to correctly complete each comparison.
                    </div>
                    <br/>
                    <form className="Answers" onSubmit={this.handleSubmit}>
                        2.09
                        <Dropdown width='10px' options={options} onChange={this.changeText} value={defaultOption} placeholder="Select an option"/>
                        2.12

                        <br />
                        <input type="submit" value="Submit"/>
                    </form>
                </header>
            </div>

        );
    }

}

export default App;
