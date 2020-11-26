import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import  NavbarHome  from '../../layout/Navbar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AboutTop from '../../images/About-top.svg'
import AboutApp01 from '../../images/About-app1.svg'
import AboutApp02 from '../../images/About-app02.svg'
import AboutApp03 from '../../images/About-app03.svg'
import AboutMap from '../../images/About-map.svg'
import AboutPointer from '../../images/pointer.svg'
import Footer from '../../layout/Footer';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getParks } from '../../redux/actions/dataActions'
import parkSearch from '../Search/parkSearch';


export class ParkAbout extends Component {
  constructor(props) {
    super(props);
    this.state= {
      pointer1: '',
      pointer2: '',
      pointer3: 'true',
      pointer4: '',
      pointer5: '',
      pointer6: '',
      pointer7: '',
      pointer8: '',
      pointer9: '',
      pointer10: '',
      pointer11:''
    }
    this.scrolldown = this.scrolldown.bind(this);
  }

  componentWillMount() {
    this.props.getParks();
  }

  scrolldown() {
    window.scroll({top: 660,behavior: "smooth"});
  }

  fillter() {
    const parkItems = this.props.data.parks
  //   const parkItemLoction = parkItems.map((parks) => {
  //     switch (parks.parkLocation) {
  //       case '東京都':
  //       case '大阪府':
  //       case '群馬県':
  //       case '東京都':
  //       case '東京都':

  //  })

  }

  render() {
    console.log(this.props.data.parks)
    return (
      <>
        <NavbarHome />
        <section className="container_about container_about_pc">
          <div className="service-top-inner areaHome">
            <div className="About-left">
              <div className="About-left-inner">
                <h2>公園をもっと身近に。<br />ヒトをつなぐ公園アプリ</h2>
                <p>公園検索プラットフォーム パークルであなたの目的にあった公園をカンタンに検索することができます。</p>
                <div className="About_btn" onClick={this.scrolldown}>もっと知る</div>
              </div>
            </div>
            <div className="About-right-inner">
              <img src={AboutTop} className="service-img" />
            </div>
            {/* <div className="scrolldown"><ArrowBackIosIcon style={{ fontSize:30 ,Color:'#fff'}} /></div> */}
          </div>
        </section>
        <section className="About_section About_section_clip">
          <h2>どんな公園に行こう。</h2>
          <p>日本には全国10万ヶ所以上の公園があり、国籍・年齢・性別関係なく、たくさんの人が利用しています。わたしたちにとって最も身近な場所かもしれません。
           パークルでは日本全国の公園情報の一元管理を目指し、個人の目的にあった公園検索を実現します。あなたの好きな公園を見つけてみませんか。
          </p>
        </section>
        <section className="About_section __app">
          <h2>パークルでできること</h2>
          <div className="About_section_app">

            <div className="app_01">
              <img src={AboutApp01} />
              <h2>目的から公園を検索</h2>
              <p>個人の趣味・嗜好にマッチした公園検索の実現によりあなたの目的にあった公園を見つけることができます。</p>
            </div>
            <div className="app_01 app_02">
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
          <Link to="/park/search" className=" About_btn__02">さっそく公園を探してみる</Link>
        </section>


        <section className="About_section About_section-sectionParkNum About1">
              <div className="About_section-sectionParkNum-inner">
              <h2>公園の掲載について</h2>
              <p>あなたの住んでいる近くの公園から、国営公園、国立公園、キャンプ場まで幅広いジャンルの公園を掲載予定です。あなたも公園拡大に協力してみませんか。</p>

              <div className="About-parknum-inner">
                <div className="About-parknum-position">
                  <img className="About-parknumMap" src={AboutMap} />
                  <img className="About-parknumPointer1 pointer" src={AboutPointer}onMouseMove={() => this.setState({ pointer1: 'true',pointer3: '',pointer2: '',pointer4: '',pointer5: '',pointer6: '',pointer7: '',pointer8: '',pointer9: '',pointer10: '',pointer11:''})}/>
                  <img className="About-parknumPointer2 pointer" src={AboutPointer}onMouseMove={() => this.setState({ pointer2: 'true',pointer3: '',pointer1: '',pointer4: '',pointer5: '',pointer6: '',pointer7: '',pointer8: '',pointer9: '',pointer10: '',pointer11:''})} />
                  <img className="About-parknumPointer3 pointer" src={AboutPointer} onMouseMove={() => this.setState({ pointer3: 'true',pointer1: '',pointer2: '',pointer4: '',pointer5: '',pointer6: '',pointer7: '',pointer8: '',pointer9: '',pointer10: '',pointer11:''})}/>
                  <img className="About-parknumPointer4 pointer" src={AboutPointer}onMouseMove={() => this.setState({ pointer4: 'true',pointer3: '',pointer2: '',pointer1: '',pointer5: '',pointer6: '',pointer7: '',pointer8: '',pointer9: '',pointer10: '',pointer11:''})}/>
                  <img className="About-parknumPointer5 pointer" src={AboutPointer}onMouseMove={() => this.setState({ pointer5: 'true',pointer3: '',pointer1: '',pointer2: '',pointer4: '',pointer6: '',pointer7: '',pointer8: '',pointer9: '',pointer10: '',pointer11:''})}/>
                  <img className="About-parknumPointer6 pointer" src={AboutPointer} onMouseMove={() => this.setState({ pointer6: 'true',pointer3: '',pointer2: '',pointer4: '',pointer5: '',pointer1: '',pointer7: '',pointer8: '',pointer9: '',pointer10: '',pointer11:''})}/>
                  <img className="About-parknumPointer7 pointer" src={AboutPointer}onMouseMove={() => this.setState({ pointer7: 'true',pointer3: '',pointer2: '',pointer4: '',pointer5: '',pointer6: '',pointer1: '',pointer8: '',pointer9: '',pointer10: '',pointer11:''})} />
                  <img className="About-parknumPointer8 pointer" src={AboutPointer}onMouseMove={() => this.setState({ pointer8: 'true',pointer3: '',pointer2: '',pointer4: '',pointer5: '',pointer6: '',pointer7: '',pointer1: '',pointer9: '',pointer10: '',pointer11:''})} />
                  <img className="About-parknumPointer9 pointer" src={AboutPointer}onMouseMove={() => this.setState({ pointer9: 'true',pointer3: '',pointer2: '',pointer4: '',pointer5: '',pointer6: '',pointer7: '',pointer8: '',pointer1: '',pointer10: '',pointer11:''})}/>

                  <img className="About-parknumPointer11 pointer" src={AboutPointer} onMouseMove={() => this.setState({ pointer11: 'true',pointer3: '',pointer2: '',pointer4: '',pointer5: '',pointer6: '',pointer7: '',pointer8: '',pointer9: '',pointer10: '',pointer1:''})}/>
                </div>
              </div>
              {this.state.pointer1 ? <><div className="pointerShow">
                <h2>北海道の公園</h2>
                <ul className="pointerShow-inner">
                  <li className="pointerShow-item">
                    <div className="pointerShow-item-detail">
                      <p>まだ掲載されている公園はありません。
                        <br/>あなたの近くの公園を投稿してみませんか。
                      </p>
                      <Link to="/park/search" className="About_btn">公園を掲載する</Link>
                    </div>
                  </li>
                </ul>
              </div></> : ''}
            {this.state.pointer2 ? <><div className="pointerShow"><h2>東北地方の公園</h2>
            <ul className="pointerShow-inner">
                  <li className="pointerShow-item">
                    <div className="pointerShow-item-detail">
                      <p>まだ掲載されている公園はありません。
                        <br/>あなたの近くの公園を投稿してみませんか。
                      </p>
                      <Link to="/park/search" className="About_btn">公園を掲載する</Link>
                    </div>
                  </li>
                </ul>
            </div></> : ''}
            {this.state.pointer3 ? <><div className="pointerShow"><h2>関東地方の公園</h2>
            <ul className="pointerShow-inner">
                  <li className="pointerShow-item">
                    <div className="pointerShow-item-detail">
                      <p>まだ掲載されている公園はありません。
                        <br/>あなたの近くの公園を投稿してみませんか。
                      </p>
                      <Link to="/park/search" className="About_btn">公園を掲載する</Link>
                    </div>
                  </li>
                </ul></div></> : ''}
            {this.state.pointer4 ? <><div className="pointerShow"><h2>中部・北陸地方の公園</h2>
            <ul className="pointerShow-inner">
                  <li className="pointerShow-item">
                    <div className="pointerShow-item-detail">
                      <p>まだ掲載されている公園はありません。
                        <br/>あなたの近くの公園を投稿してみませんか。
                      </p>
                      <Link to="/park/search" className="About_btn">公園を掲載する</Link>
                    </div>
                  </li>
                </ul></div></> : ''}
            {this.state.pointer5 ? <><div className="pointerShow"><h2>東海地方の公園</h2>
            <ul className="pointerShow-inner">
                  <li className="pointerShow-item">
                    <div className="pointerShow-item-detail">
                      <p>まだ掲載されている公園はありません。
                        <br/>あなたの近くの公園を投稿してみませんか。
                      </p>
                      <Link to="/park/search" className="About_btn">公園を掲載する</Link>
                    </div>
                  </li>
                </ul></div></> : ''}
            {this.state.pointer6 ? <><div className="pointerShow"><h2>関西地方の公園</h2>
            <ul className="pointerShow-inner">
                  <li className="pointerShow-item">
                    <div className="pointerShow-item-detail">
                      <p>まだ掲載されている公園はありません。
                        <br/>あなたの近くの公園を投稿してみませんか。
                      </p>
                      <Link to="/park/search" className="About_btn">公園を掲載する</Link>
                    </div>
                  </li>
                </ul></div></> : ''}
            {this.state.pointer7 ? <><div className="pointerShow"><h2>中国地方の公園</h2>
            <ul className="pointerShow-inner">
                  <li className="pointerShow-item">
                    <div className="pointerShow-item-detail">
                      <p>まだ掲載されている公園はありません。
                        <br/>あなたの近くの公園を投稿してみませんか。
                      </p>
                      <Link to="/park/search" className="About_btn">公園を掲載する</Link>
                    </div>
                  </li>
                </ul></div></> : ''}
            {this.state.pointer8 ? <><div className="pointerShow"><h2>四国地方の公園</h2>
            <ul className="pointerShow-inner">
                  <li className="pointerShow-item">
                    <div className="pointerShow-item-detail">
                      <p>まだ掲載されている公園はありません。
                        <br/>あなたの近くの公園を投稿してみませんか。
                      </p>
                      <Link to="/park/search" className="About_btn">公園を掲載する</Link>
                    </div>
                  </li>
                </ul></div></> : ''}
            {this.state.pointer9 ? <><div className="pointerShow"><h2>九州地方の公園</h2>
            <ul className="pointerShow-inner">
                  <li className="pointerShow-item">
                    <div className="pointerShow-item-detail">
                      <p>まだ掲載されている公園はありません。
                        <br/>あなたの近くの公園を投稿してみませんか。
                      </p>
                      <Link to="/park/search" className="About_btn">公園を掲載する</Link>
                    </div>
                  </li>
                </ul></div></> : ''}
            {this.state.pointer11 ? <><div className="pointerShow"><h2>沖縄の公園</h2>
            <ul className="pointerShow-inner">
                  <li className="pointerShow-item">
                    <div className="pointerShow-item-detail">
                      <p>まだ掲載されている公園はありません。
                        <br/>あなたの近くの公園を投稿してみませんか。
                      </p>
                      <Link to="/park/search" className="About_btn">公園を掲載する</Link>
                    </div>
                  </li>
                </ul></div></> : ''}

              </div>
          <p to="/park/search" className="About_btn__03 nopost">公園を掲載する ※掲載停止中</p>

          {/* <Link to="/park/search" className=" About_btn__02 nopost">公園を掲載する</Link> */}
        </section>
        <section className="About-footer-login">

        </section>


        <Footer />



      </>

    )
  }
}



const mapStateToProps =(state) => ({
  user:state.user,
  authenticated: state.user.authenticated,
  user:state.user,
  UI: state.UI,
  search: state,
  data:state.data
})

const mapActionsToProps ={
  getParks
}


export default connect(mapStateToProps,{getParks})(withRouter(ParkAbout));
