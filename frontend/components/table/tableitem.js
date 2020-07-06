/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { dispatchAuthentication } from '../../redux/actions';

class TableItem extends Component {
  constructor(props) {
    super(props);
    this.state = { menuShow: false };
  }

  render() {
    const itemlist = [
      {
        id: 1,
        name: 'macbook pro 11 inc',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 1,
        name: 'macbook pro 11 inc',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 1,
        name: 'macbook pro 11 inc',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 1,
        name: 'macbook pro 11 inc',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 1,
        name: 'macbook pro 11 inc',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 1,
        name: 'macbook pro 11 inc',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 1,
        name: 'macbook pro 11 inc',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 1,
        name: 'macbook pro 11 inc',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 1,
        name: 'macbook pro 11 inc',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 1,
        name: 'macbook pro 11 inc',
        image:
          'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
    ];
    return (
      <div id="itemList" className="table-item">
        <div className="header">
          <h2>Item List</h2>
        </div>
        <div className="table">
          <table>
            <thead>
              {_.map(_.take(itemlist, 1), (item, id) => {
                return (
                  <tr key={id}>
                    {_.map(item, (value, key) => {
                      return <th key={key}>{key}</th>;
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody>
              {_.map(itemlist.reverse(), (item, index) => {
                return (
                  <tr key={index}>
                    {_.map(item, (value, key) => {
                      return key === 'image' ? (
                        <td key={key}>
                          <img src={value} alt="" />
                        </td>
                      ) : (
                        <td key={key}>{value}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableItem);
