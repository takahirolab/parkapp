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
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import SearchbarDrawer from '../SearchbarDrawer'
import CancelIcon from '@material-ui/icons/Cancel';
import SearchbarDrawer_pc from '../SearchbarDrawer_pc'
import Footer from '../../layout/Footer';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MapIcon from '@material-ui/icons/Map';


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
        parkTag3:'',
      };
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

  component() {
    this.setState({
      parklocation: this.props.location.state.parklocation,
      parkTag: this.props.location.state.HomeparkSearchSelectWhat,
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

  render() {
    const { parks, loading } = this.props.data;
    const rows = [];
    const SearchInput = this.props.location.pathname.substr(13)

    console.log(this.props.location.state)

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
            }>
                {!this.state.parklocation ?
                   <LocationOnRoundedIcon style={{ fontSize: 20, color: '#93918F' }} />:
                  <LocationOnRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} />
            }
                  {/* <p className="p search-select_font">どこにいく</p> */}
                <select className="p search-select_font_pc"
                  value={this.state.parklocation}
                  onChange={this.handleFilterTextChange}
                  placeholder="ああああ"
                  style={
                    this.state.parklocation ?
                      { color: '#52BF90'} :  { color: '#b4b4b4' }
                  }>
                    <option value="" style={{display:'none'}}>場所</option>
                    <option value="">すべて</option>
                    <option value="東京都">東京</option>
                    <option value="大阪">大阪</option>
                    <option value="神奈川">神奈川</option>
                </select>

                {this.state.parklocation ?
                  <CancelIcon onClick={this.SearchCloseLoc} className="search-close" style={{ fontSize: 20 }}/>:''
                }
              </div>





              <div className="searchBar-selectItem_pc" style={
                 this.state.parkTag3 ?
                 { border: '#52BF90 solid 1.5px'} :  { color: '#777' }
            }>
                {!this.state.parkTag3 ?
                  <EmojiPeopleRoundedIcon style={{ fontSize: 20, color: '#93918F' }} /> :
                  <EmojiPeopleRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} />
            }
                {/* <p className="p search-select_font">なにをする</p> */}
                <select className="p search-select_font_pc" value={this.state.parkTag3} onChange={this.handleFilterTextChangeTag3}
                style={
                  this.state.parkTag3 ?
                    { color: '#52BF90'} :  { color: '#b4b4b4' }
                }>
                  <option value="" style={{display:'none'}}>目的</option>
                  <option value="">すべて</option>
                  <option value="ジョギング">ジョギング</option>
                  <option value="デート">デート</option>
                  <option value="ピクニック">ピクニック</option>
                </select>
                {this.state.parkTag3 ?
                  <CancelIcon onClick={this.SearchCloseTag3} className="search-close" style={{ fontSize: 20 }}/>:''
                }
                  </div>



                  <div className="searchBar-selectItem_pc" style={
                 this.state.parkTag2 ?
                 { border: '#52BF90 solid 1.5px'} :  { color: '#777' }
            }>
                {!this.state.parkTag2 ?
                   <PeopleRoundedIcon style={{ fontSize: 20, color: '#93918F' }} />:
                  <PeopleRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} />
            }

                <select className="p search-select_font_pc" value={this.state.parkTag2} onChange={this.handleFilterTextChangeTag2}
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
                </select>
                {this.state.parkTag2 ?
                  <CancelIcon onClick={this.SearchCloseTag2} className="search-close" style={{ fontSize: 20 }}/>:''
                }
              </div>





              <div className="searchBar-selectItem_pc" style={
                 this.state.parkTag ?
                 { border: '#52BF90 solid 1.5px'} :  { color: '#b4b4b4' }
            }>
                {!this.state.parkTag ?
                  <EmojiPeopleRoundedIcon style={{ fontSize: 20, color: '#93918F' }} /> :
                  <EmojiPeopleRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} />
            }
                {/* <p className="p search-select_font">なにをする</p> */}
                <select className="p search-select_font_pc" value={this.state.parkTag} onChange={this.handleFilterTextChangeTag}
                style={
                  this.state.parkTag ?
                    { color: '#52BF90'} :  { color: '#b4b4b4' }
                }>
                  <option value="" style={{display:'none'}}>時間帯</option>
                  <option value="">すべて</option>
                  <option value="朝">朝</option>
                  <option value="夕方">夕方</option>
                  <option value="夜景">夜景</option>
                </select>
                {this.state.parkTag ?
                  <CancelIcon onClick={this.SearchCloseTag} className="search-close" style={{ fontSize: 20 }}/>:''
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
            <SearchbarDrawer/>
            <div className="searchBar-selectItems">
              <div className="searchBar-selectItem-what">
                {!this.state.parkTag ?
                  <EmojiPeopleRoundedIcon style={{ fontSize: 20, color: '#93918F' }} /> :
                  <EmojiPeopleRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} />
            }
                {/* <p className="p search-select_font">なにをする</p> */}
                <select className="p search-select_font" value={this.state.parkTag} onChange={this.handleFilterTextChangeTag}>
                  <option value="" style={{display:'none'}}>なにをする</option>
                  <option value="">すべて</option>
                  <option value="朝">朝</option>
                  <option value="夕方">夕方</option>
                  <option value="夜景">夜景</option>
            </select>
              </div>
              <div className="searchBar-selectItem-Whowhere">

                <div className="searchBar-selectItem">
                {!this.state.parkTag2 ?
                   <PeopleRoundedIcon style={{ fontSize: 20, color: '#93918F' }} />:
                  <PeopleRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} />
            }

              <select className="p search-select_font"  value={this.state.parkTag2} onChange={this.handleFilterTextChangeTag2}>
                  <option value="" style={{display:'none'}}>だれといく</option>
                  <option value="">すべて</option>
                  <option value="家族">家族</option>
                  <option value="カップル">カップル</option>
                  <option value="友人">友人</option>
                  <option value="ひとり">ひとり</option>
                  <option value="小さいこども">小さいこども</option>
                  <option value="車椅子の方">車椅子の方</option>
                  <option value="乳幼児">乳幼児</option>
            </select>
                </div>

                <div className="searchBar-selectItem">
                {!this.state.parklocation ?
                   <LocationOnRoundedIcon style={{ fontSize: 20, color: '#93918F' }} />:
                  <LocationOnRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} />
            }
                  {/* <p className="p search-select_font">どこにいく</p> */}
                  <select className="p search-select_font" value={this.state.parklocation} onChange={this.handleFilterTextChange} placeholder="ああああ">
                    <option value="" style={{display:'none'}}>どこへいく</option>
                    <option value="">すべて</option>
                    <option value="東京都">東京</option>
                    <option value="大阪">大阪</option>
                    <option value="神奈川">神奈川</option>
              　　</select>

                </div>
              </div>

            </div>
      </div>

        </div>

      </>

    console.log(this.state.parklocation)
    console.log(this.state.parkTag)


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
            {rows.length > 0 ?
            // 検索結果がある場合
              !loading ? <>{rows.slice(0, this.state.marker)}</> : <ScreamSkeleton /> :
             // 検索結果がある場合
              <div className="searchResult-sorry">
                <h2>公園がみつかりません。</h2>
                <p>別のキーワードを使ったり、入力ミスをチェックしたり、<br/>フィルターを調整してみることをおすすめします。</p>
              </div>
            }
      </div>
          {rows.length === 0 || rows.length <= 40 ? '' :
              // 検索結果がある場合
          parks.length > this.state.marker
          ? <button onClick={this.loadList} className="ReadMore">もっとみる</button> : ''
          }
        </div>
      </>
    )
  }
}
const mapStateToProps = (state) =>({
  data:state.data
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
    console.log(this.props)
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



