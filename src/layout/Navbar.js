import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom'

import { ReactComponent as Logo } from '../images/logo.svg';
import {logoutUser,uploadImage,loginUser} from '../redux/actions/userActions';
import { ReactComponent as LogoWhite } from '../images/LogoWhite.svg';
import { signupUser } from '../redux/actions/userActions';

import Logoimg from '../images/logoimg.svg';
import Googleicon from '../images/google.svg';
import Modal from 'react-modal';
import MovileNav from './MobileNav'
import TwLogo from '../images/Twitter_Logo.svg'
import { DisappearedLoading } from 'react-loadingg';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ShareIcon from '@material-ui/icons/Share';

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
        animationName: 'login-modal',
        animationDelay : '2s'
   }
  };
const customStylesMypage = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border: 0,
        animationName: 'login-modal',
        animationDuration: '0.5s',
        animationName: 'sample01'
      },

    content : {
        zIndex:'100',
        position:'fixed',
        top                   : '2rem',
        left:'none',
        right                 : '13rem',
        bottom                : 'auto',
        overflow:'none',
        transform             : 'translate(-50%, -50%)',
        background: 'none',
        border: 'none',
        animationName: 'sample01',
        animationDelay: '2s',

   }
  };


export class Navbar extends Component {
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
              MypageOpen:''
          };
          this.openModalLogin = this.openModalLogin.bind(this);
          this.closeModalLogin = this.closeModalLogin.bind(this);
          this.openModalSignup = this.openModalSignup.bind(this);
          this.closeModalSignup = this.closeModalSignup.bind(this);
          this.handleChangeEmail = this.handleChangeEmail.bind(this);
          this.handleChangePassword = this.handleChangePassword.bind(this);
          this.MypageOpen=this.MypageOpen.bind(this);
        }


          componentWillReceiveProps(nextProps) {
            if (nextProps.UI.errors) {
              this.setState({ errors: nextProps.UI.errors.general });
            }
              console.log(nextProps.UI.errors)

          }

          //ログイン
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

    ///新規登録
         openModalSignup() {
        this.setState({modalIsOpenLogin:  false});
          this.setState({modalIsOpenSignup: true});
          document.body.setAttribute('style', 'overflow: hidden;')
        }

    closeModalSignup() {
        this.setState({modalIsOpenLogin:  false});
            this.setState({ modalIsOpenSignup: false });
            document.body.removeAttribute('style', 'overflow: hidden;')
        }

        handleLogout = () => {
            this.props.logoutUser();

        }

          handleSubmit =(event) =>{
              event.preventDefault();
              const userData = {
                 email:this.state.EmailInput,
                 password:this.state.PassInput
             };
              this.props.loginUser(userData, this.props.history);
              console.log(userData)
          };


            handleSubmitSignup =(event) =>{
                event.preventDefault();
                this.setState({
                    loading:true
                });
                const newUserData = {
                    email:this.state.EmailInput,
                    password:this.state.PassInput,
                    confirmPassword:this.state.confirmPassword,
                    userName:this.state.userName
                }
                this.props.signupUser(newUserData, this.props.history);
                console.log(newUserData)
            };


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

          handleChangeConPassword= (event) => {
           this.setState({
            confirmPassword:event.target.value
          });
          };

          handleChangeUser= (event) => {
           this.setState({
            userName:event.target.value
          });
          };

    MypageOpen() {
        if (this.state.MypageOpen) {
            this.setState({
                MypageOpen: ''
            })
        }
        if (!this.state.MypageOpen) {
            this.setState({
                MypageOpen: 'ture'
            })
        }
    }



    render() {
        const {UI: {loading }} = this.props;
        const { errors } = this.state;
        const { authenticated } = this.props;
        console.log(this.props)
        console.log(loading)

        return (

<>
                {authenticated ? (
                      <div className="nav nav_color" >
                      <div className="nav-inner">
                          <div className="nav-title">
                              <Link to="/" className="nav-titile-logo ">
                                  <Logo  className="logo__size-pc"/>
                                  <Logo  className="logo__size-sp"/>
                              </Link>
                          </div>

                          <MovileNav/>
                          {/* ///////////////////////
                          PC時のメニュー画面
                          /////////////////////// */}
                              <ul className="nav-items_center">
                              <Link to="/" className="nav-item nav-item__black">ホーム</Link>
                              <Link to="/about" className="nav-item nav-item__black">サービスについて</Link>
                              <Link to="/park/search" className="nav-item nav-item__black">公園をさがす</Link>
                              </ul>
                            <ul className="nav-items_center-">
                            <Link to='/like' className="nav-item-out">
                                    <FavoriteRoundedIcon style={{ fontSize: '26', color: '#93918f' }} />
                                    <p className="nav-item-font">行きたい</p>
                                </Link>
                         <Link to='/mypage'　className="nav-items_accout" >
                                    <img src={this.props.user.credentials.imageUrl} className="Nav-profileImage" />
                                </Link>




                                <Modal
                         isOpen={this.state.MypageOpen}
                         onAfterOpen={this.afterOpenModal}
                         onRequestClose={this.MypageOpen}
                         style={customStylesMypage}
                         contentLabel="Example Modal"
                        >
                                <li class="hidden_show">
                                    <ul className="rectangle">
                                            <li className="nav-rectangle-item__mypage">
                                                <div className="sidemenu-item-inner">
                                                <img src={this.props.user.credentials.imageUrl} className="Nav-profileImage"/>
                                                    {/* <AccountCircleIcon style={{ fontSize: '48', color: '#777777' }} /> */}
                                                    <div className="sidemenu-item-inner-profile">
                                                        <p className="sidemenu-item-inner-profile_Name">{this.props.user.credentials.userName}</p>
                                                    <Link to="/Mypage" className="sidemenu-item-inner-profile_mypage">マイページへ
                                                    </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-rectangle-item">
                                                <Link to="/like" className="sidemenu-item-inner">
                                                    <FavoriteRoundedIcon style={{fontSize:'18',color:'#424242'}}/>
                                                <p className="sidemenu-item-inner_p">いいねした公園</p>
                                            </Link>
                                            </li>
                                            <li className="nav-rectangle-item">
                                                <Link to="/Mypage" className="sidemenu-item-inner">
                                                    <ShareIcon style={{fontSize:'18',color:'#242424'}}/>
                                                <p className="sidemenu-item-inner_p">アプリをシェアする</p>
                                            </Link>

                                            </li>


                                        <li className="nav-rectangle-item" onClick={this.handleLogout}>サインアウト</li>
                                    </ul>
                                    </li>
                                    </Modal>
                            </ul>
                        </div>
                    </div>
                ):(
                    <div className="nav nav_color" >
            <div className="nav-inner">
                <div className="nav-title">
                    <Link to="/" className="nav-titile-logo ">
                        <Logo className="logo__size"/>
                    </Link>
                </div>

                <MovileNav/>
                {/* ///////////////////////
                PC時のメニュー画面
                /////////////////////// */}
                    <ul className="nav-items_center">
                    <Link to="/" className="nav-item nav-item__black">ホーム</Link>
                    <Link to="/about" className="nav-item nav-item__black">サービスについて</Link>
                    <Link to="/park/search" className="nav-item nav-item__black">公園をさがす</Link>
                    </ul>
                    <ul className="nav-items_center">
                    <div className="nav-item nav-item_login login_color">

                    <p onClick={this.openModalSignup} className="SingupBtn" >新規登録</p>
                                    <p onClick={this.openModalLogin} className="nav-item_login">ログイン</p>

                        <Modal
                         isOpen={this.state.modalIsOpenLogin}
                         onAfterOpen={this.afterOpenModal}
                         onRequestClose={this.closeModalLogin}
                         style={customStyles}
                         contentLabel="Example Modal"
                        >
                        <div className ="login-modal">
                            <div className="login-modal-inner">
                                <div className="login-title-head">
                                    {/* <img src={Logoimg} className="gl-logo__"/> */}
                                    <h2 className="login-title-size ">ログインする</h2>
                                </div>
                                <div className="sns-login-items">
                                    <div className="sns-login">
                                        <img src={Googleicon} className="gl-logo"/>
                                        <p>Googleではじめる</p>
                                    </div>
                                    <div className="sns-login tw-color">
                                    <img src={TwLogo} className="tw-logo"/>
                                        <p>twitterではじめる</p>
                                    </div>
                                </div>
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
                                                // disabled={this.state.PassInput.length > 8 ? false : true
                                                                >
                                                {loading? <DisappearedLoading color='#ffffff' className="c-cJSrbW fZjnHv"/>:'ログインする'}


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


                        <Modal
                         isOpen={this.state.modalIsOpenSignup}
                         onAfterOpen={this.afterOpenModal}
                         onRequestClose={this.closeModalSignup}
                         style={customStyles}
                         contentLabel="Example Modal"
                        >
                        <div className ="login-modal">
                            <div className="login-modal-inner">
                                <div className="login-title-head">
                                    {/* <img src={Logoimg} className="gl-logo__"/> */}
                                    <h2 className="login-title-size ">新規登録する</h2>
                                </div>
                                <div className="sns-login-items">
                                    <div className="sns-login">
                                        <img src={Googleicon} className="gl-logo"/>
                                        <p>Googleではじめる</p>
                                    </div>
                                    <div className="sns-login tw-color">
                                    <img src={TwLogo} className="tw-logo"/>
                                        <p>twitterではじめる</p>
                                    </div>
                                </div>
                                <div className="mail-login mail-login-pc ">
                                    <h2>メールアドレスではじめる</h2>
                                    <p className="valid">{this.state.errors}</p>
                                    <form noValidate onSubmit={this.handleSubmitSignup} className="login-form">


                                        <div className="login-mail-input">
                                            <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            label="Email"
                                            className="mail-input"
                                            placeholder="メールアドレス"
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

                                            <div className="login-mail-input">
                                            <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            label="confirm Password"
                                            className="Reg-InputForm"
                                            //   helperText={this.state.errors.confirmPassword}
                                            //   error={this.state.errors.confirmPassword ? true : false}
                                            value={this.state.confirmPassword}
                                            onChange={this.handleChangeConPassword}
                                            fullWidth
                                            />
                                            </div>

                                         <div className="login-mail-input">
                                         <input
                                        id="userName"
                                        name="userName"
                                        type="text"
                                        label="userName"
                                        className="Reg-InputForm"
                                        //   helperText={this.state.errors.handle}
                                        //   error={this.state.errors.handle ? true : false}
                                        value={this.state.userName}
                                        onChange={this.handleChangeUser}
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
                                                                >
                                                                      {loading? <DisappearedLoading color='#ffffff' className="c-cJSrbW fZjnHv"/>:'はじめる'}
                                        </button >
                                        </div>
                                        <br />
                                            <small onClick={this.openModalLogin}  >
                                            アカウントをお持ちでない方はこちら
                                            </small>
                                        </form>
                                </div>

                            </div>
                        </div>
                        </Modal>

                    </div>



                                </ul>
                            </div>
                            </div>

                )}



</>

        )
    }
}


Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    classes:PropTypes.object.isRequired, //objectが必須にしたい項目。
    loginUser:PropTypes.func.isRequired, //objectが必須にしたい項目。
    user:PropTypes.object.isRequired, //objectが必須にしたい項目。
    UI:PropTypes.object.isRequired //objectが必須にしたい項目。
  };



//Reduxはstate管理
  const mapStateToProps = (state) => ({
    user:state.user,
    authenticated: state.user.authenticated,
    user:state.user,
    UI: state.UI,
    search: state,
    data:state.data
  });



  export default connect(mapStateToProps,{loginUser,logoutUser,signupUser})(Navbar);
