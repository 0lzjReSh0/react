import React, { Component } from 'react';
import Record from './Record';
import * as RecordsAPI from '../api/RecordsAPI';
import RecordForm from './RecordForm';
import AmountBox from './AmountBox';
import { Box, Spinner, Text, Sidebar, Button, Avatar, Nav } from 'grommet';
import {
  Table, TableHeader, TableRow
} from "grommet"

import { Currency, SettingsOption, Logout } from 'grommet-icons';
class Records extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      records: []
    }
  }

  componentDidMount() {
    RecordsAPI.getAll().then(
      response => this.setState({
        records: response.data,
        isLoaded: true
      }))

  }
  addRecord = (record) => {
    this.setState({
      isLoaded: true,
      records: [
        ...this.state.records,
        record
      ]
    })
  }
  credits = () => {
    let credits = this.state.records.filter((record) => {
      return record.amount >= 0;
    })
    return credits.reduce((prev, curr) => {
      return prev + Number.parseInt(curr.amount, 0)
    }, 0);
  }
  updateRecord = (record, data) => {
    const newRecords = this.state.records.map((
      item) => {
      if (item.id !== record.id) {
        return item;
      }
      return {
        ...item,
        ...data
      };
    });
    this.setState({
      records: newRecords
    });
  }


  deleteRecord = (record) => {
    const newRecords =
      this.state.records.filter((item) =>
        item.id !== record.id);
    this.setState({
      records: newRecords
    });
  }

  balance = () => {
    return this.credits() + this.debits();
  }

  debits = () => {
    let debits = this.state.records.filter((record) => {

      return record.amount < 0;

    });
    return debits.reduce((prev, curr) => {

      return prev + Number.parseInt(curr.amount, 0)

    }, 0);
  }



  render() {
    const { error, isLoaded, records } = this.state;
    console.log(records);
    let recordsComponent;

    if (error) {
      recordsComponent = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      recordsComponent = <Box align="center" direction="row" gap="small">
        <Spinner
          border={[
            { side: 'all', color: 'transparent', size: 'medium' },
            { side: 'horizontal', color: 'brand', size: 'medium' },
          ]}
        />
        <Text>Loading...</Text>
      </Box>;
    } else {
      recordsComponent = (
        <Table className="table table-bordered">
          <TableHeader>
            <TableRow>
              <th>Dates</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Actions</th>
            </TableRow>

          </TableHeader>
          <tbody>
            {records.map((record) =>
            (<Record
              key={record.id}
              record={record}
              handleEditRecord={this.updateRecord.bind(this)}
              handleDeleteRecord={this.deleteRecord.bind(this)}
            />)
            )}
          </tbody>
        </Table>
      );
    }

    return (
      <Box>
        <Box direction='row-responsive' margin='small'>
          <Box justify='start'>
            <Sidebar background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)" round="small" width='150px' align='center'
              header={
                <Avatar src="" />
              }
              footer={
                <Button icon={<Logout />} hoverIndicator />
              }
            >
              <Nav gap="medium">
                <Button icon={<Currency />} hoverIndicator />
                <Button icon={<SettingsOption />} hoverIndicator />
              </Nav>
            </Sidebar>
          </Box>
          <Box justify="center" margin='large' align='center' width='850px'>
            <Text> Date </Text>
          </Box>
          <Box round="small" animation="fadeIn" border elevation='small' width='400px' justify='end'>
            <AmountBox text="Balance" type="info" amount={this.balance()} />
            <Box round="small" animation="fadeIn" pad='small' direction='row-responsive' flex='grow' justify='center'>
              <AmountBox text="Income" type="success" amount={this.credits()} />
              <AmountBox text="Cost" type="danger" amount={this.debits()} />
            </Box>
          </Box>
        </Box>
        <RecordForm handleNewRecord={this.addRecord.bind(this)} />
      </Box>
    );
  }




}

export default Records;