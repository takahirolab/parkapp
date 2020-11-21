import React, { Component } from 'react'
import MyButton from '../../util/MyButton';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {loginUser } from '../../redux/actions/userActions';

//redux

import  {connect} from 'react-redux';
import {likeScream, unlikeScream} from '../../redux/actions/dataActions';

import CancelIcon from '@material-ui/icons/Cancel';
import Googleicon from '../../images/google.svg';
import Modal from 'react-modal';

import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import TwLogo from '../../images/Twitter_Logo.svg'

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
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpenLogin: false,
            modalIsOpenSignup: false,
            email:'',
            password:'',
              error: {},
              EmailInput: '',
              PassInput: '',
              confirmPassword: '',
              userName: '',
              MypageOpen: '',
            likeColor: '#00000080',
            likeAnimation:''
        };
        this.openModalLogin = this.openModalLogin.bind(this);
        this.closeModalLogin = this.closeModalLogin.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    componentDidMount() {
        this.likedScream();
    }

    likedScream = () =>{
        if(this.props.user.likes &&
            this.props.user.likes.find(
                (like) => like.parkId === this.props.parkId)) {
            this.setState({
                likeColor: '#DC4C65'
            })
        }else {
                this.setState({
                    likeColor:'#00000080'
                })
            }
        }


    likeScream = () => {
        if (this.state.likeColor === '#00000080') {
            this.props.likeScream(this.props.parkId)
            this.setState({
                likeColor: '#DC4C65',
                likeAnimation:'LikeAnimation 0.3s ease 0s 1 alternate none running'
            })
        } else {
            this.props.unlikeScream(this.props.parkId)
            this.setState({
                likeColor: '#00000080',
                likeAnimation:''
            })
        }
    }


    // unlikeScream =() =>{
    //     this.props.unlikeScream(this.props.parkId);
    // }

    openModalLogin() {
        this.setState({modalIsOpenSignup: false});
        this.setState({modalIsOpenLogin: true});
        document.body.setAttribute('style', 'overflow: hidden;')
      }

  closeModalLogin() {
      this.setState({modalIsOpenSignup: false});
          this.setState({ modalIsOpenLogin: false });
          document.body.removeAttribute('style', 'overflow: hidden;')
  }
  handleChangeEmail= (event) => {
    this.setState({
   EmailInput:event.target.value
   });
   };

   handleChangePassword= (event) => {
    this.setState({
   PassInput:event.target.value
   });
   };

      handleSubmit =(event) =>{
        event.preventDefault();
        const userData = {
           email:this.state.EmailInput,
           password:this.state.PassInput
       };
        this.props.loginUser(userData, this.props.history);
        console.log(userData)
      };

    test() {

    }

    render() {
        // console.log(this.props.parkId)
        // console.log(this.props.LikeType)
        const { authenticated } = this.props.user;
        const likeButton = !authenticated ? (

            <div className="park-bookmark">
                <FavoriteRoundedIcon className="bookmark" onClick={this.openModalLogin} style={{ fontSize: 26, color: '#00000080' }} />
                <Modal
                    isOpen={this.state.modalIsOpenLogin}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModalLogin}
                    style={customStyles}
                    contentLabel="Example Modal"
                    className="like-btn-modalSP"
                >
                    <div className="login-modal">
                    <Link to="/signup" className="MoveToSignup">
                        <p>新規登録する</p>
                    </Link>
                         <CancelIcon className="login-modalSP-close" style={{fontSize:30,color:'#dedede'}} onClick={this.closeModalLogin}/>

                        <div className="login-modal-inner">
                            <div className="login-title-head">
                                {/* <img src={Logoimg} className="gl-logo__"/> */}
                                <h2 className="login-title-size ">ログインする</h2>
                            </div>
                            {/* <div className="sns-login-items">
                                <div className="sns-login">
                                    <img src={Googleicon} className="gl-logo" />
                                    <p>Googleではじめる</p>
                                </div>
                                <div className="sns-login tw-color">
                                    <img src={TwLogo} className="tw-logo" />
                                    <p>twitterではじめる</p>
                                </div>
                            </div> */}
                            <div className="mail-login mail-login-pc ">
                                <h2>メールアドレスではじめる</h2>
                                <p className="valid">{this.state.errors}</p>



                                <form noValidate onSubmit={this.handleSubmit} className="login-form">


                                    <div className="login-mail-input">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            label="Email"
                                            className="mail-input"
                                            placeholder="メールアドレス"
                                            helperText={this.state.error.email}
                                            error={this.state.errors ? true : false}
                                            value={this.state.EmailInput}
                                            onChange={this.handleChangeEmail}
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
                                            value={this.state.PassInput}
                                            onChange={this.handleChangePassword
                                            }
                                            fullWidth
                                        />
                                    </div>
                                    <p className="guidline">登録することで、利用規約とプライバシーポリシーに同意したものとみなされます。</p>


                                    <div className="login-mail-input btn-color">
                                        <button
                                            type="submit"
                                            variant="contained"
                                            className="mail-registar"
                                            disabled={this.state.PassInput.length < 8 ? false : true
                                            }
                                        >ログインする
                                        </button >
                                    </div>
                                    <br />
                                    <small onClick={this.openModalSignup} >
                                        アカウントをお持ちでない方はこちら
                                            </small>
                                </form>
                            </div>

                        </div>
                    </div>
                </Modal>
            </div>

        ) :
            this.props.LikeType === 'select' ? <button className="like-modal-btn like-modal-btn_bk" onClick={this.likeScream}>はい</button>:
            <div className="park-bookmark">
                <button onClick={this.likeScream}>
                    <FavoriteRoundedIcon className="bookmark " style={{ fontSize: 26, color: this.state.likeColor,animation:this.state.likeAnimation}} />
                </button>
            </div>
            ;
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
