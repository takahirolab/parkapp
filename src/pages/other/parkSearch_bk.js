import React, { Component } from 'react'




import '../App.css';


import { Link,NavLink } from 'react-router-dom';


import {connect} from 'react-redux';
import {getParks} from '../../redux/actions/dataActions';



import  Navbar  from '../../layout/Navbar'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';



import ScreamSkeleton from '../../util/ScreamSkeleton';
import { Category, NaturePeopleOutlined, TextureSharp, TransferWithinAStationSharp } from '@material-ui/icons';





export class ParkSearch extends Component {

  componentDidMount() {
    this.props.getParks();
  }

  render() {
    const { parks, loading } = this.props.data;

    const test =!loading ? (
      <ParkSearchGet parks={parks} city={this.props.location.state.parkLocation} parkTag={this.props.location.state.scene}/>
    ) : (
        <ScreamSkeleton />
      )

    return (
      <>
        {test}
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
    console.log(this.props.city)
    if (this.props.city) {
      this.state = {
        cityName: this.props.city,
        parkTag: this.props.parkTag
      };
    }
    if (!this.props.city) {
      this.state = {
        cityName: 'すべて',
        parkTag: this.props.parkTag
      };
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterTextChangeTag = this.handleFilterTextChangeTag.bind(this);
  }

  handleFilterTextChange(cityName) {
    this.setState({
      cityName: cityName
    });
  }

  handleFilterTextChangeTag(parkTag) {
    this.setState({
      parkTag: parkTag
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
            <SearchBar parks={this.props.parks} city={this.props.city} cityName={this.state.cityName} parkTag={this.state.parkTag} onFilterTextChange={this.handleFilterTextChange}/>
        <div className="serch-items">
          <ul className="Search-category">
                <h2>{this.state.parkTag}の公園一覧</h2>
            </ul>
    </div>

      </div>
    {!loading ? <> <ProductTable parks={this.props.parks} cityName={this.state.cityName} parkTag={this.state.parkTag}/></> : <ScreamSkeleton/>}
        </div>
        </>


    );
  }

}





class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterTextChangeTag = this.handleFilterTextChangeTag.bind(this);
    this.state = {
      value: "すべて",
      color_green: true,
      parkTag:  "すべて"
    }


  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleFilterTextChangeTag(event) {
    this.props.onFilterTextChange(event.target.parkTag);
  }

  changeColor(){
    this.setState({color_green: !this.state.color_green})
  }


  // handleSubmit(e) {
  //   e.preventDefault();
  // }



  render() {


    return (
      <>
    <form action="/search/city" className="serch-bar-location serch-bar-location__long"  >
      <LocationOnRoundedIcon style={{ fontSize: 25 ,opacity:0.7}}/>
      <select className="search_select" value={this.state.cityName} onChange={this.handleFilterTextChange}>
          <option value="すべて">すべて</option>
          <option value="東京都">東京</option>
          <option value="大阪">大阪</option>
          <option value="神奈川">神奈川</option>
      </select>
        </form>

    <form action="/search/city" className="serch-bar-location serch-bar-location__long"  >
      <LocationOnRoundedIcon style={{ fontSize: 25 ,opacity:0.7}}/>
      <select className="search_select" value={this.state.parkTag} onChange={this.handleFilterTextChangeTag}>
          <option value="すべて">すべて</option>
          <option value="朝">朝</option>
          <option value="夕方">夕方</option>
      </select>
        </form>

      </>
    );
  }
}


class ProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      marker: 40,
      parkTag:this.props.parkTag
    }
    this.loadList = this.loadList.bind(this)
  }


  render() {

    const loading = this.props.data;
    const parkItems = this.props.parks
    const cityName = this.props.cityName;
    const rows = [];


    console.log(cityName)
    console.log(parkItems)
    console.log(this.state.parkTag)


    parkItems.map((park) => {
      if (park.parkTag1 === this.state.parkTag && cityName === 'すべて' ){
        rows.push(<ProductRow park={park} key={park.parkId}/>)
       }
      if (park.parkTag1 === this.state.parkTag && park.parkLocation ===cityName) {
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



