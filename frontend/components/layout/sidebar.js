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
      sidebarShow ? content.classList.add('active') : content.classList.remove('active')
    );
  }

  render() {
    // const { toggle } = this.state;
    const menuActive = location.pathname;
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
          <div className="toggle-container">
            <button
              type="submit"
              onClick={async () => {
                await this.setState({ toggle: !this.state.toggle });
                localStorage.setItem('sidebarShow', JSON.stringify(this.state.toggle));
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
