import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ParkLikeButton from '../park/LikeButton'

import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import TurnedInNotRoundedIcon from '@material-ui/icons/TurnedInNotRounded';

import CommentForm from '../park/CommentForm'
import Comments from '../park/Comments'
import Pic1 from '../../images/pic1.png';
import Googlemap from '../../images/Googlemap.png';
import {connect} from 'react-redux';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Modal from 'react-modal';
import Navbar from '../../layout/Navbar'


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
import ParkSearch from '../../pages/Search/parkSearch'
import ParkSearch_detail from '../../pages/parkSearch_detail'
import AddPhotoAlternateRoundedIcon from '@material-ui/icons/AddPhotoAlternateRounded';
import {logoutUser,uploadImage,loginUser} from '../../redux/actions/userActions';

import ScreamSkeleton from '../../util/ScreamSkeleton';

const customStyles = {
  overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: 0,
      animationName: 'login-modal',
      animationDuration: '0.5s',
      animationName: 'fadeIn'
    },

  content : {
      zIndex:'100',
      position:'fixed',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background: 'none',
      border: 'none',
      animationName: 'login-form',
      animationDelay : '2s'
 }
};


export class ParkInf extends Component {
  constructor(props){
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      modalIsOpen: false,
       color: "#52BF90"
    }
    this.openModal = this.openModal.bind(this);
    //   this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
    document.body.setAttribute('style', 'overflow: hidden;')
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    document.body.removeAttribute('style', 'overflow: hidden;')
  }


  changeColor(){
    this.setState({color: this.state.color})
 }

  render() {
    const ActivColor = { color: this.state.color }
    const {UI: {loading }} = this.props;
    const { errors } = this.state;
    const { authenticated } = this.props;
    console.log(this.props)
    console.log(loading)

    return (
      <>

    <div className="container_paddinng_park container ">


          <div className="ParkInf">

        <div className="PrkInf-inner">

                    <div className="parkInf-right">
            <img src={this.props.park.parkImage} className="ParkInf-img" />
              {/* <div className="ParkInf-addPic" onClick={this.openModal}><AddPhotoAlternateRoundedIcon style={{ fontSize: 25 }} className="ParkInf-addPic__aj"/><p>写真を追加</p></div>
              <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
            >
              <div className="ParkInf-addPic-modal">
                <div className="parkInf-addPic__inner">
                  <h2 className="ParkInf-addPic-desc h2">「{this.props.park.parkName}」 の写真を追加する</h2>
                  <form className="ParkInf-form">
                    <label for="file_photo"　className="file_up">
                      <h2 className="fileupload-inner">写真を追加するfdsfasdfsa</h2>
                      <input type="file" className="file-upload" id="file_photo" />
                  </label>
                  </form>
                  <Imageupload/>
                </div>
              </div>
              </Modal> */}
                    </div>
                    <div className="ParkInf-left">
                        {/* <p className="ParkInf-url">{this.props.park.parkUrl}</p> */}
                      <h1 className="ParkInf-parkName">{this.props.park.parkName}</h1>
                      <div className="ParkInf-parkIcon">
                          <div className="parkDet-inf__item">
                              <LocationOnRoundedIcon style={{ fontSize: 16 }} />
                              <p className="ParkInf-icon" > {this.props.park.parkLocation}</p>

                          </div>
                          <div className="parkDet-inf__item">
                              <ScheduleRoundedIcon style={{ fontSize: 16 }} />
                              {this.props.park.parkTime}<p className="ParkInf-icon" >10:00 ~ 19:00</p>
                          </div>
                          <div className="parkDet-inf__item">
                              <PaymentRoundedIcon style={{ fontSize: 16 }} />
                             <p className="ParkInf-icon" > {this.props.park.parkPrice}円</p>
                          </ div>
                      </div>
                      <div className="ParkInf-Tagcontent">
                          <div className="ParkInf-Tag">#{this.props.park.parkTag1}</div>
                          <div className="ParkInf-Tag">#{this.props.park.parkTag2}</div>
                          <div className="ParkInf-Tag">#{this.props.park.parkTag3}</div>
                          <div className="ParkInf-Tag">#{this.props.park.parkTag4}</div>
                </div>



                          <div className="ParkInf-tabs">
                           <div className="Mypage-inner">
                            <h2 className="h2">公園について</h2>
                            <p className="p">{this.props.park.parkAbout}</p>
                            <div className="ParkInf-other">
                              <div className="ParkInf-iconBox" ><WifiIcon style={{ fontSize: 19 }} className="parkInf-icon__size"/>Wifi</div>
                              <div className="ParkInf-iconBox" ><DirectionsRunIcon style={{ fontSize: 20 }}/>ランニングコース</div>
                              <div className="ParkInf-iconBox" ><LocalParkingIcon style={{ fontSize: 19 }} />パーキンング</div>
                              <div className="ParkInf-iconBox" ><DirectionsBikeIcon style={{ fontSize: 20 }} className="parkInf-icon__size"/>サイクリング</div>
                              <div className="ParkInf-iconBox" ><CallIcon style={{ fontSize: 20 ,marginRight:3}}/>公衆電話</div>
                              <div className="ParkInf-iconBox" > <StorefrontIcon style={{ fontSize: 20,marginRight:2}} />お店</div>
                              <div className="ParkInf-iconBox" >  <RestaurantIcon style={{ fontSize:19 ,marginRight:2}} />レストラン</div>
                              <div className="ParkInf-iconBox" >  < WcIcon style={{ fontSize: 19 ,marginRight:1.2}} />トイレ</div>
                              <div className="ParkInf-iconBox" > <AccessibleIcon style={{ fontSize: 20 ,marginRight:1.2}}/>車椅子</div>
                              <div className="ParkInf-iconBox" > <SportsBaseballRoundedIcon style={{ fontSize: 18.5 ,marginRight:1.2}} />スポーツ</div>
                              <div className="ParkInf-iconBox" >  <WorkRoundedIcon style={{ fontSize: 19 ,marginRight:3}} />ロッカー</div>
                </div>
                    <div className="h2 margin-parkinf"><h2 className="h2">アクティビティ・体験</h2></div>
                    <div class="ParkInf-activity-items">
                      <div class="ParkInf-activity-item">
                        <img src={this.props.park.parkImage} className="ParkInf-activity-img" />
                        <h3 class="ParkInf-activity-title">
                          朝の時間を有効活用。ストレッチ体験しませんか。
                        </h3>
                      </div>
                      <div class="ParkInf-activity-item">
                        <img src={this.props.park.parkImage} className="ParkInf-activity-img" />
                        <h3 class="ParkInf-activity-title">
                          朝の時間を有効活用。ストレッチ体験しませんか。
                        </h3>
                      </div>
                      <div class="ParkInf-activity-item">
                        <img src={this.props.park.parkImage} className="ParkInf-activity-img" />
                        <h3 class="ParkInf-activity-title">
                          朝の時間を有効活用。ストレッチ体験しませんか。
                        </h3>
                      </div>
                      <div class="ParkInf-activity-item">
                        <img src={this.props.park.parkImage} className="ParkInf-activity-img" />
                        <h3 class="ParkInf-activity-title">
                          朝の時間を有効活用。ストレッチ体験しませんか。
                        </h3>
                      </div>
                    </div>

                    <div className="h2 margin-parkinf"><h2 className="h2">アクセス</h2></div>
                    <div className="parkLocation">〒190-0014 東京都立川市緑町3172</div>
                    <img src={Googlemap} className="parkInf-img" />
                      <p className="p">電車で行く. JR青梅線・西立川駅より約2分</p>
                  </div>
                   <div className="h2 margin-parkinf"><h2 className="h2">みんなのコメント</h2></div>


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
                                    <div className="userComment"><p>磁石のため着脱可能だから電話があってもすぐ対応可能で良い。パソコン中も一目で画面が見えるので、</p></div>
                                </div>
                            </div>
                            <div class="user-comment">
                                <div className="user-comment_inner">
                                    <img src={Pic1} className="userProfile_img"/>
                                </div>
                                <div className="userComment userComment-margin">
                                    <div className="userNaem">たかひろ</div>
                                    <div className="userComment"><p>磁石のため着脱可能だから電話があってもすぐ対応可能で良い。パソコン中も一目で画面が見えるので、着信やYOUTUBE、WEBの確認がとてもやりやすくて重宝してます。ノートパソコン のモニター裏側に貼ってある両面テープがどれくらいてある両面テープがどれくらいてある両面テープがどれくらい</p></div>
                                </div>
                            </div>
                            <CommentForm parkId={this.props.park.parkId} />
                            {/* <Comments comments={this.props.comments.comment}/> */}
                             <div className="comment-btn">
                              コメントする
                            </div>
                          </div>

                    </div>
                  </div>

          </div>

          <h2 class="h2 margin-parkinf">同じ地域にある公園</h2>
      <ParkSearch_detail/>
    </div>

      </>

  );
};
}

ParkInf.propTypes = {
  park: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.user,
  user:state.user,
  authenticated: state.user.authenticated,
  user:state.user,
  UI: state.UI,
  search: state,
  data:state.data
  });

export default connect(mapStateToProps,{loginUser,logoutUser})(ParkInf);





// const {
//     park: {
//         parkName,
//         createdDate,
//         userImage,
//         parkId,
//         likeCount,
//         commentCount,
//         parkImage,
//         parkAbout,
//         parkLocation,
//         parkPrice,
//         parkTime,
//         parkUrl,
//         parkTag1,
//         parkTag2,
//         parkTag3,
//         parkTag4,
//         parkFeature
//     }
//   } =this.props;


