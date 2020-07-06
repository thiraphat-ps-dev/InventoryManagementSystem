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
import Link from 'next/link';
export default class Menuoverlay extends Component {
  render() {
    const menuActive = location.pathname;
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
          <Link href="/">
            <button className={`menu-item ${menuActive === '/' ? 'active' : ''}`}>
              <FontAwesomeIcon icon={faHome} />
              <p>Home</p>
            </button>
          </Link>
          <Link href="/item">
            <button className={`menu-item ${menuActive === '/item' ? 'active' : ''}`}>
              <FontAwesomeIcon icon={faImage} />
              <p>Item</p>
            </button>
          </Link>
          <Link href="/location">
            <button className={`menu-item ${menuActive === '/location' ? 'active' : ''}`}>
              <FontAwesomeIcon icon={faLocationArrow} />
              <p>Location</p>
            </button>
          </Link>
          <Link href="/borrowing">
            <button className={`menu-item ${menuActive === '/borrowing' ? 'active' : ''}`}>
              <FontAwesomeIcon icon={faReceipt} />
              <p>Borrowing</p>
            </button>
          </Link>
          <Link href="/history">
            <button className={`menu-item ${menuActive === '/history' ? 'active' : ''}`}>
              <FontAwesomeIcon icon={faHistory} />
              <p>History</p>
            </button>
          </Link>
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
