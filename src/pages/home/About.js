import React, { Component } from 'react';

// MUI

import  Navbar  from '../../layout/Navbar';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class ParkAbout extends Component {
    render(){
      return (
        <>


          <Navbar />
          <div className="container_about container_about_pc">

            <div className="service-top-inner area">

              {/* <img src={ParkrAbout} className="service-img" /> */}
              <div className="scrolldown"><ArrowBackIosIcon style={{ fontSize:30 ,Color:'#fff'}} /></div>
            </div>


          <div className="container area" >
            <div className="OurService-inner">
              <h2 className="OurService OS-pc ">わたしたちの公園</h2>
              <p className="OurService_p">公園。</p>
              <p className="OurService_p">それは私たちにとってもっとも身近な存在</p>
              <p className="OurService_p">小さい頃から遊んでた思い出の公園</p>
              <p className="OurService_p">西周ん時代を過ごしたあの場所。</p>
              <p className="OurService_p">仕事で、人間関係で疲れた夜</p>
              <p className="OurService_p">涙した公園。</p>
              <p className="OurService_p">あたらしい家族と一緒にいった思い出の場所</p>
              <p className="OurService_p">公園はそんな思い出がたくさんがつまっている。</p>
              <p className="OurService_p">私したちはもっとみんなの記憶に残るパークを作ります</p>
              </div>
          </div>


            {/* //PC版 */}
            <div className="about-bk area" ></div>
            <div className="Ourfunc">
              <div className="Ourfunc-inner">
                <div className="OurServicefunc">
                  <h2 className="OurServicefunc-h2">パークルについて</h2>
                  <p className="OurServicefunc-p">公園検索からアクティビティの予約までパークル。<br/>あなたの好きな公園をみつけよう</p>
                </div>
                  <div className="parkfunc-innner">
                    <div className="parkrfunc">
                    </div>
                    <div className="parkrfunc">
                    </div>
                    <div className="parkrfunc">
                    </div>
                </div>

              </div>
            </div>

            {/* //SP版 */}
            <div className="about-bk-sp"></div>
              <div className="about-bk-sp-inner">
                <div className="Ourfunc-h2-sp">
                  <h2 className="Ourfunc-h2-sp__font">パークルについて</h2>
                <p className="OurServicefunc-p-sp">公園検索からアクティビティの予約までパークル。<br />あなたの好きな公園をみつけよう</p>
                </div>
                <div className="parkfunc-innner-sp">
                    <div className="parkrfunc-sp">
                    </div>
                    <div className="parkrfunc-sp">
                    </div>
                    <div className="parkrfunc-sp">
                    </div>
                </div>
              </div>
            </div>




        </>
      );
    };
    }



    export default ParkAbout;
