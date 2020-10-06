import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
// MUI
import MuiLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import { Navbar } from '../layout/Navbar';

class ParkAbout extends Component {
    render(){
      return (
        <div>
            <Navbar/>
            <div className="innner"></div>
              <h1>サービス紹介ページ</h1>
           </div>
      );
    };
    }



    export default ParkAbout;
