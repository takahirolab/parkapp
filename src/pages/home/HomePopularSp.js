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

const morning = {
  pathname: '/search',search: '?morning',state: { scene: '朝' }
};const afternoon = {
  pathname: '/search',search: '?afternoon',state: { scene: '夕方' }
};const picnic = {
  pathname: '/search',search: '?picnic',state: { scene: 'ピクニック' }
};const camp = {
  pathname: '/search',search: '?camp',state: { scene: 'キャンプ' }
};const night = {
  pathname: '/search',search: '?night',state: { scene: '夜景' }
};const familly = {
  pathname: '/search',search: '?familly',state: { scene: '家族' }
};const dating = {
  pathname: '/search',search: '?dating',state: { scene: 'デート' }
};const fittness = {
  pathname: '/search',search: '?dating',state: { scene: '運動' }
};const tokyo = {
  pathname: '/search',search: '?tokyo',state: { parklocation: '東京都' }
};const all = {
  pathname: '/search',search: '?all',state: { parklocation: '',scene: '' }
};



export class HomePopularSp extends Component{
    render() {
        return (


          <div className="container-paddding-sp container_paddinng">
          <div className="park-city-item__title">
              <h2 className="park-city-item__h2">人気のカテゴリ</h2>
              <Link to={tokyo}><p className="park-city-item__p">すべてみる</p></Link>
            </div>

          <div className="park-city-items">
              <ul className="park-city-items--">
              <Link to={morning} class="popularImag"　style={{ background: `url(${NightPic})`,backgroundSize:'Cover'}} onClick={this.handleGetLatAndLng}><p class="white">夜景がキレイ</p></Link>
                  <Link to={afternoon}  class="popularImag" style={{ background: `url(${Nature})`,backgroundSize:'Cover'}}><p class="white">自然が豊か</p></Link>
                  <Link to={picnic} class="popularImag" style={{ background: `url(${photographer})`,backgroundSize:'Cover'}}><p class="white">撮影スポット</p></Link>
                  <Link to={night} class="popularImag" style={{ background: `url(${cupplePic})`,backgroundSize:'Cover'}}><p class="white">デートスポット</p></Link>
                  <Link to={familly}  class="popularImag" style={{ background: `url(${famillyPic})`,backgroundSize:'Cover'}}><p class="white">一風変わった公園</p></Link>
              </ul>
            </div>
            <ul className="sidebar-items">
            <Link to={morning} className="sidebar-item">家族連れ</Link>
            <Link to={afternoon} className="sidebar-item">ジョギング</Link>
            <Link to={picnic} className="sidebar-item">ピクニック</Link>
            <Link to={camp} className="sidebar-item">郊外にある</Link>
            <Link to={night} className="sidebar-item">都内にある</Link>
            <Link to={dating} className="sidebar-item">海が見える</Link>
            <Link to={familly} className="sidebar-item">駐車場がある</Link>
            <Link to={fittness} className="sidebar-item">自転車可</Link>
            <Link to={morning} className="sidebar-item"><p>運動場</p></Link>
            <Link to={afternoon} className="sidebar-item">レストラン</Link>
            <Link to={picnic} className="sidebar-item">乳幼児</Link>

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
