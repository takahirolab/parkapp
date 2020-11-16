import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../style.css'
import MovileNav from './Nav/MobileNav'
import NavbarPC_CenterHome from './Nav/NavbarPC_CenterHome'
import NavbarHomeAuth from './Nav/NavbarHomeAuth'
import NavbarTitle from './Nav/NavbarTitle'
import LoginSignupModal from './Nav/LoginSignup-modal'

// Modal.setAppElement('#root')
   //任意のアプリを設定する　create-react-appなら#root
export class Navbar extends Component {
        constructor() {
          super();
          this.state = {
              currentPosition: 0
          };
        }


    scrollTop() {
        this.setState({
        currentPosition:Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop)})}

    componentDidMount() {window.addEventListener('scroll', event => this.scrollTop(), true)}

      componentWillUnmount() { window.removeEventListener('scroll', event => this.scrollTop(), false)}

    render() {
        const { authenticated } = this.props;
        return (
            <>
                {authenticated ?
                       <div className="nav nav_color-homeSP"style={this.state.currentPosition > 170 ? { background: '#fff'} :  { background: ''}}>
                        <div className="nav-inner">
                            <NavbarTitle />{/* //ナビゲーションロゴ表示 */}
                            <MovileNav /> {/* //モバイルのみ表示 */}
                            <NavbarPC_CenterHome/>{/* //メニュー表示 */}
                            <NavbarHomeAuth/>{/* //ログインアイコン表示 */}
                        </div>
                    </div>
                :
                    <div className="nav nav_color-homeSP"style={this.state.currentPosition >170 ? { background: '#fff'} :  { background: ''}}>
                    <div className="nav-inner">
                    <NavbarTitle/>{/* //ナビゲーションロゴ表示 */}
                    <MovileNav/>{/* //モバイルのみ表示 */}
                    <NavbarPC_CenterHome/>{/* //メニュー表示 */}
                    <ul className="nav-items_center">
                        <div className="nav-item nav-item_login login_color">
                        <LoginSignupModal/>{/* //ログイン・サインアップアイコン表示 */}
                    </div>
                </ul>
            </div>
        </div>
                }

    </>
        )
    }
}


Navbar.propTypes = {authenticated: PropTypes.bool.isRequired,};

//Reduxはstate管理
  const mapStateToProps = (state) => ({authenticated: state.user.authenticated});
  export default connect(mapStateToProps)(Navbar);
