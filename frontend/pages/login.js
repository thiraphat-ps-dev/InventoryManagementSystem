import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSign, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
const fetch = require('node-fetch');
import { dispatchIncrement, dispatchDecrement, dispatchAuthentication } from '../redux/actions';
import Link from 'next/link';
import { headers, api, clientId, clientSecret } from './api';

class Login extends Component {
  componentDidMount() {
    // const url = 'http://localhost:8000/o/token/';

    const username = 'admin';
    const password = '1234';

    // let status;
    fetch(api.get_token, {
      method: 'POST',
      headers,
      body: `grant_type=password&username=${username}&password=${password}&client_id=${clientId}&client_secret=${clientSecret}`,
    })
      .then((res) =>
        // console.log(res.status);
        res.json()
      )
      .then((json) => {
        console.table(json);
        localStorage.setItem('access_token', json.access_token);
        this.props.handleBookLogin(json);
      });
    const persist_data = JSON.parse(localStorage.getItem('persist:root'));
    const countsdata = JSON.parse(persist_data.counts);
    console.log(countsdata.count);
  }

  render() {
    // console.log(api);
    // console.log(this.props)
    // console.log(this.props.countreducer);
    // console.table(this.props.userdata.data);v
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
              <Link href="/">
                <a className="forgot-button" href="#">
                  forgot password
                </a>
              </Link>
              <button
                className="signin-button"
                type="button"
                onClick={() => {
                  this.props.handleBookSubmit();
                }}
              >
                sign in <FontAwesomeIcon icon={faSignInAlt} />
              </button>
            </form>
          </div>
        </div>
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
  handleBookLogin: (data) => {
    dispatch(dispatchAuthentication(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
