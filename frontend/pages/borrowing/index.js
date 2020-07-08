/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';
import TableBorrowList from '../../components/table/tableBorrowList';

class Borrowing extends Component {
  render() {
    return (
      <Layout title="InventoryManagementSystem">
        <div className="table-container">
          <TableBorrowList />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  countreducer: state.counts,
  userdata: state.user,
});

export default connect(mapStateToProps, null)(Borrowing);
