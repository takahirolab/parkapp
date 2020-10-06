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

import  Navbar_admin  from '../layout/Navbar_admin'
import Accordion from '../components/icon/accordion'

import PostParksActivity from './PostParksActivity'
import {getParkActivity} from '../redux/actions/dataActions';
import Park from '../components/park/Park';
import ActivityListView from './ActivityList_view';
import DeleteScream from '../components/park/DeleteScream'
import DeleteIcon from '@material-ui/icons/Delete';




export class ActivityList extends Component {
  componentDidMount(){
    this.props.getParkActivity();
  }

    render() {
      const {
        parksAc,
        loading,
      } =this.props.data;
      const ActivityNum = parksAc.length;
      // (条件)?真の処理:偽の処理;を応用して、
      // 　(条件)?真の処理:（次の条件）?真の処理:偽の処理;



      let parksActivity_list =
      parksAc.map((parksActivity) =>
         <ActivityListView key={parksActivity.parksAcId} parksActivity={parksActivity} />)


        return (
          <div>
              <Navbar_admin/>
              <div className="contents_admin">
                    <div className="contents_admin_left">
                      <Accordion/>
                    </div>
                    <div className ="contets_admin">
                      <div className="admin_flex">
                        <div class="white"><PostParksActivity/></div>
                        <div className="admin_color admin_font">公園件数：{ActivityNum}</div>
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
                      {parksActivity_list}
                        </table>

                    </div>
                </div>

          </div>


        )
    }
}


ActivityList.propTypes ={
  parkList:PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  data:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
  data:state.data,
  user: state.user
})

export default connect(mapStateToProps,{getParkActivity})(ActivityList);

