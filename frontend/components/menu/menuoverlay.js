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
    const menuList = [
      {
        idButton: 'menuHome',
        path: '/',
        icon: faHome,
        text: 'Home',
      },
      {
        idButton: 'menuItem',
        path: '/item',
        icon: faImage,
        text: 'Item',
      },
      {
        idButton: 'menuLocation',
        path: '/location',
        icon: faLocationArrow,
        text: 'Location',
      },
      {
        idButton: 'menuBorrowing',
        path: '/borrowing',
        icon: faReceipt,
        text: 'Borrowing',
      },
      {
        idButton: 'menuHistory',
        path: '/history',
        icon: faHistory,
        text: 'History',
      },
    ];
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
          {_.map(menuList, (item, i) => {
            return (
              <Link key={i} href={item.path}>
                <button
                  id={item.idButton}
                  className={`menu-item ${
                    menuActive === item.path ? 'active' : ''
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <p>{item.text}</p>
                </button>
              </Link>
            );
          })}
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
