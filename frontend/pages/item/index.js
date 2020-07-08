/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/layout';
import TableItemList from '../../components/table/tableitemList';
class Item extends Component {
  render() {
    return (
      <Layout title="ItemList">
        <div className="table-container">
          <TableItemList />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  countreducer: state.counts,
  userdata: state.user,
});

export default connect(mapStateToProps, null)(Item);
