import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';

// MUI Stuff
import Deletepark from '../components/park/DeleteScream';


// Icons
import ChatIcon from '@material-ui/icons/Chat';
// Redux
import { connect } from 'react-redux';
import Pic1 from '../images/pic1.png';
import EditPark from '../components/park/EditPark';


class ActivityListView extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      parksActivity: {
        parksAcId,
        AcAbout
      },

      user: {
        authenticated,
        credentials: { userName }
      }

    } = this.props;

    return (

        <tr>
        <td>{parksAcId}</td>
        <td>{AcAbout}</td>
        {/* <td><img src={Pic1} alt="ewqe" className="header-item-img"/></td>
        <td>{parkName}</td>
        <td>{parkAbout}</td>
        <td>{parkFeature}</td>
        <td>{createdDate}</td>
        <td>{parkLocation}</td>
        <td>{parkPrice}</td>
        <td>{parkUrl}</td>
        <td>{commentCount}</td>
        <td>{likeCount}</td>
         <td>{parkTag1}{parkTag2}{parkTag4}</td>
        <td><Deletepark parkId={parkId}/></td>
        <td><EditPark parkId={parkId}/></td> */}
        </tr>

    )
  }
}

ActivityListView.propTypes = {
  user: PropTypes.object.isRequired,
  parksAc: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(ActivityListView);
