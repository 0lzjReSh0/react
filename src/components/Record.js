import React, { Component } from "react";
import PropTypes from "prop-types"; // Importing PropTypes for typechecking the props passed to the component
import * as RecordsAPI from "../api/RecordsAPI"; // Importing the API file for handling the HTTP requests
import { TableCell, TableRow } from "grommet"; // Importing the grommet TableCell and TableRow components
import { Button } from "grommet"; // Importing the grommet Button component
import { Trash, Edit, Update } from "grommet-icons"; // Importing the grommet icons for delete and edit buttons
import { Cancel } from "@mui/icons-material"; // Importing the Cancel from @mui/icons-material
// Record component
export default class Record extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
    };
  }
  //switch control
  SwitchOver() {
    this.setState({
      edit: !this.state.edit,
    });
  }
  // Function to handle the deletion of a record
  DeleteRecords(event) {
    event.preventDefault();
    // Calling the remove method of the RecordsAPI with the record id
    RecordsAPI.remove(this.props.record.id).then(
      (response) => this.props.handleDeleteRecord(this.props.record)
      //passing the deleted record to the parent component's handleDeleteRecord method
    );
  }
  // Function to handle the editing of a record
  handleEdit(event) {
    event.preventDefault();
    const record = {
      date: this.refs.date.value, // Getting the value of the date input field
      title: this.refs.title.value, // Getting the value of the title input field
      amount: Number.parseInt(this.refs.amount.value, 0), // Getting the value of the amount input field and parsing it to an integer
    };
    // Calling the update method of the RecordsAPI with the record id and the updated record data
    RecordsAPI.update(this.props.record.id, record).then((response) => {
      // On success, passing the updated record and response data to the parent component's handleEditRecord method
      this.props.handleEditRecord(this.props.record, response.data);
    });
  }
  // Function to render the record in read-only mode
  recordRow() {
    return (
      <TableRow>
        <TableCell>{this.props.record.date}</TableCell>
        <TableCell>{this.props.record.title}</TableCell>
        <TableCell>{this.props.record.amount}</TableCell>
        <TableCell>
          <Button
            icon={<Edit />}
            plain={false}
            onClick={this.SwitchOver.bind(this)}
          />
          <Button
            icon={<Trash />}
            plain={false}
            onClick={this.DeleteRecords.bind(this)}
          />
        </TableCell>
      </TableRow>
    );
  }
  //Build the corresponding form
  recordForm() {
    return (
      <TableRow>
        <TableCell>
          <input
            type="text"
            className="form-control"
            defaultValue={this.props.record.date}
            ref="date"
          />
        </TableCell>
        <TableCell>
          <input
            type="text"
            className="form-control"
            defaultValue={this.props.record.title}
            ref="title"
          />
        </TableCell>
        <TableCell>
          <input
            type="text"
            className="form-control"
            defaultValue={this.props.record.amount}
            ref="amount"
          />
        </TableCell>
        <TableCell>
          <Button
            icon={<Update />}
            plain={false}
            onClick={this.handleEdit.bind(this)}
          />
          <Button
            icon={<Cancel />}
            plain={false}
            onClick={this.SwitchOver.bind(this)}
          />
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
  record: PropTypes.object,
};
