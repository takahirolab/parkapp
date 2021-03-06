import React, { Component } from 'react'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MovileNav from './Nav/MobileNav'
import NavbarPC_Center from './Nav/NavbarPC_Center'

import NavbarHomeAuth from './Nav/NavbarHomeAuth'

import LoginSignupModal from './Nav/LoginSignup-modal_'
import NavbarTitlePC from './Nav/NavbarTitlePC'

export class Navbar extends Component {
        constructor(props) {
          super(props);
          this.state = {
          };
        }
    render() {
        const { authenticated } = this.props;
        return (
<>
                {authenticated ? (
                      <div className="nav nav_color" >
                      <div className="nav-inner">
                          <NavbarTitlePC/>{/* //ナビゲーションロゴ表示 */}
                            <MovileNav/> {/* //モバイルのみ表示 */}
                            <NavbarPC_Center />{/* //メニュー表示 */}
                            <NavbarHomeAuth/>{/* //ログインアイコン表示 */}
                        </div>
                    </div>
                ):(
                    <div className="nav nav_color" >
                     <div className="nav-inner">
                        <NavbarTitlePC/>{/* //ナビゲーションロゴ表示 */}
                        <MovileNav />{/* //モバイルのみ表示 */}
                        <NavbarPC_Center />{/* //メニュー表示 */}
                    <ul className="nav-items_center">
                        <div className="nav-item nav-item_login login_color">
                        <LoginSignupModal/>{/* //ログイン・サインアップアイコン表示 */}
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
  };



//Reduxはstate管理
  const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
  });



  export default connect(mapStateToProps)(Navbar);
