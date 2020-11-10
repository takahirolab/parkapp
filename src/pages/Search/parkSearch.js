import React, { Component } from 'react'


import {useLocation} from 'react-router-dom';

import '../../App.css';

import { Link,NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {getParks} from '../../redux/actions/dataActions';

import  Navbar  from '../../layout/Navbar'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';

import LikeButton from '../../components/park/LikeButton'


import ScreamSkeleton from '../../util/ScreamSkeleton';
import ScreamSkeletonSP from '../../util/ScreamSkeletonSP_search';
import { Category, NaturePeopleOutlined, TextureSharp, ThreeSixty, TransferWithinAStationSharp } from '@material-ui/icons';
import LazyLoad from 'react-lazyload'
import SearchIcon from '@material-ui/icons/Search';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import SearchbarDrawer from '../SearchbarDrawer'
import CancelIcon from '@material-ui/icons/Cancel';
import SearchbarDrawer_pc from '../SearchbarDrawer_pc'
import Footer from '../../layout/Footer';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MapIcon from '@material-ui/icons/Map';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import　LogoTree  from '../../images/LogoTree.svg';

const SearchTags = [
  { kanji: '朝', Hiragana: 'あさ', en: 'osa', kata: 'アサ' }
]

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

const tokyo = {
  pathname: '/search',search: '?tokyo',state: { parklocation: '東京都' }
};


export class ParkSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
       marker: 40,
        parklocation:'',
        parkTag: '',
        parkTag2:'',
      parkTag3: '',
      HomeSearchLocation: 'none',
      HomeSearchWhat: 'none',
      HomeSearchWho: 'none',
      omeparkSelectWhatSee: '',
      HomeparkSelectWhatLearn: '',
      HomeparkSelectWhatPlay: '',
      HomeparkSelectWhatOther: '',
      HomeparkSearchSelectWhat: '',

      value:'',
      whatValue: '',
      HomeSearchWhatSP: 'none',
      HomeSearchLocationSP:'none',
      HomeSearchOtherSP:'none',
      Searchdisplay: 'inline',
      SearchResult: 'none',
      SearchDrawer: 'false',
      HomeAreaKT:'none',
      HomeAreaTH:'none',
      HomeAreaCH:'none',
      HomeAreaKN:'none',
      HomeAreaTS:'none',
      HomeAreaKS: 'none',
      HomeSelectArea:'',
      HomeSelectWhat:'',
      HomeSelectOther:'',

    };

    this.modalRef = React.createRef()
    this.modalRefwhat = React.createRef()
    this.modalRefwho = React.createRef()

    this.HomeSearchLocation = this.HomeSearchLocation.bind(this);
    this.HomeSearchWhat= this.HomeSearchWhat.bind(this);
    this.HomeSearchWho = this.HomeSearchWho.bind(this);

    this.handleClickEvent = this.handleClickEvent.bind(this)
    this.handleClickEventwhat = this.handleClickEventwhat.bind(this)
    this.handleClickEventwho = this.handleClickEventwho.bind(this)


    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterTextChangeTag = this.handleFilterTextChangeTag.bind(this);
    this.handleFilterTextChangeTag2 = this.handleFilterTextChangeTag2.bind(this);
    this.handleFilterTextChangeTag3 = this.handleFilterTextChangeTag3.bind(this);
    this.SearchCloseLoc = this.SearchCloseLoc.bind(this);
    this.SearchCloseTag = this.SearchCloseTag.bind(this);
    this.SearchCloseTag2 = this.SearchCloseTag2.bind(this);
    this.SearchCloseTag3 = this.SearchCloseTag3.bind(this);
    this.loadList = this.loadList.bind(this)
    this.test1 = this.test1.bind(this)
    this.valueDelete = this.valueDelete.bind(this)

    this.HomeSearchOther = this.HomeSearchOther.bind(this);
    this.HomeSearchWhat = this.HomeSearchWhat.bind(this);
    this.HomeSearchLocation = this.HomeSearchLocation.bind(this);
    this.filterListWhat = this.filterListWhat.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
    this.filterList = this.filterList.bind(this);
    this.HomeAreaKT = this.HomeAreaKT.bind(this);
    this.HomeAreaTH = this.HomeAreaTH.bind(this);
    this.HomeAreaCH = this.HomeAreaCH.bind(this);
    this.HomeAreaKN = this.HomeAreaKN.bind(this);
    this.HomeAreaTS = this.HomeAreaTS.bind(this);
    this.HomeAreaKS = this.HomeAreaKS.bind(this);
    this.fixedOpen = this.fixedOpen.bind(this);
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
  handleFilterTextChangeTag3(e) {
    this.setState({
      parkTag3:e.target.value
    })
  }
  test1() {
    this.setState({
      parklocation: '東京都',
      parkTag:'朝'
    })
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickEvent)
    document.addEventListener('click', this.handleClickEventwhat)
    document.addEventListener('click', this.handleClickEventwho)
    if (this.props.search.search.Searchparks.parklocation) {
      this.setState({
        parklocation: this.props.search.search.Searchparks.parklocation,
      })
    }
    if (this.props.search.search.Searchparks.parkTag) {
      this.setState({
        parkTag:this.props.search.search.Searchparks.parkTag
      })
    }
  }



  componentWillUnmount() {
    // click eventがeventListenerに登録されたままになってしまうのでUnmount時にremoveする
    document.removeEventListener('click', this.handleClickEvent)
    document.removeEventListener('click', this.handleClickEventwhat)
    document.removeEventListener('click', this.handleClickEventwho)
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
  handleClickEventwho (event) {
    if (
      this.modalRefwho &&
      this.modalRefwho.current &&
      !this.modalRefwho.current.contains(event.target)
    ) {
      // ref内にクリックされたeventのDOMが含まれているかを確認する
      this.setState({
        HomeSearchWho:'none'
        })
    }
  }


  HomeSearchWhat() {
    this.state.HomeSearchWhat ===　'none'?
    this.setState({
      HomeSearchWhat:'inline'
      }):
    this.setState({
      HomeSearchWhat:'none'
      })
  }



  HomeSearchLocation() {
    this.state.HomeSearchLocation ==='none'?
    this.setState({
      HomeSearchLocation:'inline'
      }):
    this.setState({
      HomeSearchLocation:'none'
      })
  }

  HomeSearchWho() {
    this.state.HomeSearchWho ==='none'?
    this.setState({
      HomeSearchWho:'inline'
      }):
    this.setState({
      HomeSearchWho:'none'
      })
  }


  componentWillMount() {
    this.props.getParks();
    const searchInput = this.props.location.pathname.substr(13)
    if (searchInput) {
      JapanArea.map((JapanAreaHGItem) => {
        const SearchstartHg = JapanAreaHGItem.Hiragana.startsWith(searchInput, 0)
        const SearchstartKg = JapanAreaHGItem.kangi.startsWith(searchInput, 0)
        const SearchstartEn = JapanAreaHGItem.en.startsWith(searchInput, 0)
        const SearchstartKn = JapanAreaHGItem.kata.startsWith(searchInput, 0)
        console.log(SearchstartHg)
        if (SearchstartHg === true) {
          this.setState({
            parkTag: this.props.location.pathname.substr(13)
          })
        }
      })
    }else if (!searchInput && !this.props.location.state) {
      return console.log('ありません')
    }
    else {
      this.setState({
        parklocation: this.props.location.state.parklocation,
        parkTag: this.props.location.state.scene
      })
    }
  }

  loadList() {
    this.setState({
      marker: this.state.marker + 40
    })
  }

  SearchCloseLoc() {
      this.setState({
        parklocation: '',
        HomeSearchLocation:''
      })
  }
  SearchCloseTag() {
      this.setState({
        parkTag: '',
      })
  }
  SearchCloseTag2() {
      this.setState({
        parkTag2: '',
      })
  }
  SearchCloseTag3() {
      this.setState({
        parkTag3: '',
      })
  }



// SP版
  HomeAreaKT() {
    this.setState({
      HomeAreaTH:'none',
      HomeAreaKT:'none',
      HomeAreaCH:'none',
      HomeAreaKN:'none',
      HomeAreaTS:'none',
      HomeAreaKS:'none'
    })
    if (this.state.HomeAreaKT === 'none'){
      this.setState({
        HomeAreaKT: 'inline'
      })
  }else{
      this.setState({
        HomeAreaKT:'none'
      })
    }
  }

  HomeAreaTH() {
    this.setState({
      HomeAreaKT:'none',
      HomeAreaCH:'none',
      HomeAreaKN:'none',
      HomeAreaTS:'none',
      HomeAreaKS:'none'
    })
    if (this.state.HomeAreaTH === 'none'){
      this.setState({
        HomeAreaTH: 'inline'
      })
  }else{
      this.setState({
        HomeAreaTH:'none'
      })
    }
  }
  HomeAreaCH() {
    this.setState({
      HomeAreaTH:'none',
      HomeAreaKT:'none',
      HomeAreaKN:'none',
      HomeAreaTS:'none',
      HomeAreaKS:'none'
    })
    if (this.state.HomeAreaCH === 'none'){
      this.setState({
        HomeAreaCH: 'inline'
      })
  }else{
      this.setState({
        HomeAreaCH:'none'
      })
    }
  }
  HomeAreaKN() {
    this.setState({
      HomeAreaTH:'none',
      HomeAreaKT:'none',
      HomeAreaCH:'none',
      HomeAreaTS:'none',
      HomeAreaKS:'none'
    })
    if (this.state.HomeAreaKN === 'none'){
      this.setState({
        HomeAreaKN: 'inline'
      })
  }else{
      this.setState({
        HomeAreaKN:'none'
      })
    }
  }
  HomeAreaTS() {
    this.setState({
      HomeAreaTH:'none',
      HomeAreaKT:'none',
      HomeAreaCH:'none',
      HomeAreaKN:'none',
      HomeAreaKS:'none'
    })
    if (this.state.HomeAreaTS === 'none'){
      this.setState({
        HomeAreaTS: 'inline'
      })
  }else{
      this.setState({
        HomeAreaTS:'none'
      })
    }
  }
  HomeAreaKS() {
    this.setState({
      HomeAreaTH:'none',
      HomeAreaKT:'none',
      HomeAreaCH:'none',
      HomeAreaKN:'none',
      HomeAreaTS:'none',

    })
    if (this.state.HomeAreaKS === 'none'){
      this.setState({
        HomeAreaKS: 'inline'
      })
  }else{
      this.setState({
        HomeAreaKS:'none'
      })
    }
  }


  HomeSearchWhat() {
    if (this.state.HomeSearchWhatSP === 'none') {
      document.body.setAttribute('style', 'position: fixed;')
      this.setState({
        HomeSearchWhatSP: 'inline'
      })
    } else {
      document.body.removeAttribute('style', 'position: fixed;')
      this.setState({
        HomeSearchWhatSP: 'none'
      })
    }
  }

  HomeSearchLocation() {
    if (this.state.HomeSearchLocationSP === 'none') {
      document.body.setAttribute('style', 'position: fixed;')
      this.setState({
        HomeSearchLocationSP: 'inline'
      })
    } else {
      document.body.removeAttribute('style', 'position: fixed;')
      this.setState({
        HomeSearchLocationSP: 'none'
      })
    }
  }



  HomeSearchOther() {
    if (this.state.HomeSearchOtherSP === 'none') {
      document.body.setAttribute('style', 'position: fixed;')
      this.setState({
        HomeSearchOtherSP: 'inline'
      })
    } else {
      document.body.removeAttribute('style', 'position: fixed;')
      this.setState({
        HomeSearchOtherSP: 'none'
      })
    }
  }

filterList(event) {
  if (this.state.value === "") {
    this.setState({
      Searchdisplay: 'inline',
      SearchResult: 'none',
    })
  }
    this.setState({
      Searchdisplay: 'none',
      SearchResult: 'inline',
      value: event.target.value
    })
  console.log(this.state.value.length)
  console.log(this.state.value)
}

filterListWhat(event) {
  if (this.state.whatValue === "") {
    this.setState({
      Searchdisplay: 'inline',
      SearchResult: 'none',
    })
  }
    this.setState({
      Searchdisplay: 'none',
      SearchResult: 'inline',
      whatValue: event.target.whatValue
    })
  console.log(this.state.whatValue)
}

focusTextInput(e) {
this.setState({
  parklocation: e,
  HomeSearchLocationSP: 'none',
  HomeAreaTH:'none',
  HomeAreaKT:'none',
  HomeAreaCH:'none',
  HomeAreaKN:'none',
  HomeAreaTS:'none',
  HomeAreaKS:'none',
  value:'',
})
document.body.removeAttribute('style', 'position: fixed;')
}

focusTextInputWhat(e) {
this.setState({
  parkTag: e,
  HomeSearchWhatSP:'none'
})
document.body.removeAttribute('style', 'position: fixed;')
}

focusTextInputOther(e) {
this.setState({
  parkTag2:e,
  HomeSearchOtherSP:'none'
})
document.body.removeAttribute('style', 'position: fixed;')
}

fixedOpen() {
  document.body.removeAttribute('style', 'position: fixed;')
}




  render() {
    const { parks, loading } = this.props.data;
    const rows = [];
    const SearchInput = this.props.location.pathname.substr(13)

    // console.log(this.props.location.state.parklocation)
    console.log(this.props)

    parks.map((park) => {
      if (park.parkTag2 === this.state.parkTag2) {
        console.log(this.state.parkTag2)
        // タグ○都市○
        const TagTure_locationTrue = park.parkTag1 === this.state.parkTag && park.parkLocation === this.state.parklocation
        // タグ○・都市×
        const Tag_LocationNone = park.parkTag1 === this.state.parkTag && !this.state.parklocation
        // タグ×・都市×
        const TagLocation_none = !this.state.parkTag && !this.state.parklocation
        // タグ×・都市○
        const TagNone_Location = !this.state.parkTag && park.parkLocation === this.state.parklocation
        if (TagTure_locationTrue) {
          rows.push(<ProductRow park={park} key={park.parkId} />)
        }
        if (TagLocation_none) {
          rows.push(<ProductRow park={park} key={park.parkId} />)
        }
        if (TagNone_Location) {
          rows.push(<ProductRow park={park} key={park.parkId} />)
        }
        if (Tag_LocationNone) {
          rows.push(<ProductRow park={park} key={park.parkId} />)
        }
      }


      if (!this.state.parkTag2) {
        // タグ○都市○
        const TagTure_locationTrue = park.parkTag1 === this.state.parkTag && park.parkLocation === this.state.parklocation
        // タグ○・都市×
        const Tag_LocationNone = park.parkTag1 === this.state.parkTag && !this.state.parklocation
        // タグ×・都市×
        const TagLocation_none = !this.state.parkTag && !this.state.parklocation
        // タグ×・都市○
        const TagNone_Location = !this.state.parkTag && park.parkLocation === this.state.parklocation
        if (TagTure_locationTrue) {
          rows.push(<ProductRow park={park} key={park.parkId} />)
        }
        if (TagLocation_none) {
          rows.push(<ProductRow park={park} key={park.parkId} />)
        }
        if (TagNone_Location) {
          rows.push(<ProductRow park={park} key={park.parkId} />)
        }
        if (Tag_LocationNone) {
          rows.push(<ProductRow park={park} key={park.parkId} />)
        }
      }

    });




    const searchForm =
      <>
      <Navbar/>
    <div className="container container_paddinng homeTop">
          <div className="park-result-pc parkResult__pc park-result">
            {/* ///////////
            検索バー
            /////////// */}
            <div className="search-bar-pc-outline">
            <div className="search-bar-pc">
                <div className="serch-bar-pc-inner">


              {/* //どこにいくの */}
              <div className="searchBar-selectItem_pc" style={
                 this.state.parklocation ?
                 { border: '#52BF90 solid 1.5px'} :  { color: '#b4b4b4' }
            }　onClick={this.HomeSearchLocation} ref={this.modalRef}>
                {!this.state.parklocation ?
                   <LocationOnRoundedIcon style={{ fontSize: 20, color: '#93918F' }} />:
                  <LocationOnRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} />
            } {this.state.parklocation ==='' ? <p style={{color:'#b4b4b4',marginLeft:'1rem'}}>場所</p> : <p  style={{color:'#52BF90',marginLeft:'1rem'}}>{this.state.parklocation}</p>}




              <div className="ParkSearchLocation-Select" style={{ display: this.state.HomeSearchLocation }}>
                <h2>都道府県から探す</h2>
                <div className="HomeSearchLocation-Select-items">
                  <table className="HomeSearchLocation-Select__margin" >

                  <tr>
                    <td className="HomeSearchLocation-td">北海道</td><td onClick={() => this.setState({ parklocation:'北海道'})}>北海道</td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">東北</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'青森'})}>青森</div><div  className="HomeParkprefecture"　onClick={() => this.setState({ parklocation:'岩手'})}>岩手</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'秋田'})}>秋田</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'岩手'})}>岩手</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'山形'})}>山形</div><div  className="HomeParkprefecture"　onClick={() => this.setState({ parklocation:'福島'})}>福島</div></td>
                    </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">関東</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'東京都'})}>東京</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'神奈川'})}>神奈川</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'埼玉'})}>埼玉</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'千葉'})}>千葉</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'茨城'})}　>茨城</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'山形'})}onClick={() => this.setState({ parklocation:'栃木'})}>栃木</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'群馬'})}>群馬</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">中部</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'山梨'})}>山梨</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'静岡'})}>静岡</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'愛知'})}>愛知</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'岐阜'})}>岐阜</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'長野'})}>長野</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'石川'})}>石川</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'福井'})}>福井</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'新潟'})}>新潟</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">関西</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'大阪'})}>大阪</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'滋賀'})}>滋賀</div><div  className="HomeParkprefecture"　onClick={() => this.setState({ parklocation:'三重'})}>三重</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'京都'})}>京都</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'和歌山'})}>和歌山</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'兵庫'})}>兵庫</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">中国・四国</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'岡山'})}>岡山</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'広島'})}>広島</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'山口'})}>山口</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'鳥取'})}>鳥取</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'島根'})}>島根</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'愛媛'})}>愛媛</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'香川'})}>香川</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'徳島'})}>徳島</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'高知'})}>高知</div></td>
                  </tr>

                  <tr>
                    <td className="HomeSearchLocation-td">九州・沖縄</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'福岡'})}>福岡</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'大分'})}>大分</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'宮崎'})}>宮崎</div><div  className="HomeParkprefecture"　onClick={() => this.setState({ parklocation:'鹿児島'})}>鹿児島</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'長崎'})}>長崎</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'佐賀'})}>佐賀</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'沖縄'})}>沖縄</div></td>
                  </tr>

                </table>
                </div>
                <p></p>
              </div>

                {this.state.parklocation ?
                  <CancelIcon onClick={this.SearchCloseLoc} className="search-close" style={{ fontSize: 20 }}/>:''
                }
                  </div>






                  <div type="text" className="searchBar-selectItem_pc" style={
                 this.state.parkTag ?
                 { border: '#52BF90 solid 1.5px'} :  { color: '#b4b4b4' }
            } onClick={this.HomeSearchWhat} ref={this.modalRefwhat}>

                {!this.state.parkTag ?
                  <EmojiPeopleRoundedIcon style={{ fontSize: 20, color: '#93918F' }} /> :
                  <EmojiPeopleRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} />
                    }
                    {!this.state.parkTag? <p style={{color:'#b4b4b4',marginLeft:'1rem',fontSize:'1.4rem'}}>目的からさがす</p> : <p  style={{color:'#52BF90',marginLeft:'1rem',fontSize:'1.4rem'}}>{this.state.parkTag}</p>}
                    <div className="ParkSearchLocation-Select" style={{ display: this.state.HomeSearchWhat }}>
                <h2>目的からさがす</h2>

                <div className="HomeSearchLocation-Select-items">
                  <div className="HomeSearchWhatSelect-items-left">
                  <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ HomeparkSelectWhatSee: 'true' })}
                onMouseLeave={() => this.setState({ HomeparkSelectWhatSee: '' })}>
                  <p>みる</p>
                {!this.state.HomeparkSelectWhatSee ? '' :
                    <>
                    <div className="HomeSearchWhatSelect-item-See topPosition-see">
                    <ul>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ parkTag:'夜景'})}>夜景</li>
                      <li className="HomeSearchWhatSelect-item"onClick={() => this.setState({ parkTag:'海が見える'})}>海が見える</li>
                      <li className="HomeSearchWhatSelect-item"onClick={() => this.setState({ parkTag:'山がみれる'})}>山がみれる</li>
                      <li className="HomeSearchWhatSelect-item"onClick={() => this.setState({ parkTag:'自然豊か'})}>自然豊か</li>
                      <li className="HomeSearchWhatSelect-item"onClick={() => this.setState({ parkTag:'動植物がいっぱい'})}>動植物がいっぱい</li>
                      </ul>
                    </div>
                    </>}
                    </div>

                  <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ HomeparkSelectWhatLearn: 'true' })}
                onMouseLeave={() => this.setState({ HomeparkSelectWhatLearn: '' })}>
                  <p>学ぶ</p>
                {!this.state.HomeparkSelectWhatLearn ? '' :
                    <>
                    <div className="HomeSearchWhatSelect-item-See topPosition-play">
                    <ul>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ parkTag:'博物館・美術館'})}>博物館・美術館</li>
                      </ul>
                    </div>
                    </>}
                    </div>


                  <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ HomeparkSelectWhatPlay: 'true' })}
                onMouseLeave={() => this.setState({ HomeparkSelectWhatPlay: '' })}>
                  <p>あそぶ</p>
                {!this.state.HomeparkSelectWhatPlay ? '' :
                    <>
                    <div className="HomeSearchWhatSelect-item-See topPosition-learn">
                    <ul>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ parkTag:'ポート'})}>ボート</li>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ parkTag:'遊具がたくさん'})}>遊具が豊富</li>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ parkTag:'アスレチックあり'})}>アスレチック</li>
                      </ul>
                    </div>
                    </>}
                    </div>

                  <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ HomeparkSelectWhatOther: 'true' })}
                onMouseLeave={() => this.setState({ HomeparkSelectWhatOther: '' })}>
                  <p>その他</p>
                {!this.state.HomeparkSelectWhatOther ? '' :
                    <>
                    <div className="HomeSearchWhatSelect-item-See topPosition-othrer">
                    <ul>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ parkTag:'撮影'})}>撮影</li>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ parkTag:'楽器練習可'})}>楽器練習可</li>
                      <li className="HomeSearchWhatSelect-item" onClick={() => this.setState({ parkTag:'芝生あり'})}>芝生あり</li>
                      </ul>
                    </div>
                    </>}
              </div>
                  </div>
                </div>
              </div>

                {this.state.parkTag ?
                  <CancelIcon onClick={this.SearchCloseTag} className="search-close" style={{ fontSize: 20 }}/>:''
                }
                  </div>




{/*
              <div className="searchBar-selectItem_pc" style={
                 this.state.parkTag3 ?
                 { border: '#52BF90 solid 1.5px'} :  { color: '#777' }
            }>
                {!this.state.parkTag3 ?
                  <EmojiPeopleRoundedIcon style={{ fontSize: 20, color: '#93918F' }} /> :
                  <EmojiPeopleRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} />
                    }
                {this.state.parkTag3 ?
                  <CancelIcon onClick={this.SearchCloseTag3} className="search-close" style={{ fontSize: 20 }}/>:''
                }
                  </div> */}



                  <div className="searchBar-selectItem_pc" style={
                 this.state.parkTag2 ?
                 { border: '#52BF90 solid 1.5px'} :  { color: '#777' }
            }onClick={this.HomeSearchWho} ref={this.modalRefwho}>
                {!this.state.parkTag2 ?
                   <PeopleRoundedIcon style={{ fontSize: 20, color: '#93918F' }} />:
                  <PeopleRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} />
                } {!this.state.parkTag2? <p style={{color:'#b4b4b4',marginLeft:'1rem',fontSize:'1.4rem'}}>一緒にいくひと</p> : <p  style={{color:'#52BF90',marginLeft:'1rem',fontSize:'1.4rem'}}>{this.state.parkTag2}</p>}

                  <div className="ParkSearchLocation-Select" style={{ display: this.state.HomeSearchWho }}>
                <h2>都道府県から探す</h2>

                <p></p>
              </div>




                {/* <select className="p search-select_font_pc" value={this.state.parkTag2} onChange={this.handleFilterTextChangeTag2}
                style={
                  this.state.parkTag2 ?
                    { color: '#52BF90'} :  { color: '#777' }
                }>
                  <option value="" style={{display:'none'}}>だれといく</option>
                  <option value="">すべて</option>
                  <option value="家族">家族</option>
                  <option value="カップル">カップル</option>
                  <option value="友人">友人</option>
                  <option value="ひとり">ひとり</option>
                  <option value="小さいこども">小さいこども</option>
                  <option value="車椅子の方">車椅子の方</option>
                  <option value="乳幼児">乳幼児</option>
                </select> */}
                {this.state.parkTag2 ?
                  <CancelIcon onClick={this.SearchCloseTag2} className="search-close" style={{ fontSize: 20 }}/>:''
                }
              </div>








                {!this.state.parklocation && !this.state.parkTag && !this.state.parkTag2 && !this.state.parkTag3 ?
                  '': <div className="valueDelete" onClick={this.valueDelete}>すべて削除</div> }
              </div>
              <SearchbarDrawer_pc />
            </div>

            <div className="parkSuggest-items">
            <p class="parkSuggest parkSug_p">おすすめの検索</p>
            <div className="parkSuggest"onClick={this.test1}>
              <SearchRoundedIcon style={{ fontSize: 16, color: '#93918F' }} />
              <p className="parkSuggest-p">東京</p><p className="parkSuggest-p">家族</p>
            </div>
            <div className="parkSuggest">
              <SearchRoundedIcon style={{ fontSize: 16, color: '#93918F' }} />
              <p className="parkSuggest-p" onClick={this.test1}>東京 朝</p>
            </div>
            <div className="parkSuggest">
              <SearchRoundedIcon style={{ fontSize: 16, color: '#93918F' }} />
              <p className="parkSuggest-p" onClick={this.test1}>東京 ジョギング</p>
            </div>
            <div className="parkSuggest">
              <SearchRoundedIcon style={{ fontSize: 16, color: '#93918F' }} />
              <p className="parkSuggest-p" onClick={this.test1}>東京 家族</p>
            </div>
            <div className="parkSuggest">
              <SearchRoundedIcon style={{ fontSize: 16, color: '#93918F' }} />
              <p className="parkSuggest-p" onClick={this.test1}>東京 家族</p>
            </div>
            <div className="parkSuggest">
              <SearchRoundedIcon style={{ fontSize: 16, color: '#93918F' }} />
              <p className="parkSuggest-p" onClick={this.test1}>東京 家族</p>
            </div>
            <div className="parkSuggest">
              <SearchRoundedIcon style={{ fontSize: 16, color: '#93918F' }} />
              <p className="parkSuggest-p" onClick={this.test1}>東京 家族</p>
            </div>
              </div>
            </div>
            <div className="parkSearchFil_inner">
            <div className="SeRe">
                <h2 className="SeRe__h2-desc">検索結果</h2>
                <h2 className="SeRe__h2">{rows.length}</h2>
              <p>件</p>

              <div className="parkSearchValue__inner">
              {this.state.parklocation? <p>「{this.state.parklocation}」</p>:''}
              {this.state.parkTag? <p>「{this.state.parkTag}」</p>:''}
              {this.state.parkTa2? <p>「{this.state.parkTag2}」</p>:''}
              {this.state.parkTag3 ? <p>「{this.state.parkTag3}」</p> : ''}
              {!this.state.parklocation && !this.state.parkTag && !this.state.parkTag2 && !this.state.parkTag2 ?'' :<p>の公園</p>}
              </div>
            </div>
              <div className="SearchFromMap">
                <MapIcon style={{ fontSize: 23, color: '#93918F' ,marginRight:'0.5rem'}} />
                <p style={{ color:'#93918F'}}>地図を表示する</p>
              </div>
              </div>








            {/* sp版 */}
            {/* <SearchbarDrawer /> */}
            <div className="parkSearchSP-rsulut-inner">
              {!this.state.parklocation?<h2 className="parkSearchResultSP__h2">すべての公園</h2>:
              <h2 className="parkSearchResultSP__h2">{this.state.parklocation}の公園</h2>}
            <div className="searchBar-selectItems">

                <div className="searchBar-selectItem" style={this.state.parklocation ?{ background: '#52BF90' } : { background:'#fff', border: '0.1rem #d0cfcf solid'}} onClick={this.HomeSearchLocation}>
                {!this.state.parklocation ?
                   <LocationOnRoundedIcon style={{ fontSize: 20, color: '#93918F' }} />:
                  <LocationOnRoundedIcon style={{ fontSize: 20, color: '#fff' }} />
            }
                  {/* <p className="p search-select_font">どこにいく</p> */}
                  {/* <select className="p search-select_font" value={this.state.parklocation} onChange={this.handleFilterTextChange} placeholder="ああああ" style={this.state.parklocation ? { color: ' #52BF90' } : {color:'#777'} }>
                    <option value="" style={{display:'none'}}>すべてのエリア</option>
                    <option value="">すべてのエリア</option>
                    <option value="東京都">東京</option>
                    <option value="大阪">大阪</option>
                    <option value="神奈川">神奈川</option>
              　　</select> */}
                  {this.state.parklocation ?
                    <p style={this.state.parklocation ? { color: ' #fff' } : { color: '#777' }}>{this.state.parklocation}</p> :
                    <p  style={{ color: '#777' }}>すべてのエリア</p>}

                </div>

                <div className="HomeSearchSP-modal" style={{display:this.state.HomeSearchLocationSP}}>



<div class="serchDrawerContent">
 <div className="sceneTag-drawer-header">
   <div className="serch-bar-location drawer-margin" >

     <SearchIcon style={{ fontSize: 21, opacity: 0.7 }} />
     <input type="text" id="searchfocus"
       className="serch-bar__color search-bar-position"
       placeholder="公園や都市名からさがす"
       value={this.state.value}
       onChange={this.filterList}
       autocomplete="on"
       inputmode="kana"
     />
    </div>



   <div className="sceneTag-drawer-header-back" onClick={this.HomeSearchLocation}><ArrowBackIosIcon />戻る</div>

 </div>
 {this.state.value.length > 0 ?
     <><p className="searchinputResult-p">下記からご選択ください。</p></>:''}


 <div className="SearchTag-input_padding">

 {
   JapanArea.map((JapanAreaHGItem) => {
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

         return<div className="searchresult-posi" onClick={this.focusTextInput.bind(this,JapanAreaHGItem.kangi)}>
             <div className="searchResult-location">
             <LocationOnRoundedIcon style={{ fontSize: 22, color:'#52BF90'}} />
             </div>
           <h2>{JapanAreaHGItem.kangi}</h2>
         </div>
       }
       if (SearchstartKg === true && this.state.value.length > 0) {
         return <div className="searchresult-posi" onClick={this.focusTextInput.bind(this,JapanAreaHGItem.kangi)}>
            <div className="searchResult-location">
            <LocationOnRoundedIcon style={{ fontSize: 22, color:'#52BF90'}} />
           </div>
           <h2>{JapanAreaHGItem.kangi}</h2></div>

       }
       if (SearchstartEn === true && this.state.value.length > 0) {
         return <div className="searchresult-posi" onClick={this.focusTextInput.bind(this,JapanAreaHGItem.kangi)}>
            <div className="searchResult-location">
             <LocationOnRoundedIcon style={{ fontSize: 22, color: '#52BF90' }} />
             </div><h2>{JapanAreaHGItem.kangi}</h2></div>

       }
       if (SearchstartKn === true && this.state.value.length > 0) {
         return <div className="searchresult-posi" onClick={this.focusTextInput.bind(this,JapanAreaHGItem.kangi)}>
            <div className="searchResult-location">
           <LocationOnRoundedIcon style={{ fontSize: 22, color: '#52BF90' }} />
           </div>
           <h2>{JapanAreaHGItem.kangi}</h2></div>
       }


   })
 }


 {
   parks.map((park) => {
     const parkSearch = park.parkName.startsWith(this.state.value,0)
     // const parkSearchTag1 = park.parkTag1.startsWith(this.state.value,0)

     if (parkSearch === true && this.state.value.length > 0) {
       return <Link to={`/park/${park.parkId}`}　className="searchresult-posi" onClick={this.fixedOpen}>
           <div className="searchResult-location">
           <img src={LogoTree} className="parkSearchinpt-logo"/>
         </div><h2 onClick={this.fixedOpen}>{park.parkName}</h2>
       </Link>
     }
     // else {
     //   this.setState({
     //     SearchInputResultPark: false
     //   })
     // }
   })
 }


  {
   SearchTags.map((tag) => {
     const SearchTagHg = tag.Hiragana.startsWith(this.state.value,0)
     const SearchTagKn = tag.kanji.startsWith(this.state.value,0)
     const SearchTagEn = tag.en.startsWith(this.state.value,0)
     const SearchTagKt = tag.kata.startsWith(this.state.value, 0)

     const SearchTagHgParam = {
       pathname: '/search', search: `/tag${tag.kanji}`,state: { scene: tag.kanji }
     };
     const SearchTagKnParam = {
       pathname: '/search', search: `/tag${tag.kanji}`,state: { scene: tag.kanji }
     };
     const SearchTagEnParam = {
       pathname: '/search', search: `/tag${tag.kanji}`,state: { scene: tag.kanji }
     };
     const SearchTagktParam= {
       pathname: '/search', search: `/tag${tag.kanji}`,state: { scene: tag.kanji }
     };

     if (SearchTagHg === true && this.state.value.length > 0) {
       return <Link to={SearchTagHgParam}>
         <h2>{tag.kanji}</h2></Link>
     }

     if (SearchTagKn === true && this.state.value.length > 0) {
       return <Link to={SearchTagKnParam}><h2>{tag.kanji}</h2></Link>
     }
     if (SearchTagEn === true && this.state.value.length > 0) {
       return <Link to={SearchTagEnParam}><h2>{tag.kanji}</h2></Link>
     }
     if (SearchTagKt === true && this.state.value.length > 0) {
       return <Link to={SearchTagktParam}><h2>{tag.kanji}</h2></Link>
     }
   })

   }
   </div>





 {this.state.value.length === 0 ?

   <ul className="sceneTag-drawer-header--items">
     <div class="SearchInput-items-city">
       <h2>よく検索される都市名</h2>
       <ul className="HomeSearchSPLocation-modal-items">
         <li onClick={this.focusTextInput.bind(this,'東京都')} className="sidebar-item">東京</li>
         <li onClick={this.focusTextInput.bind(this,'大阪')}className="sidebar-item">大阪</li>
         <li onClick={this.focusTextInput.bind(this,'福岡')}className="sidebar-item">福岡</li>
         <li onClick={this.focusTextInput.bind(this,'神奈川')}className="sidebar-item">神奈川</li>
         <li onClick={this.focusTextInput.bind(this,'千葉')}className="sidebar-item">千葉</li>
         <li onClick={this.focusTextInput.bind(this,'埼玉')}className="sidebar-item">埼玉</li>
        </ul>



<ul className="HomeSearchSPLocation-modal-prefecture">
<h2>エリアからさがす</h2>
<ul> <li className="drawer-city-height" onClick={this.focusTextInput.bind(this,'北海道')}>北海道</li></ul>

<ul className="drawerhome-city">
<div for="drawer-tohoku" className="drawer-city-tohoku__color drawer-city-height" onClick={this.HomeAreaTH}><p style={{color:this.state.HomeAreaTH === 'inline' ?'#52BF90':'' }}>東北</p><AddIcon style={{color:'#424242a8',fontSize:18,marginRight:14}}/></div>
<div className="drawer-city-li drawer-city-tohoku" style={{display:this.state.HomeAreaTH}} >
<li onClick={this.focusTextInput.bind(this,'青森')}>青森県</li>
<li onClick={this.focusTextInput.bind(this,'岩手')}>岩手県</li>
<li onClick={this.focusTextInput.bind(this,'宮城')}>宮城県</li>
<li onClick={this.focusTextInput.bind(this,'秋田')}>秋田県</li>
<li onClick={this.focusTextInput.bind(this,'山形')}>山形県</li>
<li onClick={this.focusTextInput.bind(this,'福島')}>福島県</li>
</div>
</ul>

<ul className="drawerhome-city">
<div for="drawer-kanto" class="drawer-city-kanto__color drawer-city-height" onClick={this.HomeAreaKT}><p style={{color:this.state.HomeAreaKT === 'inline' ?'#52BF90':'' }}>関東</p><AddIcon style={{color:'#424242a8',fontSize:18,marginRight:14}}/></div>
<div className="drawer-city-li drawer-city-kanto" style={{display:this.state.HomeAreaKT}}>
<li onClick={this.focusTextInput.bind(this,'東京')}>東京都</li>
<li onClick={this.focusTextInput.bind(this,'埼玉')}>埼玉県</li>
<li onClick={this.focusTextInput.bind(this,'神奈川')}>神奈川県</li>
<li onClick={this.focusTextInput.bind(this,'千葉')}>千葉県</li>
<li onClick={this.focusTextInput.bind(this,'群馬')}>群馬県</li>
<li onClick={this.focusTextInput.bind(this,'栃木')}>栃木県</li>
<li onClick={this.focusTextInput.bind(this,'茨城')}>茨城県</li>
</div>
</ul>

<ul className="drawerhome-city">
<input type="checkbox" id="drawer-tyuubu" class="drawer-hidden" />
<div for="drawer-tyuubu" class="drawer-city-tyuubu__color drawer-city-height"onClick={this.HomeAreaCH}><p style={{color:this.state.HomeAreaCH === 'inline' ?'#52BF90':'' }}>中部・北陸</p><AddIcon style={{color:'#424242a8',fontSize:18,marginRight:14}}/></div>
<div className="drawer-city-li  drawer-city-tyuubu" style={{display:this.state.HomeAreaCH}}>
<li onClick={this.focusTextInput.bind(this,'長野')}>長野県</li>
<li onClick={this.focusTextInput.bind(this,'新潟')}>新潟県</li>
<li onClick={this.focusTextInput.bind(this,'石川')}>石川県</li>
<li onClick={this.focusTextInput.bind(this,'富山')}>富山県</li>
<li onClick={this.focusTextInput.bind(this,'岐阜')}>岐阜県</li>
<li onClick={this.focusTextInput.bind(this,'愛知')}>愛知県</li>
<li onClick={this.focusTextInput.bind(this,'山梨')}>山梨県</li>
<li onClick={this.focusTextInput.bind(this,'静岡')}>静岡県</li>
</div>
</ul>

<ul className="drawerhome-city">
<input type="checkbox" id="drawer-kansai" class="drawer-hidden" />
<div for="drawer-kansai" class="drawer-city-kansai__color drawer-city-height" onClick={this.HomeAreaKN}><p style={{color:this.state.HomeAreaKN === 'inline' ?'#52BF90':'' }}>関西</p><AddIcon style={{color:'#424242a8',fontSize:18,marginRight:14}}/></div>
<div className=" drawer-city-li drawer-city-kansai" style={{display:this.state.HomeAreaKN}}>
<li onClick={this.focusTextInput.bind(this,'滋賀')}>滋賀県</li>
<li onClick={this.focusTextInput.bind(this,'大阪')}>大阪府</li>
<li onClick={this.focusTextInput.bind(this,'京都')}>京都府</li>
<li onClick={this.focusTextInput.bind(this,'三重')}>三重県</li>
<li onClick={this.focusTextInput.bind(this,'和歌山')}>和歌山県</li>
<li onClick={this.focusTextInput.bind(this,'奈良')}>奈良県</li>
<li onClick={this.focusTextInput.bind(this,'兵庫')}>兵庫県</li>
</div>
</ul>

<ul className="drawerhome-city">
<input type="checkbox" id="drawer-tyuShikoku" class="drawer-hidden" />
<div for="drawer-tyuShikoku" class="drawer-scity-tyuShikoku__color drawer-city-height"onClick={this.HomeAreaTS}><p style={{color:this.state.HomeAreaTS === 'inline' ?'#52BF90':'' }}>中国・四国</p><AddIcon style={{color:'#424242a8',fontSize:18,marginRight:14}}/></div>
<div className="drawer-city-li drawer-city-tyuShikoku" style={{display:this.state.HomeAreaTS}}>

<li onClick={this.focusTextInput.bind(this,'岡山')}>岡山県</li>
<li onClick={this.focusTextInput.bind(this,'広島')}>広島県</li>
<li onClick={this.focusTextInput.bind(this,'山口')}>山口県</li>
<li onClick={this.focusTextInput.bind(this,'香川')}>香川県</li>
<li onClick={this.focusTextInput.bind(this,'愛媛')}>愛媛県</li>
<li onClick={this.focusTextInput.bind(this,'高知')}>高知県</li>
<li onClick={this.focusTextInput.bind(this,'徳島')}>徳島県</li>
</div>
</ul>

<ul className="drawerhome-city">
<input type="checkbox" id="drawer-KyuOki" class="drawer-hidden" />
<div for="drawer-KyuOki" class="drawer-city-KyuOki__color drawer-city-height" onClick={this.HomeAreaKS}><p style={{color:this.state.HomeAreaKS === 'inline' ?'#52BF90':'' }}>九州・沖縄</p><AddIcon style={{color:'#424242a8',fontSize:18,marginRight:14}}/></div>
<div className="drawer-city-li drawer-city-KyuOki" style={{display:this.state.HomeAreaKS}}>
<li onClick={this.focusTextInput.bind(this,'福岡')}>福岡県</li>
<li onClick={this.focusTextInput.bind(this,'佐賀')}>佐賀県</li>
<li onClick={this.focusTextInput.bind(this,'大分')}>大分県</li>
<li onClick={this.focusTextInput.bind(this,'熊本')}>熊本県</li>
<li onClick={this.focusTextInput.bind(this,'鹿児島')}>鹿児島県</li>
<li onClick={this.focusTextInput.bind(this,'宮城')}>宮崎県</li>
<li onClick={this.focusTextInput.bind(this,'沖縄')}>沖縄県</li>
</div>
</ul>
</ul>
</div>







   </ul> : ''}
</div>
</div>





















              <div className="searchBar-selectItem-what" style={this.state.parkTag ?{ background: '#52BF90' } : { background:'#fff',border: '0.1rem #d0cfcf solid'}} onClick={this.HomeSearchWhat}>
                {!this.state.parkTag ?
                  <EmojiPeopleRoundedIcon style={{ fontSize: 20, color: '#93918F' }} /> :
                  <EmojiPeopleRoundedIcon style={{ fontSize: 20, color: 'fff' }} />
                  }
                   {this.state.parkTag ?
                    <p style={this.state.parkTag ? { color: ' #fff' } : { color: '#777' }}>{this.state.parkTag}</p> :
                    <p  style={{ color: '#777' }}>すべての目的</p>}

                </div>




          <div className="HomeSearchSP-modal" style={{ display: this.state.HomeSearchWhatSP }}>
          <div class="serchDrawerContent">
             <div className="sceneTag-drawer-header">
               <div className="serch-bar-location drawer-margin" >

                 <SearchIcon style={{ fontSize: 21, opacity: 0.7 }} />
                 <input type="text" id="searchfocus"
                   className="serch-bar__color search-bar-position"
                   placeholder="目的からさがす"
                   value={this.state.whatValue}
                   onChange={this.filterListWhat}
                   autocomplete="on"
                   inputmode="kana"
                 />
                </div>
                <div className="sceneTag-drawer-header-back" onClick={this.HomeSearchWhat}><ArrowBackIosIcon />戻る</div>
              </div>

              <div class="SearchInput-items-city HomeSearchInputWhat-modal-inner">
                <div className="HomeSearchInputWhat-modal-h2">
                  <h2>人気のキーワード</h2>
                  <p style={{ color:'#52BF90',marginTop:0,fontSize:12,fontWeight:400}} onClick={this.focusTextInputWhat.bind(this,'')}>すべてのキーワードからさがす</p>
                  </div>

                <ul className="sidebar-items HomeSearchInputWhat-modal">
            <li onClick={this.focusTextInputWhat.bind(this,'家族連れ')} className="sidebar-item">家族連れ</li>
            <li onClick={this.focusTextInputWhat.bind(this,'ジョギング')} className="sidebar-item">ジョギング</li>
            <li onClick={this.focusTextInputWhat.bind(this,'ピクニック')} className="sidebar-item">ピクニック</li>
            <li onClick={this.focusTextInputWhat.bind(this,'郊外にある')} className="sidebar-item">郊外にある</li>
            <li onClick={this.focusTextInputWhat.bind(this,'都内にある')} className="sidebar-item">都内にある</li>
            <li onClick={this.focusTextInputWhat.bind(this,'海が見える')} className="sidebar-item">海が見える</li>
            <li onClick={this.focusTextInputWhat.bind(this,'駐車場がある')}className="sidebar-item">駐車場がある</li>
            <li onClick={this.focusTextInputWhat.bind(this,'自転車可')}className="sidebar-item">自転車可</li>
            <li onClick={this.focusTextInputWhat.bind(this,'運動場')}className="sidebar-item">運動場</li>
            <li onClick={this.focusTextInputWhat.bind(this,'レストラン')}className="sidebar-item">レストラン</li>
            <li onClick={this.focusTextInputWhat.bind(this,'乳幼児')}className="sidebar-item">乳幼児</li>
            <li onClick={this.focusTextInputWhat.bind(this,'遊具が豊富')}className="sidebar-item">遊具が豊富</li>
                </ul>

             </div>
             </div>
          </div>




                <div className="searchBar-selectItem" style={this.state.parkTag2 ? { background: '#52BF90' } : { background:'#fff',border: '0.1rem #d0cfcf solid'} } onClick={this.HomeSearchOther}>
                {!this.state.parkTag2 ?
                   <PeopleRoundedIcon style={{ fontSize: 20, color: '#93918F' }} />:
                  <PeopleRoundedIcon style={{ fontSize: 20, color: '#fff' }} />
                  }
                  {this.state.parkTag2 ?
                    <p style={this.state.parkTag2 ? { color: ' #fff' } : { color: '#777' }}>{this.state.parkTag2}</p> :
                    <p  style={{ color: '#777' }}>その他・詳細</p>}
                </div>

                <div className="HomeSearchSP-modal" style={{ display: this.state.HomeSearchOtherSP }}>
          <div class="serchDrawerContent">
             <div className="sceneTag-drawer-header">

                <div className="sceneTag-drawer-header-back" onClick={this.HomeSearchOther}><ArrowBackIosIcon />戻る</div>
              </div>

              <div class="SearchInput-items-city HomeSearchInputWhat-modal-inner">
                <div className="HomeSearchInputWhat-modal-h2">
                  <h2>一緒にいくひと</h2>
                  <p style={{ marginTop:0,fontSize:12,fontWeight:400}}onClick={this.HomeSearchOther}>すべての詳細条件からさがす</p>
                  </div>

                <ul className="sidebar-items HomeSearchInputWhat-modal">
            <li onClick={this.focusTextInputOther.bind(this,'ひとり')} className="sidebar-item">ひとり</li>
            <li onClick={this.focusTextInputOther.bind(this,'こども')} className="sidebar-item">子供</li>
            <li onClick={this.focusTextInputOther.bind(this,'カップル')} className="sidebar-item">カップル</li>
            <li onClick={this.focusTextInputOther.bind(this,'車椅子のかた')} className="sidebar-item">車椅子のかた</li>
            <li onClick={this.focusTextInputOther.bind(this,'友人')} className="sidebar-item">友人</li>
            <li onClick={this.focusTextInputOther.bind(this,'家族')} className="sidebar-item">家族</li>
            <li onClick={this.focusTextInputOther.bind(this,'小さいことも')}className="sidebar-item">小さいこども</li>
            <li onClick={this.focusTextInputOther.bind(this,'乳幼児')}className="sidebar-item">乳幼児</li>
                </ul>

             </div>
             </div>
          </div>









              </div>
              </div>
            </div>
      </div>

      </>


    return (
      <>
 {searchForm}
        <div className="container_paddinng searchpark-pc">
          <div className="FindParksResult-items-pc" >

            {
              !loading ?
              rows.length > 0 ?
            // 検索結果がある場合
            <>  {rows.slice(0, this.state.marker)}</> :
             // 検索結果がある場合
              <div className="searchResult-sorry searchResult-sorry_inner">

                <h2>公園がみつかりません。</h2>
                    <p>別のキーワードを使ったり、入力ミスをチェックしたり、<br />フィルターを調整してみることをおすすめします。</p>
                </div>:<ScreamSkeleton />

            }



      </div>
          {

            rows.length === 0 || rows.length <= 40 ? '' :
              // 検索結果がある場合
          parks.length > this.state.marker
                ? <button onClick={this.loadList} className="ReadMore">もっとみる</button> : ''

          }




        </div>



        {/* //SP版 */}
        <div className="container_paddinng searchpark-sp">
          <div className="FindParksResult-items" >
            {!loading ?
              rows.length > 0 ?
            // 検索結果がある場合
               <>{rows.slice(0, this.state.marker)}</> :
             // 検索結果がある場合
              <div className="searchResult-sorry">
                <h2>公園がみつかりません。</h2>
                <p>別のキーワードを使ったり、入力ミスをチェックしたり、<br/>フィルターを調整してみることをおすすめします。</p>
              </div>: <ScreamSkeletonSP />
            }
      </div>
          {rows.length === 0 || rows.length <= 40 ? '' :
              // 検索結果がある場合
          parks.length > this.state.marker && !loading
          ? <button onClick={this.loadList} className="ReadMore">もっとみる</button> : ''
          }
        </div>
      <Footer />
      </>
    )
  }
}
const mapStateToProps = (state) =>({
  data: state.data,
  search:state
})
export default connect(mapStateToProps,{getParks})(ParkSearch);






class ProductRow extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0,
    }

    this.CountList = this.CountList.bind(this)
  }

  render() {

    return (
      //PC版
      <>

        <div className="FindParksResult-item-pc">
      <Link to={`/park/${this.props.park.parkId}`} onClick={this.CountList}>
      <img className="FindParksResult-item-img-pc" src={this.props.park.parkImage}/>
            <div className="FindParksResult-item-detil">
              <h2 className="parksResult-item-name-pc">{this.props.park.parkName}</h2>
              <div className="Park-location-pc">
              <LocationOnRoundedIcon style={{ fontSize: 15 }}/>
              <p className="parksResult-locAtime-name-pc">{this.props.park.parkLocation}</p>
              </div>
            </div>

          </Link>
          <LikeButton parkId={this.props.park.parkId} className="park-bookmark"/>
          {this.props.park.parkTag3?
            <div className="parkSpecialTag">{this.props.park.parkTag3}</div>:''
          }
          </div>



      {/* //スマホ版 */}
      <Link to={`/park/${this.props.park.parkId}`} className="FindParksResult-item" onClick={this.CountList}>
        <img className="FindParksResult-item-img" src={this.props.park.parkImage}/>
        <div className="FindParksResult-item-detil">
          <h2 className="parksResult-item-name">{this.props.park.parkName}</h2>
      </div>
      <div className="Park-location">
            <LocationOnRoundedIcon style={{ fontSize: 20 }}/>
            <p className="parksResult-locAtime-name">{this.props.park.parkLocation}</p>
          </div>
           {/* <LikeButton parkId={this.props.park.parkId} /> */}
      </Link>

        </>
    );
  }


  CountList() {
    this.setState({
      count: this.state.count + 1

    })
    console.log(this.props.count)
  }
}



