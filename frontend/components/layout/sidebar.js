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
    const { toggle } = this.state;
    return (
      <aside className="sidebar-container">
        <div className="brand-container">
          <h1>InventoryManagementSystem</h1>
        </div>
        <nav className={`menu-container ${toggle ? 'active' : ''}`}>
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
