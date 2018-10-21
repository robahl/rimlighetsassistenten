import React, { Component } from 'react';
import './DatePeriod.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import 'moment/locale/sv';

class DatePeriod extends Component {
  constructor() {
    super();

    this.fromDateChange = this.fromDateChange.bind(this);
    this.toDateChange = this.toDateChange.bind(this);

    this.state = {
      fromDate: null,
      toDate: null
    };
  }

  fromDateChange(date) {
    this.setState({ fromDate: date }, () =>
      this.props.onChange(this.daysInBetween / date.daysInMonth())
    );
  }

  toDateChange(date) {
    this.setState({ toDate: date }, () =>
      this.props.onChange(this.daysInBetween / date.daysInMonth())
    );
  }

  get daysInBetween() {
    if (this.state.fromDate && this.state.toDate) {
      return this.state.toDate.diff(this.state.fromDate, 'days') + 1;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="DatePeriod row">
        <div className="col input-group mb-3 datepicker">
          <DatePicker
            className="form-control"
            selected={this.state.fromDate}
            onChange={this.fromDateChange}
            placeholderText="Från"
            dateFormat="YYMMDD"
            maxDate={moment()}
            locale="sv-se"
          />
        </div>
        <div className="col input-group mb-3 datepicker">
          <DatePicker
            className="form-control"
            selected={this.state.toDate}
            onChange={this.toDateChange}
            placeholderText="Till"
            dateFormat="YYMMDD"
            maxDate={
              (this.state.fromDate &&
                moment(this.state.fromDate).endOf('month')) ||
              moment()
            }
            minDate={this.state.fromDate}
            locale="sv-se"
          />
        </div>
      </div>
    );
  }
}

export default DatePeriod;
