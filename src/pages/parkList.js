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

import  Navbar_admin  from '../layout/Navbar_admin'
import Accordion from '../components/icon/accordion'

import PostScream from './PostScream'
import {getParks} from '../redux/actions/dataActions';
import Park from '../components/park/Park';
import ParkListView from './parkList_view';





export class FindActivity extends Component {
  componentDidMount(){
    this.props.getParks();
  }

    render() {
      const {parks,loading} =this.props.data;
      // (条件)?真の処理:偽の処理;を応用して、
      // 　(条件)?真の処理:（次の条件）?真の処理:偽の処理;



      let parksHome_list = !loading?(
        parks.map((park) =>
         <ParkListView key={park.parkId} park={park} />)
      ) : (
        <ScreamSkeleton/>
      );



        return (


          <div>
              <Navbar_admin/>
              <div className="contents_admin">
                    <div className="contents_admin_left">
                      <Accordion/>
                    </div>
                    <div className ="contets_admin">
                        <p class="white"><PostScream/></p>
                        <p class="white">パークリストだよ</p>
                        <table class="parklist_view" bordesr="1">
                        <tr>
                            <th>パークID</th>
                            <th>公園名</th>
                            <th>説明</th>
                        </tr>
                        <tr>
                      {parksHome_list}
                        </tr>
                        </table>



                        {parksHome_list}

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

export default connect(mapStateToProps,{getParks})(FindActivity);

