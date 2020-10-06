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

import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import QueryBuilderRoundedIcon from '@material-ui/icons/QueryBuilderRounded';
import ParkFindItems from '../components/park/ParkFindItems';

import ActivityFindItems from '../components/parkActivity/ActivityFindItems'
import AddRoundedIcon from '@material-ui/icons/AddRounded';




export class FindActivity extends Component {
  componentDidMount(){
    this.props.getParkActivity();
  }

    render() {
      const {parksAc,loading} =this.props.data;
      // (条件)?真の処理:偽の処理;を応用して、
      // 　(条件)?真の処理:（次の条件）?真の処理:偽の処理;


        let ActivityHome_list =
          parksAc.slice(0, 3).map((parksActivity) =>
           <ActivityFindItems key={parksActivity.parksAcId} parksActivity={parksActivity} />)



        return (


          <div>
              <Navbar/>
            {/* メインビジュアル */}
          {/* 人気の公園 */}

          {/* //体験 */}

              <div className ="container contents-items-find">
              <div className="serch-bar">
                <div className="serch-bar-location">
                  <LocationOnRoundedIcon style={{ fontSize: 25 }}/>
                  <div className="LocationCity">東京都</div>
                </div>

                <div className="serch-bar-CategoryAnSerch">
                  <div className="serch-bar-category">
                    <EcoRoundedIcon style={{ fontSize: 25 }}/>
                    <div className="LocationCity">カテゴリ</div>
                  </div>
                  <div className="serch-bar-serch">
                    <p className="serch-bar-serch__text">
                      <SearchRoundedIcon style={{ fontSize: 25 }}/>
                    </p>
                    </div>
                </div>

              </div>
              </div>
              <div className="container container_paddinng ContentFind">
                <div className="parkDet-container">
                  <div className="park-subHeader">
                    <div className="park-result">
                    <div class="park-result-hit">
                      <h1 className="park-result-hit__text">
                        東京都の体験 <p>68件</p>
                      </h1>
                    </div>
                    <div class="park-result-filter">
                      {/* <FilterListRoundedIcon style={{ fontSize: 30 }}/> */}
                    </div>
                  </div>
                  <div className="parkTag">
                    <ul　className="parkTag_items">
                      <li className="AcSerch_desc">フィルタ</li>
                      <li className="Search_item"><AddRoundedIcon style={{ fontSize: 15 }}/> 日付</li>
                      <li className="Search_item"><AddRoundedIcon style={{ fontSize: 15 }}/>時間</li>
                      <li className="Search_item"><AddRoundedIcon style={{ fontSize: 15 }}/>料金</li>
                      <li className="Search_item"><AddRoundedIcon style={{ fontSize: 15 }}/>場所</li>
                    </ul>
                  </div>
                </div>
                  <div className="parksResult-items">
                  {ActivityHome_list}
                  </div>
              </div>

                <div className="parkDet-container-right">
                  <div className="parkDet-container-right__inner">
                  <h1　className="container-right_h2">カテゴリーから探す</h1>
                    <ul className="category-search">
                      <li className="category-search-item">デート</li>
                      <li className="category-search-item">ピクニック</li>
                      <li className="category-search-item">家族</li>
                      <li className="category-search-item">日帰り</li>
                      <li className="category-search-item">夏</li>
                      <li className="category-search-item">デート</li>

                    </ul>
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

