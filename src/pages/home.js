import React, { Component } from 'react'

import '../App.css';
import Pic1 from '../images/pic1.png'
import Nature from '../images/nature.jpg'
import Morning from '../images/morning.jpg'
import Camp from '../images/camp.jpg'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Park from '../components/park/Park';
import ParksActivity from '../components/parkActivity/ParkActivity' ;
import ParksActivityRight from '../components/parkActivity/ParkActivityRight' ;
import ParksActivityRightBottom from '../components/parkActivity/ParkActivityRightBottom' ;
import Articles from '../components/article/Articles' ;

import {connect} from 'react-redux';
import {getParks} from '../redux/actions/dataActions';
import {getParkActivity} from '../redux/actions/dataActions';
import {getArticles} from '../redux/actions/dataActions';

import  Navbar  from '../layout/Navbar'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ParkSearch from './parkSearch';
import AddIcon from '@material-ui/icons/Add';
import grey from '@material-ui/core/colors/grey';
import SearchIcon from '@material-ui/icons/Search';

import YoutubeLogo from '../images/youtube.png'
import TwitterLogo from '../images/Twitter_Logo_Blue.svg'
import InstaLogo from '../images/insta.svg'
import FacebookLogo from '../images/facebook.png'
import axios from 'axios'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Footer from '../layout/Footer';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const CLOUD_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast?q=Tokyo&APPID={default-application_4694115}';



export class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: "",
    }
  }


  componentDidMount() {
    this.props.getParks();
  }


  render() {
    const sceneTags = ['朝', '夕方', '夜景']

    // sceneTags.map((sceneTag) =>
    // {
    //   sceneTag
    // }
    // )
    const morning = {
      pathname: '/search',
      search: '?morning',
      // hash: '#user-hash',
      state: { scene: '朝' }
    };

    const parks = this.props.data.parks;
    // ///////////////
    // 各シーンの公園をフィルタ
    // //////////////////
    // const park_scenes = [];
    //   parks.map((park_scene) =>
    //     <>
    //       {parks_scene.parkTag1 === "朝" ?
    //         park_scenes.push(park_scene) :
    //         ''
    //       }
    //     </>
    //   )
    // console.log(park_scenes)


 // ///////////////
    // おすすめの公園のフィルタ
    // //////////////////
    const parkSuggest_items =
      parks.slice(0, 5).map((parkSuggest_item) =>
      <>
      <Link to={`/park/${parkSuggest_item.parkId}`}  className="park-city-item active_category" value="東京都">
        <img src={parkSuggest_item.parkImage} className="pakr-city-img" />
        <p className="park-city-name">{parkSuggest_item.parkName}</p>
      </Link>
        </>
      )


    // ///////////////
    // TOKYOの公園をフィルタ
    // //////////////////
    const parkSuggestArray = [];
    const parkTokyoitems =
      parks.map((parkSuggest_item) =>
        <>
          {parkSuggest_item.parkLocation === "東京都" ?
            parkSuggestArray.push(parkSuggest_item) :
            ''
          }
        </>
      )

    const parkTokyoitem =
      parkSuggestArray.map((parkSuggestArray_item) =>
        <>
              <Link to={`/park/${parkSuggestArray_item.parkId}`} className="park-city-item active_category">
                      <img src={parkSuggestArray_item.parkImage} className="pakr-city-img" />
                      <p className="park-city-name">{parkSuggestArray_item.parkName}</p>
              </Link>

    </>

    )
    return (
          <>
          <div className="homeContents">
             <Navbar/>
            {/* メインビジュアル */}
            <div className="contennts container_main">
              <div className="main-visual" style={{backgroundImage: `url(${Pic1})`}}>
                <div className="main_visual__cotainer">
                  <div className="main_visual_location">
                  <LocationOnRoundedIcon style={{ fontSize: 30 }}/>
                      <p>東京都 昭和記念公園</p>
                  </div>
                  <div className="weather_container">
                      <p>東京都の天気</p>
                  </div>
                  {/* <div className="news">
                </div> */}
                </div>
              </div>
              {/* <ParkSearch /> */}
              <div className="container container_paddinng park-result-padding">
                <div className="park-result">
    <div className="serch-bar-location">
                  <SearchIcon style={{ fontSize: 25, opacity: 0.7 }} />
                  <p className="serch-bar__color">公園名やカテゴリーなどを入力</p>
    </div>

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
              </div>
              <div className="mainVI ">
                <img src={Pic1} className="mainVI-img"/>
              </div>
              {/* ////////////////
              カテゴリー検索
              /////////////// */}
              <div className="container_paddinng">
              <div className="park-city-item__title">
                <h2 className="park-city-item__h2">シーンから選ぶ</h2>

                <input type="checkbox" id="drawer-check" class="drawer-hidden"/>

                <label for="drawer-check" className="park-city-item__p" >カテゴリーをみる</label>


                <div class="drawer-content">
                  <div className="sceneTag-drawer-header">
                    <label for="drawer-check" className="sceneTag-drawer-header-back"><ArrowBackIosIcon/>戻る</label>
                    <h2 className="sceneTag-drawer-header-title h2">タグから検索する</h2>
                  </div>
                  <ul className="sceneTag-drawer-header--items">
                   <Link to={morning} className="sceneTag-drawer-header--item"><p>朝</p><ArrowBackIosIcon/></Link>
                   <Link to={morning} className="sceneTag-drawer-header--item"><p>夕方</p><ArrowBackIosIcon/></Link>
                   <Link to={morning} className="sceneTag-drawer-header--item"><p>ピクニット</p><ArrowBackIosIcon/></Link>
                   <Link to={morning} className="sceneTag-drawer-header--item"><p>キャンプ</p><ArrowBackIosIcon/></Link>
                   <Link to={morning} className="sceneTag-drawer-header--item"><p>夜景</p><ArrowBackIosIcon/></Link>
                    <Link to={morning} className="sceneTag-drawer-header--item"><p>デート</p><ArrowBackIosIcon/></Link>
                    <Link to={morning} className="sceneTag-drawer-header--item"><p>家族</p><ArrowBackIosIcon/></Link>
                   <Link to={morning} className="sceneTag-drawer-header--item"><p>運動</p><ArrowBackIosIcon/></Link>
                  </ul>
                </div>



              </div>

                <div className="category-show">
                <h2 class="category-show__item white pic1" style={{ background: `url(${Morning})`}}　onClick={this.handleGetLatAndLng}><p class="white">朝</p></h2>
                    <h2 class="category-show__item white" style={{ background: `url(${Nature})`}}><p class="white">夕方</p></h2>
                    <h2 class="category-show__item white" style={{ background: `url(${Pic1})`}}><p class="white">ピクニック</p></h2>
                    <h2 class="category-show__item white" style={{ background: `url(${Camp})`}}><p class="white">キャンプ</p></h2>
                    <h2 class="category-show__item white" style={{ background: `url(${Pic1})`}}><p class="white">夜景</p></h2>
                    <h2 class="category-show__item white" style={{ background: `url(${Pic1})`}}><p class="white">デート</p></h2>
                </div>
                {/* <div className="category-tags">
                  <div className="category-tag">海</div>
                  <div className="category-tag">川がある</div>
                  <div className="category-tag">遊園地</div>
                  <div className="category-tag">夜景が綺麗</div>
                  <div className="category-tag">小さい</div>
                  <div className="category-tag">バリアフリー</div>
                  <div className="category-tag">大きい公園</div>
                  <div className="category-tag">テスト</div>
                  <div className="category-tag">海</div>
                  <div className="category-tag">川がある</div>
                  <div className="category-tag">遊園地</div>
                  <div className="category-tag">夜景が綺麗</div>
                  <div className="category-tag">小さい</div>
                  <div className="category-tag">バリアフリー</div>
                  <div className="category-tag">テスト</div>
                  <div className="category-tag">テスト</div>
                </div> */}

                </div>



               {/* ////////////////
              おすすめ　東京検索
              /////////////// */}
              <div className="container_paddinng">
                <div className="park-city-item__title">
                  <h2 className="park-city-item__h2">おすすめの公園</h2>
                  <Link to="/search/city" className="park-city-item__p">すべてみる</Link>
                </div>

                <div className="park-city-items">
                <ul className="park-city-items--">

                  {parkSuggest_items}
                                 {/* <Link to="/park/family" className="Search-category-item" value="家族">家族</Link> */}
                </ul>
              </div>


            </div>




                 {/* ////////////////
              おすすめ　東京検索
              /////////////// */}
              <div className="container_paddinng">
                <div className="park-city-item__title">
                  <h2 className="park-city-item__h2">東京都の公園</h2>
                  <p className="park-city-item__p">すべてみる</p>
                  </div>
              <div className="park-city-items">


          <ul className="park-city-items--">
               {parkTokyoitem}

          </ul>

                </div>
              </div>

                 {/* ////////////////
              サービス紹介ページ
              /////////////// */}

              <div className="LP">
                <div className="LP-btn">
                  サービスについてはこちら
                </div>
              </div>


                {/* ////////////////
              SNSページ
              /////////////// */}
              <div className="SNS container_paddinng">
                <h2 className="park-city-item__h2 SNS_h2">ParkrのSNSをフォロー</h2>
                <p>「あなたの身近な公園を世界に」をコンセプトに、写真や動画を配信しております。
                </p>
                <div className="sns-follow-inner">
                  <img src={YoutubeLogo} className="faLogo sns__padding"/>
                  <img src={TwitterLogo} className="TwLogo sns__padding"/>
                  <img src={InstaLogo} className="faLogo sns__padding"/>
                  <img src={FacebookLogo} className="faLogo sns__padding"/>
                </div>
              </div>








            </div>


            <div className="Post_park">
              <AddIcon style={{ fontSize: 50 ,color: grey[50] }}/>
            </div>


          </div>
          <Footer/>
          </>

        )
    }
}


home.propTypes ={
  getParks:PropTypes.func.isRequired,
  getParkActivity:PropTypes.func.isRequired,
  getArticles:PropTypes.func.isRequired,
  data:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
  data:state.data
})

export default connect(mapStateToProps,{getParks,getParkActivity,getArticles})(home);

