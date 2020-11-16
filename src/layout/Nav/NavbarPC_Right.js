import React, { Component } from 'react'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';


export class NavbarPC_Right extends Component{
  render(){
  return (
    <ul className="nav-items_center-">
          <Link to='/like' className="nav-item-out">
              <FavoriteRoundedIcon style={{ fontSize: '26', color: '#93918f' }} />
              <p className="nav-item-font">行きたい</p>
          </Link>
          <Link to='/mypage'　className="nav-items_accout" >
              <img src={this.props.user.credentials.imageUrl} className="Nav-profileImage" />
          </Link>
      </ul>
  )
}
}
const mapStateToProps = (state) => ({user:state.user});

export default connect(mapStateToProps)(NavbarPC_Right);
