import React, { Component } from 'react';
import Record from './Record';
import * as RecordsAPI from '../api/RecordsAPI';
import RecordForm from './RecordForm';
import AmountBox  from './AmountBox';

class Records extends Component {
  state = {
    isLoaded: false,
    records: []
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
  componentDidMount() {
    RecordsAPI.getAll().then(
      response => this.setState({
        records: response.data,
        isLoaded: true
      }))

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
            if(item.id !== record.id) {
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
                const newRecords = this.state.records.filter((item) => item.id !== record.id);
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
                              handleEditRecord={this.updateRecord}
                              handleDeleteRecord={this.deleteRecord}
                            />)
                          )}
                        </tbody>
                      </table>
                    );
                  }
                  
                  return (
                    <div>
                      <h2>Records</h2>
                      <div className="row mb-3">
                          <AmountBox text="Income" type="success" amount={this.credits()}/>
                          <AmountBox text="Cost" type="danger" amount={this.debits()}/>
                          <AmountBox text="Balance" type="info" amount={this.balance()}/>
                      </div>
                      <RecordForm handleNewRecord={this.addRecord} />
                      {recordsComponent}
                    </div>
                  );
                  
                }
            }
            
            export default Records;
