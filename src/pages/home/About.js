import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
// MUI

import  NavbarHome  from '../../layout/Navbar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AboutTop from '../../images/About-top.svg'
import AboutApp01 from '../../images/About-app1.svg'
import AboutApp02 from '../../images/About-app02.svg'
import AboutApp03 from '../../images/About-app03.svg'
import AboutMap from '../../images/About-map.svg'
import AboutPointer from '../../images/pointer.svg'
import Footer  from '../../layout/Footer';


const ParkAbout= () => {
      return (
        <>
          <NavbarHome />
          <section className="container_about container_about_pc">
            <div className="service-top-inner areaHome">
              <div className="About-left">
                <div className="About-left-inner">
                  <h2>公園をもっと身近に、<br />ヒトをつなぐ公園アプリ</h2>
                  <p>公園検索プラットフォーム。個人の目的にあった公園検索が<br />
                  できるようサービスの提供を目指します。</p>
                  <div className="About_btn">もっと知る</div>
                </div>
              </div>
              <div className="About-right-inner">
                <img src={AboutTop} className="service-img" />
                </div>
              {/* <div className="scrolldown"><ArrowBackIosIcon style={{ fontSize:30 ,Color:'#fff'}} /></div> */}
            </div>
          </section>
          <section className="About_section About_section_clip">
            <h2>コンセプト</h2>
            <p>公園って、私たちにとってもっとも身近な存在。小さい頃から遊んでた思い出の公園<br />
            青春時代を過ごしたあの場所。仕事で、人間関係で疲れた夜。<br />
            あたらしい家族と一緒にいった思い出の場所。<br />
            公園はそんな思い出がたくさんがつまっている。<br />
            私たちはもっとみんなの記憶に残る公園検索サービスを作ります</p>
          </section>
          <section className="About_section __app">
            <h2>パークルでできること</h2>
            <div className="About_section_app">

              <div className="app_01">
                <img src={AboutApp01} />
                <h2>目的から公園を検索</h2>
                <p>個人の趣味・嗜好にマッチした公園検索の実現によりあなたの目的にあった公園を見つけることができます。</p>
              </div>
              <div className="app_01">
                <img src={AboutApp02} />
                <h2>地図から公園を探せる</h2>
                <p>あなたの位置情報により近くの公園検索をすることができます。(開発中)
                </p>
              </div>
              <div className="app_01">
                <img src={AboutApp03} />
                <h2>イベント情報の掲載</h2>
                <p>日本各地の公園で行われるイベント情報を入手・参加することができます。(開発中)</p>
              </div>

            </div>
          </section>
          <section className="About_section About_section-sectionParkNum  About1">
            <div className="About-parknum-inner">
              <div className="About-parknum-position">
              <img className="About-parknumMap"src={AboutMap} />
              <img className="About-parknumPointer1 pointer"src={AboutPointer} />
              <img className="About-parknumPointer2 pointer"src={AboutPointer} />
              <img className="About-parknumPointer3 pointer"src={AboutPointer} />
              <img className="About-parknumPointer4 pointer"src={AboutPointer} />
              <img className="About-parknumPointer5 pointer"src={AboutPointer} />
              <img className="About-parknumPointer6 pointer"src={AboutPointer} />
              <img className="About-parknumPointer7 pointer"src={AboutPointer} />
              <img className="About-parknumPointer8 pointer"src={AboutPointer} />
              <img className="About-parknumPointer9 pointer"src={AboutPointer} />
              <img className="About-parknumPointer10 pointer"src={AboutPointer} />
              <img className="About-parknumPointer11 pointer"src={AboutPointer} />
            </div>
            </div>


            <div className="About-parknum">
            <div className="About_section-sectionParkNum_inner">
              <h2>掲載件数</h2>
              <p>60件</p>
            </div>
            <p>あなたの身近な公園から、国営公園、国立公園、キャンプ場まで幅広い<br/>ジャンルの公園を掲載予定です。</p>
              <Link to="/park/search" className="About_btn">さっそく公園を探してみる</Link>
            </div>

          </section>

<Footer/>




        </>

      )
    }

    export default ParkAbout
