import React from 'react';
import Head from 'next/head';
import './../public/styles/main.scss';

export default function App({ Component, pageProps }) {
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

      <Component {...pageProps} />
    </div>
  );
}
