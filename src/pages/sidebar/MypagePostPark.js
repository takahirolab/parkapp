// import { Dashboard } from '@material-ui/icons'
import React, { Component } from 'react';
import MapageMain from './MypageMain'
import { connect } from 'react-redux';
import {postScream , clearErrors} from '../../redux/actions/dataActions';
import PropTypes from 'prop-types';


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
import Facilities from '../../util/facility.json'



export class MypagePost extends Component {
    constructor(props) {
        super();
        this.state = {
            open: false,
            parkName: '',
            parkAbout: '',
            parkFeature: '',
            parkLocation: '',
            parkUrl: '',
            parkPrice: '',
            parkTag1: '',
            parkTag2: '',
            parkTag3: '',
            parkTag4: '',
            errors: {},
            parkImage: '',
            parkwifi:'',
            restrant:'',
            cycling :'',
            parking: '',
            callbox:'',
            shop:'',
            MultipurposeToilet:'',
            carchair:'',
            Locker:'',
            lake:'',
            boat:'',
        };
        this.handleChangeChecked  = this.handleChangeChecked.bind(this)
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
          this.setState({
            errors: nextProps.UI.errors
          });
        }
        if (!nextProps.UI.errors && !nextProps.UI.loading) {
          this.setState({
            parkName: '',
            parkAbout:'',
            parkFeature:'',
            parkLocation:'',
            parkUrl:'',
            parkPrice:'',
            parkTag1:'',
            parkTag2:'',
            parkTag3:'',
            parkTag4: '',
            parkImage:'',
            open: false, errors: {},

          });

        }
    }


    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });

    };


    handleChangeChecked(event) {
        if (event.target.name === 'wifi') {this.state.parkwifi ? this.setState({ parkwifi: '' }) : this.setState({ parkwifi: true })}
        if (event.target.name === 'restrant') {this.state.restrant ? this.setState({ restrant: '' }) : this.setState({ restrant: true })}
        if (event.target.name === 'cycling' ){this.state.cycling ? this.setState({ cycling: '' }) : this.setState({ cycling: true })}
        if (event.target.name === 'arking' ){this.state.parking ? this.setState({ parking: '' }) : this.setState({ parking: true })}
        if (event.target.name === 'callbox') {this.state.callbox? this.setState({ callbox: '' }) : this.setState({ callbox: true })}
        if (event.target.name === 'shop') {this.state.shop ? this.setState({ shop: '' }) : this.setState({ shop: true })}
        if (event.target.name === 'carchair') {this.state.carchair? this.setState({ carchair: '' }) : this.setState({ carchair: true })}
        if (event.target.name === 'MultipurposeToilet') {this.state.MultipurposeToilet ? this.setState({ MultipurposeToilet: '' }) : this.setState({ MultipurposeToilet: true })}
        if (event.target.name === 'Toilet') {this.state.Toilet ? this.setState({ Toilet: '' }) : this.setState({ Toilet: true })}
        if (event.target.name === 'Locker') { this.state.Locker ? this.setState({ Locker: '' }) : this.setState({ Locker: true })}
        if (event.target.name === 'Toilet') { this.state.Toilet ? this.setState({ Toilet: '' }) : this.setState({ Toilet: true })}
        if ( event.target.name === 'lake') { this.state.lake ? this.setState({lake: '' }) : this.setState({ lake: true })}
        if ( event.target.name === 'boat') { this.state.boat ? this.setState({boat: '' }) : this.setState({ boat: true })}
        console.log(this.state.parkwifi)
    }





    handleSubmit = (event) => {
        event.preventDefault();
        const newPark = {
            parkName: this.state.parkName,
            parkAbout: this.state.parkAbout,
            parkFeature: this.state.parkFeature,
            parkLocation: this.state.parkLocation,
            parkUrl: this.state.parkUrl,
            parkPrice: this.state.parkPrice,
            parkTag1: this.state.parkTag1,
            parkTag2: this.state.parkTag2,
            parkTag3: this.state.parkTag3,
            parkTag4: this.state.parkTag4,
            parkImage: this.state.parkImage,
            parkwifi: this.state.parkwifi,
            restrant: this.state.restrant,
            cycling: this.state.cycling,
            parking: this.state.parking,
            callbox: this.state.callbox,
            shop: this.state.shop,
            MultipurposeToilet: this.state.MultipurposeToile,
            carchair: this.state.carchair,
            Locker: this.state.Locker,
            lake: this.state.lake,
            boat: this.state.boat
        }



        this.props.postScream(newPark);
    }





    render() {
        const test  = Facilities.map((facility) =>

            <>

                    <div className="parkPost__facility">
                        {facility.en === 'wifi' ? <WifiIcon style={{ fontSize: 19 }} /> : ''}
                        {facility.en === 'restrant' ? <RestaurantIcon style={{ fontSize: 19 }} /> : ''}
                        {facility.en === 'parking' ? <WifiIcon style={{ fontSize: 19 }} /> : ''}
                        {facility.en === 'cycling' ? <WifiIcon style={{ fontSize: 19 }} /> : ''}
                        {facility.en === 'callbox' ? <WifiIcon style={{ fontSize: 19 }} /> : ''}
                        {facility.en === 'shop' ? <WifiIcon style={{ fontSize: 19 }} /> : ''}
                        {facility.en === 'carchair' ? <WifiIcon style={{ fontSize: 19 }} /> : ''}
                        {facility.en === 'MultipurposeToilet' ? <WifiIcon style={{ fontSize: 19 }} /> : ''}
                        {facility.en === 'Toilet' ? <WifiIcon style={{ fontSize: 19 }} /> : ''}
                        {facility.en === 'Locker' ? <WifiIcon style={{ fontSize: 19 }} /> : ''}
                        {facility.en === 'lake' ? <WifiIcon style={{ fontSize: 19 }} /> : ''}
                        {facility.en === 'boat' ? <WifiIcon style={{ fontSize: 19 }} /> : ''}

                                     <p>{facility.name}</p>
                            <input
                            name={facility.en}
                            type="checkbox"
                            label={facility.en}
                            className="MypageInput"
                            onChange={this.handleChangeChecked}/>
                                </div>

                </>
)
        const {UI: { loading }
    } = this.props;
  const { errors } = this.state;
  const { authenticated } = this.props;
        return (
            <MapageMain>

                <div className="Mypage-item-padding">
                    <h2 className="Mypage-item-h2">公園を投稿する</h2>

                    <div className="">
                        <form onSubmit={this.handleSubmit} className="MypagePost-form MypagePost-margintop">

                            <div className="Mypage-item-inf">
                                <div className="Mypage-item-inf__inner">
                                    <div className="Mypage_parkName-inner">
                                        <p className="Mypage-item-nameh2" >公園名</p>
                                        <p className="Mypage-require Mypage-require__margin">必須</p>
                                    </div>
                                    <input
                                    name="parkName"
                                    type="text"
                                    label="公園名"
                                    placeholder="公園名"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                        />
                                </div>
                            </div>

                            <div className="Mypage-item-inf">
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >公園についての説明</p>
                                    <input
                                    rows="5"
                                    wrap="soft"
                                    name="parkAbout"
                                    type="textarea"
                                    label="公園について"
                                    placeholder="公園について"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                        />
                                </div>
                            </div>

                            <div className="Mypage-item-inf">
                                <div className="Mypage-item-inf__inner">
                                <div className="Mypage_parkName-inner">
                                        <p className="Mypage-item-nameh2" >場所</p>
                                        <p className="Mypage-require Mypage-require__margin">必須</p>
                                    </div>
                                    <input
                                    name="parkLocation"
                                    type="text"
                                    label="公園のについて"
                                    placeholder="所在地"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                        />
                                </div>
                            </div>

                            <div className="Mypage-item-inf">
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >公園のwebサイト</p>
                                    <input
                                    name="parkUrl"
                                    type="text"
                                    label="公園のについて"
                                    placeholder="公園のURL"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                        />
                                </div>
                            </div>
                            <div className="Mypage-item-inf">
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >入園料</p>
                                    <input
                                    name="parkPrice"
                                    type="number"
                                    label="公園のについて"
                                    placeholder="入園料"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                        />
                                </div>
                            </div>
                           <div className="Mypage-PostTag">
                            <div className="Mypage-item-inf Mypage-Posttag__width">
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >公園タグ1</p>
                                    <select
                                    value={this.state.parkTag1}
                                    name="parkTag1"
                                    type="text"
                                    label="公園のについて"
                                    placeholder="公園のタグ1"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                    >
                                            <option value="" style={{display:'none'}}>なし</option>
                                            <option value="">なし</option>
                                            <option value="東京都">東京</option>
                                            <option value="大阪">大阪</option>
                                            <option value="神奈川">神奈川</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Mypage-item-inf Mypage-Posttag__width">
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >公園タグ2</p>
                                    <select
                                    value={this.state.parkTag2}
                                    name="parkTag2"
                                    type="text"
                                    label="公園のについて"
                                    placeholder="公園のタグ2"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                    >
                                            <option value="" style={{display:'none'}}>なし</option>
                                            <option value="">なし</option>
                                            <option value="東京都">東京</option>
                                            <option value="大阪">大阪</option>
                                            <option value="神奈川">神奈川</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Mypage-item-inf Mypage-Posttag__width" >
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >公園タグ3</p>
                                    <select
                                    value={this.state.parkTag3}
                                    name="parkTag3"
                                    type="text"
                                    label="公園のについて"
                                    placeholder="公園のタグ3"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                    >
                                            <option value="" style={{display:'none'}}>なし</option>
                                            <option value="">なし</option>
                                            <option value="東京都">東京</option>
                                            <option value="大阪">大阪</option>
                                            <option value="神奈川">神奈川</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Mypage-item-inf Mypage-Posttag__width">
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >公園タグ4</p>
                                    <select
                                    value={this.state.parkTag4}
                                    name="parkTag4"
                                    type="text"
                                    label="公園のについて"
                                    placeholder="公園のタグ4"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                    >
                                            <option value="" style={{display:'none'}}>なし</option>
                                            <option value="">なし</option>
                                            <option value="東京都">東京</option>
                                            <option value="大阪">大阪</option>
                                            <option value="神奈川">神奈川</option>
                                    </select>
                                </div>
                                </div>

                            </div>
                            <div className="Mypage-facility">
                            {test}
                            </div>


                            <input
                                type="file"
                                name="parkwifi"
                                label="タグ4"
                                rows="3"
                                placeholder="image"
                                onChange={this.handleChange}

                            />
                            {0 === Object.keys(this.state.errors).length?
                              '' : <p style={{color:'red',margin:'0 auto'}}>入力内容に不備があります。</p>
 }
                            <button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="Mypage-Post-btn Mypage-Post-btn__margin"
                            >
                                登録する
                            </button>
                        </form>
                    </div>
                </div>
            </MapageMain>
        )
    }
}
MypagePost.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    classes:PropTypes.object.isRequired, //objectが必須にしたい項目。
    loginUser:PropTypes.func.isRequired, //objectが必須にしたい項目。
    user:PropTypes.object.isRequired, //objectが必須にしたい項目。
    UI:PropTypes.object.isRequired //objectが必須にしたい項目。
  };


  const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    user:state.user,
      UI: state.UI,
      data: state.data
  });

  export default connect(mapStateToProps, { postScream,clearErrors})(MypagePost);

