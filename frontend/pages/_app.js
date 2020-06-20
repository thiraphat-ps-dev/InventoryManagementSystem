import App, { Container } from 'next/app';
import React from 'react';
import Head from 'next/head';
import './../public/styles/main.scss';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../redux/persist';
const { store, persistor } = configureStore();

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <div>
        <Head>
          <title>InventoryManagementSystem</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
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
