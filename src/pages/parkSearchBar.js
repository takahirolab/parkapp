import React, { Component } from 'react'

import '../App.css';
import Pic1 from '../images/pic1.png'
import Pic2 from '../images/pic2.png'
import Pic3 from '../images/pic3.png'
import Pic4 from '../images/pic4.png'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Park from '../components/park/Park';

// import ScreamSkeleton from '../util/ScreamSkeleton';
// import ProfileSkeleton from '../util/ProfileSkeleton'


import {connect} from 'react-redux';
import {getParks} from '../redux/actions/dataActions';
import parkList_view from './parkList_view';


import  Navbar  from '../layout/Navbar'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import QueryBuilderRoundedIcon from '@material-ui/icons/QueryBuilderRounded';
import ParkFindItems from '../components/park/ParkFindItems';
import LikeButton from '../components/park/LikeButton'
import Bookmark from '@material-ui/icons/BookmarkRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AutorenewRoundedIcon from '@material-ui/icons/AutorenewRounded';

import ScreamSkeleton from '../util/ScreamSkeleton';
import { NaturePeopleOutlined } from '@material-ui/icons';
import LazyLoad from 'react-lazyload'




export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {value: "すべて"};
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  // }

  render() {
    return (
    <div className="serch-items">

        <div className="serch-bar-location">
            <LocationOnRoundedIcon style={{ fontSize: 25 ,opacity:0.7}}/>
            <select value={this.props.cityName} onChange={this.handleFilterTextChange} placeholder="Search..." className="search_select">
                <option value="すべて" className="Search-bar-select">すべて</option>
                <option value="東京都">東京</option>
                <option value="大阪">大阪</option>
                <option value="神奈川">神奈川</option>
            </select>
         </div>

            <ul className="Search-category">
              <li className="Search-category-item" value="家族" onClick={this.handleFilterTextChange} >家族</li>
              <li className="Search-category-item" value="東京都">ピクニック</li>
              <li className="Search-category-item">デート</li>
              <li className="Search-category-item">お昼</li>
              <li className="Search-category-item">夜景</li>
              <li className="Search-category-item">運動</li>
            </ul>


        <div className="park-result-filter">
            <FilterListRoundedIcon style={{ fontSize: 25 }} className="change-icon"/>
           <div className="change-icon-title"> 並び替え</div>
        </div>

      </div>

    );
  }
}

