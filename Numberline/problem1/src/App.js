import React from 'react';
import './App.css';
import NumberLine from "./Numberline";

class App extends React.Component{

  //Constants that can change
  WINDOW_HEIGHT = 200;
  WINDOW_WIDTH = 575;
  LINE_LENGTH = 550;
  LINE_START = 5;
  TICK_MAX_NUM = 7;
  LINE_PLACE = 50;


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
                <NumberLine color="black"
                            windowHeight={this.WINDOW_HEIGHT} windowWidth={this.WINDOW_WIDTH}
                            lineLength={this.LINE_LENGTH} lineStart={this.LINE_START} lineY={this.LINE_PLACE}
                            tickMaxNum={this.TICK_MAX_NUM}
                />
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
