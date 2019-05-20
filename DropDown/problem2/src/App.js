import React, {Component} from 'react';
import './App.css';
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';

const options = [
  {value: "less", label: "less than"},
  {value: "greater", label: "greater than"},
  {value: "equal", label: "equal to"}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Choose...",
      responses: []
    };

    this.handleSubmit.bind(this);
    this.handleChange.bind(this);
  }

  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    this.state.responses.map((item) =>
      alert("A chosen answer is: " + item)
    );

  };

  handleChange = (event) => {
    this.state.responses.push(event.value);
    alert(event.value);
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <div className="Question">
              Select from the drop-down menus to correctly complete the statements.
            </div>
            <br/>
            <form className="Problems" onSubmit={this.handleSubmit}>
              <div className="Problem">
                <label>
                  The product of 6 &#10005; <sup>5</sup>&frasl;<sub>3</sub> will be &nbsp;
                </label>
                <Dropdown
                    className="OneA" options={options}
                    onChange={this.handleChange}
                    placeholder="Choose..."
                    value={this.state.value} />
                <label>
                  &nbsp; 6 because the fraction <sup>5</sup>&frasl;<sub>3</sub> is &nbsp;
                </label>
                <Dropdown
                    className="OneB" options={options}
                    onChange={this.handleChange}
                    placeholder="Choose..."
                    value={this.state.value}/>
                <label>
                  &nbsp; 1.
                </label>
              </div>
              <br />
              <div className="Problem">
                <label> The product of 7 &#10005; <sup>6</sup>&frasl;<sub>6</sub> will be &nbsp;</label>
                <Dropdown className="TwoA" options={options} onChange={this.handleChange} placeholder="Choose..." value={this.state.value}/>
                <label>&nbsp; 7 because the fraction <sup>6</sup>&frasl;<sub>6</sub> is &nbsp;</label>
                <Dropdown className="TwoB" options={options} onChange={this.handleChange} placeholder="Choose..." value={this.state.value}/>
                <label>&nbsp; 1. </label>
              </div>
              <br />
              <div className="Problem">
                <label> The product of 3 &#10005; <sup>2</sup>&frasl;<sub>3</sub> will be &nbsp;</label>
                <Dropdown className="ThreeA" options={options} onChange={this.handleChange} placeholder="Choose..." value={this.state.value}/>
                <label>&nbsp; 3 because the fraction <sup>2</sup>&frasl;<sub>3</sub> is &nbsp;</label>
                <Dropdown className="ThreeB" options={options} onChange={this.handleChange} placeholder="Choose..." value={this.state.value}/>
                <label>&nbsp; 1. </label>
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
