import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';



// Redux
import { connect } from 'react-redux';
import Pic1 from '../../images/pic1.png';




class Park extends Component {
  render() {

    const {
      park: {
        parkName,
        createdDate,
        userImage,
        parkId,
        likeCount,
        commentCount,
        parkImage,
        parkAbout,
        parkLocation
      },

      user: {
        authenticated,
        credentials: { userName }
      }

    } = this.props;



    return (


     <Link to={`/park/${parkId}`} className="FindParksResult-item" >
     <img  className="FindParksResult-item-img" src={Pic1}/>
     <div className="FindParksResult-item-detil">

       <h2 className="parksResult-item-name">
       {parkName}
       </h2>
       <div className="parksResult-locAtime">
         <div className="location">
           <LocationOnRoundedIcon style={{ fontSize: 20 }}/>
           <p class="parksResult-locAtime-name">{parkLocation}</p>
         </div>
       </div>
     </div>
    </Link>
    )
  }
}

Park.propTypes = {
  user: PropTypes.object.isRequired,
  park: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Park);
