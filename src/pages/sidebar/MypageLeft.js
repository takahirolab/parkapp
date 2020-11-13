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
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ShareIcon from '@material-ui/icons/Share';
import {logoutUser,uploadImage,loginUser} from '../../redux/actions/userActions';
import { signupUser } from '../../redux/actions/userActions';
import MainRight from './MypageRight'
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import Contact from '../Contact';
import { DriveEtaTwoTone, PortraitSharp } from '@material-ui/icons';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';

export class MypageLeft extends Component{

    handleLogout = () => {
        this.props.logoutUser();
    }

    render() {
        const parks = this.props.data
        return (
            <>
                    <div className="MypageLeft">
                            <ul className="Mypagerectangle">
                                            <li className="nav-rectangle-item__mypage">
                                                <div className="sidemenu-item-inner">
                                                <img src={this.props.user.credentials.imageUrl} className="Nav-profileImage"/>
                                                    {/* <AccountCircleIcon style={{ fontSize: '48', color: '#777777' }} /> */}
                                                    <div className="sidemenu-item-inner-profile"> <Link to="/Mypage" className="sidemenu-item-inner-profile_mypage">
                                                        <p className="sidemenu-item-inner-profile_Name">{this.props.user.credentials.userName}さん</p>

                                                    マイページ
                                                    </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-rectangle-item">
                                                <Link to="/dashbord" className="sidemenu-item-inner">
                                                    <DashboardRoundedIcon style={{fontSize:'18',color:'#424242'}}/>
                                                <p className="sidemenu-item-inner_p">ダッシュボード</p>
                                            </Link>
                                            </li>
                                            <li className="nav-rectangle-item">
                                                <Link to="/like" className="sidemenu-item-inner">
                                                    <FavoriteRoundedIcon style={{fontSize:'18',color:'#424242'}}/>
                                                <p className="sidemenu-item-inner_p">いいねした公園</p>
                                            </Link>
                                            </li>
                                            <li className="nav-rectangle-item">
                                                <Link to="/comment" className="sidemenu-item-inner">
                                                    <MessageRoundedIcon style={{fontSize:'18',color:'#424242'}}/>
                                                <p className="sidemenu-item-inner_p">あなたのコメント</p>
                                            </Link>
                                            </li>
                                            <li className="nav-rectangle-item">
                                                <Link to="/mypage/post" className="sidemenu-item-inner">
                                                    <AddBoxRoundedIcon style={{fontSize:'18',color:'#242424'}}/>
                                                <p className="sidemenu-item-inner_p">公園を投稿する</p>
                                            </Link>
                                            </li>
                                            <li className="nav-rectangle-item">
                                                <Link to="/Mypage" className="sidemenu-item-inner">
                                                    <ShareIcon style={{fontSize:'18',color:'#242424'}}/>
                                                <p className="sidemenu-item-inner_p">アプリをシェアする</p>
                                            </Link>
                                            </li>
                    </ul>
                    <div className="nav-rectangle-item" onClick={this.handleLogout}>サインアウト</div>
                        </div>


            </>

        )

    }

}

MypageLeft.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    classes:PropTypes.object.isRequired, //objectが必須にしたい項目。
    loginUser:PropTypes.func.isRequired, //objectが必須にしたい項目。
    user:PropTypes.object.isRequired, //objectが必須にしたい項目。
    UI:PropTypes.object.isRequired //objectが必須にしたい項目。
};

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    user:state.user,
    UI:state.UI
});

export default connect(mapStateToProps,{loginUser,logoutUser,signupUser})(MypageLeft);

