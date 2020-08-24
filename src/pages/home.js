import React, { Component } from 'react'

import '../App.css';
import Pic1 from '../images/pic1.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Park from '../components/park/Park';
import ParksActivity from '../components/parkActivity/ParkActivity' ;
import Articles from '../components/article/Articles' ;

import ScreamSkeleton from '../util/ScreamSkeleton';
// import ScreamSkeleton from '../util/ScreamSkeleton';
// import ProfileSkeleton from '../util/ProfileSkeleton'


import {connect} from 'react-redux';
import {getParks} from '../redux/actions/dataActions';
import {getParkActivity} from '../redux/actions/dataActions';
import {getArticles} from '../redux/actions/dataActions';
import {PostScream} from './PostScream' ;

import  Navbar  from '../layout/Navbar'


export class home extends Component {
  componentDidMount(){
    this.props.getParks();
    this.props.getParkActivity();
    this.props.getArticles();
  }

    render() {
      const {parks,parksAc,articles,loading} =this.props.data;
      // (条件)?真の処理:偽の処理;を応用して、
      // 　(条件)?真の処理:（次の条件）?真の処理:偽の処理;



      let parksHome_list = !loading?(
          parks.slice(0, 3).map((park) =>
           <Park key={park.parkId} park={park} />)
        ) : (
          <ScreamSkeleton/>
        );


        let ActivityHome_list = !loading?(
          parksAc.slice(0, 3).map((parksActivity) =>
           <ParksActivity key={parksActivity.parksAcId} parksActivity={parksActivity} />)
        ) : (
          <ScreamSkeleton/>
        );

        let articleHome_list = !loading?(
          articles.slice(0, 3).map((article) =>
           <Articles key={article.articlesId} article={article} />)
        ) : (
          <ScreamSkeleton/>
        );


        return (


          <div>
             <Navbar/>
            {/* メインビジュアル */}
          <div className=" contennts container">
            <img src={Pic1} alt="ewqe" className="main-visual"/>
              <div className="weather">
                <p>fsdafsfasdfsdf</p>
            </div>
          </div>


          {/* 人気の公園 */}
        <div className ="container contents-margin bk">
          <h1 className="header-title">コラム</h1>
            <div className="header-inner-1">
             <div className="header-items">
          {articleHome_list}
            </div>

            <div className="readmore">
              <Link to="" className="readmore-desc">もっとみる ＞</Link>
            </div>
          </div>

          <h1 className="header-title">人気の公園</h1>
            <div className="header-inner-1">
             <div className="header-items">
          {parksHome_list}
            </div>

            <div className="readmore">
              <Link to="" className="readmore-desc">もっとみる ＞</Link>
            </div>
          </div>



          {/* //体験 */}
        <div className="park-ex">
        <div className ="container contents-margin">
        <h1 className="header-title white-h1">公園で体験する</h1>
          <p　className="header-ex-desc">ユニティでは、ご家族を心から支え、 利用者さんから笑顔があふれる介護や看護、<br/>
自分でできることを諦めないリハビリテーションを ご提供しています.
          </p>

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




          </div>
          </div>
        )
    }
}


home.propTypes ={
  getParks:PropTypes.func.isRequired,
  getParkActivity:PropTypes.func.isRequired,
  getArticles:PropTypes.func.isRequired,
  data:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
  data:state.data
})

export default connect(mapStateToProps,{getParks,getParkActivity,getArticles})(home);

