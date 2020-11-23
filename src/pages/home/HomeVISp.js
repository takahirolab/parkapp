import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pic1 from '../../images/pic1.png'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Weather from '../../layout/weather'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import　LogoTree  from '../../images/LogoTree.svg';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { getParks } from '../../redux/actions/dataActions';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import { searchItem } from '../../redux/actions/SearchActions'
import { withRouter } from 'react-router';
import prefecture from '../../util/prefecture.json'
const SearchTags = [
  { kanji: '朝', Hiragana: 'あさ', en: 'osa', kata: 'アサ' }
]


const JapanArea = prefecture

export class HomeVISp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      whatValue: '',
      HomeSearchWhatSP: 'none',
      HomeSearchLocationSP:'none',
      HomeSearchOtherSP: 'none',
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

    }

    this.textInput = React.createRef();
    this.SerchbarDrawer = this.SerchbarDrawer.bind(this);
    this.filterList = this.filterList.bind(this);
    this.resetLocation = this.resetLocation.bind(this);
    this.resetWhat = this.resetWhat.bind(this);
    this.resetOther = this.resetOther.bind(this);
    this.filterListWhat = this.filterListWhat.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
    this.focusTextInputWhat = this.focusTextInputWhat.bind(this);
    this.focusTextInputOther = this.focusTextInputOther.bind(this);
    this.HomeSearchWhat = this.HomeSearchWhat.bind(this);
    this.HomeSearchLocation = this.HomeSearchLocation.bind(this);
    this.HomeSearchOther = this.HomeSearchOther.bind(this);
    this.HomeAreaKT = this.HomeAreaKT.bind(this);
    this.HomeAreaTH = this.HomeAreaTH.bind(this);
    this.HomeAreaCH = this.HomeAreaCH.bind(this);
    this.HomeAreaKN = this.HomeAreaKN.bind(this);
    this.HomeAreaTS = this.HomeAreaTS.bind(this);
    this.HomeAreaKS = this.HomeAreaKS.bind(this);
    this.fixedOpen = this.fixedOpen.bind(this);

  }

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
    HomeSelectArea: e,
    HomeSearchLocationSP: 'none',
    HomeAreaTH:'none',
    HomeAreaKT:'none',
    HomeAreaCH:'none',
    HomeAreaKN:'none',
    HomeAreaTS:'none',
    HomeAreaKS:'none',
  })
  document.body.removeAttribute('style', 'position: fixed;')
}

focusTextInputWhat(e) {
  this.setState({
    HomeSelectWhat: e,
    HomeSearchWhatSP:'none'
  })
  document.body.removeAttribute('style', 'position: fixed;')
}

focusTextInputOther(e) {
  this.setState({
    HomeSelectOther:e,
    HomeSearchOtherSP:'none'
  })
  document.body.removeAttribute('style', 'position: fixed;')
}


  resetLocation() {
    this.setState({
      HomeSelectArea: ''
  })
}
  resetWhat() {
    this.setState({
      HomeSelectWhat: ''
  })
}
  resetOther() {
    this.setState({
      HomeSelectOther: ''
  })
}



handleSubmit = (event) =>{
  event.preventDefault();
  const searchData = {
     parklocation:this.state.HomeSelectArea,
     parkTag:this.state.HomeSelectWhat,
     parkTag2:this.state.HomeSelectOther,
 };
  this.props.searchItem(searchData);
  this.props.history.push('/park/search')
  console.log(searchData)
};

  fixedOpen() {
    document.body.removeAttribute('style', 'position: fixed;')
}



  render() {

    const { authenticated } = this.props;
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
    return (
      <div className="mainVI">
        <div className="mainVI-img" style={{ backgroundImage: `linear-gradient(to right bottom, #4263506b, #52bf901a),url(${Pic1})` ,backgroundPosition:'50% 67%',backgroundSize:'cover'}}></div>
        <form className="HomeSearch-sp" action="/park/search" name="test1" method="get" onSubmit={this.handleSubmit}>
          {/* {authenticated?'': <Weather />} */}


        <div className="HomeParkSearch-Location HomeParkSearch__width" onClick={this.HomeSearchLocation} >
            <LocationOnRoundedIcon style={{ fontSize: 24, color: '#52BF90' }} />
            {!this.state.HomeSelectArea ?
              <p className="HomeSelectSp-area__p">すべてのエリア</p> :
              <p className="homeSearchLocation-input HomeSelectSp-area__p" style={{ color: '#52bf90' }}>{this.state.HomeSelectArea}</p>}

          </div>
          {!this.state.HomeSelectArea ? '' :
              <CancelIcon style={{ fontSize: 18 }} onClick={this.resetLocation}className="HomeParkSearch-Location-reset" />}

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

                     return<Link to={JapanAreaHgparam} className="searchresult-posi" onClick={this.fixedOpen}>
                         <div className="searchResult-location">
                         <LocationOnRoundedIcon style={{ fontSize: 22, color:'#52BF90'}} />
                         </div>
                       <h2>{JapanAreaHGItem.kangi}</h2>
                     </Link>
                   }
                   if (SearchstartKg === true && this.state.value.length > 0) {
                     return <Link to={JapanAreKgparam} className="searchresult-posi" onClick={this.fixedOpen}>
                        <div className="searchResult-location">
                        <LocationOnRoundedIcon style={{ fontSize: 22, color:'#52BF90'}} />
                       </div>
                       <h2>{JapanAreaHGItem.kangi}</h2></Link>

                   }
                   if (SearchstartEn === true && this.state.value.length > 0) {
                     return <Link to={JapanAreaEnparam} className="searchresult-posi" onClick={this.fixedOpen}>
                        <div className="searchResult-location">
                         <LocationOnRoundedIcon style={{ fontSize: 22, color: '#52BF90' }} />
                         </div><h2>{JapanAreaHGItem.kangi}</h2></Link>

                   }
                   if (SearchstartKn === true && this.state.value.length > 0) {
                     return <Link to={JapanAreaKnparam} className="searchresult-posi" onClick={this.fixedOpen}>
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
                   return <Link to={`/park/${park.parkId}`}　className="searchresult-posi" onClick={this.fixedOpen}>
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
      <ul> <li className="drawer-city-height" onClick={this.focusTextInput.bind(this,'北海道')}>北海道</li></ul>

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
       <li onClick={this.focusTextInput.bind(this,'東京都')}>東京都</li>
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




          <div className="HomeParkSearch-what" onClick={this.HomeSearchWhat}>
            <EmojiPeopleRoundedIcon style={{ fontSize: 24, color: '#52bf90' }} />
            {!this.state.HomeSelectWhat ?
              <p className="HomeSelectSp-area__p">すべての目的</p> :
              <p className="homeSearchLocation-input HomeSelectSp-area__p" style={{ color: '#52bf90' }}>{this.state.HomeSelectWhat}</p>}

          </div>
          {!this.state.HomeSelectWhat ? '' :
              <CancelIcon style={{ fontSize: 18 }} onClick={this.resetWhat}className="HomeParkSearch-What-reset" />}


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
                  <p style={{ marginTop:0,fontSize:12,fontWeight:400}}onClick={this.HomeSearchWhat}>すべてのキーワードからさがす</p>
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



          <div className="HomeParkSearch-Location HomeParkSearchOthre__sp" onClick={this.HomeSearchOther}>
            <AddRoundedIcon style={{ fontSize: 24, color: '#52bf90' }} />
            {!this.state.HomeSelectOther?
              <p className="HomeSelectSp-area__p">その他・詳細条件</p> :
              <p className="homeSearchLocation-input HomeSelectSp-area__p" style={{ color: '#52bf90' }}>{this.state.HomeSelectOther}</p>}

          </div>
          {!this.state.HomeSelectOther? '' :
              <CancelIcon style={{ fontSize: 18 }} onClick={this.resetOther}className="HomeParkSearch-Other-reset" />}


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



          {/* <div className="HomeParkSearch-Location HomeParkSearchOthre__sp" onClick={this.HomeSearchOther}>
            <AddRoundedIcon style={{ fontSize: 24, color: '#52bf90' }} />
            <p className="HomeParkSearch-what-sp-font">その他・詳細条件</p>
          </div>
 */}








          <button type="submit"  className="HomeParkSearchicon-sp" >
                <p　style={{color: '#fff' }} >公園をさがす</p>
            </button>

        </form>
      </div>
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


export default connect(mapStateToProps,{getParks,searchItem})(withRouter(HomeVISp));






{/* <div class="drawer-content__where">
<div className="sceneTag-drawer-header">
  <div onClick={this.HomeSearchLocation} className="sceneTag-drawer-header-back"><ArrowBackIosIcon/>戻る</div>
      <h2 className="sceneTag-drawer-header-title h2">どこへいく</h2>
</div>

<ul className="drawer-padding">

      <ul><label for="drawer-kan" className="drawer-city">北海道(0)</label></ul>

      <ul className="drawerhome-city">
        <input type="checkbox" id="drawer-tohoku" className="drawer-hidden" />
        <label for="drawer-tohoku" className="drawer-city-tohoku__color" >東北(0)</label>
        <div className="drawer-city-li drawer-city-tohoku" >
          <Link to={tokyo}>青森県(0)</Link>
          <Link to={tokyo}>岩手県(0)</Link>
          <Link to={tokyo}>宮城県(0)</Link>
          <Link to={tokyo}>秋田県(0)</Link>
          <Link to={tokyo}>山形県(0)</Link>
          <Link to={tokyo}>福島県(0)</Link>
        </div>
      </ul>

      <ul className="drawerhome-city">
        <input type="checkbox" id="drawer-kanto" class="drawer-hidden" />
        <label for="drawer-kanto" class="drawer-city-kanto__color" >関東()</label>
        <div className="drawer-city-li drawer-city-kanto">
          <Link to={tokyo}>東京都()</Link>
          <Link to={tokyo}>埼玉県(0)</Link>
          <Link to={tokyo}>神奈川県(0)</Link>
          <Link to={tokyo}>千葉県(0)</Link>
          <Link to={tokyo}>群馬県(0)</Link>
          <Link to={tokyo}>栃木県(0)</Link>
          <Link to={tokyo}>茨城県(0)</Link>
        </div>
      </ul>

      <ul>
      <input type="checkbox" id="drawer-tyuubu" class="drawer-hidden" />
        <label for="drawer-tyuubu" class="drawer-city-tyuubu__color">中部・北陸(0)</label>
        <div className="drawer-city-li  drawer-city-tyuubu">
          <Link to={tokyo}>長野県(0)</Link>
          <Link to={tokyo}>新潟県(0)</Link>
          <Link to={tokyo}>石川県(0)</Link>
          <Link to={tokyo}>富山県(0)</Link>
          <Link to={tokyo}>岐阜県(0)</Link>
          <Link to={tokyo}>愛知県(0)</Link>
          <Link to={tokyo}>山梨県(0)</Link>
          <Link to={tokyo}>静岡県(0)</Link>
        </div>
      </ul>

      <ul>
      <input type="checkbox" id="drawer-kansai" class="drawer-hidden" />
        <label for="drawer-kansai" class="drawer-city-kansai__color">関西(0)</label>
        <div className=" drawer-city-li drawer-city-kansai">
          <Link to={tokyo}>滋賀県</Link>
          <Link to={tokyo}>大阪府</Link>
          <Link to={tokyo}>京都府</Link>
          <Link to={tokyo}>三重県</Link>
          <Link to={tokyo}>和歌山県</Link>
          <Link to={tokyo}>奈良県</Link>
          <Link to={tokyo}>兵庫県</Link>
        </div>
      </ul>

      <ul>
      <input type="checkbox" id="drawer-tyuShikoku" class="drawer-hidden" />
        <label for="drawer-tyuShikoku" class="drawer-scity-tyuShikoku__color">中国・四国(0)</label>
        <div className="drawer-city-li drawer-city-tyuShikoku">
          <Link to={tokyo}>兵庫県</Link>
          <Link to={tokyo}>岡山県</Link>
          <Link to={tokyo}>広島県</Link>
          <Link to={tokyo}>山口県</Link>
          <Link to={tokyo}>香川県</Link>
          <Link to={tokyo}>愛媛県</Link>
          <Link to={tokyo}>高知県</Link>
          <Link to={tokyo}>徳島県</Link>
        </div>
      </ul>

      <ul>
      <input type="checkbox" id="drawer-KyuOki" class="drawer-hidden" />
        <label for="drawer-KyuOki" class="drawer-city-KyuOki__color">九州・沖縄(0)</label>
        <div className="drawer-city-li drawer-city-KyuOki">
          <Link to={tokyo}>福岡県</Link>
          <Link to={tokyo}>佐賀県</Link>
          <Link to={tokyo}>大分県</Link>
          <Link to={tokyo}>熊本県</Link>
          <Link to={tokyo}>鹿児島県</Link>
          <Link to={tokyo}>宮崎県</Link>
          <Link to={tokyo}>沖縄県</Link>
        </div>
      </ul>
</ul>
</div> */}
