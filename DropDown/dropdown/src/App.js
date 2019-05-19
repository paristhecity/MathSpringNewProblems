import React, {Component} from 'react';
import Menu from './Menu.js';
import './App.css';
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';

const options = [
    {value: "greater", label: ">"},
    {value: "less", label: "<"},
    {value: "equal", label: "="}
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state =  { value: "Select an option"};
    }

    componentWillMount = () => {
        this.responses = new Set();
    }

    handleSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        const intro = 'The chosen answer is: ';
        for(const resp of this.responses) {
            alert(intro + resp);
        }

    }

    handleChange = (event) => {
        this.responses.add(event.value);
        alert(event.value);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="Question">
                        Select from the drop-down menus to correctly complete each comparison.
                    </div>
                    <br/>
                    <form className="Problems" onSubmit={this.handleSubmit}>
                        <div className="Problem">
                            <label> 2.09 </label>
                            <Dropdown className="One" options={options} onChange={this.handleChange} placeholder="Select an option" value={this.state.value}/>
                            <label> 2.12 </label>
                        </div>
                        <br />
                        <div className="Problem">
                            <label> 8.10 </label>
                            <Dropdown className="Two" options={options} onChange={this.handleChange} placeholder="Select an option" value={this.state.value}/>
                            <label> 8.1 </label>
                        </div>
                        <br />
                        <div className="Problem">
                            <label> 6.45 </label>
                            <Dropdown className="Three" options={options} onChange={this.handleChange} placeholder="Select an option" value={this.state.value}/>
                            <label> 6.7 </label>
                        </div>

                        <br />
                        <input type="submit" value="Submit"/>
                    </form>
                </header>
            </div>

        );
    }

}

export default App;
