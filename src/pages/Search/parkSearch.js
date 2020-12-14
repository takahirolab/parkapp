import React, { Component } from 'react'

import {useLocation} from 'react-router-dom';

import { Link,NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {getParks} from '../../redux/actions/dataActions';
import  Navbar  from '../../layout/Navbar'

import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';


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
import LogoTree from '../../images/LogoTree.svg';
import prefecture from '../../util/prefecture.json';
import Searchmap from '../mapboxAndReact/src/mapbox'
import ParkSearchItem from './parkSearchItem'
import L_parkSearch from './l_parkSearch'
// import L_parkSearchSP from './l'

const JapanArea = prefecture;

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
      HomeparkSelectWhatSee: 'true',
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

    this.HomeSearchWhatSP= this.HomeSearchWhatSP.bind(this);
    this.HomeSearchWhat= this.HomeSearchWhat.bind(this);
    this.HomeSearchWho = this.HomeSearchWho.bind(this);
    this.HomeSearchLocation = this.HomeSearchLocation.bind(this);
    this.HomeSearchLocationSP = this.HomeSearchLocationSP.bind(this);
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

    this.HomeSearchOtherSP = this.HomeSearchOtherSP.bind(this);
    this.HomeSearchWhat = this.HomeSearchWhat.bind(this);

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

    const parkTag = this.props.search.search.Searchparks.parkTag
    const parkTag2 = this.props.search.search.Searchparks.parkTag2
    const parklocation = this.props.search.search.Searchparks.parklocation

if(parkTag){this.setState({ parkTag:parkTag})}
if(parkTag2){this.setState({ parkTag2:parkTag2})}
if (parklocation) { this.setState({ parklocation: parklocation })}

if (!this.props.location.state) {return console.log('ありません')}
else {
  this.setState({
    parklocation: this.props.location.state.parklocation,
    parkTag: this.props.location.state.parkTag,
    parkTag2: this.props.location.state.parkTag2
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
    this.state.HomeSearchLocation === 'none'?
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
    }

    else if (!searchInput && !this.props.location.state) {
      return console.log('ありません')
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


  HomeSearchWhatSP() {
    if (this.state.HomeSearchWhatSP === 'none') {
      // document.body.setAttribute('style', 'position: fixed;')
      this.setState({
        HomeSearchWhatSP: 'inline'
      })
    } else {
      // document.body.removeAttribute('style', 'position: fixed;')
      this.setState({
        HomeSearchWhatSP: 'none'
      })
    }
  }

  HomeSearchLocationSP() {
    if (this.state.HomeSearchLocationSP === 'none') {
      // document.body.setAttribute('style', 'position: fixed;')
      this.setState({
        HomeSearchLocationSP: 'inline'
      })
    } else {
      // document.body.removeAttribute('style', 'position: fixed;')
      this.setState({
        HomeSearchLocationSP: 'none'
      })
    }
  }



  HomeSearchOtherSP() {
    if (this.state.HomeSearchOtherSP === 'none') {
      // document.body.setAttribute('style', 'position: fixed;')
      this.setState({
        HomeSearchOtherSP: 'inline'
      })
    } else {
      // document.body.removeAttribute('style', 'position: fixed;')
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
// document.body.removeAttribute('style', 'position: fixed;')
}

focusTextInputWhat(e) {
this.setState({
  parkTag: e,
  HomeSearchWhatSP:'none'
})
// document.body.removeAttribute('style', 'position: fixed;')
}

focusTextInputOther(e) {
this.setState({
  parkTag2:e,
  HomeSearchOtherSP:'none'
})
// document.body.removeAttribute('style', 'position: fixed;')
}


fixedOpen() {
  document.body.removeAttribute('style', 'position: fixed;')
}

  render() {
    const { parks, loading } = this.props.data;
    const rows = [];
    const SearchInput = this.props.location.pathname.substr(13)

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
          rows.push(<ParkSearchItem park={park} key={park.parkId} />)
        }
        if (TagLocation_none) {
          rows.push(<ParkSearchItem park={park} key={park.parkId} />)
        }
        if (TagNone_Location) {
          rows.push(<ParkSearchItem park={park} key={park.parkId} />)
        }
        if (Tag_LocationNone) {
          rows.push(<ParkSearchItem park={park} key={park.parkId} />)
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
          rows.push(<ParkSearchItem park={park} key={park.parkId} />)
        }
        if (TagLocation_none) {
          rows.push(<ParkSearchItem park={park} key={park.parkId} />)
        }
        if (TagNone_Location) {
          rows.push(<ParkSearchItem park={park} key={park.parkId} />)
        }
        if (Tag_LocationNone) {
          rows.push(<ParkSearchItem park={park} key={park.parkId} />)
        }
      }
    });




    const searchForm =
      <>

    <div className="container container_paddinng homeTop parkSearchPadding">
          <div className="park-result-pc parkResult__pc park-result">
            {/* ///////////
            検索バー
            /////////// */}
            <div className="search-bar-pc-outline">
            <div className="search-bar-pc">
              <div className="serch-bar-pc-inner">


                  {/* //どこにいくの */}

              <div  onClick={this.HomeSearchLocation} className="searchBar-selectItem_pc" style={
                 this.state.parklocation ?
                 { border: '#52BF90 solid 1.5px'} :  { color: '#b4b4b4' }
            }ref={this.modalRef}>


                {!this.state.parklocation ?
                   <LocationOnRoundedIcon style={{ fontSize: 20, color: '#93918F' }} />:
                  <LocationOnRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} />
            } {!this.state.parklocation ? <p style={{color:'#b4b4b4',marginLeft:'1rem'}}>すべての場所</p> : <p  style={{color:'#52BF90',marginLeft:'1rem'}}>{this.state.parklocation}</p>}




              <div className="ParkSearchLocation-Select" style={{ display: this.state.HomeSearchLocation }}>
                <h2>エリアから探す</h2>
                <div className="HomeSearchLocation-Select-items">
                  <table className="HomeSearchLocation-Select__margin" >

                  <tr>
                    <td className="HomeSearchLocation-td">北海道</td><td onClick={() => this.setState({ parklocation:'北海道'})} style={{fontSize:12}}>北海道</td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">東北</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'青森県'})}>青森県</div><div  className="HomeParkprefecture"　onClick={() => this.setState({ parklocation:'岩手県'})}>岩手県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'秋田県'})}>秋田県</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'岩手県'})}>岩手県</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'山形県'})}>山形県</div><div  className="HomeParkprefecture"　onClick={() => this.setState({ parklocation:'福島県'})}>福島県</div></td>
                    </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">関東</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'東京都'})}>東京都</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'神奈川県'})}>神奈川県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'埼玉県'})}>埼玉県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'千葉県'})}>千葉県</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'茨城県'})}　>茨城県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'山形県'})}onClick={() => this.setState({ parklocation:'栃木'})}>栃木県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'群馬県'})}>群馬県</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">中部</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'山梨県'})}>山梨県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'静岡県'})}>静岡県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'愛知県'})}>愛知県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'岐阜県'})}>岐阜県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'長野県'})}>長野県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'石川県'})}>石川県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'福井県'})}>福井県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'新潟県'})}>新潟県</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">関西</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'大阪県'})}>大阪府</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'滋賀県'})}>滋賀県</div><div  className="HomeParkprefecture"　onClick={() => this.setState({ parklocation:'三重県'})}>三重県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'京都県'})}>京都府</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'和歌山県'})}>和歌山県</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'兵庫県'})}>兵庫県</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">中国・四国</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'岡山県'})}>岡山県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'広島県'})}>広島県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'山口県'})}>山口県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'鳥取県'})}>鳥取県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'島根県'})}>島根県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'愛媛県'})}>愛媛県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'香川県'})}>香川県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'徳島県'})}>徳島県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'高知県'})}>高知県</div></td>
                  </tr>

                  <tr>
                    <td className="HomeSearchLocation-td">九州・沖縄</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'福岡県'})}>福岡県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'大分県'})}>大分県</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'宮崎県'})}>宮崎県</div><div  className="HomeParkprefecture"　onClick={() => this.setState({ parklocation:'鹿児島県'})}>鹿児島県</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'長崎県'})}>長崎県</div><div  className="HomeParkprefecture"onClick={() => this.setState({ parklocation:'佐賀県'})}>佐賀県</div><div  className="HomeParkprefecture" onClick={() => this.setState({ parklocation:'沖縄県'})}>沖縄県</div></td>
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
                    {!this.state.parkTag? <p style={{color:'#b4b4b4',marginLeft:'1rem',fontSize:'1.4rem'}}>すべての目的</p> : <p  style={{color:'#52BF90',marginLeft:'1rem',fontSize:'1.4rem'}}>{this.state.parkTag}</p>}
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

                  <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ HomeparkSelectWhatLearn: 'true',HomeparkSelectWhatSee: '' })}
                onMouseLeave={() => this.setState({ HomeparkSelectWhatLearn: '',HomeparkSelectWhatSee: 'true'  })}>
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


                  <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ HomeparkSelectWhatPlay: 'true',HomeparkSelectWhatSee: '' })}
                onMouseLeave={() => this.setState({ HomeparkSelectWhatPlay: '',HomeparkSelectWhatSee: 'true' , })}>
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

                  <div className="sidebar-items_prefecture__" onMouseMove={() => this.setState({ HomeparkSelectWhatOther: 'true',HomeparkSelectWhatSee: '' })}
                onMouseLeave={() => this.setState({ HomeparkSelectWhatOther: '',HomeparkSelectWhatSee: 'true'  })}>
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
                <h2>一緒にいくひと</h2>

                <ul className="sidebar-items HomeSearchInputWhat-modal">
                  <li onClick={() => this.setState({ parkTag2:'ひとり'})} className="sidebar-item">ひとり</li>
                  <li onClick={() => this.setState({ parkTag2:'子供'})} className="sidebar-item">子供</li>
                  <li onClick={() => this.setState({ parkTag2:'カップル'})} className="sidebar-item">カップル</li>
                  <li onClick={() => this.setState({ parkTag2:'車椅子のかた'})} className="sidebar-item">車椅子のかた</li>
                  <li onClick={() => this.setState({ parkTag2:'友人'})}className="sidebar-item">友人</li>
                  <li onClick={() => this.setState({ parkTag2:'家族'})} className="sidebar-item">家族</li>
                  <li onClick={() => this.setState({ parkTag2:'小さいこども'})}className="sidebar-item">小さいこども</li>
                  <li onClick={() => this.setState({ parkTag2:'乳幼児'})}className="sidebar-item">乳幼児</li>
                </ul>
              </div>

                {this.state.parkTag2 ?
                  <CancelIcon onClick={this.SearchCloseTag2} className="search-close" style={{ fontSize: 20 }}/>:''
                }
              </div>








                {!this.state.parklocation && !this.state.parkTag && !this.state.parkTag2 && !this.state.parkTag3 ?
                  '': <div className="valueDelete" onClick={this.valueDelete}>すべて削除</div> }
              </div>
              <SearchbarDrawer_pc />
            </div>

            {/* <div className="parkSuggest-items">
            <p class="parkSuggest parkSug_p">おすすめの検索</p>
            <div className="parkSuggest"onClick={() => this.setState({ parklocation:'東京都',parkTag2:'家族'})}>
              <SearchRoundedIcon style={{ fontSize: 16, color: '#93918F' }} />
              <p className="parkSuggest-p">東京</p><p className="parkSuggest-p">家族</p>
            </div>
            <div className="parkSuggest">
              <SearchRoundedIcon style={{ fontSize: 16, color: '#93918F' }} />
              <p className="parkSuggest-p" onClick={() => this.setState({ parklocation:'東京都',parkTag:'朝'})}>東京 朝</p>
            </div>
            <div className="parkSuggest">
              <SearchRoundedIcon style={{ fontSize: 16, color: '#93918F' }} />
              <p className="parkSuggest-p" onClick={() => this.setState({ parklocation:'東京都',parkTag:'ジョギング'})}>東京 ジョギング</p>
            </div>
            <div className="parkSuggest">
              <SearchRoundedIcon style={{ fontSize: 16, color: '#93918F' }} />
              <p className="parkSuggest-p" onClick={() => this.setState({ parklocation:'東京都',parkTag:'海が見える'})}>東京 海が見える</p>
            </div>
            <div className="parkSuggest">
              <SearchRoundedIcon style={{ fontSize: 16, color: '#93918F' }} />
              <p className="parkSuggest-p"onClick={() => this.setState({ parklocation:'東京都',parkTag:'芝がある'})}>東京 芝がある</p>
            </div>
            <div className="parkSuggest">
              <SearchRoundedIcon style={{ fontSize: 16, color: '#93918F' }} />
              <p className="parkSuggest-p" onClick={() => this.setState({ parklocation:'東京都',parkTag:'夜景がきれい'})}>東京 夜景がきれい</p>
            </div>
              </div> */}

            </div>
            <div className="parkSearchFil_inner">

              <div className="SeRe">
                {this.state.parklocation ? <h2 className="SeRe_">{this.state.parklocation}の公園</h2> :
                  <h2 className="SeRe_">すべての公園</h2>}
                <p className="SeRe__h2-desc">検索結果</p>
                <p className="SeRe__h2">{rows.length}</p>
              <p>件</p>

              {/* <div className="parkSearchValue__inner">
              {this.state.parkTag? <p>「{this.state.parkTag}」</p>:''}
              {this.state.parkTa2? <p>「{this.state.parkTag2}」</p>:''}
              {this.state.parkTag3 ? <p>「{this.state.parkTag3}」</p> : ''}
              {!this.state.parkTag && !this.state.parkTag2 && !this.state.parkTag2 ?'' :<p>の公園</p>}
              </div> */}
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

                <div className="searchBar-selectItem" style={this.state.parklocation ?{ background: '#52BF90' } : { background:'#fff', border: '0.1rem #d0cfcf solid'}} onClick={this.HomeSearchLocationSP}>
                {!this.state.parklocation ?
                   <LocationOnRoundedIcon style={{ fontSize: 20, color: '#93918F' }} />:
                  <LocationOnRoundedIcon style={{ fontSize: 20, color: '#fff' }} />
            }

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



   <div className="sceneTag-drawer-header-back" onClick={this.HomeSearchLocationSP}><ArrowBackIosIcon />戻る</div>

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

   })
 }

{/*
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

   } */}
   </div>





 {this.state.value.length === 0 ?

   <ul className="sceneTag-drawer-header--items">
     <div class="SearchInput-items-city">
       <h2>よく検索される都市名</h2>
       <ul className="HomeSearchSPLocation-modal-items">
         <li onClick={this.focusTextInput.bind(this,'東京都')} className="sidebar-item">東京</li>
         <li onClick={this.focusTextInput.bind(this,'大阪府')}className="sidebar-item">大阪</li>
         <li onClick={this.focusTextInput.bind(this,'福岡県')}className="sidebar-item">福岡</li>
         <li onClick={this.focusTextInput.bind(this,'神奈川県')}className="sidebar-item">神奈川</li>
         <li onClick={this.focusTextInput.bind(this,'千葉県')}className="sidebar-item">千葉</li>
         <li onClick={this.focusTextInput.bind(this,'埼玉県')}className="sidebar-item">埼玉</li>
        </ul>



<ul className="HomeSearchSPLocation-modal-prefecture">
<h2>エリアからさがす</h2>
<ul> <li className="drawer-city-height" onClick={this.focusTextInput.bind(this,'北海道')}><p>北海道</p></li></ul>

<ul className="drawerhome-city">
<div for="drawer-tohoku" className="drawer-city-tohoku__color drawer-city-height" onClick={this.HomeAreaTH}><p style={{color:this.state.HomeAreaTH === 'inline' ?'#52BF90':'' }}>東北</p><AddIcon style={{color:'#424242a8',fontSize:18,marginRight:14}}/></div>
<div className="drawer-city-li drawer-city-tohoku" style={{display:this.state.HomeAreaTH}} >
<li onClick={this.focusTextInput.bind(this,'青森県')}>青森県</li>
<li onClick={this.focusTextInput.bind(this,'岩手県')}>岩手県</li>
<li onClick={this.focusTextInput.bind(this,'宮城県')}>宮城県</li>
<li onClick={this.focusTextInput.bind(this,'秋田県')}>秋田県</li>
<li onClick={this.focusTextInput.bind(this,'山形県')}>山形県</li>
<li onClick={this.focusTextInput.bind(this,'福島県')}>福島県</li>
</div>
</ul>

<ul className="drawerhome-city">
<div for="drawer-kanto" class="drawer-city-kanto__color drawer-city-height" onClick={this.HomeAreaKT}><p style={{color:this.state.HomeAreaKT === 'inline' ?'#52BF90':'' }}>関東</p><AddIcon style={{color:'#424242a8',fontSize:18,marginRight:14}}/></div>
<div className="drawer-city-li drawer-city-kanto" style={{display:this.state.HomeAreaKT}}>
<li onClick={this.focusTextInput.bind(this,'東京府')}>東京都</li>
<li onClick={this.focusTextInput.bind(this,'埼玉県')}>埼玉県</li>
<li onClick={this.focusTextInput.bind(this,'神奈川県')}>神奈川県</li>
<li onClick={this.focusTextInput.bind(this,'千葉県')}>千葉県</li>
<li onClick={this.focusTextInput.bind(this,'群馬県')}>群馬県</li>
<li onClick={this.focusTextInput.bind(this,'栃木県')}>栃木県</li>
<li onClick={this.focusTextInput.bind(this,'茨城県')}>茨城県</li>
</div>
</ul>

<ul className="drawerhome-city">
<input type="checkbox" id="drawer-tyuubu" class="drawer-hidden" />
<div for="drawer-tyuubu" class="drawer-city-tyuubu__color drawer-city-height"onClick={this.HomeAreaCH}><p style={{color:this.state.HomeAreaCH === 'inline' ?'#52BF90':'' }}>中部・北陸</p><AddIcon style={{color:'#424242a8',fontSize:18,marginRight:14}}/></div>
<div className="drawer-city-li  drawer-city-tyuubu" style={{display:this.state.HomeAreaCH}}>
<li onClick={this.focusTextInput.bind(this,'長野県')}>長野県</li>
<li onClick={this.focusTextInput.bind(this,'新潟県')}>新潟県</li>
<li onClick={this.focusTextInput.bind(this,'石川県')}>石川県</li>
<li onClick={this.focusTextInput.bind(this,'富山県')}>富山県</li>
<li onClick={this.focusTextInput.bind(this,'岐阜県')}>岐阜県</li>
<li onClick={this.focusTextInput.bind(this,'愛知県')}>愛知県</li>
<li onClick={this.focusTextInput.bind(this,'山梨県')}>山梨県</li>
<li onClick={this.focusTextInput.bind(this,'静岡県')}>静岡県</li>
</div>
</ul>

<ul className="drawerhome-city">
<input type="checkbox" id="drawer-kansai" class="drawer-hidden" />
<div for="drawer-kansai" class="drawer-city-kansai__color drawer-city-height" onClick={this.HomeAreaKN}><p style={{color:this.state.HomeAreaKN === 'inline' ?'#52BF90':'' }}>関西</p><AddIcon style={{color:'#424242a8',fontSize:18,marginRight:14}}/></div>
<div className=" drawer-city-li drawer-city-kansai" style={{display:this.state.HomeAreaKN}}>
<li onClick={this.focusTextInput.bind(this,'滋賀県')}>滋賀県</li>
<li onClick={this.focusTextInput.bind(this,'大阪府')}>大阪府</li>
<li onClick={this.focusTextInput.bind(this,'京都府')}>京都府</li>
<li onClick={this.focusTextInput.bind(this,'三重県')}>三重県</li>
<li onClick={this.focusTextInput.bind(this,'和歌山県')}>和歌山県</li>
<li onClick={this.focusTextInput.bind(this,'奈良県')}>奈良県</li>
<li onClick={this.focusTextInput.bind(this,'兵庫県')}>兵庫県</li>
</div>
</ul>

<ul className="drawerhome-city">
<input type="checkbox" id="drawer-tyuShikoku" class="drawer-hidden" />
<div for="drawer-tyuShikoku" class="drawer-scity-tyuShikoku__color drawer-city-height"onClick={this.HomeAreaTS}><p style={{color:this.state.HomeAreaTS === 'inline' ?'#52BF90':'' }}>中国・四国</p><AddIcon style={{color:'#424242a8',fontSize:18,marginRight:14}}/></div>
<div className="drawer-city-li drawer-city-tyuShikoku" style={{display:this.state.HomeAreaTS}}>

<li onClick={this.focusTextInput.bind(this,'岡山県')}>岡山県</li>
<li onClick={this.focusTextInput.bind(this,'広島県')}>広島県</li>
<li onClick={this.focusTextInput.bind(this,'山口県')}>山口県</li>
<li onClick={this.focusTextInput.bind(this,'香川県')}>香川県</li>
<li onClick={this.focusTextInput.bind(this,'愛媛県')}>愛媛県</li>
<li onClick={this.focusTextInput.bind(this,'高知県')}>高知県</li>
<li onClick={this.focusTextInput.bind(this,'徳島県')}>徳島県</li>
</div>
</ul>

<ul className="drawerhome-city">
<input type="checkbox" id="drawer-KyuOki" class="drawer-hidden" />
<div for="drawer-KyuOki" class="drawer-city-KyuOki__color drawer-city-height" onClick={this.HomeAreaKS}><p style={{color:this.state.HomeAreaKS === 'inline' ?'#52BF90':'' }}>九州・沖縄</p><AddIcon style={{color:'#424242a8',fontSize:18,marginRight:14}}/></div>
<div className="drawer-city-li drawer-city-KyuOki" style={{display:this.state.HomeAreaKS}}>
<li onClick={this.focusTextInput.bind(this,'福岡県')}>福岡県</li>
<li onClick={this.focusTextInput.bind(this,'佐賀県')}>佐賀県</li>
<li onClick={this.focusTextInput.bind(this,'大分県')}>大分県</li>
<li onClick={this.focusTextInput.bind(this,'熊本県')}>熊本県</li>
<li onClick={this.focusTextInput.bind(this,'鹿児島県')}>鹿児島県</li>
<li onClick={this.focusTextInput.bind(this,'宮城県')}>宮崎県</li>
<li onClick={this.focusTextInput.bind(this,'沖縄県')}>沖縄県</li>
</div>
</ul>
</ul>
</div>

   </ul> : ''}
</div>
</div>





















              <div className="searchBar-selectItem-what" style={this.state.parkTag ?{ background: '#52BF90' } : { background:'#fff',border: '0.1rem #d0cfcf solid'}} onClick={this.HomeSearchWhatSP}>
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




                <div className="searchBar-selectItem" style={this.state.parkTag2 ? { background: '#52BF90' } : { background:'#fff',border: '0.1rem #d0cfcf solid'} } onClick={this.HomeSearchOtherSP}>
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

                <div className="sceneTag-drawer-header-back" onClick={this.HomeSearchOtherSP}><ArrowBackIosIcon />戻る</div>
              </div>

              <div class="SearchInput-items-city HomeSearchInputWhat-modal-inner">
                <div className="HomeSearchInputWhat-modal-h2">
                  <h2>一緒にいくひと</h2>
                  <p style={{ marginTop:0,fontSize:12,fontWeight:400}}onClick={this.focusTextInputOther.bind(this,'')}>すべての詳細条件からさがす</p>
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



const parkItemsPC = !loading ?rows.length > 0 ?
  // 検索結果がある場合
  <>  {rows.slice(0, this.state.marker)}</> :
   // 検索結果がある場合
    <div className="searchResult-sorry searchResult-sorry_inner">

      <h2>公園がみつかりません。</h2>
          <p>別のキーワードを使ったり、入力ミスをチェックしたり、<br />フィルターを調整してみることをおすすめします。</p>
  </div> : <ScreamSkeleton />


  const parkItemsSP =  !loading ?
      rows.length > 0 ?
    // 検索結果がある場合
       <>{rows.slice(0, this.state.marker)}</> :
     // 検索結果がある場合
      <div className="searchResult-sorry">
        <h2>公園がみつかりません。</h2>
        <p>別のキーワードを使ったり、入力ミスをチェックしたり、<br/>フィルターを調整してみることをおすすめします。</p>
      </div>: <ScreamSkeletonSP />


    return (
      <>
        <Navbar/>
        {searchForm}
        <L_parkSearch rows={rows} ReadMore={() => { this.loadList(); }} Maker={this.state.marker} >
          <Searchmap />
          {parkItemsPC}
        </L_parkSearch>

        {/* //SP版 */}
        <div className="container_paddinng searchpark-sp">
          <div className="FindParksResult-items">
             {parkItemsSP}
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




// import React, { Component } from 'react'

// export default class parkSearch extends Component {
//   render() {
//     return (
//       <>
//       <Navbar/>
//       {searchForm}
//       <L_parkSearch rows={rows} ReadMore={() => { this.loadList(); }} Maker={this.state.marker} >
//         <Searchmap />
//         {parkItemsPC}
//       </L_parkSearch>

//       {/* //SP版 */}
//       <div className="container_paddinng searchpark-sp">
//         <div className="FindParksResult-items">
//            {parkItemsSP}
//     </div>
//         {rows.length === 0 || rows.length <= 40 ? '' :
//             // 検索結果がある場合
//         parks.length > this.state.marker && !loading
//         ? <button onClick={this.loadList} className="ReadMore">もっとみる</button> : ''
//         }
//       </div>
//     <Footer />
//     </>
//     )
//   }
// }







