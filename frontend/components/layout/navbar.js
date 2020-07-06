/* eslint-disable no-undef */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignOutAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';
import { connect } from 'react-redux';
import { dispatchAuthentication } from '../../redux/actions';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { menuShow: false };
  }

  signout() {
    localStorage.clear();
    this.props.handleLogin('');
    Router.push({ pathname: '/login' });
  }

  render() {
    return (
      <nav className="nav-container">
        <h1 className="text-header">InventoryManagementSystem</h1>
        <div className="search-container">
          <input type="text" placeholder="Search Item" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <button
          type="button"
          className="btn-signout"
          onClick={() => {
            this.signout();
          }}
        >
          Sign out <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
        <button
          type="button"
          className="btn-menu"
          onClick={() => {
            this.setState({ menuShow: !this.state.menuShow });
            const menu = document.querySelector('.menuoverlay-container');
            console.log(
              'setContentPadLeft',
              !this.state.menuShow ? menu.classList.add('active') : menu.classList.remove('active')
            );
          }}
        >
          {this.state.menuShow ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  countreducer: state.counts,
  userdata: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (data) => {
    dispatch(dispatchAuthentication(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
