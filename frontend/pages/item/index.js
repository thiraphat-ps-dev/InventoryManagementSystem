/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/layout';

class Item extends Component {


  render() {
    return (
      <Layout title="ItemList">
        <h1>this item page</h1>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  countreducer: state.counts,
  userdata: state.user,
});

export default connect(mapStateToProps, null)(Item);
