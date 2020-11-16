import React, { Component } from 'react'
import {logoutUser} from '../redux/actions/userActions';
import { connect } from 'react-redux';


export class MypageSignOut extends Component{
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout () { this.props.logoutUser();}

  render() {
    return (<p onClick={this.handleLogout}>サインアウト</p>)}}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user:state.user,
});

export default connect(mapStateToProps,{logoutUser})(MypageSignOut);
