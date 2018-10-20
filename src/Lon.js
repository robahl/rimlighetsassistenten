import React, { Component } from 'react';
import './Lon.scss';

class Lon extends Component {
  constructor() {
    super();

    this.handlePrognosChange = this.handlePrognosChange.bind(this);
    this.handleRedovisadChange = this.handleRedovisadChange.bind(this);

    this.state = {
      prognosLon: null,
      redovisadLon: null
    };
  }

  handlePrognosChange(e) {}

  handleRedovisadChange(e) {}

  render() {
    return (
      <div className="Lon row">
        <div className="col-4 offset-2">
          <span>Prognosbelopp</span>
          <input
            type="number"
            value={this.state.prognosLon}
            onChange={this.handlePrognosChange}
          />
        </div>
        <div className="col-4">
          <span>Redovisad lön</span>
          <input
            type="number"
            value={this.state.redovisadLon}
            onChange={this.handleRedovisadChange}
          />
        </div>
      </div>
    );
  }
}

export default Lon;
