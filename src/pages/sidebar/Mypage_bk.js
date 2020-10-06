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

import ParkPost from '../ParkPost';
import ActivityPost from '../ActivityPost';
import Contact from '../Contact';


export class Mypage extends Component {

    render() {
        const likes = this.props.data.likes
        const parks = this.props.data
        console.log(likes)
        // console.log(this.props.data.credentials.userName)





        return (
            <>
                <Navbar />
                <Tabs className="container-top">
                    <TabList className="Mypage-left">
                        <Tab className="Mypage-item">基本情報</Tab>
                        <Tab className="Mypage-item" >いいね一覧</Tab>
                        <Tab className="Mypage-item" >投稿した公園</Tab>
                        <Tab className="Mypage-item" >投稿したアクティビティ</Tab>
                        <Tab className="Mypage-item" >ガイド</Tab>
                        <Tab className="Mypage-item" >参加予定のアクティビティ</Tab>
                        <Tab className="Mypage-item" >問い合わせ</Tab>
                        <Tab className="Mypage-Park-Post" >公園を投稿する</Tab>
                        <Tab className="Mypage-Park-Post Mypage-color" >アクティビティを投稿する</Tab>
                    </TabList>

                    <div className="Mypage-right">
                        <TabPanel>
                            <div className="Mypage-item-padding">
                                <h2 className="Mypage-item-h2">基本情報</h2>
                                <div className="Mypage-items">
                                    <div className="Mypage-item-right">
                                        <div className="mypage-profile"></div>
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
                        </TabPanel>
                        <TabPanel>
                            <div className="Mypage-item-padding">
                                <h2 className="Mypage-item-h2">いいね一覧</h2>
                                <Tabs>
                                    <TabList className="Mypage-good">
                                        <Tab className="Mypage-good-item">公園のいいね</Tab>
                                        <Tab className="Mypage-good-item" >アクティビティのいいね</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <p>公園のいいね</p>
                                        {
                                            likes.map((like) =>
                                                <GoodList key={like.parkId} like={like} />)
                                        }
                                    </TabPanel>
                                    <TabPanel>
                                        <p>アクティビティのいいね</p>
                                          {
                                            likes.map((like) =>
                                                <GoodList key={like.parkId} like={like} />)
                                        }
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="Mypage-item-padding">
                                <h2 className="Mypage-item-h2">投稿した公園</h2>
                                {
                                            likes.map((like) =>
                                                <GoodList key={like.parkId} like={like} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="Mypage-item-padding">
                                <h2 className="Mypage-item-h2">投稿したアクティビティ</h2>
                                {
                                            likes.map((like) =>
                                                <GoodList key={like.parkId} like={like} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="Mypage-item-padding">
                                <h2 className="Mypage-item-h2">ガイド</h2>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="Mypage-item-padding">
                                <h2 className="Mypage-item-h2">参加予定のアクティビティ</h2>
                                {
                                            likes.map((like) =>
                                                <GoodList key={like.parkId} like={like} />)
                                }
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="Mypage-item-padding">
                                <h2 className="Mypage-item-h2">お問い合わせ</h2>
                                    <Contact/>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="Mypage-item-padding">
                            <h2 className="Mypage-item-h2">公園を投稿する</h2>
                               <ParkPost/>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="Mypage-item-padding">
                                <h2 className="Mypage-item-h2">アクティビティを投稿する</h2>
                                <ActivityPost/>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
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
