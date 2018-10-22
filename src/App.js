import React, { Component } from 'react';
import './App.scss';
import DatePeriod from './DatePeriod';
import Lon from './Lon';
import Result from './Result';

class App extends Component {
  constructor() {
    super();

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleUpdatePrognosLon = this.handleUpdatePrognosLon.bind(this);
    this.handleUpdateRedovisadLon = this.handleUpdateRedovisadLon.bind(this);

    this.state = {
      dayFactor: null,
      prognosLon: null,
      redovisadLon: null
    };
  }

  handleDateChange(dayFactor) {
    this.setState({ dayFactor });
  }

  handleUpdatePrognosLon(lon) {
    this.setState({ prognosLon: lon });
  }

  handleUpdateRedovisadLon(lon) {
    this.setState({ redovisadLon: lon });
  }

  get rimligLon() {
    if (
      !this.state.dayFactor ||
      !this.state.prognosLon ||
      !this.state.redovisadLon
    ) {
      return null;
    }

    const rimligLon = this.state.dayFactor * this.state.prognosLon;
    const lonMedAvvikelse = rimligLon * Lon.DEVIATION;

    return this.state.redovisadLon < lonMedAvvikelse;
  }

  clearAllFields() {
    document.querySelectorAll('input').forEach(elem => (elem.value = null));
  }

  render() {
    return (
      <div className="App container">
        <header className="row mt-4">
          <div className="col">
            <div className="row">
              <h1 className="col">Rimlighetsassistenten</h1>
            </div>
          </div>
        </header>

        <button
          className="btn btn-secondary btn-sm float-right clear-button"
          onClick={this.clearAllFields}>
          Nollställ
        </button>

        <DatePeriod onChange={this.handleDateChange} />
        <Lon
          onUpdatePrognosLon={this.handleUpdatePrognosLon}
          onUpdateRedovisadLon={this.handleUpdateRedovisadLon}
        />
        <Result rimligLon={this.rimligLon} />
        <small className="author">RobAhl - 2018</small>
      </div>
    );
  }
}

export default App;
