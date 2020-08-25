import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { Provider } from 'react-redux';
import store from '../redux/store';

import '../App.css';
import Pic1 from '../images/pic1.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Park from '../components/park/Park';
import ParksActivity from '../components/parkActivity/ParkActivity' ;
import Articles from '../components/article/Articles' ;

import ScreamSkeleton from '../util/ScreamSkeleton';
// import ScreamSkeleton from '../util/ScreamSkeleton';
// import ProfileSkeleton from '../util/ProfileSkeleton'


import {connect} from 'react-redux';
import {getParks} from '../redux/actions/dataActions';
import {getParkActivity} from '../redux/actions/dataActions';
import {getArticles} from '../redux/actions/dataActions';
import {PostScream} from './PostScream' ;
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Accordion from '../components/icon/accordion';
import Navbar_admin from '../layout/Navbar_admin'

import parkList from './parkList'


export class home extends Component {
    render() {
        return (
            <div>
           <Navbar_admin/>
                <div className="contents_admin">
                    <div className="contents_admin_left">
                      <Accordion/>
                    </div>
                    <div className ="contets_admin">
                    </div>
                </div>
             </div>
        )
    }
}

export default (home);

