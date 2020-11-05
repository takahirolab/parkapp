import React, { Component } from 'react'
import axios from 'axios'
import Cloud from '../../images/cloud.png'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { searchItem } from '../../redux/actions/SearchActions'
import { connect } from 'react-redux';
import history from '../../util/history'
import { withRouter } from 'react-router';
import CancelIcon from '@material-ui/icons/Cancel';
import LogoTree from '../../images/LogoTree.svg';


const JapanArea = [
  {kangi:'北海道',Hiragana:'ほっかいどう',en:'hokkaido',kata:'ホッカイドウ'},
  {kangi:'青森県',Hiragana:'あおもり',en:'aomori',kata:'アオモリ'},
  {kangi:'岩手県',Hiragana:'いわて',en:'iwate',kata:'イワテ'},
  {kangi:'宮城県',Hiragana:'みやぎ',en:'miyagi',kata:'ミヤギ'},
  {kangi:'秋田県',Hiragana:'あきた',en:'akita',kata:'アキタ'},
  {kangi:'山形県',Hiragana:'やまがた',en:'yamagata',kata:'ヤマガタ'},
  {kangi:'福島県',Hiragana:'ふくしま',en:'fukushima',kata:'フクシマ'},
  {kangi:'茨城県',Hiragana:'いばらき',en:'ibaraki',kata:'イバラキ'},
  {kangi:'栃木県',Hiragana:'とちぎ',en:'tochigi',kata:'トチギ'},
  {kangi:'群馬県',Hiragana:'ぐんま',en:'gunma',kata:'グンマ'},
  {kangi:'埼玉県',Hiragana:'さいたま',en:'saitama',kata:'サイタマ'},
  {kangi:'千葉県',Hiragana:'ちば',en:'chiba',kata:'チバ'},
  {kangi:'東京都',Hiragana:'とうきょう',en:'tokyo',kata:'トウキョウ'},
  {kangi:'神奈川県',Hiragana:'かながわ',en:'kanagawa',kata:'カナガワ'},
  {kangi:'新潟県',Hiragana:'にいがた',en:'niigata',kata:'ニイガタ'},
  {kangi:'富山県',Hiragana:'とやま',en:'toyama',kata:'ヤマナシ'},
  {kangi:'石川県',Hiragana:'いしかわ',en:'ishikawa',kata:'ナガノ'},
  {kangi:'福井県',Hiragana:'ふくい',en:'fukui',kata:'トヤマ'},
  {kangi:'山梨県',Hiragana:'やまなし',en:'yamanashi',kata:'イシカワ'},
  {kangi:'長野県',Hiragana:'ながの',en:'nagano',kata:'フクイ'},
  {kangi:'岐阜県',Hiragana:'ぎふ',en:'gifu',kata:'ギフ'},
  {kangi:'静岡県',Hiragana:'しずおか',en:'shizuoka',kata:'シズオカ'},
  {kangi:'愛知県',Hiragana:'あいち',en:'aichi',kata:'アイチ'},
  {kangi:'三重県',Hiragana:'みえ',en:'mie',kata:'ミエ'},
  {kangi:'滋賀県',Hiragana:'しが',en:'shiga',kata:'シガ'},
  {kangi:'京都府',Hiragana:'きょうと',en:'kyoto',kata:'キョウト'},
  {kangi:'大阪府',Hiragana:'おおさか',en:'osaka',kata:'オオサカ'},
  {kangi:'兵庫県',Hiragana:'ひょうご',en:'hyogo',kata:'ヒョウゴ'},
  {kangi:'奈良県',Hiragana:'なら',en:'nara',kata:'ナラ'},
  {kangi:'和歌山県',Hiragana:'わかやま',en:'wakayama',kata:'ワカヤマ'},
  {kangi:'鳥取県',Hiragana:'とっとり',en:'tottori',kata:'トットリ'},
  {kangi:'島根県',Hiragana:'しまね',en:'shimane',kata:'シマネ'},
  {kangi:'岡山県',Hiragana:'おかやま',en:'okayama',kata:'オカヤマ'},
  {kangi:'広島県',Hiragana:'ひろしま',en:'hiroshima',kata:'ヒロシマ'},
  {kangi:'山口県',Hiragana:'やまぐち',en:'yamaguchi',kata:'ヤマグチ'},
  {kangi:'徳島県',Hiragana:'とくしま',en:'tokushima',kata:'トクシマ'},
  {kangi:'香川県',Hiragana:'かがわ',en:'kagawa',kata:'カガワ'},
  {kangi:'愛媛県',Hiragana:'えひめ',en:'ehime',kata:'エヒメ'},
  {kangi:'高知県',Hiragana:'こうち',en:'kochi',kata:'コウチ'},
  {kangi:'福岡県',Hiragana:'ふくおか',en:'fukuoka',kata:'フクオカ'},
  {kangi:'佐賀県',Hiragana:'さが',en:'saga',kata:'サガ'},
  {kangi:'長崎県',Hiragana:'ながさき',en:'nagasaki',kata:'ナガサキ'},
  {kangi:'熊本県',Hiragana:'くまもと',en:'kumamoto',kata:'クマモト'},
  {kangi:'大分県',Hiragana:'おおいた',en:'oita',kata:'オオイタ'},
  {kangi:'宮崎県',Hiragana:'みやざき',en:'miyazaki',kata:'ミヤザキ'},
  {kangi:'鹿児島県',Hiragana:'かごしま',en:'kagoshima',kata:'カゴシマ'},
  {kangi:'沖縄',Hiragana:'おきなわ',en:'okinawa',kata:'オキナワ'}
]

export class HomeWeather extends Component {
    constructor(props) {
        super(props);
      this.state = {
          value: '',
          parklocation:'',
          parkTag: '',
          parkTag2: '',
          HomeSearchLocation: 'none',
          HomeSearchWhat:'none',
          prefecture: '',
          HomeparkSelectWhatSee: 'true',
          HomeparkSelectWhatLearn: '',
          HomeparkSelectWhatPlay: '',
          HomeparkSelectWhatOther: '',
          HomeparkSearchSelectWhat: '',

      }
       this.inputRef = React.createRef();
      this.modalRef = React.createRef();
      this.modalRefwhat = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.focusTextInput = this.focusTextInput.bind(this);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleFilterTextChangeTag = this.handleFilterTextChangeTag.bind(this);
        this.handleFilterTextChangeTag2 = this.handleFilterTextChangeTag2.bind(this);
        this.HomeSearchLocation= this.HomeSearchLocation.bind(this);
        this.HomeSearchWhat= this.HomeSearchWhat.bind(this);
        this.HomeSearchWhatReset= this.HomeSearchWhatReset.bind(this);
      this.valueDelete = this.valueDelete.bind(this)
      this.filterList = this.filterList.bind(this)

      this.HomeSearchLocationReset= this.HomeSearchLocationReset.bind(this);
      this.HomeparkSelectWhatSee = this.HomeparkSelectWhatSee.bind(this)
      this.handleClickEvent = this.handleClickEvent.bind(this)
      this.handleClickEventwhat = this.handleClickEventwhat.bind(this)
    }


    componentDidMount() {
      // EventTargetに全てのClick eventをHandlingできるように登録する
      document.addEventListener('click', this.handleClickEvent)
      document.addEventListener('click', this.handleClickEventwhat)
    }

    componentWillUnmount() {
      // click eventがeventListenerに登録されたままになってしまうのでUnmount時にremoveする
      document.removeEventListener('click', this.handleClickEvent)
      document.removeEventListener('click', this.handleClickEventwhat)
    }

    handleClickEvent (event) {
      if (
        this.modalRef &&
        this.modalRef.current &&
        !this.modalRef.current.contains(event.target)
      ) {
        // ref内にクリックされたeventのDOMが含まれているかを確認する
        this.setState({
      HomeSearchLocation:'none'
      })
      }
    }

    handleClickEventwhat (event) {
      if (
        this.modalRefwhat &&
        this.modalRefwhat.current &&
        !this.modalRefwhat.current.contains(event.target)
      ) {
        // ref内にクリックされたeventのDOMが含まれているかを確認する
        this.setState({
          HomeSearchWhat:'none'
          })
      }
    }


  HomeSearchLocation() {
    this.setState({
      HomeSearchWhat:'none'
    })
    this.state.HomeSearchLocation ==='none'?
    this.setState({
      HomeSearchLocation:'inline'
      }):
    this.setState({
      HomeSearchLocation:'none'
      })
  }

  HomeSearchWhat() {
    this.setState({
      HomeSearchLocation:'none'
    })
    this.state.HomeSearchWhat ==='none'?
    this.setState({
      HomeSearchWhat:'inline'
      }):
    this.setState({
      HomeSearchWhat:'none'
      })
    }


    valueDelete() {
        this.setState({
          parklocation:'',
          parkTag: '',
          parkTag2: '',
          parkTag3:''
        })
      }


    handleFilterTextChange(e) {
        this.setState({
          parklocation:e.target.value
        })
    }

    handleFilterTextChangeTag(e) {
        this.setState({
          parkTag:e.target.value
        })
      }

      handleFilterTextChangeTag2(e) {
        this.setState({
          parkTag2:e.target.value
        })
      }


      HomeparkSelectWhatSee() {
        if (this.state.HomeparkSelectWhatSee === 'ture') {
          this.setState({
            HomeparkSelectWhatSee: ''
          });
        }
        if (this.state.HomeparkSelectWhatSee === '') {
          this.setState({
            HomeparkSelectWhatSee: 'ture'
          });
        }
      }


      HomeparkSelectWhatLearn() {
        if (this.state.HomeparkSelectWhatLearn === 'ture') {
          this.setState({
            HomeparkSelectWhatLearn: ''
          });
        }
        if (this.state.HomeparkSelectWhatLearn === '') {
          this.setState({
            HomeparkSelectWhatLearn: 'ture'
          });
        }
      }


      HomeparkSelectWhatPlay() {
        if (this.state.HomeparkSelectWhatPlay === 'ture') {
          this.setState({
            HomeparkSelectWhatPlay: ''
          });
        }
        if (this.state.HomeparkSelectWhatPlay === '') {
          this.setState({
            HomeparkSelectWhatPlay: 'ture'
          });
        }
      }


      HomeparkSelectWhatOther() {
        if (this.state.HomeparkSelectWhatOther === 'ture') {
          this.setState({
            HomeparkSelectWhatOther: ''
          });
        }
        if (this.state.HomeparkSelectWhatOther === '') {
          this.setState({
            HomeparkSelectWhatOther: 'ture'
          });
        }
      }


      handleSubmit = (event) =>{
        event.preventDefault();
        const searchData = {
           parklocation:this.state.prefecture,
           parkTag:this.state.HomeparkSearchSelectWhat
       };
        this.props.searchItem(searchData);
        this.props.history.push('/park/search')
        console.log(searchData)
      };


  HomeSearchLocationReset() {
    this.setState({
      prefecture: '',
      value:''
        })
      }

  HomeSearchWhatReset() {
    this.setState({
      HomeparkSearchSelectWhat: '',
        })
      }



      filterList(event) {
          this.setState({
            value: event.target.value,
            prefecture: event.target.value,
            HomeSearchLocation:'inline'
          })
      }

      focusTextInput(e) {
        this.inputRef.current.focus();
        this.setState({
          prefecture: e,
          value:e
        })
      }

  render() {
    const parks = this.props.data.parks;
    const HomeSelect = {
      pathname: '/park/search', search: '', state: { parklocation: this.state.prefecture, HomeparkSearchSelectWhat: this.state.HomeparkSearchSelectWhat }
    }

    const parkInput = parks.map((park) => {
      const parkSearch = park.parkName.startsWith(this.state.value,0)
      // const parkSearchTag1 = park.parkTag1.startsWith(this.state.value,0)

      if (parkSearch === true && this.state.value.length > 0) {
        return <Link to={`/park/${park.parkId}`}className="HomeParkSearch-input-parkitem">
            {/* <div className="searchResult-location-pc">
            <img src={LogoTree} className="parkSearchinpt-logo"/>
          </div> */}
          {park.parkName}</Link>
      }
    })

    const LocationSearch = JapanArea.map((JapanAreaHGItem) => {
      const SearchstartHg = JapanAreaHGItem.Hiragana.startsWith(this.state.value, 0)
      const SearchstartKg = JapanAreaHGItem.kangi.startsWith(this.state.value, 0)
      const SearchstartEn = JapanAreaHGItem.en.startsWith(this.state.value, 0)
      const SearchstartKn = JapanAreaHGItem.kata.startsWith(this.state.value, 0)

      const juge = true;

      const JapanAreaHgparam =
      { pathname: '/search', search: `/city${JapanAreaHGItem.Hiragana}`,state: { parklocation: JapanAreaHGItem.kangi}
      };
      const JapanAreKgparam =
      { pathname: '/search', search: `/city${JapanAreaHGItem.kangi}`,state: { parklocation: JapanAreaHGItem.kangi}
      };
      const JapanAreaEnparam =
      { pathname: '/search', search: `/city${JapanAreaHGItem.en}`,state: { parklocation: JapanAreaHGItem.kangi}
      };
      const JapanAreaKnparam =
      { pathname: '/search', search: `/city${JapanAreaHGItem.kata}`,state: { parklocation: JapanAreaHGItem.kangi}
      };




        if (SearchstartHg === true && this.state.value.length > 0) {

          return<Link to={JapanAreaHgparam} className="HomeParkSearch-input-parkitem">
           {JapanAreaHGItem.kangi}
          </Link>
        }
        if (SearchstartKg === true && this.state.value.length > 0) {
          return <Link to={JapanAreKgparam} className="HomeParkSearch-input-parkitem">

            {JapanAreaHGItem.kangi}</Link>

        }
        if (SearchstartEn === true && this.state.value.length > 0) {
          return <Link to={JapanAreaEnparam} className="HomeParkSearch-input-parkitem">
           {JapanAreaHGItem.kangi}</Link>

        }
        if (SearchstartKn === true && this.state.value.length > 0) {
          return <Link to={JapanAreaKnparam} className="HomeParkSearch-input-parkitem">
         {JapanAreaHGItem.kangi}</Link>
        }


    })






    console.log(this.inputRef.value)
    console.log(this.inputRef.prefecture)
    return (

          <form className="ParkSearch" action="/park/search" name="test1"　method="get"  onSubmit={this.handleSubmit}>
        <div className="HomeParkSearch-Location HomeParkSearch__width" onClick={this.HomeSearchLocation} ref={this.modalRef}>
        <LocationOnRoundedIcon style={{ fontSize: 24, color: '#52BF90' }} />
          <input type="text"
            name="test2"
            className="homeSearchLocation-input"
            value={this.state.value}
            onChange={this.filterList}
            autocomplete="off"
            placeholder="都道府県・公園からさがす"
            style={{ color: '#52bf90' }}
            ref={this.inputRef}
          />

          {this.state.prefecture || this.state.value ?
            <CancelIcon style={{ fontSize: 18,color:'#b4b4b4' }} className="HomeParkSearch-Location_reset" onClick={this.HomeSearchLocationReset}/>:''}


          {/* {this.state.prefecture === '' ? <p style={{ color: '#b4b4b4', marginLeft: '1rem' }}>都道府県・公園から探す</p> : <p style={{ color: '#52BF90', marginLeft: '1rem' }}>{this.state.prefecture}</p>} */}


          <div className="HomeSearchLocation-Select" style={{ display: this.state.HomeSearchLocation }}>

            {!this.state.value ?<>
            <div className="HomeSearchLocation-Select-h2">
              <h2>都道府県から探す</h2>
              <p style={{color:'#52bf90'}} onClick={() => this.setState({ prefecture:'',value:'すべて'})}>すべて</p>
            </div>
                <div className="HomeSearchLocation-Select-items">
                  <table className="HomeSearchLocation-Select__margin" >

                  <tr>
                    <td className="HomeSearchLocation-td">北海道</td><td onClick={this.focusTextInput.bind(this,'北海道')}>北海道</td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">東北</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'青森')}>青森</div><div  className="HomeParkprefecture"　onClick={this.focusTextInput.bind(this,'岩手')}>岩手</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'秋田')}>秋田</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'岩手')}>岩手</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'山形')}>山形</div><div  className="HomeParkprefecture"　onClick={this.focusTextInput.bind(this,'福島')}>福島</div></td>
                    </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">関東</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'東京都')}>東京</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'神奈川')}>神奈川</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'埼玉')}>埼玉</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'千葉')}>千葉</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'茨城')}　>茨城</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'山形')}onClick={this.focusTextInput.bind(this,'栃木')}>栃木</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'群馬')}>群馬</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">中部</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'山梨')}>山梨</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'静岡')}>静岡</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'愛知')}>愛知</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'岐阜')}>岐阜</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'長野')}>長野</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'石川')}>石川</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'福井')}>福井</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'新潟')}>新潟</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">関西</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'大阪大阪')}>大阪</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'滋賀滋賀')}>滋賀</div><div  className="HomeParkprefecture"　onClick={this.focusTextInput.bind(this,'三重三重')}>三重</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'京都京都')}>京都</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'和歌山和歌山')}>和歌山</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'兵庫兵庫')}>兵庫</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">中国・四国</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'岡山')}>岡山</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'広島')}>広島</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'山口')}>山口</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'鳥取')}>鳥取</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'島根')}>島根</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'愛媛')}>愛媛</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'香川')}>香川</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'徳島')}>徳島</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'高知')}>高知</div></td>
                  </tr>

                  <tr>
                    <td className="HomeSearchLocation-td">九州・沖縄</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'福岡')}>福岡</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'大分')}>大分</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'宮崎')}>宮崎</div><div  className="HomeParkprefecture"　onClick={this.focusTextInput.bind(this,'鹿児島')}>鹿児島</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'長崎')}>長崎</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'佐賀')}>佐賀</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'沖縄')}>沖縄</div></td>
                  </tr>

              </table>

              </div> </> :
              <><div className="" style={{display:'flex'}}>
                {parkInput}
                {LocationSearch} </div></>}

              </div>
            </div>

                <div className="HomeParkSearch-what" onClick={this.HomeSearchWhat} ref={this.modalRefwhat}>
          <EmojiPeopleRoundedIcon style={{ fontSize: 24, color: '#52bf90' }} />
          {this.state.HomeparkSearchSelectWhat ?
            <CancelIcon style={{ fontSize: 18,color:'#b4b4b4' }} className="HomeParkSearch-Location_reset" onClick={this.HomeSearchWhatReset}/>:''}

                {this.state.HomeparkSearchSelectWhat ==='' ? <p style={{color:'#b4b4b4',marginLeft:'1rem',fontSize:'1.4rem'}}>目的からさがす</p> : <p  style={{color:'#52BF90',marginLeft:'1rem',fontSize:'1.4rem'}}>{this.state.HomeparkSearchSelectWhat}</p>}
                <div className="ParkSearchWhat-Select" style={{ display: this.state.HomeSearchWhat }}>
                <h2>目的からさがす</h2>

                <div className="HomeSearchLocation-Select-items">
                  <div className="HomeSearchWhatSelect-items-left">
                  <div className="sidebar-items_prefecture__" >
                  <p>みる</p>
                {this.state.HomeparkSelectWhatSee === 'true'?
                    <>
                    <div className="HomeSearchWhatSelect-item-See topPosition-see">
                    <ul>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ HomeparkSearchSelectWhat:'夜景'})}>夜景</li>
                      <li className="HomeSearchWhatSelect-item"onClick={() => this.setState({ HomeparkSearchSelectWhat:'海が見える'})}>海が見える</li>
                      <li className="HomeSearchWhatSelect-item"onClick={() => this.setState({ HomeparkSearchSelectWhat:'山がみれる'})}>山がみれる</li>
                      <li className="HomeSearchWhatSelect-item"onClick={() => this.setState({ HomeparkSearchSelectWhat:'自然豊か'})}>自然豊か</li>
                      <li className="HomeSearchWhatSelect-item"onClick={() => this.setState({ HomeparkSearchSelectWhat:'動植物がいっぱい'})}>動植物がいっぱい</li>
                      <li className="HomeSearchWhatSelect-item"onClick={() => this.setState({ HomeparkSearchSelectWhat:'夕日が見える'})}>夕日が見える</li>
                      </ul>
                    </div>
                    </>:''}
                    </div>

                  <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ HomeparkSelectWhatLearn: 'true',HomeparkSelectWhatSee: '' })}
                onMouseLeave={() => this.setState({ HomeparkSelectWhatLearn: '',HomeparkSelectWhatSee: 'true'  })}>
                  <p>学ぶ</p>
                {!this.state.HomeparkSelectWhatLearn ? '' :
                    <>
                    <div className="HomeSearchWhatSelect-item-See topPosition-play">
                    <ul>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ HomeparkSearchSelectWhat:'博物館・美術館'})}>博物館・美術館</li>
                      </ul>
                    </div>
                    </>}
                    </div>


                  <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ HomeparkSelectWhatPlay: 'true',HomeparkSelectWhatSee: '' })}
                onMouseLeave={() => this.setState({ HomeparkSelectWhatPlay: '',HomeparkSelectWhatSee: 'true' })}>
                  <p>あそぶ</p>
                {!this.state.HomeparkSelectWhatPlay ? '' :
                    <>
                    <div className="HomeSearchWhatSelect-item-See topPosition-learn">
                    <ul>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ HomeparkSearchSelectWhat:'ポート'})}>ボート</li>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ HomeparkSearchSelectWhat:'遊具がたくさん'})}>遊具が豊富</li>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ HomeparkSearchSelectWhat:'アスレチックあり'})}>アスレチック</li>
                      </ul>
                    </div>
                    </>}
                    </div>

                  <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ HomeparkSelectWhatOther: 'true',HomeparkSelectWhatSee: '' })}
                onMouseLeave={() => this.setState({ HomeparkSelectWhatOther: '',HomeparkSelectWhatSee: 'true' })}>
                  <p>その他</p>
                {!this.state.HomeparkSelectWhatOther ? '' :
                    <>
                    <div className="HomeSearchWhatSelect-item-See topPosition-othrer">
                    <ul>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ HomeparkSearchSelectWhat:'撮影'})}>撮影</li>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ HomeparkSearchSelectWhat:'楽器練習可'})}>楽器練習可</li>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ HomeparkSearchSelectWhat:'芝生あり'})}>芝生あり</li>
                      </ul>
                    </div>
                    </>}
              </div>

                    {/* <div className="Home-see" onMouseMove={() => this.setState({ HomeparkSelectWhatSee: 'true' })}
                      onMouseLeave={() => this.setState({ HomeparkSelectWhatSee: '' })}>
                    <p>みる</p>
                     {this.state.HomeparkSelectWhatSee ? '' :
                    <>
                    <div className="HomeSearchWhatSelect-item-See">

                    <ul className="HomeSearchWhatSelect-item-See--">
                      <li className="HomeSearchWhatSelect-item">博物館・美術館</li>
                      <li className="HomeSearchWhatSelect-item">夜景</li>
                      <li className="HomeSearchWhatSelect-item">海が見える</li>
                      <li className="HomeSearchWhatSelect-item">山がみれる</li>
                      <li className="HomeSearchWhatSelect-item">豊富</li>
                    </ul>
                    </div>

                        </>}
                    </div> */}


                    {/* <p>学ぶ</p>
                    <p>あそぶ</p>
                    <p>その他</p> */}
                  </div>
                </div>
              </div>
                </div>


                <div className="HomeParkSearch-Location">
                    <AddRoundedIcon style={{ fontSize: 24, color: '#52bf90' }} />
                    <select className="p HomeParkSearch-what-select"
                  value={this.state.parkTag2}
                  onChange={this.handleFilterTextChangeTag2}
                        placeholder="ああああ"
                        name="what"
                  style={
                    this.state.parkTag2 ?
                      { color: '#52BF90'} :  { color: '#b4b4b4' }
                  }>
                    <option value="" style={{display:'none'}}>その他詳細条件</option>
                    <option value="">すべて</option>
                    <option value="東京都">東京</option>
                    <option value="大阪">大阪</option>
                    <option value="神奈川">神奈川</option>
                </select>
                </div>



            <button type="submit"  className="HomeParkSearchicon" >
                <SearchRoundedIcon style={{ fontSize: 30, color: '#fff' }} />
            </button>
         </form>
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
  searchItem
}

export default connect(mapStateToProps,mapActionsToProps)(withRouter(HomeWeather));
