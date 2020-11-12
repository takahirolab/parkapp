import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getParks } from '../../redux/actions/dataActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import bigPark from '../../images/bigPark.jpg'
import boatParkr from '../../images/boatParkr.jpg'
import Grass from '../../images/Grass.jpg'
import nationalPark from '../../images/nationalPark.jpg'
import photographer from '../../images/photographer.jpg'



export class HomeLocatiomSp extends Component{
    render() {

        return (
            <div className="container-paddding-sp container_paddinng homeCategorySP__margin">
                <div className="park-city-item__title">
                    <h2 className="park-city-item__h2">公園の種類からさがす</h2>
                    <Link to="/park/search"><p className="park-city-item__p">すべてみる</p></Link>
                </div>
                <div className="park-city-items">
                  <ul className="park-city-items--">
                  <Link to={{ pathname: "/park/search", state: { parkTag: '夜景がキレイ' } }} class="parkKindimg"　style={{ background: `url(${bigPark })`,backgroundSize:'Cover'}} onClick={this.handleGetLatAndLng}><p class="white">夜景がキレイ</p></Link>
                  <Link to={{ pathname: "/park/search", state: { parkTag: '自然が豊か' } }}  class="parkKindimg" style={{ background: `url(${boatParkr})`,backgroundSize:'Cover'}}><p class="white">自然が豊か</p></Link>
                  <Link to={{ pathname: "/park/search", state: { parkTag: '撮影スポット' } }}class="parkKindimg" style={{ background: `url(${Grass})`,backgroundSize:'Cover'}}><p class="white">撮影スポット</p></Link>
                  <Link to={{ pathname: "/park/search", state: { parkTag: 'デートスポット' } }} class="parkKindimg" style={{ background: `url(${nationalPark})`,backgroundSize:'Cover'}}><p class="white">デートスポット</p></Link>
                  <Link to={{ pathname: "/park/search", state: { parkTag: '一風変わった公園' } }}  class="parkKindimg" style={{ background: `url(${photographer})`,backgroundSize:'Cover'}}><p class="white">一風変わった公園</p></Link>
                </ul>
            </div>
            <ul className="sidebar-items">
            <Link to={{ pathname: "/park/search", state: { parkTag: '植物園' } }} className="sidebar-item">植物園</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '河川敷グラウンド' } }} className="sidebar-item">河川敷グラウンド</Link>
          </ul>
        </div>
        )
    }
}

HomeLocatiomSp.propTypes ={
    getParks:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired
  }

  const mapStateToProps = (state) =>({
    data:state.data
  })


export default connect(mapStateToProps,{getParks})(HomeLocatiomSp);
