import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import { getParks } from '../redux/actions/dataActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import　LogoTree  from '../images/LogoTree.svg';

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


const SearchTags = [
    { kanji: '朝', Hiragana: 'あさ', en: 'osa', kata: 'アサ' }
]


const morning = {
    pathname: '/search',search: '?morning',state: { scene: '朝' }
  };
  const afternoon = {
    pathname: '/search',search: '?afternoon',state: { scene: '夕方' }
  };
  const picnic = {
    pathname: '/search',search: '?picnic',state: { scene: 'ピクニック' }
  };
  const camp = {
    pathname: '/search',search: '?camp',state: { scene: 'キャンプ' }
  };
  const night = {
    pathname: '/search',search: '?night',state: { scene: '夜景' }
  };
  const familly = {
    pathname: '/search',search: '?familly',state: { scene: '家族' }
  };
  const dating = {
    pathname: '/search',search: '?dating',state: { scene: 'デート' }
  };
  const fittness = {
    pathname: '/search',search: '?dating',state: { scene: '運動' }
  };
  const tokyo = {
    pathname: '/search',search: '?tokyo',state: { parklocation: '東京都' }
  };
  const all = {
    pathname: '/search',search: '?all',state: { parklocation: '',scene: '' }
  };



export class SearchbarDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Searchdisplay: 'inline',
            value: '',
            SearchResult: 'none',
            SearchDrawer:'false',
        }
        this.textInput = React.createRef();
        this.SerchbarDrawer = this.SerchbarDrawer.bind(this);
        this.filterList = this.filterList.bind(this);

    }

    componentWillMount() {

      }


        SerchbarDrawer() {
            if (this.state.SearchDrawer === 'false') {
              this.setState({
                SearchDrawer: 'true'
              })
            } if (this.state.SearchDrawer === 'true') {
              this.setState({
                SearchDrawer: 'false'
              })
            }
            this.setState({
              Searchdisplay: 'inline',
              value:''
            })
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



    render() {

    const parks = this.props.data.parks;
        const parkSuggestArray = [];
        const parkTokyoitems =
        parks.map((parkSuggest_item) =>
          <>
            {parkSuggest_item.parkLocation === "東京都" ?
              parkSuggestArray.push(parkSuggest_item) :
              ''
            }
          </>
        )
    const parkTokyoitem =
    parkSuggestArray.map((parkSuggestArray_item) =>
        <>
    <Link to={`/park/${parkSuggestArray_item.parkId}`} className="park-city-item active_category">
            <img src={parkSuggestArray_item.parkImage} className="pakr-city-img" />
            <p className="park-city-name">{parkSuggestArray_item.parkName}</p>
    </Link>

    </>

        )


   return(
       <>
             <div className="serch-bar-location" onClick={this.SerchbarDrawer}>
                  <SearchIcon style={{ fontSize: 21, opacity: 0.7 }} />
                  <p className="serch-bar__color ">公園や都市名からさがす</p>
                </div>
            {this.state.SearchDrawer === 'true'?
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
               <div className="sceneTag-drawer-header-back" onClick={this.SerchbarDrawer}><ArrowBackIosIcon />戻る</div>

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

                     return<Link to={JapanAreaHgparam} className="searchresult-posi">
                         <div className="searchResult-location">
                         <LocationOnRoundedIcon style={{ fontSize: 22, color:'#52BF90'}} />
                         </div>
                       <h2>{JapanAreaHGItem.kangi}</h2>
                     </Link>
                   }
                   if (SearchstartKg === true && this.state.value.length > 0) {
                     return <Link to={JapanAreKgparam} className="searchresult-posi">
                        <div className="searchResult-location">
                        <LocationOnRoundedIcon style={{ fontSize: 22, color:'#52BF90'}} />
                       </div>
                       <h2>{JapanAreaHGItem.kangi}</h2></Link>

                   }
                   if (SearchstartEn === true && this.state.value.length > 0) {
                     return <Link to={JapanAreaEnparam} className="searchresult-posi">
                        <div className="searchResult-location">
                         <LocationOnRoundedIcon style={{ fontSize: 22, color: '#52BF90' }} />
                         </div><h2>{JapanAreaHGItem.kangi}</h2></Link>

                   }
                   if (SearchstartKn === true && this.state.value.length > 0) {
                     return <Link to={JapanAreaKnparam} className="searchresult-posi">
                        <div className="searchResult-location">
                       <LocationOnRoundedIcon style={{ fontSize: 22, color: '#52BF90' }} />
                       </div>
                       <h2>{JapanAreaHGItem.kangi}</h2></Link>
                   }


               })
             }


             {
               parks.map((park) => {
                 const parkSearch = park.parkName.startsWith(this.state.value,0)
                 // const parkSearchTag1 = park.parkTag1.startsWith(this.state.value,0)

                 if (parkSearch === true && this.state.value.length > 0) {
                   return <Link to={`/park/${park.parkId}`}　className="searchresult-posi">
                       <div className="searchResult-location">
                       <img src={LogoTree} className="parkSearchinpt-logo"/>
                     </div><h2>{park.parkName}</h2>
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
                   <ul className="SearchInput-items-cit-items">
                     <Link to={tokyo} className="SearchInput-items-cit-item">東京</Link>
                     <li className="SearchInput-items-cit-item">大阪</li>
                     <li className="SearchInput-items-cit-item">福岡</li>
                     <li className="SearchInput-items-cit-item">神奈川</li>
                     <li className="SearchInput-items-cit-item">千葉</li>
                     <li className="SearchInput-items-cit-item">埼玉</li>
                     <li className="SearchInput-items-cit-item">神奈川</li>
                     <li className="SearchInput-items-cit-item">千葉</li>
                   </ul>
                   <Link to={all} className="SearchInput-items-city_all">すべての都市を表示</Link>

                   <div class="SearchInput-items-cit-items">
                     <h2>よく検索される公園</h2>


                     <div className="park-city-items">


                       <ul className="park-city-items--">
                         {parkTokyoitem}

                       </ul>

                     </div>
                     <Link to={all} className="SearchInput-items-city_all">すべての公園を表示</Link>
                   </div>


                 </div>

               </ul> : ''}
          </div>:''
        }



   </>
)

}

}


SearchbarDrawer.propTypes ={
    getParks:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired
  }

  const mapStateToProps = (state) =>({
    data:state.data
  })


export default connect(mapStateToProps,{getParks})(SearchbarDrawer);



