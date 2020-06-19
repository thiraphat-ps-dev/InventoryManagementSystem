import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSign, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export default class Login extends Component {
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
              <div className="header"><p>Login</p><FontAwesomeIcon icon={faSignInAlt} /></div>
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
            </form>
          </div>
        </div>
      </main>
    );
  }
}
