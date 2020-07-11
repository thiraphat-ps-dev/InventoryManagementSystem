import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../redux/persist';
import withReduxStore from '../lib/with-redux-store';
import './../public/styles/main.scss';

const { persistor } = configureStore();

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <div>
        <Head>
          <title>InventoryManagementSystem</title>
          {/* <script src="js/smoothscroll.min.js" /> */}
        </Head>
        <Provider store={reduxStore}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default withReduxStore(MyApp);
