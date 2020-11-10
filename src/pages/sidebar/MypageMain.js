import React, { Component } from 'react'
import Navbar from '../../layout/Navbar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { connect } from 'react-redux';
import { getUserData } from '../../redux/actions/dataActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Pic1 from '../../images/pic1.png';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import TurnedInNotRoundedIcon from '@material-ui/icons/TurnedInNotRounded';
import QueryBuilderRoundedIcon from '@material-ui/icons/QueryBuilderRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ShareIcon from '@material-ui/icons/Share';
import {logoutUser,uploadImage,loginUser} from '../../redux/actions/userActions';
import { signupUser } from '../../redux/actions/userActions';
import MainRight from './MypageRight'
import MainLeft from './MypageLeft'
import Footer from '../../layout/Footer'

import Contact from '../Contact';
import { DriveEtaTwoTone, PortraitSharp } from '@material-ui/icons';


function MypageMain (props){
        return (
            <>
                   <Navbar />
                <div className="MypageMain">
                    <div className="MypageMain-inner">
                        <MainLeft/>
                        <div className="MypageRight">
                        {props.children}
                         </div>
                    </div>
                </div>
                <Footer/>
            </>

        )
    }

export default (MypageMain);

