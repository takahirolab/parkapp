import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

//mui stuff

import {connect} from 'react-redux';
import { signupUser } from '../redux/actions/userActions';
import Navbar from '../layout/Navbar'
import { ReactComponent as Logo } from '../images/logo.svg';


import Grid from '@material-ui/core/Grid';
const styles ={
    form :{
    textAlign:'center'
    },
    image:{
        margin:'20px auto 20px auto'
    },
    pageTitle:{
        margin:'10px auto 10px auto'
    },
    textField:{
       margin: '10px auto 10px auto'
    },
    button :{
        marginTop:20,
        position:'relative'
    },
    customError:{
        color:'red',
        fontSize:'0.08rem',
        marginTop:10
    },
    progress:{
        position:'absolute'
    }

}

export class Signup extends Component {
constructor(){
    super();
    this.state={
        email:'',
        password:'',
        confirmPassword:'',
        loading:false,
        error:{}
    }
}

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
        console.log(this.state.data)
        const {classes,UI:loading} = this.props;
        const {errors}=this.state;

      return (
       <>

          <div className="signup-data">
            <h2 className="h2 align-center margin-top">アカウントを作成する</h2>
            <form noValidate onSubmit={this.handleSubmit} className="container_main container_paddinng RegForm">

              <div className="Text-Input">
                  <h3 className="h3 text-field-label">メールアドレス（必須)</h3>
                <input
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  className="Reg-InputForm"
                //   helperText={this.state.error.email}
                //   error={this.state.errors ? true : false}r
                  value={this.state.email}
                  onChange={this.handleChange}
                  fullWidth
                    />
              </div>
              <div className="Text-Input">
              <h3 className="h3 text-field-label">パスワード</h3>
            <input
              id="password"
              name="password"
              type="password"
              label="Password"
              className="Reg-InputForm"
            //   helperText={this.state.errors.password}
            //   error={this.state.errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
                />
                <p className="h3 text-field-label">半角整数・記号８文字以上で入力してください</p>
                 </div>

              <div className="Text-Input">
              <h3 className="h3 text-field-label">パスワード確認用</h3>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="confirm Password"
              className="Reg-InputForm"
            //   helperText={this.state.errors.confirmPassword}
            //   error={this.state.errors.confirmPassword ? true : false}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              fullWidth
                />
                 </div>

              <div className="Text-Input">
              <h3 className="h3 text-field-label">ユーザー名</h3>
            <input
              id="userName"
              name="userName"
              type="text"
              label="userName"
              className="Reg-InputForm"
            //   helperText={this.state.errors.handle}
            //   error={this.state.errors.handle ? true : false}
              value={this.state.userName}
              onChange={this.handleChange}
              fullWidth
                />
              </div>

              <p className="UserPolicy">この登録をもって利用規約とプライバシーポリシーに同意したことになります。</p>

              {this.state.errors && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
              )}

            <button
              type="submit"
              variant="contained"
              color="primary"
              className="btn"
              disabled={loading}
            >
              登録する！
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </button>
            <br />
            <small className="ChangToLogin">
              すでに登録済みの方はこちら <Link to="/login">ログイン</Link>
            </small>
          </form>

          </div>
          </>
        )
    }
}

 Signup.propTypes ={
   classes:PropTypes.object.isRequired,
   user:PropTypes.object.isRequired,
   UI:PropTypes.object.isRequired,
   signupUser:PropTypes.func.isRequired
 }


const mapStateToProps =(state) =>({
  user:state.user,
  UI:state.UI
})


export default connect(
  mapStateToProps,
  {signupUser})
  (withStyles(styles)(Signup));
