import React, { Component } from 'react';
import Head from 'next/head';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Menuoverlay from './menuoverlay';

export default class Layout extends Component {
  componentDidMount() {
    console.log('mount');
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    const { children, title = 'This is the default title' } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Navbar />
        <Sidebar />
        <Menuoverlay />
        <div className="content-container active">{children}</div>
      </div>
    );
  }
}
