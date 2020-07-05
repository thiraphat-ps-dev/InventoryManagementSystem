/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import { dispatchIncrement, dispatchDecrement, dispatchAuthentication } from '../redux/actions';
import { headers, api, clientId, clientSecret } from './api';

const fetch = require('node-fetch');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', error: '' };
  }

  login = async () => {
    const { username, password } = this.state;
    if (username !== '' && password !== '') {
      const res = await fetch(api.get_token, {
        method: 'POST',
        headers,
        body: `grant_type=password&username=${username}&password=${password}&client_id=${clientId}&client_secret=${clientSecret}`,
      });
      const data = await res.json();
      if (res.status === 200) {
        console.table(data);
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('sidebarShow', JSON.stringify(true));
        this.setState({ error: '' });
        this.props.handleLogin(data);
        Router.push({ pathname: '/' });
      } else {
        this.setState({ error: 'Username or password is incorrect' });
      }
    } else {
      this.setState({ error: 'Please input username or password' });
    }
  };

  render() {
    const { username, password, error } = this.state;
    return (
      <main className="login-page">
        <Head>
          <title>Login Page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <img className="bg-top" src="/images/Path 7.png" alt="" />
        <div className="login-container">
          <div className="login-banner">
            <img className="bg-banner" src="/images/64644 (1).png" alt="" />
          </div>
          <div className="form-container">
            <form className="login-form">
              <div className="header">
                <p>Login</p>
              </div>
              <div className="input">
                <input
                  id="inputUsername"
                  type="text"
                  className="username"
                  placeholder="username"
                  value={username}
                  onChange={(e) => {
                    this.setState({ username: e.target.value });
                  }}
                />
              </div>

              <div className="input">
                <input
                  id="inputPassword"
                  type="password"
                  className="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>

              <div className="btn-block">
                <button
                  className="signin-button"
                  type="button"
                  id="btn-signin"
                  onClick={() => {
                    this.login();
                    // this.props.handleBookSubmit();
                  }}
                >
                  Sign In <FontAwesomeIcon icon={faSignInAlt} />
                </button>
                <Link href="/">
                  <a className="forgot-button" href="www.google.com">
                    forgot password
                  </a>
                </Link>
              </div>
              {error !== '' ? (
                <label className="error-label" htmlFor="password">
                  {error}
                </label>
              ) : null}
            </form>
          </div>
        </div>
        <img className="bg-bottom" src="/images/Path 6.png" alt="" />
      </main>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
