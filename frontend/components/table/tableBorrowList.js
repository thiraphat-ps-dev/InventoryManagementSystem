/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrash,
  faPlus,
  faStepBackward,
  faStepForward,
  faCaretLeft,
  faCaretRight,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import { dispatchAuthentication } from '../../redux/actions';

class TableBorrowList extends Component {
  constructor(props) {
    super(props);
    this.state = { menuShow: false };
  }

  render() {
    const data = [
      {
        id: 1,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        updated_at: '20/20/2020',
        quantity: 1,
        request_by: 'admin',
      },
      {
        id: 2,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        updated_at: '20/20/2020',
        quantity: 1,
        request_by: 'admin',
      },
      {
        id: 3,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        updated_at: '20/20/2020',
        quantity: 1,
        request_by: 'admin',
      },
      {
        id: 4,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        updated_at: '20/20/2020',
        quantity: 1,
        request_by: 'admin',
      },
      {
        id: 5,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Not Avaliable',
        updated_at: '20/20/2020',
        quantity: 1,
        request_by: 'admin',
      },
      {
        id: 6,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Not Avaliable',
        updated_at: '20/20/2020',
        quantity: 1,
        request_by: 'admin',
      },
      {
        id: 7,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        updated_at: '20/20/2020',
        quantity: 1,
        request_by: 'admin',
      },
      {
        id: 8,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        updated_at: '20/20/2020',
        quantity: 1,
        request_by: 'admin',
      },
      {
        id: 9,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        updated_at: '20/20/2020',
        quantity: 1,
        request_by: 'admin',
      },
      {
        id: 10,
        name: 'macbook pro 11 inc',
        image:
          'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/4/249790_1.jpg',
        location: 'One Building',
        serial: '0001',
        status: 'Avaliable',
        updated_at: '20/20/2020',
        quantity: 1,
        request_by: 'admin',
      },
    ];
    return (
      <div id="itemList" className="table-item">
        <div className="header">
          <h2>Borrowing List</h2>
        </div>
        <div className="table">
          <table>
            <thead>
              {_.map(_.take(data, 1), (item, id) => (
                <tr key={id}>
                  {_.map(item, (value, key) => (
                    <th key={key}>{key}</th>
                  ))}
                  <th>Approve</th>
                  <th>Reject</th>
                </tr>
              ))}
            </thead>
            <tbody>
              {_.map(data.reverse(), (item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    {' '}
                    <img src={item.image} alt="" />
                  </td>
                  <td>{item.location}</td>
                  <td>{item.serial}</td>
                  <td>
                    {' '}
                    <div
                      className={`status ${
                        item.status === 'Avaliable' ? 'ready' : 'notready'
                      }`}
                    >
                      {item.status}
                    </div>
                  </td>
                  <td>{item.updated_at}</td>
                  <td>{item.quantity}</td>
                  <td>{item.request_by}</td>
                  <td width={40}>
                    {' '}
                    <FontAwesomeIcon icon={faCheck} />
                  </td>

                  <td width={40}>
                    {' '}
                    <FontAwesomeIcon icon={faTimes} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <div className="rowperpage">
            <p>Rows per page :</p>
            <select name="" id="">
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="shownow">
            <p>1-10 of 146</p>
          </div>

          <div className="paginationbar">
            <FontAwesomeIcon icon={faStepBackward} />
            <FontAwesomeIcon icon={faCaretLeft} />
            <a href="#" className="active">
              1
            </a>
            <a>2</a>
            <a>3</a>
            <a>4</a>
            <a>5</a>
            <FontAwesomeIcon icon={faCaretRight} />
            <FontAwesomeIcon icon={faStepForward} />
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableBorrowList);
