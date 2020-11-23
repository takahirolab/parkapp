import React from 'react'

import '../../App.css';
import Sidebar from '../Sidebar'
import HomeMainVI from './HomeMainVI'
import HomeMainContents from './HomeMainContents'
import HomeLp from './HomeLp'
import HomeSns from './HomeSns'
import PostPark from './PostPark'
import HomeHeaderSp from './HomeHeaderSp'
import HomeVISp from './HomeVISp'
import HomeCategorySp from './HomeCategorySp'
import HomeSuggestSp from './HomeSuggestSp'
import HomeLocatiomSp from './HomeLocationSp'
import HomePopularSp from './HomePopularSp'
import HomePrefectureSP from './HomePrefectureSP'
import HomeKindSp from './HomeKindSp'
import NavbarHome from '../../layout/NavbarHome'
import Footer from '../../layout/Footer'

const home = () => {
  return (
    <>
      <NavbarHome />
    <div className="homeContents">
      {/* メインビジュアル */}
    <div className="contennts container_main">
      <HomeMainVI/>
        <div className="home-maincontents">
          <Sidebar />
          <HomeMainContents />
        </div>

        {/* スマホ版 ヘッダー */}
        {/* <HomeHeaderSp /> */}
        {/* メインビジュアル */}
        <HomeVISp />
        {/* {カテゴリー検索} */}
        {/* <HomeCategorySp /> */}
        {/* おすすめ検索 */}
        {/* <HomeSuggestSp/> */}
        {/* 東京検索 */}
          <HomeLocatiomSp />
          <HomePopularSp />
          <HomeKindSp />
          <HomePrefectureSP/>
        {/* サービス紹介 */}
        {/* <HomeLp /> */}
        {/* SNSフォロー */}
          {/* <HomeSns /> */}

    </div>
        {/* 公園をポスト */}
        {/* <PostPark /> */}
      </div>
      <Footer />
    </>

  )
}

export default home

