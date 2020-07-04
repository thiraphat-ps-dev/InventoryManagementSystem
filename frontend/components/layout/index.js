import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Navbar from './navbar';
import Sidebar from '../layout/sidebar';
import Menuoverlay from '../menu/menuoverlay';

export default class Layout extends Component {
  componentWillMount() {
    const checkLogin = localStorage.getItem('access_token');
    if (checkLogin === 'undefined' || checkLogin === null) {
      Router.push({ pathname: '/login' });
    }
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    const checkLogin = localStorage.getItem('access_token');
    console.log(checkLogin);
    const { children, title = 'This is the default title' } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
