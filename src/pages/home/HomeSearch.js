import React, { Component } from 'react'

import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { Link } from 'react-router-dom';
import { searchItem } from '../../redux/actions/SearchActions'
import { connect } from 'react-redux';

import { withRouter } from 'react-router';
import CancelIcon from '@material-ui/icons/Cancel';
import prefecture from '../../util/prefecture.json'


const JapanArea = prefecture;

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
          HomeSearchOther:'none',
          prefecture: '',
          HomeparkSelectWhatSee: 'true',
          HomeparkSelectWhatLearn: '',
          HomeparkSelectWhatPlay: '',
          HomeparkSelectWhatOther: '',
        HomeparkSearchSelectWhat: '',
        HomeparkSearchSelectOther:''

      }
       this.inputRef = React.createRef();
      this.modalRef = React.createRef();
      this.modalRefwhat = React.createRef();
      this.modalRefOther = React.createRef();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.focusTextInput = this.focusTextInput.bind(this);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleFilterTextChangeTag = this.handleFilterTextChangeTag.bind(this);
      this.handleFilterTextChangeTag2 = this.handleFilterTextChangeTag2.bind(this);
      this.HomeSearchLocation= this.HomeSearchLocation.bind(this);
      this.HomeSearchWhat= this.HomeSearchWhat.bind(this);
      this.HomeSearchOther= this.HomeSearchOther.bind(this);
      this.HomeSearchWhatReset= this.HomeSearchWhatReset.bind(this);
      this.HomeSearchOtherReset= this.HomeSearchOtherReset.bind(this);
      this.valueDelete = this.valueDelete.bind(this)
      this.filterList = this.filterList.bind(this)

      this.HomeSearchLocationReset= this.HomeSearchLocationReset.bind(this);
      this.HomeparkSelectWhatSee = this.HomeparkSelectWhatSee.bind(this)

      this.handleClickEvent = this.handleClickEvent.bind(this)
      this.handleClickEventwhat = this.handleClickEventwhat.bind(this)
      this.handleClickEventOther = this.handleClickEventOther.bind(this)
    }


    componentDidMount() {
      // EventTargetに全てのClick eventをHandlingできるように登録する
      document.addEventListener('click', this.handleClickEvent)
      document.addEventListener('click', this.handleClickEventwhat)
      document.addEventListener('click', this.handleClickEventOther)
    }

    componentWillUnmount() {
      // click eventがeventListenerに登録されたままになってしまうのでUnmount時にremoveする
      document.removeEventListener('click', this.handleClickEvent)
      document.removeEventListener('click', this.handleClickEventwhat)
      document.removeEventListener('click', this.handleClickEventOther)
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
    handleClickEventOther (event) {
      if (
        this.modalRefOther &&
        this.modalRefOther.current &&
        !this.modalRefOther.current.contains(event.target)
      ) {
        // ref内にクリックされたeventのDOMが含まれているかを確認する
        this.setState({
          HomeSearchOther:'none'
          })
      }
    }


  HomeSearchLocation() {
    this.setState({
      HomeSearchWhat: 'none',
      HomeSearchOther:'none'
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
      HomeSearchLocation: 'none',
      HomeSearchOther:'none'
    })
    this.state.HomeSearchWhat ==='none'?
    this.setState({
      HomeSearchWhat:'inline'
      }):
    this.setState({
      HomeSearchWhat:'none'
      })
    }

  HomeSearchOther() {
    this.setState({
      HomeSearchLocation: 'none',
      HomeSearchWhat:'none'
    })
    this.state.HomeSearchOther ==='none'?
    this.setState({
      HomeSearchOther:'inline'
      }):
    this.setState({
      HomeSearchOther:'none'
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
           parkTag:this.state.HomeparkSearchSelectWhat,
           parkTag2:this.state.HomeparkSearchSelectOther
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
  HomeSearchOtherReset() {
    this.setState({
      HomeparkSearchSelectOther: '',
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
                    <td className="HomeSearchLocation-td">東北</td><td className="HomeParkprefectur-flex">
                      <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '青森県')}>青森県</div>
                      <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '岩手県')}>岩手県</div>
                      <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '秋田県')}>秋田県</div>
                      <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '岩手県')}>岩手県</div>
                      <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '山形県')}>山形県</div>
                      <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '福島県')}>福島県</div>
                    </td>
                    </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">関東</td><td className="HomeParkprefectur-flex">
                      <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '東京都')}>東京都</div>
                      <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '神奈川県')}>神奈川県</div>
                      <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '埼玉県')}>埼玉県</div>
                      <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '千葉県')}>千葉県</div>
                      <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '茨城県')}>茨城県</div>
                      <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '栃木県')}>栃木県</div>
                      <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '群馬県')}>群馬県</div>
                    </td>

                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">中部</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'山梨県')}>山梨県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'静岡県')}>静岡県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'愛知県')}>愛知県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'岐阜県')}>岐阜県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'長野県')}>長野県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'石川県')}>石川県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'福井県')}>福井県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'新潟県')}>新潟県</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">関西</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'大阪府')}>大阪県</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'滋賀県')}>滋賀県</div><div  className="HomeParkprefecture"　onClick={this.focusTextInput.bind(this,'三重県')}>三重県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'京都府')}>京都県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'和歌山県')}>和歌山県</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'兵庫県')}>兵庫県</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">中国・四国</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'岡山県')}>岡山県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'広島県')}>広島県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'山口県')}>山口県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'鳥取県')}>鳥取県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'島根県')}>島根県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'愛媛県')}>愛媛県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'香川県')}>香川県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'徳島県')}>徳島県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'高知県')}>高知県</div></td>
                  </tr>

                  <tr>
                    <td className="HomeSearchLocation-td">九州・沖縄</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'福岡県')}>福岡県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'大分県')}>大分県</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'宮崎県')}>宮崎県</div><div  className="HomeParkprefecture"　onClick={this.focusTextInput.bind(this,'鹿児島県')}>鹿児島県</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'長崎県')}>長崎県</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'佐賀県')}>佐賀県</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'沖縄県')}>沖縄県</div></td>
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


                <div className="HomeParkSearch-Other" onClick={this.HomeSearchOther} ref={this.modalRefOther}>
                    <AddRoundedIcon style={{ fontSize: 24, color: '#52bf90' }} />
                    {this.state.HomeparkSearchSelectOther ?
                  <CancelIcon style={{ fontSize: 18,color:'#b4b4b4' }} className="HomeParkSearch-Location_reset" onClick={this.HomeSearchOtherReset}/>:''}

                     {this.state.HomeparkSearchSelectOther ==='' ? <p style={{color:'#b4b4b4',marginLeft:'1rem',fontSize:'1.4rem'}}>その他・詳細条件</p> : <p  style={{color:'#52BF90',marginLeft:'1rem',fontSize:'1.4rem'}}>{this.state.HomeparkSearchSelectOther}</p>}
                     <div className="ParkSearchOther-Select" style={{ display: this.state.HomeSearchOther }}>
                <h2>一緒にいくひと</h2>

                <ul className="sidebar-items HomeSearchInputWhat-modal">
                  <li onClick={() => this.setState({ HomeparkSearchSelectOther:'ひとり'})} className="sidebar-item">ひとり</li>
                  <li onClick={() => this.setState({ HomeparkSearchSelectOther:'子供'})} className="sidebar-item">子供</li>
                  <li onClick={() => this.setState({ HomeparkSearchSelectOther:'カップル'})} className="sidebar-item">カップル</li>
                  <li onClick={() => this.setState({ HomeparkSearchSelectOther:'車椅子のかた'})} className="sidebar-item">車椅子のかた</li>
                  <li onClick={() => this.setState({ HomeparkSearchSelectOther:'友人'})}className="sidebar-item">友人</li>
                  <li onClick={() => this.setState({ HomeparkSearchSelectOther:'家族'})} className="sidebar-item">家族</li>
                  <li onClick={() => this.setState({ HomeparkSearchSelectOther:'小さいこども'})}className="sidebar-item">小さいこども</li>
                  <li onClick={() => this.setState({ HomeparkSearchSelectOther:'乳幼児'})}className="sidebar-item">乳幼児</li>
                </ul>
              </div>

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
