import React, { Component } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { getUserData } from '../../redux/actions/dataActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'

import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import TurnedInNotRoundedIcon from '@material-ui/icons/TurnedInNotRounded';
import QueryBuilderRoundedIcon from '@material-ui/icons/QueryBuilderRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import { LIKE_SCREAM } from '../../redux/types';
import LikeButton from '../../components/park/LikeButton'
import ScreamSkeleton from '../../util/ScreamSkeleton';

import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import CloseIcon from '@material-ui/icons/Close';
import MapageMain  from './MypageMain'

export class Like extends Component {

    render() {
        const {loading } = this.props.data;
        const {authenticated} = this.props;
        const likes = this.props.data.likes
        const parks = this.props.data
        console.log(parks)
        // console.log(this.props.data.credentials.userName)

        return (
            <>

<Navbar/>
                {/* <div className="container_paddinng searchpark-pc like-margin"> */}

                    <div className="Mypage-like-box">
                    <div className="Mypage-like-inner">
                        <h2 className="Mypage-item-h2">{this.props.user.credentials.userName}</h2><p style={{fontSize:16}}>&nbsp;さんが行きたい公園</p>
                    </div>

                    <div className="SeRe like__margin">
                            <h2 className="SeRe__h2-desc">公園の数</h2>
                        <h2 className="SeRe__h2">{likes.length}</h2>
                                <p>件</p>
                        </div>
                        </div>

                <div className="ParkLike-items-pc" >
                        { !loading ?
                            likes.length > 0 ?
                            likes.map((like) =>
                             <GoodList key={like.parkId} like={like} />) :
                             <div className="searchResult-sorry searchResult-sorry_inner">

                             <h2>いいねされた公園が見つかりません。</h2>
                                    <p>気になった公園をいいねしよう！！</p>
                                    <Link to='/park/search'　className="Mypage-btn Mypage-btn__margin">公園を探す</Link>
                             </div> : <ScreamSkeleton likes={likes}/>}
                    </div>
                    {/* </div> */}
                    <Footer />
            </>

        )

    }

}

Like.propTypes = {
    park: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired

};

const mapStateToProps = (state) => ({
    data: state.user,
    user:state.user,
    UI:state.UI
});

export default connect(mapStateToProps, { getUserData })(Like);


class GoodList extends Component {
    constructor() {
        super();
        this.state = {
            modalLike: '',
            LikeType: 'select',
        };
        this.openLikeModal = this.openLikeModal.bind(this);
    }

    openLikeModal() {
!this.state.modalLike?
        this.setState({
            modalLike:true
    }):
        this.setState({
            modalLike:''
    })
    }


    render() {

        return (
            <>
            <div className=" Likeparkitem">
                <Link to={`/park/${this.props.like.parkId}`} onClick={this.CountList}>
                <img className="ParkLike-item-img-pc" src={this.props.like.parkImage}/>
                    <div className="ParkLike-item-detil">
                        <h2 className="parksResultlike-item-name-pc">{this.props.like.parkName}</h2>
                        <div className="Park-location-pc">
                        <LocationOnRoundedIcon style={{ fontSize: 15 }}/>
                        <p className="parksResult-locAtime-name-pc">{this.props.like.parkLoacation}</p>
                        </div>
                    </div>

                    </Link>
                    <FavoriteRoundedIcon style={{ fontSize: 26, color:'#DC4C65'}} LikeType={this.state.LikeType} parkId={this.props.like.parkId} className="parkLike-mypage" onClick={this.openLikeModal}/>
                    {this.props.like.parkTag3?
                    <div className="parkSpecialTag">{this.props.like.parkTag3}</div>:''
                    }
            </div>

            <Modal
            isOpen={this.state.modalLike}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.openLikeModal}
            style={customStyles}
            contentLabel="Example Modal"
                >
            <div className="like-modal">
                        <p>いいねした公園から削除しますか</p>
                        <div className="like-bodal-btn-inner">
                            <button className="like-modal-btn like-modal-btn_color" onClick={this.openLikeModal}>いいえ</button>
                            <LikeButton parkId={this.props.like.parkId} LikeType={this.state.LikeType}/>
                        </div>
                        <CloseIcon className="likemodal-close" style={{ fontSize: 30 }} onClick={this.openLikeModal}/>
            </div>
        </Modal>
            </>
        )
    }
}

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
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


