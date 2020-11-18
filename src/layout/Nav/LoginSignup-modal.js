import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {loginUser} from '../../redux/actions/userActions';

import { signupUser } from '../../redux/actions/userActions';
import Googleicon from '../../images/google.svg';
import Modal from 'react-modal';
import TwLogo from '../../images/Twitter_Logo.svg'
import { DisappearedLoading } from 'react-loadingg';


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

// Modal.setAppElement('#root')
  //任意のアプリを設定する　create-react-appなら#root
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
              MypageOpen: '',
              currentPosition: 0
          };
          this.openModalLogin = this.openModalLogin.bind(this);
          this.closeModalLogin = this.closeModalLogin.bind(this);
          this.openModalSignup = this.openModalSignup.bind(this);
          this.closeModalSignup = this.closeModalSignup.bind(this);
          this.handleChangeEmail = this.handleChangeEmail.bind(this);
          this.handleChangePassword = this.handleChangePassword.bind(this);
        }


          componentWillReceiveProps(nextProps) {
            if (nextProps.UI.errors) {
              this.setState({ errors: nextProps.UI.errors.general });
            }
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



          handleSubmit =(event) =>{
              event.preventDefault();
              const userData = {
                 email:this.state.EmailInput,
                 password:this.state.PassInput
             };
              this.props.loginUser(userData, this.props.history);
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

          scrollTop() {
            this.setState({
            currentPosition:Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop)})}

        componentDidMount() {
            window.addEventListener('scroll', event => this.watchCurrentPosition(), true)
          }

          componentWillUnmount() {
            window.removeEventListener('scroll', event => this.watchCurrentPosition(), false)
          }

          watchCurrentPosition() {
            console.log(this.scrollTop())
          }




    render() {
        const {UI: {loading }} = this.props;
        return (
            <>
            <p onClick={this.openModalSignup} className="SingupBtn" >新規登録</p>

                {this.state.currentPosition < 170 ? <p onClick={this.openModalLogin} style={{color:'#FFF'}}className="nav-item_login">ログイン</p>:    <p onClick={this.openModalLogin} className="nav-item_login">ログイン</p>}
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
                          placeholder="確認用パスワード"
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
                          placeholder="ユーザー名"
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



  export default connect(mapStateToProps,{loginUser,signupUser})(Navbar);
