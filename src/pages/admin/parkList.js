import React, { Component } from 'react'

import '../App.css';

import PropTypes from 'prop-types';



import {connect} from 'react-redux';

import  Navbar_admin  from '../../layout/Navbar_admin'
import Accordion from '../../components/icon/accordion'

import PostScream from '../PostScream'
import {getParks} from '../../redux/actions/dataActions';

import ParkListView from './parkList_view';





export class parkList extends Component {
  componentDidMount(){
    this.props.getParks();
  }

    render() {
      const {
        parks,
        loading,
      } =this.props.data;
      const parksNum = parks.length;
      // (条件)?真の処理:偽の処理;を応用して、
      // 　(条件)?真の処理:（次の条件）?真の処理:偽の処理;



      let parksHome_list =
        parks.map((park) =>
         <ParkListView key={park.parkId} park={park} />)


        return (
          <div>
              <Navbar_admin/>
              <div className="contents_admin">
                    <div className="contents_admin_left">
                      <Accordion/>
                    </div>
                    <div className ="contets_admin">
                      <div className="admin_flex">
                        <div class="white"><PostScream/></div>
                        <div className="admin_color admin_font">公園件数：{parksNum}</div>
                      </div>

                        <table class="parklist_view">

                        <tr>
                            <th>パークID</th>
                            <th>写真</th>
                            <th>公園名</th>
                            <th>説明</th>
                            <th>特徴</th>
                            <th>日時</th>
                            <th>場所</th>
                            <th>金額</th>
                            <th>url</th>
                            <th>コメント</th>
                            <th>like数</th>
                            <th>タグ</th>
                            <th>削除</th>
                        </tr>
                      {parksHome_list}
                        </table>

                    </div>
                </div>

          </div>


        )
    }
}


parkList.propTypes ={
  parkList:PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  data:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
  data:state.data,
  user: state.user
})

export default connect(mapStateToProps,{getParks})(parkList);

