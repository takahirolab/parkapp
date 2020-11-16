import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';


export class NavbarHomeAuth extends Component {
        constructor() {
          super();
        }

    render() {
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


NavbarHomeAuth.propTypes = {
    user:PropTypes.object.isRequired, //objectが必須にしたい項目。
  };



//Reduxはstate管理
  const mapStateToProps = (state) => ({
    user:state.user,
  });
  export default connect(mapStateToProps)(NavbarHomeAuth);
