/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import PreloadImage from 'react-preload-image';
import { dispatchAuthentication, dispatchSetUserdata } from '../../redux/actions';
import { headers, api, clientId, clientSecret } from '../api';
const fetch = require('node-fetch');

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', error: '' };
  }
  componentWillMount() {
    console.log((document.documentElement.lang = 'en'));
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

        const resUser = await fetch(api.get_user, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${data.access_token}`,
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        const userData = await resUser.json();
        console.log(userData);
        this.props.handleSetUserdata(userData);
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
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />

          <link rel="manifest" href="/manifest.json" />
          <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
          <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
          <link rel="apple-touch-icon" href="/apple-icon.png" />
          <meta name="theme-color" content="#317EFB" />
        </Head>
        {/* <img className="top-bg" src="/images/Path 7.png" alt="" />*/}
        <PreloadImage className="top-bg" src="/images/top.png" lazy />
        <div className="login-container">
          <div className="login-banner">
            {/* <img className="bg-banner" src="/images/banner.png" alt="" /> */}
            <PreloadImage className="bg-banner" src="/images/banner.png" lazy />
          </div>
          <div className="form-container">
            <form
              className="login-form"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  this.login();
                }
              }}
            >
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
        <PreloadImage className="bottom-bg" src="/images/bottom.png" lazy />
        {/* <img className="bottom-bg" src="/images/Path 6.png" alt="" /> */}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  userdata: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (data) => {
    dispatch(dispatchAuthentication(data));
  },
  handleSetUserdata: (data) => {
    dispatch(dispatchSetUserdata(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
