import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import ScreamSkeleton_home from '../../util/ScreamSkeleton_home'

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
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getParks} from '../../redux/actions/dataActions';
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

export class HomeMainContents extends Component {
  componentWillMount() {
    this.props.getParks();
  }


    render() {
        const parks = this.props.data.parks;
        const {loading } = this.props.data;


          const parkSuggestArray = [];
          const parkSuggest_items_pc =
          parks.slice(0,4).map((parkSuggestArray_item) =>
            <>
                  <Link to={`/park/${parkSuggestArray_item.parkId}`} className="home-maincontent-item">
                          <img src={parkSuggestArray_item.parkImage} className="home-maincontent-item__img" />
                <h2 >{parkSuggestArray_item.parkName}</h2>
                <div className="Park-location-pc">
              <LocationOnRoundedIcon style={{ fontSize: 15,color: '#777777' }}/>
              <p className="parksResult-locAtime-name-pc">{parkSuggestArray_item.parkLocation}</p>
              </div>
                  </Link>

            </>
          )
          const parkSuggest_item_all =
          parks.slice(0,6).map((parkSuggestArray_item) =>
            <>
                  <Link to={`/park/${parkSuggestArray_item.parkId}`} className="home-maincontent-item __home-item-margin">
                          <img src={parkSuggestArray_item.parkImage} className="home-maincontent-item__img" />
                <h2 >{parkSuggestArray_item.parkName}</h2>
                <div className="Park-location-pc">
              <LocationOnRoundedIcon style={{ fontSize: 15,color: '#777777' }}/>
              <p className="parksResult-locAtime-name-pc">{parkSuggestArray_item.parkLocation}</p>
              </div>
                  </Link>

            </>
              )
              const parkTokyoitems =
              parks.map((parkSuggest_item) =>
                <>
                  {parkSuggest_item.parkLocation === "東京都" ?
                    parkSuggestArray.push(parkSuggest_item) :
                    ''
                  }
                </>
                  )
                  const parkTokyoitem_pc =
                  parkSuggestArray.slice(0,3).map((parkSuggestArray_item) =>
                    <>
                          <Link to={`/park/${parkSuggestArray_item.parkId}`} className="home-maincontent-item">
                                  <img src={parkSuggestArray_item.parkImage} className="home-maincontent-item__img" />
                        <h2 >{parkSuggestArray_item.parkName}</h2>
                        <div className="Park-location-pc">
              <LocationOnRoundedIcon style={{ fontSize: 15 ,color: '#777777'}}/>
              <p className="parksResult-locAtime-name-pc">{parkSuggestArray_item.parkLocation}</p>
              </div>
                          </Link>

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

                <div className="home-maincontent">

                {/* <div className="home-maincontent_inner">
                  <div className="home-showinner">
                    <h2 className="h2-home">おすすめの公園</h2>
                    <Link to={all}><p>すべてみる</p></Link>
                  </div>
                  <ul className="home-maincontent-items">

                   {!loading?parkSuggest_items_pc :<ScreamSkeleton_home/>}
                </ul>
                </div> */}

                <div className="home-maincontent_inner">
                <div className="home-showinner">
                  <h2 className="h2-home">東京都の公園</h2>
                    <Link to={all}><p>すべてみる</p></Link>
                </div>
                  <ul className="home-maincontent-items">
                    {/* //sugest */}
                    {!loading?parkTokyoitem_pc :<ScreamSkeleton_home/>}
                </ul>
            </div>




                <div className="home-maincontent_inner">
                <div className="home-showinner">
                  <h2 className="h2-home">人気のカテゴリから探す</h2>
                    <Link to={all}><p>すべてみる</p></Link>
                    </div>
                <ul className="home-maincontent-items">
                  <Link to={{ pathname: "/park/search", state: { parkTag: '夜景がキレイ' } }} class="category-show__item white category-show__img1"　style={{ background: `url(${NightPic})`,backgroundSize:'Cover'}} onClick={this.handleGetLatAndLng}><p class="white">夜景がキレイ</p></Link>
                  <Link to={{ pathname: "/park/search", state: { parkTag: '自然が豊か' } }}  class="category-show__item white category-show__img2" style={{ background: `url(${Nature})`,backgroundSize:'Cover'}}><p class="white">自然が豊か</p></Link>
                  <Link to={{ pathname: "/park/search", state: { parkTag: '撮影スポット' } }}  class="category-show__item white category-show__img3" style={{ background: `url(${photographer})`,backgroundSize:'Cover'}}><p class="white">撮影スポット</p></Link>
                  <Link to={{ pathname: "/park/search", state: { parkTag: 'デートスポット' } }}  class="category-show__item white category-show__img4" style={{ background: `url(${cupplePic})`,backgroundSize:'Cover'}}><p class="white">デートスポット</p></Link>
                  <Link to={{ pathname: "/park/search", state: { parkTag: '一風変わった公園' } }}  class="category-show__item white category-show__img5" style={{ background: `url(${famillyPic})`,backgroundSize:'Cover'}}><p class="white">一風変わった公園</p></Link>
              </ul>
              <ul className="sidebar-items">
            <Link  to={{ pathname: "/park/search", state: { parkTag: '家族連れ' } }} className="sidebar-item">家族連れ</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: 'ジョギング' } }}className="sidebar-item">ジョギング</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: 'ピクニック' } }} className="sidebar-item">ピクニック</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '郊外にある' } }} className="sidebar-item">郊外にある</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '都内にある' } }} className="sidebar-item">都内にある</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '海が見える' } }} className="sidebar-item">海が見える</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '駐車場がある' } }} className="sidebar-item">駐車場がある</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '自転車可' } }} className="sidebar-item">自転車可</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '運動場<' } }}className="sidebar-item">運動場</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: 'レストラン' } }} className="sidebar-item">レストラン</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '乳幼児' } }} className="sidebar-item">乳幼児</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '遊具が豊富' } }} className="sidebar-item">遊具が豊富</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '公園内に売店あり' } }} className="sidebar-item">公園内に売店あり</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '車椅子の方OK' } }} className="sidebar-item">車椅子の方OK</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '幼稚園OK' } }} className="sidebar-item">幼稚園OK</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: 'プールあり' } }} className="sidebar-item">プールあり</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '夕日がキレイ' } }} className="sidebar-item">夕日がキレイ</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '話題の公園' } }} className="sidebar-item">話題の公園</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '紅葉がきれい' } }} className="sidebar-item">紅葉がきれい</Link>
            </ul>
            </div>

            {/* スマホ版　人気カテゴリ */}
            {/* <div className="home-maincontent_inner">
                <div className="home-showinner">
                  <h2 className="h2-home">人気のカテゴリ</h2>
                    <Link to={all}><p>すべてみる</p></Link>
                </div>
                  <ul className="home-maincontent-items">

                    {!loading?parkTokyoitem_pc :<ScreamSkeleton_home/>}
                  </ul>
            </div> */}



                <div className="home-maincontent_inner">
                <div className="home-showinner">
                  <h2 className="h2-home">公園の種類から探す</h2>
                    <Link to={all}><p>すべてみる</p></Link>
                    </div>
                <ul className="home-maincontent-items">
                  <Link to={{ pathname: "/park/search", state: { parkTag: '芝生がある広い公園' } }}class="parkcategory-show__item white category-show__img1"　style={{ background: `url(${Grass})`,backgroundSize:'Cover'}} onClick={this.handleGetLatAndLng}><p class="white">芝生がある広い公園</p></Link>
                  <Link to={{ pathname: "/park/search", state: { parkTag: '国立公園' } }} class="parkcategory-show__item white category-show__img2" style={{ background: `url(${nationalPark})`,backgroundSize:'Cover'}}><p class="white">国立公園</p></Link>
                  <Link to={{ pathname: "/park/search", state: { parkTag: 'キャンプができる公園' } }}class="parkcategory-show__item white category-show__img3" style={{ background: `url(${Camp})`,backgroundSize:'Cover'}}><p class="white">キャンプができる公園</p></Link>
                  <Link to={{ pathname: "/park/search", state: { parkTag: '海がみえる公園' } }} class="parkcategory-show__item white category-show__img4" style={{ background: `url(${boatParkr})`,backgroundSize:'Cover'}}><p class="white">海がみえる公園</p></Link>
                  <Link to={{ pathname: "/park/search", state: { parkTag: '博物館・資料館がある公園' } }} class="parkcategory-show__item white category-show__img5" style={{ background: `url(${NightPic})`,backgroundSize:'Cover'}}><p class="white">博物館・資料館がある公園</p></Link>
                  <Link to={{ pathname: "/park/search", state: { parkTag: '動植物を観察できる公園' } }} class="parkcategory-show__item white category-show__img5" style={{ background: `url(${animal})`,backgroundSize:'Cover'}}><p class="white">動植物を観察できる公園</p></Link>
              </ul>
              <ul className="sidebar-items">
            <Link to={{ pathname: "/park/search", state: { parkTag: '植物園' } }} className="sidebar-item">植物園</Link>
            <Link to={{ pathname: "/park/search", state: { parkTag: '河川敷グラウンド' } }}className="sidebar-item">河川敷グラウンド</Link>


          </ul>

                </div>




              {/* <div className="home-maincontent_inner">
                <div className="home-showinner">
                  <h2 className="h2-home">新着の公園一覧</h2>
                  <Link to={all}><p>すべてみる</p></Link>
                </div>
                  <ul className="home-maincontent-items">

                    {!loading?parkSuggest_item_all :<ScreamSkeleton_home/>}
                  </ul>
              </div> */}

              </div>
    )
    }
}


HomeMainContents.propTypes ={
    getParks:PropTypes.func.isRequired,
    getParkActivity:PropTypes.func.isRequired,
    getArticles:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired
  }

  const mapStateToProps = (state) =>({
    data:state.data
  })

  export default connect(mapStateToProps,{getParks})(HomeMainContents);

