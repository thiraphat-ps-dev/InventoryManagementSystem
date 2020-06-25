/* eslint-disable no-undef */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSign, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
const fetch = require('node-fetch');
import { dispatchIncrement, dispatchDecrement, dispatchAuthentication } from '../redux/actions';
import Link from 'next/link';
import { headers, api, clientId, clientSecret } from './api';
import Router from 'next/router';

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
        this.setState({ error: '' });
        this.props.handleLogin(data);
        Router.push({ pathname: '/' });
      } else {
        this.setState({ error: 'Username or password is correct' });
      }
    } else {
      this.setState({ error: 'Please input username or password' });
    }
  };

  render() {
    const { username, password, error } = this.state;
    return (
      <main className="login-page">
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
                  onClick={() => {
                    this.login();
                    // this.props.handleBookSubmit();
                  }}
                >
                  Sign In <FontAwesomeIcon icon={faSignInAlt} />
                </button>
                <Link href="/">
                  <a className="forgot-button" href="#">
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

// componentDidMount() {

//   fetch(api.get_token, {
//     method: 'POST',
//     headers,
//     body: `grant_type=password&username=${username}&password=${password}&client_id=${clientId}&client_secret=${clientSecret}`,
//   })
//     .then((res) =>
//       res.json()
//     )
//     .then((json) => {
//       console.table(json);
//       localStorage.setItem('access_token', json.access_token);
//       this.props.handleBookLogin(json);
//     });
//   const persistData = JSON.parse(localStorage.getItem('persist:root'));
//   const countsdata = JSON.parse(persistData.counts);
//   console.log(countsdata.count);
// }
