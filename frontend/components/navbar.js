import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';
import { dispatchAuthentication } from '../redux/actions';
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signout() {
    localStorage.clear();
    this.props.handleLogin('');
    Router.push({ pathname: '/login' });
  }

  render() {
    return (
      <nav className="nav-container">
        <div className="search-container">
          <input type="text" placeholder="Search" />
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
