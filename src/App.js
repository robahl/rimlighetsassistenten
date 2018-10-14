import React, { Component } from 'react';
import './App.scss';
import Calculator from './Calculator';
import Result from './Result';

class App extends Component {
  constructor() {
    super();

    this.state = {result: "No result"};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Rimligheten</h1>
        </header>

        <Calculator onChange={this.handleChange} />
        <Result value={this.state.result} />
      </div>
    );
  }
}

export default App;
