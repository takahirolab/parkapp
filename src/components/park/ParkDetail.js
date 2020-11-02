import React, {  Suspense, lazy,Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import ScreamSkeleton from '../../util/ScreamSkeleton';
import Park from '../../components/park/Park';

import { connect } from 'react-redux';
import  Pic1 from  '../../images/pic1.png'

import {getPark} from '../../redux/actions/dataActions';
import ParkInf from './parkInf';
import Navbar_detail  from '../../layout/Navbar_detail';

import ParkLikeButton from '../park/LikeButton'
import Sidebar from '../../pages/Sidebar'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import WifiIcon from '@material-ui/icons/Wifi';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import CallIcon from '@material-ui/icons/Call';
import StorefrontIcon from '@material-ui/icons/Storefront';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import WcIcon from '@material-ui/icons/Wc';
import AccessibleIcon from '@material-ui/icons/Accessible';
import SportsBaseballRoundedIcon from '@material-ui/icons/SportsBaseballRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import Googlemap from '../../images/Googlemap.png'
import { Link } from 'react-router-dom';
import CommentForm from '../park/CommentForm'
import ScreamSkeleton_inf from '../../util/ScreamSkeleton_inf'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {logoutUser,uploadImage,loginUser} from '../../redux/actions/userActions';
import LikeButton from '../../components/park/LikeButton'
import Comments from './Comments';

const LazyComponent = lazy(() => import('../../util/ScreamSkeleton'));


export class ParkDetail extends Component {
    constructor(props) {
        super(props);
      this.state = {
        error: {},
          park_detail: [],
          isExecuting: false,
          result: '',
          txt: "初期画面",
          fromTxt: "",
          backGround: "yellow",
          bkImg: "",
          btnGo:""
      };

    }



    componentDidMount() {
    const parkId = this.props.match.params.parkId;
      this.props.getPark(parkId);

    setTimeout(() => {
      axios
        .get(`/park/${parkId}`)
        .then((res)=> {
          this.setState({
              park_detail:this.state.park_detail.concat(res.data
              )
          })
      })
    }, 1000);

  }




  render() {
    const { errors } = this.state;
      const park_detail = this.state.park_detail;
    // const {
    //   park: {
    //     parkId,
    //     Onecomment,
    //     createdDate,
    //     likeCount,
    //     commentCount,
    //     userImage,
    //     userName,
    //     comments
    //   }
    // } = this.props;


    console.log(this.state.park_detail)

      const parkLocationLink = {
        pathname: '/search',search: '?tokyo',state: { parklocation: '東京都' }
      };

    const parkItem = park_detail.map((park) =>

        <>

          <ol className="searchpark-pk">
            <li><Link to="/" className="parkinf-pk">ホーム</Link></li><ArrowForwardIosIcon/>
            <li><Link to="/park/search" className="parkinf-pk">公園検索</Link></li><ArrowForwardIosIcon/>
            <li className="parkinf-pk">{park.parkName}</li>
          </ol>
        <div className="home-maincontent-img">
        <img src={park.parkImage} className="home-maincontent-img__size"/>
      </div>
          <div className="park-maincontents__inner" >
          <LikeButton parkId={park.parkId} />
            <h2 className="park-maincontents__parkName" >{park.parkName}</h2>

    <div className="parkLocation-items">
        <div className="parkLocation-det">
                <LocationOnRoundedIcon style={{ fontSize: 18 }} />
                <Link to={{ pathname: '/search', search: `?${park.parkLocation}`, state: { parklocation: park.parkLocation } }} className="ParkInf-icon-pc">{park.parkLocation}</Link>

        </div>
        <div className="parkLocation-det">
              <ScheduleRoundedIcon style={{ fontSize: 18 }} />
              <p className="ParkInf-icon-pc" >10:00~19:00</p>
        </div>
        <div className="parkLocation-det">
              <PaymentRoundedIcon style={{ fontSize: 18 }} />
              <p className="ParkInf-icon-pc" > {park.parkPrice}円</p>
              </ div>
            </div>
    <div className="parkTag-items-pc">
              {!park.parkTag1 ? '' : <Link to={{ pathname: '/search', search: `?${park.parkTag1}`, state: { scene: park.parkTag1 } }} className="parkTag-item-pc">{park.parkTag1}</Link>}
              {!park.parkTag2 ? '' : <Link to={{ pathname: '/search', search: `?${park.parkTag2}`, state: { scene: park.parkTag2 } }}className="parkTag-item-pc">{park.parkTag2}</Link>}
              {!park.parkTag3 ? '' :<Link to={{ pathname: '/search', search: `?${park.parkTag3}`, state: { scene: park.parkTag3 } }} className="parkTag-item-pc">{park.parkTag3}</Link>}
              {!park.parkTag4 ? '' :<Link to={{ pathname: '/search', search: `?${park.parkTag4}`, state: { scene: park.parkTag4 } }} className="parkTag-item-pc">{park.parkTag4}</Link>}
      </div>{console.log(park.parkTag)}


      <div className="parkInf-inner">
              <h2 className="parkInf-h2">公園について</h2>
              <p>{park.parkAbout}</p>
      </div>

      <div className="parkInf-inner">
              <h2 className="parkInf-h2">施設・設備一覧</h2>
              <div className="ParkInf-other-pc">
                              <div className="ParkInf-iconBox-pc" ><WifiIcon style={{ fontSize: 19 }} className="parkInf-icon__size"/>Wifi</div>
                              <div className="ParkInf-iconBox-pc" ><DirectionsRunIcon style={{ fontSize: 20 }}/>ランニングコース</div>
                              <div className="ParkInf-iconBox-pc" ><LocalParkingIcon style={{ fontSize: 19 }} />パーキンング</div>
                              <div className="ParkInf-iconBox-pc" ><DirectionsBikeIcon style={{ fontSize: 20 }} className="parkInf-icon__size"/>サイクリング</div>
                              <div className="ParkInf-iconBox-pc" ><CallIcon style={{ fontSize: 20 ,marginRight:3}}/>公衆電話</div>
                              <div className="ParkInf-iconBox-pc" > <StorefrontIcon style={{ fontSize: 20,marginRight:2}} />お店</div>
                              <div className="ParkInf-iconBox-pc" >  <RestaurantIcon style={{ fontSize:19 ,marginRight:2}} />レストラン</div>
                              <div className="ParkInf-iconBox-pc" >  < WcIcon style={{ fontSize: 19 ,marginRight:1.2}} />トイレ</div>
                              <div className="ParkInf-iconBox-pc" > <AccessibleIcon style={{ fontSize: 20 ,marginRight:1.2}}/>車椅子</div>
                              <div className="ParkInf-iconBox-pc" > <SportsBaseballRoundedIcon style={{ fontSize: 18.5 ,marginRight:1.2}} />スポーツ</div>
                              <div className="ParkInf-iconBox-pc" >  <WorkRoundedIcon style={{ fontSize: 19 ,marginRight:3}} />ロッカー</div>
                </div>
      </div>
      <div className="parkInf-inner">
              <h2 className="parkInf-h2">関連情報</h2>
             <p>https://www.airbnb.jp/</p>
            </div>

            {/* コメント欄 */}
      <div className="parkInf-inner">
              <h2 className="parkInf-h2">コメント</h2>


              <Comments comments={park.comments} parkId={park.parkId}/>

              <CommentForm parkId={park.parkId} />
              {/* //コメントロジッック */}
              {/* <div className="comment-btn">コメントする</div> */}
      </div>

      <div className="parkInf-inner">
              <h2 className="parkInf-h2">アクセス</h2>
              <img class="name" src={Googlemap}/>
      </div>
      <div className="parkInf-inner">
              <h2 className="parkInf-h2">公園で楽しく遊ぶために</h2>
              <p></p>
      </div>
      </div>


          </>

      )


        let park_Inf =
        park_detail.map((park) =>
          <ParkInf key={park.parkId} park={park} className="parkInf_pos"/>)

        return (
          <>
            <Navbar_detail />
            <div className="home-maincontents parkDetail-contents">
            <Sidebar/>
              <div className="home-maincontent">
              <ScreamSkeleton_inf/>
              {parkItem}
              </div>
            </div>



            {/* スマホ用 */}
            <div className="innner">
              <ScreamSkeleton/>
              {park_Inf}
              {/* スマホ用ボタン */}
              <div className="btnGo-inner">
                <ParkLikeButton parkId={this.state.park_detail.parkId} >
                  {/* <div className="btn btnGo" style={{ backGround: '' }} on>この公園に行ってみたい</div> */}
                  </ParkLikeButton>
              </div>
            </div>
          </>
        )

    }
}

ParkDetail.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  user:PropTypes.object.isRequired,
  getParks:PropTypes.func.isRequired,
  data:PropTypes.object.isRequired,
  park: PropTypes.object.isRequired,
  UI:PropTypes.object.isRequired //objectが必須にしたい項目。
  }

  const mapStateToProps = (state) =>({
  data: state.user,
  user:state.user,
  authenticated: state.user.authenticated,
  user:state.user,
  UI: state.UI,
  search: state,
  data:state.data
  })

  export default connect(mapStateToProps,{getPark})(ParkDetail);


