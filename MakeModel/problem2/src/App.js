import React, {Component} from 'react';
import './App.css';
import Circle from "./Circle";


class App extends Component {

  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    window.location.reload();
  };

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <div className="Question">
            <label>
              The Creamer family ordered a pizza. They ate <sup>5</sup>&frasl;<sub>6</sub> of
              the pizza.
              <br/>
              Shade the fraction of the model to represent the fraction of the pizza the Creamer family ate.
              <br />
              <br />
              Select the part or parts of the model you want to shade.
            </label>
          </div>
          <br/>
          <form className="Problems" onSubmit={this.handleSubmit}>
            <div className="Problem">
              <Circle  />


            </div>
            <br/>

            <input type="submit" value="Submit"/>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
