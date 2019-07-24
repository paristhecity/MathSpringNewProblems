import React from 'react';
import './App.css';
import CoordPlane from "./CoordPlane";

class App extends React.Component {
    //Constants that can change
    WINDOW_HEIGHT = 500;
    WINDOW_WIDTH = 575;
    X_MAX = 10;
    Y_MAX = 6;
    X_START = 5;
    Y_START = 5;
    X_LENGTH = this.X_START+550;
    Y_LENGTH = this.Y_START+475;
    X_PLACE = this.X_LENGTH/2;
    Y_PLACE = this.Y_LENGTH/2;
    Y_MEASURE = (this.Y_PLACE - this.Y_START)/(this.Y_MAX);
    X_MEASURE = (this.X_PLACE - this.X_START)/(this.X_MAX);

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
                        Plot the point (9, 5) on the coordinate plane.
                        <br />
                        Select the place on the coordinate plane to plot the point.
                    </div>
                    <br/>
                    <form className="Problems" onSubmit={this.handleSubmit}>
                        <div className="Problem">
                            <CoordPlane color="black"
                                   windowHeight={this.WINDOW_HEIGHT} windowWidth={this.WINDOW_WIDTH}
                                        xMax={this.X_MAX} yMax={this.Y_MAX}
                                        xStart={this.X_START} yStart={this.Y_START}
                                        xLength={this.X_LENGTH} yLength={this.Y_LENGTH}
                                        xPlace={this.X_PLACE} yPlace={this.Y_PLACE}
                                        xMeasure={this.X_MEASURE} yMeasure={this.Y_MEASURE}
                            />

                        </div>
                        <input type="submit" value="Submit"/>
                    </form>
                </header>
            </div>
        );
    }
}

export default App;
