import React, { Component } from 'react';
import './Lon.scss';

class Lon extends Component {
  static DEVIATION = 1.2;
  constructor() {
    super();

    this.handlePrognosChange = this.handlePrognosChange.bind(this);
    this.handleRedovisadChange = this.handleRedovisadChange.bind(this);

    this.state = {
      prognosLon: '',
      redovisadLon: ''
    };
  }

  handlePrognosChange(e) {
    let number = Number(e.target.value.replace(/\D/g, ''));

    this.props.onUpdatePrognosLon(number);

    number = number.toLocaleString('sv-SE');

    if (number === '0') {
      number = '';
    }
    this.setState({ prognosLon: number });
  }

  handleRedovisadChange(e) {
    let number = Number(e.target.value.replace(/\D/g, ''));

    this.props.onUpdateRedovisadLon(number);

    number = number.toLocaleString('sv-SE');

    if (number === '0') {
      number = '';
    }
    this.setState({ redovisadLon: number });
  }

  render() {
    return (
      <div className="Lon row">
        <div className="col input-group mb-3">
          <input
            className="form-control"
            placeholder="Prognoslön hel månad"
            type="text"
            value={this.state.prognosLon}
            onChange={this.handlePrognosChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">kr</span>
          </div>
        </div>
        <div className="col input-group mb-3">
          <input
            className="form-control"
            placeholder="Redovisad lön"
            type="text"
            value={this.state.redovisadLon}
            onChange={this.handleRedovisadChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">kr</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Lon;
