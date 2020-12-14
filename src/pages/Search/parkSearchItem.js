
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import LikeButton from '../../components/park/LikeButton'

export class ParkSearchItem extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        //PC版
        <>


          <div className="FindParksResult-item-pc">
        <Link to={`/park/${this.props.park.parkId}`}>
        <img className="FindParksResult-item-img-pc" src={this.props.park.parkImage}/>
              <div className="FindParksResult-item-detil">
                <h2 className="parksResult-item-name-pc">{this.props.park.parkName}</h2>
                <div className="Park-location-pc">
                <LocationOnRoundedIcon style={{ fontSize: 15 }}/>
                <p className="parksResult-locAtime-name-pc">{this.props.park.parkLocation}</p>
                </div>
              </div>

            </Link>
            <LikeButton parkId={this.props.park.parkId} className="park-bookmark"/>
            {this.props.park.parkTag3?
              <div className="parkSpecialTag">{this.props.park.parkTag3}</div>:''
            }
            </div>



        {/* //スマホ版 */}
        <Link to={`/park/${this.props.park.parkId}`} className="FindParksResult-item">
          <img className="FindParksResult-item-img" src={this.props.park.parkImage}/>
          <div className="FindParksResult-item-detil">
            <h2 className="parksResult-item-name">{this.props.park.parkName}</h2>
        </div>
        <div className="Park-location">
              <LocationOnRoundedIcon className="Park-location--LocationIcon"/>
              <p className="parksResult-locAtime-name">{this.props.park.parkLocation}</p>
            </div>
             {/* <LikeButton parkId={this.props.park.parkId} /> */}
        </Link>

          </>
      );
    }
}

export default ParkSearchItem
