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
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import { dispatchAuthentication } from '../../redux/actions';

class TableItemList extends Component {
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
        created_at: '20/20/2020',
        updated_at: '20/20/2020',
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
        updated_at: '20/20/2020',
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
        updated_at: '20/20/2020',
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
        updated_at: '20/20/2020',
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
        updated_at: '20/20/2020',
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
        updated_at: '20/20/2020',
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
        updated_at: '20/20/2020',
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
        updated_at: '20/20/2020',
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
        updated_at: '20/20/2020',
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
        updated_at: '20/20/2020',
      },
    ];
    return (
      <div id="itemList" className="table-item">
        <div className="header">
          <h2>Item List</h2>
          <button
            className="btn-additem"
            onClick={() => this.setState({ show: true })}
          >
            Add Item <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className="table">
          <table>
            <thead>
              {_.map(_.take(data, 1), (item, id) => (
                <tr key={id}>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Location</th>
                  <th>Serial</th>
                  <th>Status</th>
                  <th>created_at</th>
                  <th>updated_at</th>
                  <th>Edit</th>
                  <th>Delete</th>
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
                  <td>{item.created_at}</td>
                  <td>{item.updated_at}</td>
                  <td width={40}>
                    {' '}
                    <FontAwesomeIcon icon={faEdit} />
                  </td>

                  <td width={40}>
                    {' '}
                    <FontAwesomeIcon icon={faTrash} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TableItemList);
