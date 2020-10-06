import React, { Component } from 'react'
import MyButton from '../../util/MyButton';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Bookmark from '@material-ui/icons/Bookmark';
import {loginUser } from '../../redux/actions/userActions';

//redux

import  {connect} from 'react-redux';
import {likeScream, unlikeScream} from '../../redux/actions/dataActions';

import Logoimg from '../../images/logoimg.svg';
import Googleicon from '../../images/google.svg';
import Modal from 'react-modal';
import Login from '../../pages/login';

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

export class likeButton extends Component {
    constructor() {
        super();
        this.state = {
          modalIsOpen: false,
          email:'',
          password:'',
          error:{}
        };
        this.openModal = this.openModal.bind(this);
      //   this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
      openModal() {
        this.setState({modalIsOpen: true});
        document.body.setAttribute('style', 'overflow: hidden;')
      }
      // afterOpenModal() {
      //   this.subtitle.style.color = '#484848';
      // }
      closeModal() {
        this.setState({modalIsOpen: false});
        document.body.removeAttribute('style', 'overflow: hidden;')
      }

      handleLogout = () => {
          this.props.logoutUser();
        }

      //   componentDidUpdate(nextProps) {
      //     if (nextProps.UI.errors) {
      //       this.setState({ errors: nextProps.UI.errors });
      //     }
      //   }

        handleSubmit =(event) =>{
            // preventDefault()は、実行したイベントがキャンセル可能である場合、
            // イベントをキャンセルするためのメソッドです。
            this.closeModal();
           event.preventDefault();
           const userData = {
               email:this.state.email,
               password:this.state.password
           };

           this.props.loginUser(userData,this.props.history);
            };



        handleChange= (event) => {
         this.setState({
        [event.target.name]:event.target.value
        });
        };


    likedScream = () =>{
        if(this.props.user.likes &&
            this.props.user.likes.find(
                (like) => like.parkId === this.props.parkId))
        return true;
        else return false;
    };

    likeScream = () =>{
        this.props.likeScream(this.props.parkId);
    }

    unlikeScream =() =>{
        this.props.unlikeScream(this.props.parkId);
    }



    render() {
        const {authenticated} =this.props.user;
            const likeButton = !authenticated ? (

                <div className="park-bookmark">

                    <Bookmark className="bookmark" onClick={this.openModal} style={{ fontSize:40 }}/>
                    <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >

                    {/* <h2 ref={subtitle => this.subtitle = subtitle}>ログイン</h2> */}
                    <div className ="login-modal">
                        <div className="login-modal-inner">
                            <div className="login-title-head">
                                <img src={Logoimg} className="gl-logo__"/>
                                <h2 className="login-title-size ">Parkrへようこそ</h2>
                            </div>
                            <div className="sns-login-items">
                                <div className="sns-login">
                                    <img src={Googleicon} className="gl-logo"/>
                                    <p>Googleではじめる</p>
                                </div>
                                <div className="sns-login tw-color">
                                    <div className="gl-logo"/>
                                    <p>twitterではじめる</p>
                                </div>
                            </div>
                            <div className="mail-login">
                                <h2>メールアドレスではじめる</h2>




                                <form noValidate onSubmit={this.handleSubmit} className="login-form">
                                    <div className="login-mail-input">
                                        <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        label="Email"
                                        className="mail-input"
                                        placeholder="メールアドレス"
                                        //   helperText={this.state.error.email}
                                        //   error={this.state.errors ? true : false}
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                        </div>

                                    <div className="login-mail-input">
                                        <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        label="Password"
                                        className="mail-input"
                                        placeholder="パスワード"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        fullWidth
                                        />
                                    </div>
                                    <p className="guidline">登録することで、利用規約とプライバシーポリシーに同意したものとみなされます。</p>

                                    <div className="login-mail-input btn-color">
                                        <button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            className="mail-registar"
                                        >
                                        はじめる
                                        </button >
                                    </div>
                                    <br />
                                        <small>
                                        dont have an account ? sign up <Link to="/signup">here</Link>
                                        </small>
                                    </form>
                            </div>

                        </div>
                    </div>
                    </Modal>
                  </div>




            ): this.likedScream() ? (
                <div className="park-bookmark">
                    <button  onClick={this.unlikeScream}>
                        <Bookmark className="bookmark " style={{ fontSize:40 }}/>
                    </button>
                    </div>
                ):(
                <div className="park-bookmark">
                    <button  onClick={this.likeScream} >
                       <Bookmark className="bookmark bookmark-color" style={{ fontSize:40 }}/>
                    </button>
                </div>
                );


        return likeButton;
    }
}


likeButton.PropType ={
    user:PropTypes.object.isRequired,
    parkId:PropTypes.string.isRequired,
    likeScream:PropTypes.func.isRequired,
    unlikeScream:PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
    loginUser:PropTypes.func.isRequired, //objectが必須にしたい項目。
    user:PropTypes.object.isRequired, //objectが必須にしたい項目。
}

const mapStateToProps =(state) => ({
    user:state.user,
    authenticated: state.user.authenticated,
    user:state.user,
    UI:state.UI
})


const mapActionsToProps ={
    likeScream,
    unlikeScream,
    loginUser
}

export default connect(mapStateToProps,mapActionsToProps)(likeButton);
