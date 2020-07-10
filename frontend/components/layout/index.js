/* eslint-disable no-undef */
import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
import { api } from '../../pages/api';
import {
  dispatchIncrement,
  dispatchDecrement,
  dispatchAuthentication,
  dispatchSetUserdata,
} from '../../redux/actions';
import Navbar from './navbar';
import Sidebar from '../layout/sidebar';
import Menuoverlay from '../menu/menuoverlay';

class Layout extends Component {
  async componentDidMount() {
    const checkLogin = localStorage.getItem('access_token');
    if (checkLogin === 'undefined' || checkLogin === null) {
      Router.push({ pathname: '/login' });
    }
    const resUser = await fetch(api.get_user, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${checkLogin}`,
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const userData = await resUser.json();
    console.log(resUser.status, 'a');
    if (resUser.status === 200) {
      this.props.handleSetUserdata(userData[0]);
    } else {
      localStorage.clear();
      Router.push({ pathname: '/login' });
    }
  }

  render() {
    const checkLogin = localStorage.getItem('access_token');
    console.log(checkLogin);
    const { children, title = 'This is the default title' } = this.props;
    return (
      <div style={{ position: 'relative' }}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {checkLogin !== 'undefined' && checkLogin !== null ? (
          <div>
            <Navbar />
            <Sidebar />
            <Menuoverlay />

            <div className="content-container active">{children}</div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countreducer: state.counts,
  userdata: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleBookSubmit: () => {
    dispatch(dispatchIncrement());
  },
  handleBookDelete: () => {
    dispatch(dispatchDecrement());
  },
  handleLogin: (data) => {
    dispatch(dispatchAuthentication(data));
  },
  handleSetUserdata: (data) => {
    dispatch(dispatchSetUserdata(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
