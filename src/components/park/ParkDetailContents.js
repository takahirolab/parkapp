import React from 'react'
import { Link } from 'react-router-dom';
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
import CommentForm from '../park/CommentForm'
import Pic1 from '../../images/pic1.png'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export const ParkDetailContent = (props) => {
    console.log(props.park)
    return (
        <>
          <ol className="searchpark-pk">
            <li><Link to="/" className="parkinf-pk">ホーム</Link></li><ArrowForwardIosIcon/>
            <li><Link to="/park/search" className="parkinf-pk">公園検索</Link></li><ArrowForwardIosIcon/>
            <li className="parkinf-pk">{this.props.park.parkName}</li>
          </ol>
        <div className="home-maincontent-img">
        <img src={this.props.park.parkImage} className="home-maincontent-img__size"/>
      </div>
    <div className="park-maincontents__inner" >
            <h2>{this.props.park.parkName}</h2>

    <div className="parkLocation-items">
        <div className="parkLocation-det">
                <LocationOnRoundedIcon style={{ fontSize: 18 }} />
                <Link to={{ pathname: '/search', search: `?${this.props.park.parkLocation}`, state: { parklocation: this.props.park.parkLocation } }} className="ParkInf-icon-pc">{this.props.park.parkLocation}</Link>

        </div>
        <div className="parkLocation-det">
              <ScheduleRoundedIcon style={{ fontSize: 18 }} />
              <p className="ParkInf-icon-pc" >10:00~19:00</p>
        </div>
        <div className="parkLocation-det">
              <PaymentRoundedIcon style={{ fontSize: 18 }} />
              <p className="ParkInf-icon-pc" > {this.props.park.parkPrice}円</p>
              </ div>
            </div>
    <div className="parkTag-items-pc">
              {!this.props.park.parkTag1 ? '' : <Link to={{ pathname: '/search', search: `?${this.props.park.parkTag1}`, state: { scene: this.props.park.parkTag1 } }} className="parkTag-item-pc">{this.props.park.parkTag1}</Link>}
              {!this.props.park.parkTag2 ? '' : <Link to={{ pathname: '/search', search: `?${this.props.park.parkTag2}`, state: { scene: this.props.park.parkTag2 } }}className="parkTag-item-pc">{this.props.park.parkTag2}</Link>}
              {!this.props.park.parkTag3 ? '' :<Link to={{ pathname: '/search', search: `?${this.props.park.parkTag3}`, state: { scene: this.props.park.parkTag3 } }} className="parkTag-item-pc">{this.props.park.parkTag3}</Link>}
              {!this.props.park.parkTag4 ? '' :<Link to={{ pathname: '/search', search: `?${this.props.park.parkTag4}`, state: { scene: this.props.park.parkTag4 } }} className="parkTag-item-pc">{this.props.park.parkTag4}</Link>}
      </div>{console.log(this.props.park.parkTag)}


      <div className="parkInf-inner">
              <h2 className="parkInf-h2">公園について</h2>
              <p>{this.props.park.parkAbout}</p>
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

              <div class="user-comment ">
                    <div className="user-comment_inner">
                        <img src={Pic1} className="userProfile_img"/>
                    </div>
                    <div className="userComment userComment-margin">
                        <div className="userNaem">たかひろ</div>
                        <div className="userComment"><p>磁石のため着脱可能だから電話があってもすぐ対応可能で良い。</p></div>
                    </div>
              </div>
              <div class="user-comment ">
                    <div className="user-comment_inner">
                        <img src={Pic1} className="userProfile_img"/>
                    </div>
                    <div className="userComment userComment-margin">
                        <div className="userNaem">たかひろ</div>
                        <div className="userComment"><p>磁石のため着脱可能だから電話があってもすぐ対応可能で良い。</p></div>
                    </div>
              </div>
              <div class="user-comment ">
                    <div className="user-comment_inner">
                        <img src={Pic1} className="userProfile_img"/>
                    </div>
                    <div className="userComment userComment-margin">
                        <div className="userNaem">たかひろ</div>
                        <div className="userComment"><p>磁石のため着脱可能だから電話があってもすぐ対応可能で良い。</p></div>
                    </div>
              </div>
              <div class="user-comment ">
                    <div className="user-comment_inner">
                        <img src={Pic1} className="userProfile_img"/>
                    </div>
                    <div className="userComment userComment-margin">
                        <div className="userNaem">たかひろ</div>
                        <div className="userComment"><p>磁石のため着脱可能だから電話があってもすぐ対応可能で良い。</p></div>
                    </div>
              </div>

              {/* //コメントロジッック */}
              <div className="comment-btn">コメントする</div>
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

}
export default ParkDetailContent
