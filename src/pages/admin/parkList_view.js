import React, { Component } from 'react';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';

// Icons
import ChatIcon from '@material-ui/icons/Chat';
// Redux
import { connect } from 'react-redux';
import Deletepark from './DeletePark'
// import EditPark from '../../components/park/EditPark';


export class ParkListView extends Component {
  constructor(props) {
    super(props)
  }
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
        parkAbout,
        parkFeature,
        parkPrice,
        parkTag1,
        parkTag2,
        parkTag4,
        parkUrl,
        parkLocation,
      },

      user: {
        authenticated,
        credentials: { userName }
      }

    } = this.props;

    return (

        <tr>
        <td>{parkId}</td>
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
        <Deletepark parkId={parkId}/>
        </tr>

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
  user: state.user,
  data:state.data
});

export default connect(mapStateToProps)(ParkListView);
