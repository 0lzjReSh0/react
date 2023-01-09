import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as RecordsAPI from '../api/RecordsAPI';
import {
  Table,TableHeader,TableCell,TableBody,TableRow
 } from "grommet"
export default class Record extends Component {
  constructor() {
    super();
    this.state = {
      edit: false
    };
  }

  handleToggle() {
    this.setState({
      edit: !this.state.edit
    });
  }

  handleEdit(event) {
    event.preventDefault();
    const record = {
      date: this.refs.date.value,
      title: this.refs.title.value,
      amount: Number.parseInt(this.refs.amount.value, 0)
    }
    RecordsAPI.update(this.props.record.id, record).then(
      response => {
        this.props.handleEditRecord(this.props.record, response.data);
      }
    ).catch(
      error => console.log(error.message)
    )
  }

  handleDelete(event) {
    event.preventDefault();
    RecordsAPI.remove(this.props.record.id).then(
      response => this.props.handleDeleteRecord(this.props.record)
    ).catch(
      error => console.log(error.message)
    )
  }

  recordRow() {
    return (
      <TableRow>
        <TableCell>{this.props.record.date}</TableCell>
        <TableCell>{this.props.record.title}</TableCell>
        <TableCell>{this.props.record.amount}</TableCell>
        <TableCell>
          <button className="btn btn-info mr-1" onClick={this.handleToggle.bind(this)}>Edit</button>
          <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
        </TableCell>
      </TableRow>
    );
  }

  recordForm() {
    return (
      <TableRow>
        <TableCell><input type="text" className="form-control" defaultValue={this.props.record.date} ref="date" /></TableCell>
        <TableCell><input type="text" className="form-control" defaultValue={this.props.record.title} ref="title" /></TableCell>
        <TableCell><input type="text" className="form-control" defaultValue={this.props.record.amount} ref="amount" /></TableCell>
        <TableCell>
          <button className="btn btn-info mr-1" onClick={this.handleEdit.bind(this)}>Update</button>
          <button className="btn btn-danger" onClick={this.handleToggle.bind(this)}>Cancel</button>
        </TableCell>
      </TableRow>
    );
  }

  render() {
    if (this.state.edit) {
      return this.recordForm();
    } else {
      return this.recordRow();
    }
  }
}

Record.propTypes = {
  record: PropTypes.object
}