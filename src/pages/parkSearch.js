import React, { Component } from 'react'
import history from 'history/createBrowserHistory';

import {useLocation} from 'react-router-dom';

import '../App.css';
import Pic1 from '../images/pic1.png'
import Pic2 from '../images/pic2.png'
import Pic3 from '../images/pic3.png'
import Pic4 from '../images/pic4.png'
import { Link,NavLink } from 'react-router-dom';
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
import { Category, NaturePeopleOutlined, TextureSharp } from '@material-ui/icons';
import LazyLoad from 'react-lazyload'




export class ParkSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: 'すべて',
      city:this.props.city
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
    // const parkTag1 = this.props.match.params.parkTag1;
    // console.log(parkTag1)
  }

  render() {
    const { parks, loading } = this.props.data;
    const parkScene = this.props.location.state.scene;


    return (
      <>
        {!loading ? (
          <ParkSearchGet parks={parks} city={this.props.city} parkScene={parkScene}/>
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
    const loading = this.props.data;
    return (
      <>
      <Navbar/>

    <div className="container container_paddinng">
          <div className="park-result">
            <SearchBar parks={this.props.parks} city={this.props.city} cityName={this.state.cityName} parkTag1={this.state.parkTag1} onFilterTextChange={this.handleFilterTextChange}/>
        <div className="serch-items">
          <ul className="Search-category">
              <li className="Search-category-item active_category" value="東京都">おすすめ</li>
              {/* <Link to="/park/family" className="Search-category-item" value="家族">家族</Link> */}
              <li className="Search-category-item" value="東京都">ピクニック</li>
              <li className="Search-category-item">デート</li>
              <li className="Search-category-item">お昼</li>
              <li className="Search-category-item">夜景</li>
              <li className="Search-category-item">運動</li>
              <li className="Search-category-item">夜景</li>
              <li className="Search-category-item">運動</li>
            </ul>
    </div>

      </div>
    {!loading ? <> <ProductTable parks={this.props.parks} cityName={this.state.cityName} parkScene={this.props.parkScene}/></> : <ScreamSkeleton/>}
        </div>
        </>


    );
  }

}





class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.state = {
      value: "すべて",
      color_green: true};

  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  changeColor(){
    this.setState({color_green: !this.state.color_green})
  }

  Categorysearch() {
    history.push('/')
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  // }



  render() {


    return (
      <>

    <form action="/search/city" className="serch-bar-location"  >
      <LocationOnRoundedIcon style={{ fontSize: 25 ,opacity:0.7}}/>
      <select className="search_select" value={this.props.cityName}>
          <option value={this.props.city}>{this.props.city}</option>
          <option value="大阪">大阪</option>
          <option value="神奈川">神奈川</option>
      </select>
          <p>{this.props.parks.length}</p>
          <input type="submit" value={this.props.cityName} onClick={this.handleFilterTextChange}  />
        </form>




    {/* <div className="serch-items">
          <ul className="Search-category">
              <li className="Search-category-item active_category" value="東京都">おすすめ</li>
              <Link to="/park/family" className="Search-category-item" value="家族">家族</Link>
              <li className="Search-category-item" value="東京都">ピクニック</li>
              <li className="Search-category-item">デート</li>
              <li className="Search-category-item">お昼</li>
              <li className="Search-category-item">夜景</li>
              <li className="Search-category-item">運動</li>
              <li className="Search-category-item">夜景</li>
              <li className="Search-category-item">運動</li>
              <NavLink to="/" className="Search-category-item" activeClassName="btn-danger" value="家族" onClick={this.handleFilterTextChange} >家族</NavLink>

            </ul>
    </div> */}
        </>
        // <div className="park-result-filter">
        //     <FilterListRoundedIcon style={{ fontSize: 25 }} className="change-icon"/>
        //    <div className="change-icon-title"> 並び替え</div>
        // </div>



    );
  }
}

// class SearchCategory extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       search_category: ""
//       }
//   }

//   changeColor(){
//     this.setState({color_green: !this.state.color_green})
// }


//   render() {
//     return (
//       <>
//         <li className="Search-category-item" onClick={this.changeColor.bind(this)}>{this.props.search_category}</li>
//       </>
//     )
//   }
// }











class ProductTable extends React.Component {
  constructor() {
    super()

    this.state = {
      marker: 40,
    }

    this.loadList = this.loadList.bind(this)
  }


  render() {

    const loading = this.props.data;
    const parkItems = this.props.parks
    const cityName = this.props.cityName;
    const rows = [];

    console.log(parkItems)


    parkItems.map((park) => {
      if (park.parkTag1 === this.props.parkScene) {
       rows.push(<ProductRow park={park} key={park.parkId}/>)
      }
    });


    const result = rows.length
    console.log(result)


    return (
      <>
      <div className="FindParksResult-items" >
        {!loading ? <>{rows.slice(0, this.state.marker)}</> : <ScreamSkeleton />}
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
  constructor() {
    super()

    this.state = {
      count: 0,
    }

    this.CountList = this.CountList.bind(this)
  }

  render() {
    return (

      <Link to={`/park/${this.props.park.parkId}`} className="FindParksResult-item" onClick={this.CountList}>

        <img className="FindParksResult-item-img" src={this.props.park.parkImage}/>

        <div className="FindParksResult-item-detil">
          <h2 className="parksResult-item-name">{this.props.park.parkName}</h2>
      </div>
      <div className="Park-location">
            <LocationOnRoundedIcon style={{ fontSize: 20 }}/>
            <p className="parksResult-locAtime-name">{this.props.park.parkLocation}</p>
          </div>
           {/* <LikeButton parkId={this.props.park.parkId} /> */}
        </Link>

    );
  }
  CountList() {
    this.setState({
      count: this.state.count + 1

    })
    console.log(this.props.count)
  }
}



