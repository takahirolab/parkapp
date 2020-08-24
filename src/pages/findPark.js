import React, { Component } from 'react'

import '../App.css';
import Pic1 from '../images/pic1.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Park from '../components/park/Park';
import ScreamSkeleton from '../util/ScreamSkeleton';
// import ScreamSkeleton from '../util/ScreamSkeleton';
// import ProfileSkeleton from '../util/ProfileSkeleton'


import {connect} from 'react-redux';
import {getParks} from '../redux/actions/dataActions';

import  Navbar  from '../layout/Navbar'




export class FindPark extends Component {
  componentDidMount(){
    this.props.getParks();
  }

    render() {
      const {parks,loading} =this.props.data;
      // (条件)?真の処理:偽の処理;を応用して、
      // 　(条件)?真の処理:（次の条件）?真の処理:偽の処理;



      let parksHome_list = !loading?(
          parks.slice(0, 3).map((park) =>
           <Park key={park.parkId} park={park} />)
        ) : (
          <ScreamSkeleton/>
        );
        return (


          <div>
            <Navbar/>
            {/* メインビジュアル */}



          {/* 人気の公園 */}
        <div className ="container contents-margin bk">
            <div className="header-inner-1">
             <div className="header-items">
          {parksHome_list}
            </div>

            <div className="readmore">
              <Link to="" className="readmore-desc">もっとみる ＞</Link>
            </div>
          </div>



          </div>
          </div>
        )
    }
}


FindPark.propTypes ={
  getParks:PropTypes.func.isRequired,
  data:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
  data:state.data
})

export default connect(mapStateToProps,{getParks})(FindPark);

