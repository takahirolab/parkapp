import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';
import { NavLink } from "react-router-dom";

import '../App.css';
import Pic1 from '../images/pic1.png'
import Pic2 from '../images/pic2.png'
import Pic3 from '../images/pic3.png'
import Pic4 from '../images/pic4.png'
import {  Link } from 'react-router-dom';
// import PropTypes from 'prop-types';.active

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




export class ParkSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: 'すべて',
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(cityName) {
    this.setState({
      cityName: cityName
    });
  }
  componentDidMount() {
    this.props.getParks();
  }

  render() {
    const { parks, loading } = this.props.data;
    // console.log(this.props.data);
    // const parks1 = {parks}

    return (
      <>
        {!loading ? (
          <ParkSearchGet parks={parks} />
        ) : (
            <ScreamSkeleton />
          )}
      </>
    )
  }
}

const mapStateToProps = (state) =>({
  data:state.data
})


export default connect(mapStateToProps,{getParks})(ParkSearch);



class ParkSearchGet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: 'すべて',
      parkTag1: ''
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  handleFilterTextChange(cityName,parkTag1) {
    this.setState({
      cityName: cityName,
      parkTag1: parkTag1
    });
  }
  render() {
    const parksNum = this.props.parks.length;
    const loading =this.props.data;

    return (
    <>



    {!loading ? <> <ProductTable parks={this.props.parks} cityName={this.state.cityName}/></> : <ScreamSkeleton/>}


  </>


    );
  }

}





class SearchBar extends React.Component {
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
              <NavLink className="Search-category-item" activeClassName="btn-danger" value="家族" onClick={this.handleFilterTextChange} >家族</NavLink>
              <NavLink className="Search-category-item" activeClassName="btn-danger" value="東京都">ピクニック</NavLink>
              <NavLink className="Search-category-item" activeClassName="btn-danger">デート</NavLink>
              <NavLink className="Search-category-item" activeClassName="btn-danger">お昼</NavLink>
              <NavLink className="Search-category-item" activeClassName="btn-danger">夜景</NavLink>
              <NavLink className="Search-category-item" activeClassName="btn-danger" >運動</NavLink>
            </ul>


        <div className="park-result-filter">
            <FilterListRoundedIcon style={{ fontSize: 25 }} className="change-icon"/>
           <div className="change-icon-title"> 並び替え</div>
        </div>

      </div>

    );
  }
}






class ProductTable extends React.Component {
  constructor() {
    super()

    this.state = {
      marker: 40,
    }

    this.loadList = this.loadList.bind(this)
  }

  render() {
    const loading =this.props.data;
    const cityName = this.props.cityName;
    const rows = [];


    this.props.parks.forEach((park) => {
      if (cityName == "") {
        rows.push(
          <ProductRow
            park={park}
            key={park.parkId}
          />
        );
      }
      if (cityName == "すべて") {
        rows.push(
          <ProductRow
            park={park}
            key={park.parkId}
          />
        );
      }

      if (park.parkLocation !== cityName) {
          return;
    }

  rows.push( <ProductRow park={park} key={park.parkId}/>);

    });

    return (
      <>
    <div className="FindParksResult-items" >
        {!loading ? <>{rows}</> : <ScreamSkeleton/>}
    </div>
        {
          this.props.parks.length > this.state.marker
            ? <button onClick={this.loadList} className="ReadMore">もっとみる</button>
            : ''
        }

        </>

    );
  }

  loadList() {
    this.setState({
      marker: this.state.marker + 40
    })
  }
}





class ProductRow extends React.Component {
  // CountList () {
  //   this.props.history.push(`/park/${this.props.park.parkId}`)
  // };

  render() {





    return (
      <>
        <Link to={`/park/${this.props.park.parkId}`} className="FindParksResult-item" onClick={this.CountList}>

        <img className="FindParksResult-item-img" src={this.props.park.parkImage}/>

        <div className="FindParksResult-item-detil">
        <h2 className="parksResult-item-name">{this.props.park.parkName}</h2>
        </div>

        </Link>




        </>
    );
  }

}
