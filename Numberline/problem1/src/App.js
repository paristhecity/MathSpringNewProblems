import React from 'react';
import './App.css';
import NumberLine from "./Numberline";

class App extends React.Component{

  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    //Do Something to get the response
    window.location.reload();
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <div className="Question">
              <label>
                Logan wrote this equation.
                <br/>
                <br/>
                &#8722;5.5 + 2 &#61; <i>x</i>
                <br/>
                <br/>
                Logan wants to plot a point on this number line to represent the value of <i>x</i>.
                <br/>
                Select the place on the number line where Logan should plot the point.
                <br/>
                <br/>
              </label>
            </div>
            <form className="Problems" onSubmit={this.handleSubmit}>
              <div className="Problem">
                <NumberLine color="blue"/>
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
