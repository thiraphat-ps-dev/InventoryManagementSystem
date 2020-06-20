import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSign, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
const fetch = require('node-fetch');

export default class Login extends Component {
  componentDidMount() {
    const url = 'http://localhost:8000/o/token/';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const clientId = 'l0wXC32f2KEjF5v7Rij2nwt5DDlwDbj7JwIoyOjR';
    const clientSecret = 'T63y0frxfRUIejajetgspci4EdCpvH5xrDaXRKQZT8E3r1RyqbWQniLWxdaA9g1rGYgTvMaSub3i9eF5S13fExuiafE3ydQC69bWmHCa2gC03m2JzoSbEEEPNs4QcZzN';
    fetch(url, {
      method: 'POST',
      headers,
      body: `grant_type=password&username=admin&password=1234&client_id=${clientId}&client_secret=${clientSecret}`,
    })
      .then((res) => res.json())
      .then((json) => {
        console.table(json);
        // Do something with the returned data.
      });
  }
  render() {
    return (
      <main className="login-page">
        <div className="login-container">
          <div className="login-banner">
            <h1 className="text">
              Inventory
              <br />
              Management
              <br />
              System
            </h1>
          </div>
          <div className="form-container">
            <form className="login-form">
              <div className="header">
                <p>Login</p>
                <FontAwesomeIcon icon={faSignInAlt} />
              </div>
              <div className="input">
                <label htmlFor="">Username</label>
                <input type="text" className="username" placeholder="username" />
              </div>

              <div className="input">
                <label htmlFor="">Password</label>
                <input type="password" className="password" placeholder="password" />
              </div>

              <label className="error-label" htmlFor="password">
                username or password is incorrect
              </label>
              <a className="forgot-button" href="#">
                forgot password
              </a>
              <button className="signin-button" type="button">
                sign in <FontAwesomeIcon icon={faSignInAlt} />
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
