/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDesktop, faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import Chart from 'react-apexcharts';
import _ from 'lodash';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import Layout from '../components/layout';
import TableItem from '../components/table/tableitem';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: 'year',
      optionsyear: {
        chart: {
          id: 'basic-bar',
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        },
        theme: {
          palette: 'palette1',
        },
        stroke: {
          curve: 'stepline',
        },
        colors: ['#5957b9'],
      },
      seriesyear: [
        {
          name: 'Series 1',
          data: [45, 52, 38, 45, 19, 33, 45],
        },
      ],
      optionsmonth: {
        chart: {
          id: 'basic-bar',
          toolbar: {
            show: false,
          },
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
      seriesmonth: [
        {
          name: 'Series 1',
          data: [45, 52, 38, 45, 19, 33, 45, 52, 38, 45, 19, 33],
        },
      ],

      optionsday: {
        chart: {
          id: 'basic-bar',
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: ['Mon.', 'Tue.', 'Wed.', 'Fri.', 'Sat.', 'Sun.'],
        },
        theme: {
          palette: 'palette1',
        },
        stroke: {
          curve: 'stepline',
        },
        colors: ['#5957b9'],
      },
      seriesday: [
        {
          name: 'Series 1',
          data: [33, 45, 52, 38, 45, 19, 33],
        },
      ],

      seriesd: [45, 55],
      optionsd: {
        chart: {
          type: 'donut',
          // height: '100%',
          // width: '100px',
        },
        legend: {
          position: 'top',
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
    const lastitemlist = [
      {
        id: 1,
        name: 'notebook i3',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 2,
        name: 'notebook i5 ram 14 cpu 12',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 3,
        name: 'notebook i7',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 4,
        name: 'notebook i9',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 5,
        name: 'notebook i10',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        status: 'Not Avaliable',
        created_at: '20/20/2020',
      },
    ];
    console.table(lastitemlist);

    return (
      <Layout title="InventoryManagementSystem">
        <div className="dashboard-container">
          <div className="-left">
            <div id='statusCard' className="status-container">
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
            <div id='statisticsBorrow' className="statistics-container">
              <div className="header">
                <h2>Borrowing statistics</h2>
                <div className="select-div">
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      this.setState({ select: e.target.value });
                    }}
                  >
                    <option value="year" defaultValue>
                      Year
                    </option>
                    <option value="month">Month</option>
                    <option value="day">Day</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <Chart
              
                options={
                  this.state.select === 'year'
                    ? this.state.optionsyear
                    : this.state.select === 'month'
                    ? this.state.optionsmonth
                    : this.state.optionsday
                }
                series={
                  this.state.select === 'year'
                    ? this.state.seriesyear
                    : this.state.select === 'month'
                    ? this.state.seriesmonth
                    : this.state.seriesday
                }
                themes={this.state.theme}
                type="line"
                width="100%"
              />
            </div>
            <TableItem  />
          </div>
          <div className="-right">
            <div id='avaliableItem' className="conic-container">
              <div className="header">
                <h2>Items in stock</h2>
              </div>
              <Chart
                options={this.state.optionsd}
                series={this.state.seriesd}
                type="donut"
                height="100%"
              />
            </div>
            <div id='lastAdd' className="last-itemlist">
              <div className="header">
                <h2>Last add</h2>
              </div>
              <ul className="item-list">
                {_.map(lastitemlist.reverse(), (item, i) => {
                  return (
                    <li key={i}>
                      <img src={item.image} alt="" />
                      <div className="text">
                        <p>Name : {item.name}</p>
                        <p>CreateDate : {item.created_at}</p>
                      </div>
                      <div
                        className={`status ${item.status === 'Avaliable' ? 'ready' : 'notready'}`}
                      >
                        {item.status}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div id='lastRequest' className="last-itemlist">
              <div className="header">
                <h2>Last request</h2>
              </div>
              <ul className="item-list">
                {_.map(lastitemlist.reverse(), (item, i) => {
                  return (
                    <li key={i}>
                      <img src={item.image} alt="" />
                      <div className="text">
                        <p>Name : {item.name}</p>
                        <p>CreateDate : {item.created_date}</p>
                      </div>
                      <div
                        className={`status ${item.status === 'Avaliable' ? 'ready' : 'notready'}`}
                      >
                        {item.status}
                      </div>
                    </li>
                  );
                })}
              </ul>
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
