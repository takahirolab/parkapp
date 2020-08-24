import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Profile from '../images/profile.svg'

import '../style.css'

export class Navbar extends Component {
    render() {
        const { authenticated } = this.props;
        return (
            <div className="nav nav_color">
            <div className="nav-inner">
                <div className="nav-title">
                <Link to="/" className="nav-titile-logo nav-logo__white">ParkR</Link>
                </div>
                <ul className="nav-items_center">
                    <Link to="/park" className="nav-item nav-item__white">公園をさがす</Link>
                    <Link to="/activity" className="nav-item nav-item__white">体験をさがす</Link>
                    <Link to="/article" className="nav-item nav-item__white">コラムをよむ</Link>

                </ul>
                {authenticated ? (
                    <ul className="nav-items_center">
                        <Link to="/" className="nav-item">プロフィール
                        </Link>
                    </ul>
                ):(
                    <ul className="nav-items_center">
                    <Link to="/login" className="nav-item">ログイン</Link>
                    <Link to="/signup" className="nav-item nav-item-btn">新規登録</Link>
                    </ul>

                )}

            </div>
         </div>

        )
    }
}

//propsを通して値を受け取る子コンポーネント側で、propsのバリデート（型チェック）を行うことができます。
//コンポーネントに付属しているpropTypesプロパティを使って、受け取るpropsの値を一つ一つの型のチェック
//や必須チェックなどを行います。なお、制約に違反していた場合でも、エラーとはならず、
//コンソール上に警告として表示されるだけとなります。
Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
  };



//Reduxはstate管理
  const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
  });

  export default connect(mapStateToProps)(Navbar);
