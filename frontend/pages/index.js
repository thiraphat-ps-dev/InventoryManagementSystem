/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDesktop, faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import Chart from 'react-apexcharts';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import Layout from '../components/layout';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories: [
            'Jan.',
            'Feb.',
            'Mar.',
            'Apr.',
            'May.',
            'Jun.',
            'Jul.',
            'Aug.',
            'Sep.',
            'Oct.',
            'Nov.',
            'Dec.',
          ],
        },
        theme: {
          palette: 'palette1',
        },
        stroke: {
          curve: 'stepline',
        },
        colors: ['#5957b9'],
      },
      series: [
        {
          name: 'Series 1',
          data: [45, 52, 38, 45, 19, 33, 45, 52, 38, 45, 19, 33],
        },
      ],
      seriesd: [45, 55],
      optionsd: {
        chart: {
          type: 'donut',
        },
        labels: ['Avaliable', 'Not Avaliable'],
        colors: ['#5cb85c', '#5957b9'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    };
  }
  render() {
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
              <Chart
                options={this.state.options}
                series={this.state.series}
                themes={this.state.theme}
                type="line"
                width="100%"
              />
            </div>
          </div>
          <div className="right-content">
            <div className="conic-container">
              <div className="header">
                <h2>Items in stock</h2>
              </div>
              <Chart
                options={this.state.optionsd}
                series={this.state.seriesd}
                type="donut"
                width="100%"
              />
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
