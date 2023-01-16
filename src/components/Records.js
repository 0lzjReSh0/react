import React, { Component } from "react"; // import React library and the Component class
import Record from "./Record"; // import the Record component
import * as RecordsAPI from "../api/RecordsAPI"; // import the RecordsAPI for interacting with the records data
import RecordForm from "./RecordForm"; // import the RecordForm component for adding/editing records
import AmountBox from "./AmountBox"; // import the AmountBox component for displaying total credits/debits/balance
import { Box, Spinner, Text, Sidebar, Button, Avatar, Nav } from "grommet"; // import various components from the grommet library for UI styling
import { Table, TableHeader, TableRow } from "grommet";
// import the Table, TableHeader, and TableRow components from grommet
import { Currency, SettingsOption, Logout } from "grommet-icons";
// Records component for displaying a list of records
class Records extends Component {
  // Initialize the state
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      records: [],
    };
  }
  // Fetch the records from the API when the component is mounted
  componentDidMount() {
    RecordsAPI.getAll().then((response) =>
      this.setState({
        records: response.data,
        isLoaded: true,
      })
    );
  }
  // Function to add a new record to the state
  addRecord = (record) => {
    this.setState({
      isLoaded: true,
      records: [...this.state.records, record],
    });
  };
  // Function to calculate the total amount of credits
  credits = () => {
    let credits = this.state.records.filter((record) => {
      return record.amount >= 0;
    });
    return credits.reduce((prev, curr) => {
      return prev + Number.parseInt(curr.amount, 0);
    }, 0);
  };
  // Function to update a record in the state
  updateRecord = (record, data) => {
    const newRecords = this.state.records.map((item) => {
      if (item.id !== record.id) {
        return item;
      }
      return {
        ...item,
        ...data,
      };
    });
    this.setState({
      records: newRecords,
    });
  };

  // Function to delete a record from the state
  deleteRecord = (record) => {
    const newRecords = this.state.records.filter(
      (item) => item.id !== record.id
    );
    this.setState({
      records: newRecords,
    });
  };
  // Function to calculate the balance (credits - debits)
  balance = () => {
    return this.credits() + this.debits();
  };
  // Function to calculate the total amount of debits
  debits = () => {
    let debits = this.state.records.filter((record) => {
      return record.amount < 0;
    });
    return debits.reduce((prev, curr) => {
      return prev + Number.parseInt(curr.amount, 0);
    }, 0);
  };

  render() {
    const { error, isLoaded, records } = this.state;
    console.log(records); // log the records to the console for debugging
    let recordsComponent;
    // Check if there is an error
    if (error) {
      recordsComponent = <div>Error: {error.message}</div>;
    }
    // Check if the records have been loaded from the API
    else if (!isLoaded) {
      // Display a loading spinner and text while the records are being fetched
      recordsComponent = (
        <Box align="center" direction="row" gap="small">
          <Spinner
            border={[
              { side: "all", color: "transparent", size: "medium" },
              { side: "horizontal", color: "brand", size: "medium" },
            ]}
          />
          <Text>Loading...</Text>
        </Box>
      );
    }
    // If there are no errors and the records have been loaded, display the records in a table
    else {
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
            {records.map((record) => (
              // Map through the records and render a Record component for each record, passing down the necessary props
              <Record
                key={record.id}
                record={record}
                handleEditRecord={this.updateRecord.bind(this)}
                handleDeleteRecord={this.deleteRecord.bind(this)}
              />
            ))}
          </tbody>
        </Table>
      );
    }
    // Return JSX to be rendered
    return (
      <Box>
        <Box direction="row-responsive" margin="small">
          <Box justify="start">
            <Sidebar
              background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
              round="small"
              width="150px"
              align="center"
              header={<Avatar src="" />}
              footer={<Button icon={<Logout />} hoverIndicator />}
            >
              <Nav gap="medium">
                <Button icon={<Currency />} hoverIndicator />
                <Button icon={<SettingsOption />} hoverIndicator />
              </Nav>
            </Sidebar>
          </Box>
          <Box justify="center" margin="large" align="center" width="850px">
            <Text> Date </Text>
          </Box>
          <Box
            round="small"
            animation="fadeIn"
            border
            elevation="small"
            width="400px"
            justify="end"
          >
            <AmountBox text="Balance" type="info" amount={this.balance()} />
            <Box
              round="small"
              animation="fadeIn"
              pad="small"
              direction="row-responsive"
              flex="grow"
              justify="center"
            >
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
