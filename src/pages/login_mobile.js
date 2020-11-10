import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CancelIcon from '@material-ui/icons/Cancel';
// MUI Stuff


// Redux stuff
import { connect } from 'react-redux';



import Logoimg from '../images/logoimg.svg';
import Googleicon from '../images/google.svg';
import Modal from 'react-modal';

import { loginUser } from '../redux/actions/userActions';

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


export class Login_mobile extends Component {
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






render() {

  const {classes,authenticated} = this.props;
const {errors}=this.state;


  return (

    <div className="login-modal">
      <Link to="/signup" className="MoveToSignup">
        <p>アカウントを持っていない方はこちら</p>
      </Link>
      <Link to="/" className="MoveToHome">
        <CancelIcon style={{fontSize:30,color:'#dedede'}}/>
      </Link>
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
                              {/* <img src={TwLogo} className="tw-logo"/> */}
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





  )
}
}


Login_mobile.propTypes = {
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



const mapActionsToProps = { loginUser };

export default connect(mapStateToProps,mapActionsToProps)(Login_mobile);
