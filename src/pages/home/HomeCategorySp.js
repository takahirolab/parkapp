import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Nature from '../../images/nature.jpg'
import Morning from '../../images/morning.jpg'
import Camp from '../../images/camp.jpg'
import Lunch from '../../images/lunch.jpg'
import Cupple from '../../images/cupple.jpg'
import NightPic from '../../images/nightpic.jpg'

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



const HomeCategorySp = () => {
    return (
        <div className="container_paddinng container-paddding-sp">

        <div className="park-city-item__title">
          <h2 className="park-city-item__h2">シーンから選ぶ</h2>

          {/* ///////////////
          //カテゴリードロワー
          /////////////// */}
          <input type="checkbox" id="drawer-check" class="drawer-hidden" />
          <label for="drawer-check" className="park-city-item__p" >カテゴリ一覧</label>
          <div class="drawer-content">
            <div className="sceneTag-drawer-header">
              <label for="drawer-check" className="sceneTag-drawer-header-back"><ArrowBackIosIcon/>戻る</label>
              <h2 className="sceneTag-drawer-header-title h2">タグから検索する</h2>
            </div>

            <ul className="sceneTag-drawer-header--items">
            <Link to={morning} className="sceneTag-drawer-header--item"><p>朝</p><ArrowBackIosIcon/></Link>
             <Link to={afternoon} className="sceneTag-drawer-header--item"><p>夕方</p><ArrowBackIosIcon/></Link>
             <Link to={picnic} className="sceneTag-drawer-header--item"><p>ピクニット</p><ArrowBackIosIcon/></Link>
             <Link to={camp} className="sceneTag-drawer-header--item"><p>キャンプ</p><ArrowBackIosIcon/></Link>
             <Link to={night} className="sceneTag-drawer-header--item"><p>夜景</p><ArrowBackIosIcon/></Link>
              <Link to={dating} className="sceneTag-drawer-header--item"><p>デート</p><ArrowBackIosIcon/></Link>
              <Link to={familly} className="sceneTag-drawer-header--item"><p>家族</p><ArrowBackIosIcon/></Link>
             <Link to={fittness} className="sceneTag-drawer-header--item"><p>運動</p><ArrowBackIosIcon/></Link>
         </ul>
       </div>
        </div>
          <div className="category-show">
            <Link to={morning} class="category-show__item white category-show__img1"　style={{ background: `linear-gradient(to top, rgb(0 0 0 / 45%), rgb(7 7 7 / 35%), rgb(82 82 82 / 0%) 97%,url(${Morning})`,backgroundSize:'Cover'}} ><p class="white">朝</p></Link>
            <Link to={afternoon}  class="category-show__item white category-show__img2" style={{ background: `linear-gradient(to top, rgb(0 0 0 / 45%), rgb(7 7 7 / 35%), rgb(82 82 82 / 0%) 97%,url(${Nature})`,backgroundSize:'Cover'}}><p class="white">夕方</p></Link>
            <Link to={picnic} class="category-show__item white category-show__img3" style={{ background: `linear-gradient(to top, rgb(0 0 0 / 45%), rgb(7 7 7 / 35%), rgb(82 82 82 / 0%) 97%,url(${Lunch})`,backgroundSize:'Cover'}}><p class="white">ピクニック</p></Link>
            <Link to={night} class="category-show__item white category-show__img4" style={{ background: `linear-gradient(to top, rgb(0 0 0 / 45%), rgb(7 7 7 / 35%), rgb(82 82 82 / 0%) 97%,url(${Camp})`,backgroundSize:'Cover'}}><p class="white">キャンプ</p></Link>
            <Link to={familly}  class="category-show__item white category-show__img5" style={{ background: `linear-gradient(to top, rgb(0 0 0 / 45%), rgb(7 7 7 / 35%), rgb(82 82 82 / 0%) 97%,url(${NightPic})`,backgroundSize:'Cover'}}><p class="white">夜景</p></Link>
            <Link to={familly}  class="category-show__item whitecategory-show__img6" style={{ background: `linear-gradient(to top, rgb(0 0 0 / 45%), rgb(7 7 7 / 35%), rgb(82 82 82 / 0%) 97%,url(${Cupple})`,backgroundSize:'Cover'}}><p class="white">デート</p></Link>
          </div>
      </div>
    )
}


export default HomeCategorySp
