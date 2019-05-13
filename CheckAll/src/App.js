import React, { Component } from 'react';
import './App.css';
import Checkbox from './Checkbox';

const items = [ <!-- This is where the answers would be -->
  'A. employees with office phone numbers ending in 3 and 7',
  'B. randomly selected employees in the cafeteria of one of the offices',
  'C. employees who have worked for the company for more than 10 years',
  'D. 5% of randomly selected employees from each office location',
  'E. employees answering phone calls in the company’s customer service department',
  'F. employees who are randomly selected by a computer from a list of all company employees'

];

class App extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    const intro = 'One chosen answer is: ';
    for (const checkbox of this.selectedCheckboxes) {
      alert(intro + checkbox);
    }

  }

  createCheckbox = label => (
      <Checkbox
          label={label}
                handleCheckboxChange={this.toggleCheckbox}
          key={label}
      />
  )

  createCheckboxes = () => (
      items.map(this.createCheckbox)
  )


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Question"> <!-- This is where the question would be -->
            A large company has offices in cities across the country.
            The facilities director of the company was asked to survey employees about their office furniture.
            Rather than survey all employees in the company, the director decided to take a sample of employees.
            Which groups would be most representative of the opinions of all employees in the company?
            <br />
            <br />
            Select each correct answer.
          </div>
          <br />
          <form className="Answers" onSubmit={this.handleSubmit}>

            {this.createCheckboxes()}

            <input type="submit" value="Submit" />
          </form>


        </header>
      </div>
    );
  }
}

export default App;
