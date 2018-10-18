import React, { Component } from 'react';
import './App.scss';
import DatePeriod from './DatePeriod';
import Result from './Result';

class App extends Component {
  constructor() {
    super();

    this.handleDateChange = this.handleDateChange.bind(this);

    this.state = {
      result: 'No result',
      daysInBetween: 0
    };
  }

  handleDateChange(daysInBetween) {
    this.setState({ daysInBetween });
  }

  render() {
    return (
      <div className="App container">
        <header className="row">
          <h1 className="col">Rimligheten</h1>
        </header>

        <DatePeriod onChange={this.handleDateChange} />
        <Result value={this.state.daysInBetween} />
      </div>
    );
  }
}

export default App;
