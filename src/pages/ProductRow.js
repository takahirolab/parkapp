import React, { Component } from 'react'

import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router';
import Pic1 from '../images/pic1.png'

import {  Link } from 'react-router-dom';
// import PropTypes from 'prop-types';.active

import Park from '../components/park/Park';

// import ScreamSkeleton from '../util/ScreamSkeleton';
// import ProfileSkeleton from '../util/ProfileSkeleton'


import {connect} from 'react-redux';
import {getParks} from '../redux/actions/dataActions';




import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';

import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import ScreamSkeleton from '../util/ScreamSkeleton';



export class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OtherParks:'fdsfff'
    }
    this.OtherParks = this.OtherParks.bind(this)
}

  OtherParks() {
    this.setState({
      OtherParks:this.props.park.parkId
    })
    this.props.history.push(`/park/dxPZqM9BMQnwxInJ1iaVv`)
    console.log(this.state.OtherParks)
  }

  render() {
    return (
      <>
        <div onClick={this.OtherParks} className="FindParksResult-item">

        <img className="FindParksResult-item-img" src={this.props.park.parkImage}/>

        <div className="FindParksResult-item-detil">
          <h2 className="parksResult-item-name">{this.props.park.parkName}</h2>
        </div>

        </div >
        </>
    );
  }

}
export default (withRouter(ProductRow));
