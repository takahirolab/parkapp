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

import famillyPic from '../../images/familly.jpg'
import cupplePic from '../../images/cupplePic.jpg'
import Nature from '../../images/nature.jpg'

import Camp from '../../images/camp.jpg'
import animal from '../../images/animal.jpg'
import Lunch from '../../images/lunch.jpg'
import Cupple from '../../images/cupple.jpg'
import NightPic from '../../images/nightpic.jpg'

import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import Pic1 from '../../images/pic1.png'


export class HomePopularSp extends Component{
    render() {
        return (


          <div className="container-paddding-sp container_paddinng homeCategorySP__margin">
          <div className="park-city-item__title">
              <h2 className="park-city-item__h2">人気のカテゴリ</h2>
              <Link to="/park/search"><p className="park-city-item__p">すべてみる</p></Link>
            </div>

          <div className="park-city-items">
              <ul className="park-city-items--">
              <Link to={{ pathname: "/park/search", state: {parkTag: '夜景がキレイ' } }} class="popularImag"　style={{ background: `linear-gradient(to bottom, rgb(255 255 255 / 0%) 0%, rgb(0 0 0 / 23%) 100%),url(${NightPic})`,backgroundSize:'Cover'}} onClick={this.handleGetLatAndLng}><p class="white">夜景がキレイ</p></Link>
                  <Link to={{ pathname: "/park/search", state: {parkTag: '自然が豊か' } }} class="popularImag" style={{ background: `linear-gradient(to bottom, rgb(255 255 255 / 0%) 0%, rgb(0 0 0 / 23%) 100%),url(${Nature})`,backgroundSize:'Cover'}}><p class="white">自然が豊か</p></Link>
                  <Link to={{ pathname: "/park/search", state: {parkTag: '撮影スポット' } }}class="popularImag" style={{ background: `linear-gradient(to bottom, rgb(255 255 255 / 0%) 0%, rgb(0 0 0 / 23%) 100%),url(${photographer})`,backgroundSize:'Cover'}}><p class="white">撮影スポット</p></Link>
                  <Link to={{ pathname: "/park/search", state: {parkTag: 'デートスポット' } }} class="popularImag" style={{ background: `linear-gradient(to bottom, rgb(255 255 255 / 0%) 0%, rgb(0 0 0 / 23%) 100%),url(${cupplePic})`,backgroundSize:'Cover'}}><p class="white">デートスポット</p></Link>
                  <Link to={{ pathname: "/park/search", state: {parkTag: '一風変わった公園' } }}  class="popularImag" style={{ background: `linear-gradient(to bottom, rgb(255 255 255 / 0%) 0%, rgb(0 0 0 / 23%) 100%),url(${famillyPic})`,backgroundSize:'Cover'}}><p class="white">一風変わった公園</p></Link>
              </ul>
            </div>
            <ul className="sidebar-items">
            <Link  to={{ pathname: "/park/search", state: {parkTag: '家族連れ' } }} className="sidebar-item">家族連れ</Link>
            <Link  to={{ pathname: "/park/search", state: {parkTag: 'ジョギング' } }} className="sidebar-item">ジョギング</Link>
            <Link  to={{ pathname: "/park/search", state: {parkTag: 'ピクニック' } }}  className="sidebar-item">ピクニック</Link>
            <Link to={{ pathname: "/park/search", state: {parkTag: '郊外にある' } }} className="sidebar-item">郊外にある</Link>
            <Link  to={{ pathname: "/park/search", state: {parkTag: '都内にある' } }} className="sidebar-item">都内にある</Link>
            <Link  to={{ pathname: "/park/search", state: {parkTag: '海が見える' } }}  className="sidebar-item">海が見える</Link>
            <Link to={{ pathname: "/park/search", state: {parkTag: '駐車場がある' } }} className="sidebar-item">駐車場がある</Link>
            <Link  to={{ pathname: "/park/search", state: {parkTag: '自転車可' } }}  className="sidebar-item">自転車可</Link>
            <Link  to={{ pathname: "/park/search", state: {parkTag: '運動場' } }}  className="sidebar-item">運動場</Link>
            <Link  to={{ pathname: "/park/search", state: {parkTag: 'レストラン' } }}  className="sidebar-item">レストラン</Link>
            <Link  to={{ pathname: "/park/search", state: {parkTag: '乳幼児' } }}  className="sidebar-item">乳幼児</Link>

            </ul>
      </div>


        )
    }
}

HomePopularSp.propTypes ={
    getParks:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired
  }

  const mapStateToProps = (state) =>({
    data:state.data
  })


export default connect(mapStateToProps,{getParks})(HomePopularSp);
