import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as RecordsAPI from '../api/RecordsAPI';

class Record extends Component {
  state = {
    edit: false,
    record: this.props.record
  };

  handleToggle = () => {
    this.setState({
      edit: !this.state.edit
    });
  }

  handleDelete = (event) => {
    event.preventDefault();
    RecordsAPI.remove(this.state.record.id).then(
      response => this.props.handleDeleteRecord(this.state.record)
    )
  }
  handleEdit = (event) => {
    event.preventDefault();
    RecordsAPI.update(this.state.record.id, this.state.record).then(
      response => {
        this.props.handleEditRecord(this.state.record, response.data);
      }
    )
  }

  handleChange = (event) => {
    let record = this.state.record
    record[event.target.name] = event.target.value
    this.setState({record})
  }

  recordRow() {
    return (
      <tr>
        <td>{this.state.record.date}</td>
        <td>{this.state.record.title}</td>
        <td>{this.state.record.amount}</td>
        <td>
          <button className="btn btn-info mr-1" onClick={this.handleToggle}>Edit</button>
          <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
        </td>
      </tr>
    );
  }


  recordForm() {
    return (
      <tr>
        <td><input type="text" className="form-control" name="date" value={this.state.record.date} onChange={this.handleChange}/></td>
        <td><input type="text" className="form-control" name="title" value={this.state.record.title} onChange={this.handleChange}/></td>
        <td><input type="text" className="form-control" name="amount" value={this.state.record.amount} onChange={this.handleChange}/></td>
        <td>
          <button className="btn btn-info mr-1" onClick={this.handleEdit}>Update</button>
          <button className="btn btn-danger" onClick={this.handleToggle}>Cancel</button>
        </td>
      </tr>
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
  
  export default Record;
