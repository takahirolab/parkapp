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
import {signupUser} from '../redux/actions/userActions';


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

export class signup extends Component {
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
        const {classes,UI:{loading}} = this.props;
        const {errors}=this.state;

        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <Typography variant="h1" className={classes.pageTitle}>
                        Signup
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
            //   helperText={this.state.error.email}
            //   error={this.state.errors ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
            //   helperText={this.state.errors.password}
            //   error={this.state.errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="confirm Password"
              className={classes.textField}
            //   helperText={this.state.errors.confirmPassword}
            //   error={this.state.errors.confirmPassword ? true : false}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="userName"
              name="userName"
              type="text"
              label="userName"
              className={classes.textField}
            //   helperText={this.state.errors.handle}
            //   error={this.state.errors.handle ? true : false}
              value={this.state.userName}
              onChange={this.handleChange}
              fullWidth
            />

              {this.state.errors && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
              )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Signup
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <small>
              Already have an account ? sign up <Link to="/login">here</Link>
            </small>
          </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

// イベントの呼び出し元のオブジェクトを取得するには、event.targetを使用します。

// propsはコンポーネント作成時に値を指定することでコンポーネントで表示させたいデータを指定できます。
// React.jsでコンポーネントを定義する時に、PropTypesを指定することでpropsにおける引数の入力チェックを行えます。
// 数値や文字列、配列などのバリデーションを行いたい時に便利です。


 signup.propTypes ={
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
  (withStyles(styles)(signup));
