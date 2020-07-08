/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/layout';
import TableHistoryList from '../../components/table/tableHistoryList';

class History extends Component {
  render() {
    return (
      <Layout title="InventoryManagementSystem">
        <div className="table-container">
          <TableHistoryList />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  countreducer: state.counts,
  userdata: state.user,
});

export default connect(mapStateToProps, null)(History);
