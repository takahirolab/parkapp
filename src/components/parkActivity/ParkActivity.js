import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
// import MyButton from '../../util/MyButton';
// import DeleteScream from './DeleteScream';
// import ScreamDialog from './×ScreamDialog';
// import LikeButton from './LikeButton';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Icons
import ChatIcon from '@material-ui/icons/Chat';
// Redux
import { connect } from 'react-redux';
import Pic1 from '../../images/pic1.png';

import javascript from '../../script';




class ParksActivity extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      parksActivity: {
        parksAcId,
        AcName,
        AcFeature,
        AcAbout,
        AcLocation,
        AcTag1,
        AcTag2,
        AcTag3,
        AcPrice,
        hostName,
        createdDate,
        AclikeCount,
        userImage,
        AcImage,
      },
      user: {
        authenticated,
        credentials: { userName }
      }

    } = this.props;



    return (

    <div className="header-item_activ">
      <Link to="" className="" >
        <img src={Pic1}  alt="" className="header-item-img"/>
        <div className="header-inner">
        <h2 className="header-item-title">{AcName}</h2>
          <p className="header-item-desc">{AcAbout}</p>
        </div>
        </Link>
    </div>
    )
  }
}

ParksActivity.propTypes = {
  user: PropTypes.object.isRequired,
  parksActivity: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(ParksActivity);
