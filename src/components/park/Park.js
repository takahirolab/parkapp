import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

// Redux
import Pic1 from '../../images/pic1.png';


class Park extends Component {
  render() {
    return (
          <div className="header-item__parks">
            <Link to={`/park/${this.props.park.parkId}`} className="" >
              <img src={Pic1} alt="ewqe" className="header-item-img"/>
                <div className="header-inner">
                  <h2 className="header-item-title__parks">{this.props.park.parkName}</h2>
                  <p className="header-item-desc">{this.props.park.parkAbout}</p>
                </div>
            </Link>
          </div>
    )
  }
}

Park.propTypes ={
  park: PropTypes.object.isRequired
};


export default Park;
