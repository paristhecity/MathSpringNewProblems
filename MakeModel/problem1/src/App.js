import React, {Component} from 'react';
import './App.css';
import Square from './Square.js';

class App extends Component {

    handleSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        alert("submit");
    }

    render() {
      return (
        <div className="App">
            <header className="App-header">
                <div className="Question">
                    <label>
                        Make a model in which the shaded part represents <sup>1</sup>&frasl;<sub>6</sub> of
                        the area of this figure.
                        <br /> Divide the figure into the correct number of equal parts
                        by using the More and Fewer buttons. Then shade by selecting the part or parts.
                    </label>
                </div>
                <form className="Problems" onSubmit={this.handleSubmit}>
                    <div className="Problem">
                        <Square />
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
