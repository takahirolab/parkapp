import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import { getParks } from '../redux/actions/dataActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import　LogoTree  from '../images/LogoTree.svg';
import prefecture from '../util/prefecture.json';

const JapanArea = prefecture;


const SearchTags = [
    { kanji: '朝', Hiragana: 'あさ', en: 'osa', kata: 'アサ' }
]



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
                     <Link to="/park/search" className="SearchInput-items-cit-item">東京</Link>
                     <li className="SearchInput-items-cit-item">大阪</li>
                     <li className="SearchInput-items-cit-item">福岡</li>
                     <li className="SearchInput-items-cit-item">神奈川</li>
                     <li className="SearchInput-items-cit-item">千葉</li>
                     <li className="SearchInput-items-cit-item">埼玉</li>
                     <li className="SearchInput-items-cit-item">神奈川</li>
                     <li className="SearchInput-items-cit-item">千葉</li>
                   </ul>
                   <Link to="/park/search" className="SearchInput-items-city_all">すべての都市を表示</Link>

                   <div class="SearchInput-items-cit-items">
                     <h2>よく検索される公園</h2>


                     <div className="park-city-items">


                       <ul className="park-city-items--">
                         {parkTokyoitem}

                       </ul>

                     </div>
                     <Link to="/park/search"className="SearchInput-items-city_all">すべての公園を表示</Link>
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



