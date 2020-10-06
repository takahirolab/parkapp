import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Profile from '../images/profile.svg'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../style.css'

import { ReactComponent as Logo } from '../images/logo.svg';
import { logoutUser, uploadImage,loginUser } from '../redux/actions/userActions';

import Logoimg from '../images/logoimg.svg';
import Googleicon from '../images/google.svg';
import Modal from 'react-modal';
import zIndex from '@material-ui/core/styles/zIndex';



import CircularProgress from '@material-ui/core/CircularProgress';
import Login from '../pages/login_mobile';
import TwLogo from '../images/Twitter_Logo.svg'
import TemporayDrawer from './TemporayDrawer'
import { ReactComponent as Cloud } from '../images/cloud.svg'
import { ReactComponent as CloudSunny } from '../images/cloudSunny.svg'
import { ReactComponent as Rain } from '../images/Rain.svg'

import axios from 'axios'

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

  Modal.setAppElement('#root') //任意のアプリを設定する　create-react-appなら#root
export class Navbar extends Component {
        constructor() {
          super();
          this.state = {
            modalIsOpen: false,
            email:'',
            password:'',
              error: {},
              weather_icon: '',
          };
          this.openModal = this.openModal.bind(this);
        //   this.afterOpenModal = this.afterOpenModal.bind(this);
          this.clsoseModal = this.closeModal.bind(this);
        }

        handleGetLatAndLng_day = async () => {
            const response_day = await axios.get('http://api.openweathermap.org/data/2.5/onecall?lat=35.681236&lon=139.767125&exclude=current&lang=ja&appid=53c3cb0dbb1e4379c04eecc993b22af1');
            const weatheritems_hourly = response_day.data.hourly[0].weather[0].description
            const test = weatheritems_hourly.includes('曇')
            console.log(test)
            console.log(weatheritems_hourly)

            if (weatheritems_hourly.indexOf('曇') != -1) {
                this.setState({ weather_icon: 'Cloud', })
            }
            if (weatheritems_hourly.indexOf('雲') != -1) {
                this.setState({ weather_icon: 'Cloud', })
            }
            if (weatheritems_hourly.indexOf('晴') != -1) {
                this.setState({ weather_icon: 'CloudSunny', })
            }
            if (weatheritems_hourly.indexOf('雨') != -1) {
                this.setState({ weather_icon: 'Rain', })
            }

        }

s
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


          componentDidMount() {
            this.handleGetLatAndLng_day();
        }






    render() {

        const {classes,authenticated} = this.props;
     const {errors}=this.state;


        return (
            <div className="nav nav_color">
            <div className="nav-inner">
                <div className="nav-title">
                    <Link to="/" className="nav-titile-logo ">
                        <Logo className="logo__size"/>
                    </Link>
                </div>

                    <div className="nav-mobile">

                        <Link to="/weather">
                            {
                                this.state.weather_icon = "Cloud" ?
                                    <Cloud className="nav-mobile__padding" /> :
                                    this.state.weather_icon = "CloudSunny" ? <CloudSunny className="nav-mobile__padding" /> :
                                    <Rain className="nav-mobile__padding" />


                            }
                        </Link>


                        {authenticated ? (
                            <TemporayDrawer />
                        ) : (
                            <div className="Nav-LoginReg">
                                <Link to="/signup" className="Nav-Registar">
                                    新規登録
                                </Link>
                                <Link to="/login" className="Nav-Login">
                                    ログイン
                                </Link>
                            </div>
                        )}
                    </div>


                {/* ///////////////////////
                PC時のメニュー画面
                /////////////////////// */}
                <ul className="nav-items_center">
                    <Link to="/about" className="nav-item nav-item__white">サービスについて</Link>
                    <Link to="/" className="nav-item nav-item__white">公園をさがす</Link>
                    <Link to="/activity" className="nav-item nav-item__white">体験をさがす</Link>
                    {/* <Link to="/article" className="nav-item nav-item__white">コラムをよむ</Link> */}

                </ul>


                {authenticated ? (
                    <ul className="nav-items_center-">
                        <input type="checkbox" id="label1"/>
                         <li　className="nav-items_accout">
                             <label for="label1"><AccountCircleIcon style={{ fontSize: 40 }}/></label></li>
                         <li class="hidden_show">
                            <ul className="rectangle">
                                <li className="nav-rectangle-item"><Link to="/Mypage">プロフィールをみる</Link></li>
                                <li className="nav-rectangle-item">公園を登録する</li>
                                <li className="nav-rectangle-item">アプリをシェアする</li>
                                <li className="nav-rectangle-item" onClick={this.handleLogout}>ログアウト</li>
                            </ul>
                        </li>
                    </ul>
                ):(
                    <ul className="nav-items_center">
                    <div className="nav-item nav-item_login login_color">


                    <h2 onClick={this.openModal}　className="nav-item_login">ログイン</h2>
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
                                    <img src={TwLogo} className="tw-logo"/>
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
                        {/* <Login/> */}
                    </div>


                    </ul>

                )}

                </div>






            </div>


        )
    }
}

//propsを通して値を受け取る子コンポーネント側で、propsのバリデート（型チェック）を行うことができます。
//コンポーネントに付属しているpropTypesプロパティを使って、受け取るpropsの値を一つ一つの型のチェック
//や必須チェックなどを行います。なお、制約に違反していた場合でも、エラーとはならず、
//コンソール上に警告として表示されるだけとなります。
Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    classes:PropTypes.object.isRequired, //objectが必須にしたい項目。
    loginUser:PropTypes.func.isRequired, //objectが必須にしたい項目。
    user:PropTypes.object.isRequired, //objectが必須にしたい項目。
    UI:PropTypes.object.isRequired //objectが必須にしたい項目。
  };



//Reduxはstate管理
  const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    user:state.user,
    UI:state.UI
  });



  const mapActionsToProps = { logoutUser, uploadImage,loginUser };

  export default connect(mapStateToProps,mapActionsToProps)(Navbar);
