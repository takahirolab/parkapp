import React, { Component } from 'react'
import Navbar from '../../layout/Navbar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { connect } from 'react-redux';
import { getUserData } from '../../redux/actions/dataActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Pic1 from '../../images/pic1.png';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import TurnedInNotRoundedIcon from '@material-ui/icons/TurnedInNotRounded';
import QueryBuilderRoundedIcon from '@material-ui/icons/QueryBuilderRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import {editUserDetails} from '../../redux/actions/userActions'


import Contact from '../../pages/Contact';
import { DriveEtaTwoTone } from '@material-ui/icons';
import MapageMain from '../../pages/sidebar/MypageMain'
import EditRoundedIcon from '@material-ui/icons/EditRounded';

export class Mypage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editProfile: 'inline',
            bio: this.props.user.bio,
            location:this.props.user.location,
            userName: this.props.user.userName,
            email:''
        };
        this.editProfile = this.editProfile.bind(this);
    }

    // mapUserDetailsToState () {
    //     this.setState({
    //       bio: this.props.credentials.bio ? this.props.credentials.bio : '',
    //       userName: this.props.credentials.userName ? this.props.credentials.userName : '',
    //       location: this.props.credentials.location ? this.props.credentials.location : '',
    //       email:this.props.credentials.email ? this.props.credentials.email : ''
    //     });
    // };

    componentDidMount() {
        this.setState({
            editProfile: 'inline',
            bio: this.props.user.bio,
            location:this.props.user.location,
            userName: this.props.user.userName,
            email:''
       })
    }

    handleSubmit = () => {
        const userDetails = {
          bio: this.state.bio,
          userName: this.state.userName,
          location: this.state.location
        };
        console.log(userDetails)
        this.props.editUserDetails(userDetails);

        this.editProfile()
      };

      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };



    editProfile() {
    this.state.editProfile ==='inline'?
            this.setState({
            editProfile:'none'
            }) :
            this.setState({
                editProfile:'inline'
            })
    }

    render() {
        // const { credentials } = this.props;
        const likes = this.props.data.likes
        const parks = this.props.data
        console.log(this.state.userName)
        console.log(this.props.user)
        // console.log(this.props.data.credentials.userName)

        return (
            <>
            <MapageMain>
                    <div className="Mypage-right">
                        <div>
                            <div className="Mypage-item-padding">
                                <h2 className="Mypage-item-h2 Mypage-item-h2__margin ">マイページ</h2>

                                <form className="Mypage-items">
                                    {/* <div className="Mypage-item-right"> */}
                                        {/* <img src={this.props.data.credentials.imageUrl} className="mypage-profile" /> */}
                                        {/* {this.state.editProfile === 'inline' ?
                                            <button className="btn" onClick={this.editProfile}>編集する</button> :
                                            <div type="submit" className="btn" onClick={this.handleSubmit}>編集を保存する</div>}
                                    </div> */}

                                    {this.state.editProfile ==="inline"?
                                        <div className="Mypage-item-left">
                                            <div className="Mypage-item-inf">
                                            <div className="Mypage-item-inf__inner">
                                                    <p className="Mypage-item-nameh2 Mypage-item-nameh2__margin">プロフィール画像</p>
                                                    <img src={this.props.data.credentials.imageUrl} className="mypage-profile" />
                                                </div>
                                                <div className="Mypage-edit">
                                                    <EditRoundedIcon style={{ fontSize: 18 ,color:' #52BF90',marginRight:'0.3rem'}}/>
                                                    <p className="Mypage-item-inf__h2" onClick={this.editProfile}>編集する</p>
                                                </div>

                                        </div>

                                            <div className="Mypage-item-inf">
                                            <div className="Mypage-item-inf__inner">
                                            <p className="Mypage-item-nameh2" >ユーザー名</p>
                                            <p className="Mypage-item-name">{this.props.data.credentials.userName}</p>
                                                </div>
                                                <h2 className="Mypage-item-inf__h2"></h2>
                                        </div>

                                            <div className="Mypage-item-inf">
                                            <div className="Mypage-item-inf__inner">
                                            <p className="Mypage-item-nameh2">email</p>
                                            <p className="Mypage-item-name" style={{display:this.state.editProfile}}>{this.props.data.credentials.email}</p>
                                                </div>
                                                <h2 className="Mypage-item-inf__h2"></h2>
                                            </div>

                                            <div className="Mypage-item-inf">
                                            <div className="Mypage-item-inf__inner">
                                            <p className="Mypage-item-nameh2">すんでいるところ</p>
                                            <p className="Mypage-item-name">{this.props.data.credentials.location}</p>
                                                </div>
                                                <h2 className="Mypage-item-inf__h2"></h2>
                                        </div>
                                            <div className="Mypage-item-inf">
                                            <div className="Mypage-item-inf__inner">
                                            <p className="Mypage-item-nameh2">自己紹介文</p>
                                            <p className="Mypage-item-name">{this.props.data.credentials.bio}</p>
                                                </div>
                                                <h2 className="Mypage-item-inf__h2"></h2>
                                        </div>
                                    </div>

                                        :
                                        <>
                                        <div className="Mypage-item-left">
                                        <div className="Mypage-item-inf">
                                        <div className="Mypage-item-inf__inner">
                                                <p className="Mypage-item-nameh2 Mypage-item-nameh2__margin">プロフィール画像</p>
                                                <img src={this.props.data.credentials.imageUrl} className="mypage-profile" />
                                            </div>

                                    </div>

                                        <div className="Mypage-item-inf">
                                        <div className="Mypage-item-inf__inner">
                                            <p className="Mypage-item-nameh2" >ユーザー名</p>
                                            <input type="text" className="MypageInput" name="userName" label="userName" onChange={this.handleChange} value={this.props.user.bio} />
                                        </div>
                                        <h2 className="Mypage-item-inf__h2"></h2>
                                    </div>

                                        <div className="Mypage-item-inf">
                                        <div className="Mypage-item-inf__inner">
                                        <p className="Mypage-item-nameh2">email</p>
                                        <p className="Mypage-item-name" >{this.props.data.credentials.email}</p>
                                            </div>
                                            <h2 className="Mypage-item-inf__h2"></h2>
                                        </div>

                                        <div className="Mypage-item-inf">
                                        <div className="Mypage-item-inf__inner">
                                        <p className="Mypage-item-nameh2">すんでいるところ</p>
                                        <input type="text" className="MypageInput" name="location" label="location" onChange={this.handleChange} value={this.state.location} />
                                            </div>
                                            <h2 className="Mypage-item-inf__h2"></h2>
                                    </div>
                                        <div className="Mypage-item-inf">
                                        <div className="Mypage-item-inf__inner">
                                        <p className="Mypage-item-nameh2">自己紹介文</p>
                                        <input type="text" className="MypageInput" name="bio" label="bio" onChange={this.handleChange} value={this.state.bio} />
                                            </div>
                                            <h2 className="Mypage-item-inf__h2"></h2>
                                    </div>
                                            </div>
                                        <div className="MypageBtn_inner">
                                         <button className="btn" onClick={this.editProfile} style={{color:'#777777',width:200}}>キャンセル</button>
                                        <button className="btn" onClick={this.handleSubmit} style={{ background: '#52BF90', color: '#fff', width: 200 }}>編集を保存する</button>
                                        </div>
                                    </>
                                    }


                                </form>


                            </div>
                    </div>
                    </div>
                </MapageMain>
            </>

        )

    }

}

Mypage.propTypes = {
    park: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    editUserDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    credentials: state.user.credentials,
    data: state.user,
    user:state.user,
});

export default connect(mapStateToProps, { editUserDetails })(Mypage);


class GoodList extends Component {
    render() {
        return (
            <Link to={`/park/${this.props.like.parkId}`} className="parksResult-item" >
                <img  className="parksResult-item-img" src={Pic1} />
                    <div className="parksResult-item-detil">
                        <h2 className="parksResult-item-name">
                        {this.props.ParkName}
                        </h2>
                        <div className="parksResult-locAtime">
                            <div className="location">
                            <LocationOnRoundedIcon style={{ fontSize: 18 }}/>
                            <p class="parksResult-locAtime-name">{this.props.ParkName}</p>
                            </div>
                        </div>
                        <div className="parksResult-locAtime">
                            <div className="AcPrice">
                            <CreditCardRoundedIcon style={{ fontSize: 18 }}/>
                            <p class="parksResult-locAtime-name">{this.props.ParkPrice}円</p>
                            </div>
                            <div className="Time">
                            <QueryBuilderRoundedIcon style={{ fontSize: 18 }}/>
                            <p class="parksResult-locAtime-name">1時間~</p>
                            </div>
                        </div>
                        <p className="parkResult-desc">
                        {this.props.AcAbout}
                    </p>
                </div>
            </Link>
        )
    }
}
