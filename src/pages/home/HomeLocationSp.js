import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getParks } from '../../redux/actions/dataActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const tokyo = {
    pathname: '/search',search: '?tokyo',state: { parklocation: '東京都' }
  };


export class HomeLocatiomSp extends Component{
    render() {
        const parkSuggestArray = [];
        const parks = this.props.data.parks;
        const parkTokyoitems =
        parks.map((parkSuggest_item) =>
          <>
            {parkSuggest_item.parkLocation === "東京都" ?
              parkSuggestArray.push(parkSuggest_item) :
              ''
            }
          </>
        )

      const parkTokyoitem =
        parkSuggestArray.map((parkSuggestArray_item) =>
          <>
                <Link to={`/park/${parkSuggestArray_item.parkId}`} className="park-city-item active_category">
                        <img src={parkSuggestArray_item.parkImage} className="pakr-city-img" />
                        <p className="park-city-name">{parkSuggestArray_item.parkName}</p>
                </Link>
      </>
        )
        return (
            <div className="container-paddding-sp container_paddinng homeCategorySP__margin">
                <div className="park-city-item__title">
                    <h2 className="park-city-item__h2">東京都の公園</h2>
                    <Link to={tokyo}><p className="park-city-item__p">すべてみる</p></Link>
                </div>
                <div className="park-city-items">
                    <ul className="park-city-items--">
                        {parkTokyoitem}
                    </ul>
                </div>
            </div>
        )
    }
}

HomeLocatiomSp.propTypes ={
    getParks:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired
  }

  const mapStateToProps = (state) =>({
    data:state.data
  })


export default connect(mapStateToProps,{getParks})(HomeLocatiomSp);
