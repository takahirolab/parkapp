import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';

// MUI Stuff


// Icons
import ChatIcon from '@material-ui/icons/Chat';
// Redux
import { connect } from 'react-redux';





class ParkListView extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      park: {
        parkName,
        createdDate,
        userImage,
        parkId,
        likeCount,
        commentCount,
        parkImage,
        parkAbout
      },

      user: {
        authenticated,
        credentials: { userName }
      }

    } = this.props;



    return (
<div>
        <td>{parkId}</td><td>{parkName}</td>
        </div>



    )
  }
}

ParkListView.propTypes = {
  user: PropTypes.object.isRequired,
  park: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(ParkListView);
