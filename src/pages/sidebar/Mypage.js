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

import ParkPost from '../../pages/ParkPost';
import ActivityPost from '../../pages/ActivityPost';
import Contact from '../../pages/Contact';
import { DriveEtaTwoTone } from '@material-ui/icons';


export class Mypage extends Component {

    render() {
        const likes = this.props.data.likes
        const parks = this.props.data
        console.log(likes)
        // console.log(this.props.data.credentials.userName)





        return (
            <>
                <Navbar />
                    <div className="Mypage-right">
                        <div>
                            <div className="Mypage-item-padding">
                                <h2 className="Mypage-item-h2">基本情報</h2>
                                <div className="Mypage-items">
                                    <div className="Mypage-item-right">
                                        <img src={this.props.data.credentials.imageUrl} className="mypage-profile"/>
                                    </div>
                                    <div className="Mypage-item-left">
                                        <div className="Mypage-item-inf">
                                            <h3 className="Mypage-item-nameh2">ユーザー名</h3>
                                            <h3 className="Mypage-item-name">{this.props.data.credentials.userName}</h3>
                                        </div>
                                        <div className="Mypage-item-inf">
                                            <h3 className="Mypage-item-nameh2">カナ</h3>
                                            <h3 className="Mypage-item-name">アライタカヒロ</h3>
                                        </div>
                                        <div className="Mypage-item-inf">
                                            <h3 className="Mypage-item-nameh2">所在地</h3>
                                            <h3 className="Mypage-item-name">東京都</h3>
                                        </div>
                                        <div className="Mypage-item-inf">
                                            <h3 className="Mypage-item-nameh2">email</h3>
                                            <h3 className="Mypage-item-name">{this.props.data.credentials.email}</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>

            </>

        )

    }

}

Mypage.propTypes = {
    park: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.user
});

export default connect(mapStateToProps, { getUserData })(Mypage);


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
