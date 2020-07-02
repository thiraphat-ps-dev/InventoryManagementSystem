/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDesktop, faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';

class index extends Component {
  render() {
    const data = [12, 19, 3, 5, 2, 3];
    return (
      <Layout title="InventoryManagementSystem">
        <div className="dashboard-container">
          <div className="left-content">
            <div className="status-container">
              <div className="card">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="text">
                  <p className="text-header">Request</p>
                  <h2 className="text-number">105</h2>
                </div>
              </div>

              <div className="card">
                <div className="icon">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="text">
                  <p className="text-header">Avaliable</p>
                  <h2 className="text-number">105</h2>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <FontAwesomeIcon icon={faDesktop} />
                </div>
                <div className="text">
                  <p className="text-header">Items</p>
                  <h2 className="text-number">105</h2>
                </div>
              </div>
            </div>
            <div className="statistics-container">
              <div className="header">
                <h2>Statistics</h2>
                <div className="select-div">
                  <select name="" id="">
                    <option value="year" selected>
                      Year
                    </option>
                    <option value="mothn">Month</option>
                    <option value="day">Day</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <div className="bar" />
            </div>
          </div>
          <div className="right-content">
            <div className="conic-container">
              <div className="header">
                <h2>Items in stock</h2>
              </div>
              <div className="conic" />
              <div className="text-label">
                <label htmlFor="">
                  <div className="avaliable" />
                  <p>Avaliable</p>
                </label>

                <label htmlFor="">
                  <div className="notavaliable" />
                  <p>Not Avaliable</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  countreducer: state.counts,
  userdata: state.user,
});

export default connect(mapStateToProps, null)(index);
