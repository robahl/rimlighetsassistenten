import React, { Component } from 'react';
import './Lon.scss';

class Lon extends Component {
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

    // callback here with number

    number = number.toLocaleString('sv-SE');

    if (number === '0') {
      number = '';
    }
    this.setState({ prognosLon: number });
  }

  handleRedovisadChange(e) {
    let number = Number(e.target.value.replace(/\D/g, ''));

    // callback here with number

    number = number.toLocaleString('sv-SE');

    if (number === '0') {
      number = '';
    }
    this.setState({ redovisadLon: number });
  }

  render() {
    return (
      <div className="Lon row">
        <div className="col-4 offset-2">
          <span>Prognosbelopp</span>
          <input
            type="text"
            value={this.state.prognosLon}
            onChange={this.handlePrognosChange}
          />
        </div>
        <div className="col-4">
          <span>Redovisad lön</span>
          <input
            type="text"
            value={this.state.redovisadLon}
            onChange={this.handleRedovisadChange}
          />
        </div>
      </div>
    );
  }
}

export default Lon;
