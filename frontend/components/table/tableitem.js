/* eslint-disable no-nested-ternary */
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
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 2,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 3,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 4,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 5,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Not Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 6,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Not Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 7,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 8,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 9,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        created_at: '20/20/2020',
      },
      {
        id: 10,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
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
              {_.map(_.take(itemlist, 1), (item, id) => (
                <tr key={id}>
                  {_.map(item, (value, key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {_.map(itemlist.reverse(), (item, index) => (
                <tr key={index}>
                  {_.map(item, (value, key) =>
                    (key === 'image' ? (
                      <td key={key}>
                        <img src={value} alt="" />
                      </td>
                    ) : key === 'status' ? (
                      <td key={key}>
                        <div
                          className={`status ${
                            value === 'Avaliable' ? 'ready' : 'notready'
                          }`}
                        >
                          {value}
                        </div>
                      </td>
                    ) : (
                      <td key={key}>{value}</td>
                    ))
                  )}
                </tr>
              ))}
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
