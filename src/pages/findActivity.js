import React, { Component } from 'react'

import '../App.css';
import Pic1 from '../images/pic1.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ParksActivity from '../components/parkActivity/ParkActivity' ;


import ScreamSkeleton from '../util/ScreamSkeleton';
// import ScreamSkeleton from '../util/ScreamSkeleton';
// import ProfileSkeleton from '../util/ProfileSkeleton'


import {connect} from 'react-redux';
import {getParkActivity} from '../redux/actions/dataActions';

import  Navbar  from '../layout/Navbar'





export class FindActivity extends Component {
  componentDidMount(){
    this.props.getParkActivity();
  }

    render() {
      const {parksAc,loading} =this.props.data;
      // (条件)?真の処理:偽の処理;を応用して、
      // 　(条件)?真の処理:（次の条件）?真の処理:偽の処理;


        let ActivityHome_list = !loading?(
          parksAc.slice(0, 3).map((parksActivity) =>
           <ParksActivity key={parksActivity.parksAcId} parksActivity={parksActivity} />)
        ) : (
          <ScreamSkeleton/>
        );


        return (


          <div>
              <Navbar/>
            {/* メインビジュアル */}
          {/* 人気の公園 */}

          {/* //体験 */}

        <div className ="container contents-margin">
        <h1 className="header-title white-h1">公園で体験する</h1>
         <div className="header-inner-1">
          <div className="header-items">
          {ActivityHome_list}
          </div>
          <div className="readmore">
            {/* <a herf="" className="readmore-desc white-h1">もっとみる ＞</a> */}
          </div>
          <div className="btn">もっとみる
          </div>
          </div>
          </div>
          </div>


        )
    }
}


FindActivity.propTypes ={
  getParkActivity:PropTypes.func.isRequired,
  data:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
  data:state.data
})

export default connect(mapStateToProps,{getParkActivity})(FindActivity);

