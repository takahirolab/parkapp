import React, { Component } from 'react'

import '../App.css';


import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Park from '../components/park/Park';
import ParksActivity from '../components/parkActivity/ParkActivity' ;
import Articles from '../components/article/Articles' ;

import ScreamSkeleton from '../util/ScreamSkeleton';
// import ScreamSkeleton from '../util/ScreamSkeleton';
// import ProfileSkeleton from '../util/ProfileSkeleton'


import {connect} from 'react-redux';
import {getArticles} from '../redux/actions/dataActions';

import  Navbar  from '../layout/Navbar'





export class ReadArticle extends Component {
  componentDidMount(){
    this.props.getArticles();
  }

    render() {
      const {articles,loading} =this.props.data;
      // (条件)?真の処理:偽の処理;を応用して、
      // 　(条件)?真の処理:（次の条件）?真の処理:偽の処理;


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
          </div>
          </div>

        )
    }
}


ReadArticle.propTypes ={
  getArticles:PropTypes.func.isRequired,
  data:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
  data:state.data
})

export default connect(mapStateToProps,{getArticles})(ReadArticle);

