import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faImage,
  faLocationArrow,
  faReceipt,
  faHistory,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

export default class Menuoverlay extends Component {
  render() {
    return (
      <div className="menuoverlay-container">
        <div className="user-container">
          <img
            alt=""
            className="user-image"
            src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
          />
          <p className="user-username">Username</p>
          <p className="user-role">Admin</p>
          <p className="user-email">Email@mail.com</p>
        </div>
        <div className="btn-container">
          <button className="menu-item active">
            <FontAwesomeIcon icon={faHome} />
            <p>Home</p>
          </button>
          <button className="menu-item">
            <FontAwesomeIcon icon={faImage} />
            <p>Item</p>
          </button>
          <button className="menu-item">
            <FontAwesomeIcon icon={faLocationArrow} />
            <p>Location</p>
          </button>
          <button className="menu-item">
            <FontAwesomeIcon icon={faReceipt} />
            <p>Borrowing</p>
          </button>
          <button className="menu-item">
            <FontAwesomeIcon icon={faHistory} />
            <p>History</p>
          </button>
        </div>
        <div className="signout-container">
          <button
            type="button"
            className="btn-signout"
            onClick={() => {
              this.signout();
            }}
          >
            Sign out <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </div>
      </div>
    );
  }
}
