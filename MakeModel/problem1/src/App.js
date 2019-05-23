import React, {Component} from 'react';
import './App.css';
import SquareGroup from './SquareGroup.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.fract = 0;
    this.child = React.createRef();
  }

  announceFraction = (childData) => {
    this.fract = childData;
  };

  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    alert("SUBMITTING:");
    alert(this.fract);
    alert("submit");
    window.location.reload();
  };

  render() {
    return <div className="App">
      <header className="App-header">
        <div className="Question">
          <label>
            Make a model in which the shaded part represents <sup>1</sup>&frasl;<sub>6</sub> of
            the area of this figure.
            <br/> Divide the figure into the correct number of equal parts
            by using the More and Fewer buttons. Then shade by selecting the part or parts.
          </label>
        </div>
        <br/>
        <form className="Problems" onSubmit={this.handleSubmit}>
          <div className="Problem">
            <SquareGroup callBack={this.announceFraction}/>
          </div>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </header>
    </div>
  };
}

export default App;
