import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import CircularProgress from '@material-ui/core/CircularProgress';

// Redux stuff
import { connect } from 'react-redux';
import {signupUser} from '../redux/actions/userActions';

import  Navbar  from '../layout/Navbar'


import Logoimg from '../images/logoimg.svg';
import Googleicon from '../images/google.svg';
import Modal from 'react-modal';


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


export class Login extends Component {
  constructor() {
    super();
    this.state={
      email:'',
      password:'',
      confirmPassword:'',
      loading:false,
      error:{}
    }
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

//   componentDidUpdate(nextProps) {
//     if (nextProps.UI.errors) {
//       this.setState({ errors: nextProps.UI.errors });
//     }
//   }

handleSubmit =(event) =>{
  // preventDefault()は、実行したイベントがキャンセル可能である場合、
  // イベントをキャンセルするためのメソッドです。
 event.preventDefault();
 this.setState({
     loading:true
 });

 const newUserData = {
     email:this.state.email,
     password:this.state.password,
     confirmPassword:this.state.confirmPassword,
     userName:this.state.userName
 }

this.props.signupUser(newUserData,this.props.history);
  };


  handleChange= (event) => {
   this.setState({
  [event.target.name]:event.target.value
  });
  };






    render() {
        return (


<div className="nav-item">
<h2 className="nav-item nav-item-btn" onClick={this.openModal} >新規登録</h2>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        >

                        {/* <h2 ref={subtitle => this.subtitle = subtitle}>ログイン</h2> */}
                        <div className ="login-modal sign-up">
                            <div className="login-modal-inner">
                                <div className="login-title-head">
                                    <h2 className="login-title-size ">ログインする</h2>
                                </div>
                                <div className="sns-login-items">
                                    <div className="sns-login">
                                        <img src={Googleicon} className="gl-logo"/>
                                        <p>Googleでログインする</p>
                                    </div>
                                    <div className="sns-login tw-color">
                                        <div className="gl-logo"/>
                                        <p>twitterでログインする</p>
                                    </div>
                                </div>
                                <div className="mail-login">
                                    <h2>メールアドレスでログインする</h2>




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
                                        <div className="login-mail-input">
                                            <input
                                             id="confirmPassword"
                                             name="confirmPassword"
                                             type="password"
                                             label="confirm Password"
                                            className="mail-input"
                                            placeholder="確認用パスワード"
                                            value={this.state.confirmPassword}
                                            onChange={this.handleChange}
                                            fullWidth
                                            />
                                        </div>
                                        <div className="login-mail-input">
                                            <input
                                           id="userName"
                                           name="userName"
                                           type="text"
                                           label="userName"
                                            className="mail-input"
                                            placeholder="ユーザー名"
                                            value={this.state.userName}
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
                                            ログインする
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


        )
    }
}




// イベントの呼び出し元のオブジェクトを取得するには、event.targetを使用します。

// propsはコンポーネント作成時に値を指定することでコンポーネントで表示させたいデータを指定できます。
// React.jsでコンポーネントを定義する時に、PropTypesを指定することでpropsにおける引数の入力チェックを行えます。
// 数値や文字列、配列などのバリデーションを行いたい時に便利です。
Login.protoTypes =
 {
 classes:PropTypes.object.isRequired, //objectが必須にしたい項目。
 loginUser:PropTypes.func.isRequired, //objectが必須にしたい項目。
 user:PropTypes.object.isRequired, //objectが必須にしたい項目。
 UI:PropTypes.object.isRequired //objectが必須にしたい項目。
 }

const mapStateToProps = (state)=>({
  user:state.user,
  UI:state.UI
});




export default  connect(mapStateToProps,{signupUser})(Login);
