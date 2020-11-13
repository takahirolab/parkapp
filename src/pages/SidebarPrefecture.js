import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Prefecture = [
 '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '富山県', '石川県',
 '福井県','山梨県','長野県','岐阜県','静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県','鳥取県','島根県','岡山県',
 '広島県','山口県','徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県']


export class SidebarPrefecture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectTH: '',
      SelectKT: '',
      SelectTB: '',
      SelectKS: '',
      SelectTS: '',
      SelectKY: '',
      imageUrl: '/images/button_noshadow.png'
    };
    this.LocationSelectTH = this.LocationSelectTH.bind(this);
    this.LocationSelectKT = this.LocationSelectKT.bind(this);
    this.LocationSelectTB = this.LocationSelectTB.bind(this);
    this.LocationSelectKS = this.LocationSelectKS.bind(this);
    this.LocationSelectTS = this.LocationSelectTS.bind(this);
    this.LocationSelectKY = this.LocationSelectKY.bind(this);
  }


  LocationSelectTH() {
    if (this.state.SelectTH === 'ture') {
      this.setState({
        SelectTH: ''
      });
    }
    if (this.state.SelectTH === '') {
      this.setState({
        SelectTH: 'ture'
      });
    }
  }
  LocationSelectKT() {
    if (this.state.SelectKT === 'ture') {
      this.setState({
        SelectTH: ''
      });
    }
    if (this.state.SelectKT === '') {
      this.setState({
        SelectTH: 'ture'
      });
    }
  }
  LocationSelectTB() {
    if (this.state.SelectTB === 'ture') {
      this.setState({
        SelectTH: ''
      });
    }
    if (this.state.SelectKTB === '') {
      this.setState({
        SelectTH: 'ture'
      });
    }
  }
  LocationSelectKS() {
    if (this.state.SelectKS === 'ture') {
      this.setState({
        SelectTH: ''
      });
    }
    if (this.state.SelectKS === '') {
      this.setState({
        SelectTH: 'ture'
      });
    }
  }
  LocationSelectTS() {
    if (this.state.SelectTS === 'ture') {
      this.setState({
        SelectTH: ''
      });
    }
    if (this.state.SelectTS === '') {
      this.setState({
        SelectTH: 'ture'
      });
    }
  }
  LocationSelectKY() {
    if (this.state.SelectKY === 'ture') {
      this.setState({
        SelectTH: ''
      });
    }
    if (this.state.SelectKY === '') {
      this.setState({
        SelectTH: 'ture'
      });
    }
  }


  render() {
    return (
<>
        <div className="sidebar-search">
          <h2>都道府県からさがす</h2>
            <ul className="sidebar-items_prefectures">
              <Link to={{ pathname: "/park/search", state: { parklocation: '北海道' } }} className="sidebar-items_prefecture"><p>北海道</p></Link>

        <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ SelectTH: 'true' })}
                onMouseLeave={() => this.setState({ SelectTH: '' })}>
              <div className="sidebar-items_prefecture">
                  <p>東北</p><ArrowBackIosIcon style={{ color: '#777777' }} />
              </div>
                {!this.state.SelectTH ? '' :
                    <>
                    <div className="selectItemTH">

                    <h2 className="selectItemTH_h2">東北</h2>
                    <ul>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '青森県' } }}>青森</Link>
                      <Link to={{ pathname: '/park/search', state: { parklocation: '秋田県' } }} className="">秋田</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '山形県' } }} className="">山形</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '岩手県' } }} className="">岩手</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '宮城県' } }} className="">宮城</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '福島県' } }} className="">福島</Link>
                      </ul>
                      <div class="balloon"></div>
                    </div>

                    </>}
              </div>

              <div className="sidebar-items_prefecture__ " onMouseMove={() => this.setState({ SelectKT: 'true' })}
                onMouseLeave={() => this.setState({ SelectKT: '' })}>
                <div className="sidebar-items_prefecture"><p>関東</p><ArrowBackIosIcon style={{ color: '#777777' }} />
                </div>
                {!this.state.SelectKT ? '' :
                    <>
                    <div className="selectItemTH KT">
                      <h2 className="selectItemTH_h2">関東</h2>
                    <ul>
                      <Link to={{ pathname: "/park/search",search: "?sort=new",state: { parklocation: '東京都' } }} className="">東京</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '埼玉県' } }} className="">埼玉</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '千葉県' } }} className="">千葉</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '神奈川県' } }} className="">神奈川</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '茨城県' } }} className="">茨城</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '栃木県' } }} className="">栃木</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '群馬県' } }} className="">群馬</Link>
                      </ul>
                      <div class="balloon"></div>
                    </div>
                    </>}
                </div>

              <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ SelectTB: 'true' })}
                onMouseLeave={() => this.setState({ SelectTB: '' })}>
                <div className="sidebar-items_prefecture"><p>中部・北陸</p><ArrowBackIosIcon style={{ color: '#777777' }} /></div>
                {!this.state.SelectTB ? '' :
                    <>
                    <div className="selectItemTH TB">
                      <h2 className="selectItemTH_h2">中部・北陸</h2>
                      <ul>
                        <Link to={{ pathname:"/park/search", state: { parklocation: '新潟県' } }} className="">新潟</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '長野県' } }} className="">長野</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '石川県' } }} className="">石川</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '富山県' } }} className="">富山</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '福井県' } }} className="">福井</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '静岡県' } }} className="">静岡</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '山梨県' } }} className="">山梨</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '愛知県' } }} className="">愛知</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '岐阜県' } }} className="">岐阜</Link>
                        </ul>
                      <div class="balloon"></div>
                    </div>
                    </>}
              </div>

              <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ SelectKS: 'true' })}
                onMouseLeave={() => this.setState({ SelectKS: '' })}>
              <div className="sidebar-items_prefecture"><p>関西</p><ArrowBackIosIcon style={{ color: '#777777' }} /></div>
              {!this.state.SelectKS ? '' :
                    <>
                    <div className="selectItemTH KS">

                      <h2 className="selectItemTH_h2">関西</h2>


                    <ul>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '大阪府' } }} className="">大阪</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '京都府' } }} className="">京都</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '和歌山県' } }} className="">和歌山</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '三重県' } }} className="">三重</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '滋賀県' } }} className="">滋賀</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '奈良県' } }} className="">奈良</Link>
                      </ul>
                      <div class="balloon"></div>
                    </div>
                    </>}

              </div>


              <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ SelectTS: 'true' })}
                onMouseLeave={() => this.setState({ SelectTS: '' })}>
                <div className="sidebar-items_prefecture"><p>中国・四国</p><ArrowBackIosIcon style={{ color: '#777777' }} /></div>
                {!this.state.SelectTS ? '' :
                    <>
                    <div className="selectItemTH TS">
                      <h2 className="selectItemTH_h2">中国・四国</h2>
                    <ul>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '兵庫県' } }} className="">兵庫</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '岡山県' } }} className="">岡山</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '広島県' } }} className="">広島</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '山口県' } }} className="">山口</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '鳥取県' } }} className="">鳥取</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '島根県' } }} className="">島根</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '香川県' } }} className="">香川</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '愛媛県' } }} className="">愛媛</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '高知県' } }} className="">高知</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '徳島県' } }} className="">徳島</Link>
                      </ul>
                      <div class="balloon"></div>
                    </div>
                    </>}
                </div>

              <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ SelectKY: 'true' })}
                onMouseLeave={() => this.setState({ SelectKY: '' })}>
                <div className="sidebar-items_prefecture"><p>九州・沖縄</p><ArrowBackIosIcon style={{ color: '#777777' }} /></div>
                {!this.state.SelectKY ? '' :
                    <>
                    <div className="selectItemTH KY">

                      <h2 className="selectItemTH_h2">九州・沖縄</h2>


                    <ul>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '福岡県' } }} className="">福岡</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '長崎県' } }} className="">長崎</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '佐賀県' } }} className="">佐賀</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '大分県' } }} className="">大分</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '熊本県' } }} className="">熊本</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '宮崎県' } }} className="">宮崎</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '鹿児島県' } }} className="">鹿児島</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '沖縄県' } }} className="">沖縄</Link>
                      </ul>
                      <div class="balloon"></div>
                    </div>
                    </>}
                </div>
          </ul>
          </div>
        </>
    )
  }
}


export default SidebarPrefecture
