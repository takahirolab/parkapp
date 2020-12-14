import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteScream } from '../../redux/actions/dataActions'


class DeletePark extends Component {
  constructor(props) {
    super(props)
    this.deletePark = this.deletePark.bind(this)
  }
    deletePark() {
    this.props.deleteScream(this.props.parkId);
    }


    render() {
    return (
        <h2 onClick={this.deletePark} >削除する</h2>
    )
  }
}

export default connect(null,{deleteScream})(DeletePark);
