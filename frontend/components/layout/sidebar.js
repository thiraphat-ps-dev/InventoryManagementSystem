/* eslint-disable no-undef */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faImage,
  faLocationArrow,
  faReceipt,
  faHistory,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Link from 'next/link';
import _ from 'lodash';
import { dispatchAuthentication } from '../../redux/actions';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }
  componentDidMount() {
    const sidebarShow = JSON.parse(localStorage.getItem('sidebarShow'));
    this.setState({ toggle: sidebarShow });
    const content = document.querySelector('.content-container');
    console.log(
      'setContentPadLeft',
      sidebarShow
        ? content.classList.add('active')
        : content.classList.remove('active')
    );
  }

  render() {
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
    const menuActive = location.pathname;
    const user = this.props.userdata.userData;
    console.log(user);
    return (
      <aside className="sidebar-container">
        <div className="brand-container">
          <h1>InventoryManagementSystem</h1>
        </div>
        <nav className={`menu-container ${this.state.toggle ? 'active' : ''}`}>
          <div className="user-container">
            <img
              alt=""
              className="user-image"
              src={
                user
                  ? user.image
                  : 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg'
              }
            />

            <p className="user-username">{user ? user.name : null}</p>
            <p className="user-role">{user ? user.jobposition : null}</p>
            <p className="user-email">{user ? user.email : null}</p>
          </div>
          <div className="btn-container">
            {_.map(menuList, (item, i) => (
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
            ))}
          </div>
          <div className="toggle-container">
            <button
              type="submit"
              onClick={async () => {
                await this.setState({ toggle: !this.state.toggle });
                localStorage.setItem(
                  'sidebarShow',
                  JSON.stringify(this.state.toggle)
                );
                const content = document.querySelector('.content-container');
                console.log(
                  this.state.toggle
                    ? content.classList.add('active')
                    : content.classList.remove('active')
                );
              }}
            >
              {this.state.toggle ? (
                <FontAwesomeIcon icon={faChevronLeft} />
              ) : (
                <FontAwesomeIcon icon={faChevronRight} />
              )}
            </button>
          </div>
        </nav>
      </aside>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
