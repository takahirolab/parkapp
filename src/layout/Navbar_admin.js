import React, { Component } from 'react'

import '../App.css';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export class Nabar_admin extends Component {


    render() {
        return (

                <div className="nav nav_admin">
                    <div className="nav_inner_ad">
                        <div className="nav-title">
                            <Link to="/admin" className="nav-titile-logo nav-logo__white">ParkR</Link>
                        </div>
                        <ul className="nav_ad_left">
                            <li><Link to="/" className="nav_ad_left_dec">ユーザーページへ戻る</Link></li>
                            <li><AccountCircleIcon style={{ fontSize: 40 }}/></li>
                        </ul>
                    </div>
                </div>


        )
    }
}




export default Nabar_admin;

