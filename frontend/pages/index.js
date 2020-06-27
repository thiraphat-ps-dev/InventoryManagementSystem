/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Layout from '../components/layout';

class index extends Component {
  componentDidMount() {
    console.log(localStorage.getItem('access_token'));
    const checkLogin = localStorage.getItem('access_token');
    if (checkLogin === 'undefined' || checkLogin === null) {
      Router.push({ pathname: '/login' });
    }
  }

  render() {
    console.log(this.props.countreducer);
    console.table(this.props.userdata.data);
    return (
      <div>
        <Layout title='InventoryManagementSystem'>
          <h1>index</h1>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countreducer: state.counts,
  userdata: state.user,
});

export default connect(mapStateToProps, null)(index);
