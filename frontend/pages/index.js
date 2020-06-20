import React, { Component } from 'react';

import { connect } from 'react-redux';

class index extends Component {
  render() {
    console.log(this.props.countreducer);
    console.table(this.props.userdata.data);
    return (
      <div>
        <h1>index</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countreducer: state.counts,
  userdata: state.user,
});

export default connect(mapStateToProps, null)(index);
