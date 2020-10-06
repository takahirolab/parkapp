import React, { Component } from 'react'
import Navbar from '../../layout/Navbar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { connect } from 'react-redux';
import { getUserData } from '../../redux/actions/dataActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import TurnedInNotRoundedIcon from '@material-ui/icons/TurnedInNotRounded';
import QueryBuilderRoundedIcon from '@material-ui/icons/QueryBuilderRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import { LIKE_SCREAM } from '../../redux/types';



export class Like extends Component {

    render() {
        const {authenticated} = this.props;
        const likes = this.props.data.likes
        const parks = this.props.data
        console.log(likes)
        // console.log(this.props.data.credentials.userName)

        return (
            <>
                <Navbar />
                        <div>
                            <div className="Mypage-item-padding">
                                <h2 className="Mypage-item-h2">いいね一覧</h2>
                                <div>
                                    <div className="Mypage-good">
                                        <div className="Mypage-good-item">公園のいいね</div>
                                        <div className="Mypage-good-item" >アクティビティのいいね</div>
                                    </div>
                                    <div>
                                        <p>公園のいいね</p>
                                        {
                                            likes.map((like) =>
                                                <GoodList key={like.parkId} like={like} />)
                                        }
                                    </div>
                                    <div>
                                        {/* <p>アクティビティのいいね</p>
                                          {
                                            likes.map((like) =>
                                                <GoodList key={like.parkId} like={like} />)
                                        } */}
                                    </div>
                                </div>
                            </div>
                </div>
            </>

        )

    }

}

Like.propTypes = {
    park: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.user
});

export default connect(mapStateToProps, { getUserData })(Like);


class GoodList extends Component {
    render() {
        return (
            <Link to={`/park/${this.props.like.parkId}`} className="parksResult-item" >
                <img  className="parksResult-item-img" src={this.props.parkImage} />
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
