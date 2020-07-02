/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Dashboard from '../components/dashboard';

class index extends Component {
  render() {
    return (
      <Layout title="InventoryManagementSystem">
        <Dashboard />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  countreducer: state.counts,
  userdata: state.user,
});

export default connect(mapStateToProps, null)(index);
