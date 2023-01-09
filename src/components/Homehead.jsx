import AmountBox  from './AmountBox';
import React, { Component } from 'react';
import * as RecordsAPI from '../api/RecordsAPI';
import Record from './Record';
class Homehead extends Component {
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
        })
      ).catch(
        error => this.setState({
          isLoaded: true,
          error
        })
      )
    }
  
    addRecord(record) {
      this.setState({
        error: null,
        isLoaded: true,
        records: [
          ...this.state.records,
          record
        ]
      })
    }
  
    updateRecord(record, data) {
      const recordIndex = this.state.records.indexOf(record);
      const newRecords = this.state.records.map( (item, index) => {
        if(index !== recordIndex) {
          // This isn't the item we care about - keep it as-is
          return item;
        }
  
        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...data
        };
      });
      this.setState({
        records: newRecords
      });
    }
  
    deleteRecord(record) {
      const recordIndex = this.state.records.indexOf(record);
      const newRecords = this.state.records.filter( (item, index) => index !== recordIndex);
      this.setState({
        records: newRecords
      });
    }
    credits(){
      let credits=this.state.records.filter((record)=>{
          return record.amount>=0;
      })
      return credits.reduce((prev,curr)=>{
          return prev +Number.parseInt(curr.amount,0)
      },0
      )
    }
    debits(){
      let credits=this.state.records.filter((record)=>{
          return record.amount<0;
      })
      return credits.reduce((prev,curr)=>{
          return prev +Number.parseInt(curr.amount,0)
      },0
      )
    }
    balance(){
      return this.credits()+this.debits();
    }
    render() {
      const { error, isLoaded, records } = this.state;
      let recordsComponent;
  
      if (error) {
        recordsComponent = <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        recordsComponent = <div>Loading...</div>;
      } else {
        recordsComponent = (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
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
          </table>
        );
      }
  
      return (
        <div>
          <div className="row mb-3">
              <AmountBox text="Income" type="success" amount={this.credits()}/>
              <AmountBox text="Cost" type="danger" amount={this.debits()}/>
              <AmountBox text="Balance" type="info" amount={this.balance()}/>
          </div>
          {recordsComponent}
        </div>
      );
    }
  }

export default Homehead;