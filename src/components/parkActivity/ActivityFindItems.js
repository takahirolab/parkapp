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

import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import QueryBuilderRoundedIcon from '@material-ui/icons/QueryBuilderRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import MiniMasonry from "minimasonry";



class ActivityFindItems extends Component {
  render() {
    dayjs.extend(relativeTime);




    const {
      classes,
      parksActivity: {
        parksAcId,
        articlesId,
        articleTitle,
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
        AcParkName
      },
      user: {
        authenticated,
        credentials: { userName }
      }

    } = this.props;



    return (


      <Link to={`/activity/${parksAcId}`} className="parksResult-item" >
      <img  className="parksResult-item-img" src={Pic1} />
        <div className="parksResult-item-detil">
          <h2 className="parksResult-item-name">
          {AcName}
          </h2>
          <div className="parksResult-locAtime">
            <div className="location">
              <LocationOnRoundedIcon style={{ fontSize: 18 }}/>
              <p class="parksResult-locAtime-name">{AcLocation} {AcParkName}</p>
            </div>
          </div>
          <div className="parksResult-locAtime">
            <div className="AcPrice">
              <CreditCardRoundedIcon style={{ fontSize: 18 }}/>
            <p class="parksResult-locAtime-name">{AcPrice}円</p>
            </div>
            <div className="Time">
              <QueryBuilderRoundedIcon style={{ fontSize: 18 }}/>
              <p class="parksResult-locAtime-name">1時間~</p>
            </div>
          </div>
          <p className="parkResult-desc">
          {AcAbout}
          </p>
        </div>
  </Link>
    )
  }
}

ActivityFindItems.propTypes = {
  user: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(ActivityFindItems);
