import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getParks } from '../../redux/actions/dataActions';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

export class HomeSuggestSp extends Component {


    render() {
        const parks = this.props.data.parks;
        const parkSuggest_items =
            parks.slice(0, 5).map((parkSuggest_item) =>
                <>
                    <Link to={`/park/${parkSuggest_item.parkId}`} className="park-city-item active_category" value="東京都">
                        <img src={parkSuggest_item.parkImage} className="pakr-city-img" />
                        <p className="park-city-name">{parkSuggest_item.parkName}</p>
                    </Link>
                </>
            )
        return (
            <div className="container_paddinng container-paddding-sp">
                <div className="park-city-item__title">
                    <h2 className="park-city-item__h2">おすすめの公園</h2>
                    <Link to="/search/city" className="park-city-item__p">すべてみる</Link>
                </div>

                <div className="park-city-items">
                    <ul className="park-city-items--">
                        {parkSuggest_items}
                    </ul>
                </div>
            </div>
        )
    }
}

HomeSuggestSp.propTypes ={
    getParks:PropTypes.func.isRequired,
    getParkActivity:PropTypes.func.isRequired,
    getArticles:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired
  }

  const mapStateToProps = (state) =>({
    data:state.data
  })

  export default connect(mapStateToProps,{getParks})(HomeSuggestSp);
