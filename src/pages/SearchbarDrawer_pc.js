import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import { getParks } from '../redux/actions/dataActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogoTree from '../images/LogoTree.svg';
import prefecture from '../util/prefecture.json';

const JapanArea = prefecture;


export class SearchbarDrawer_pc extends Component {
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


      const parkInput = parks.map((park) => {
        const parkSearch = park.parkName.startsWith(this.state.value,0)
        // const parkSearchTag1 = park.parkTag1.startsWith(this.state.value,0)

        if (parkSearch === true && this.state.value.length > 0) {
          return <Link to={`/park/${park.parkId}`}className="searchresult-posi-pc">
              <div className="searchResult-location-pc">
              <img src={LogoTree} className="parkSearchinpt-logo"/>
            </div><p>{park.parkName}</p></Link>
        }
      })

      console.log(parkInput)


   return(
       <>


            <div class="serchDrawerContent-pc">
             <div className="sceneTag-drawer-header">
               <div className="serch-bar-location-pc drawer-margin" >

                 <SearchIcon style={{ fontSize: 21, opacity: 0.7 }} />
                 <input type="text" id="searchfocus"
                   className="serch-bar__color search-bar-position"
                   placeholder="公園名からさがす"
                   value={this.state.value}
                   onChange={this.filterList}
                   autocomplete="on"
                   inputmode="kana"
                 />
               </div>

         </div>
         {this.state.value.length > 0 ?
         <div className="tttt">

              <p className="searchinputResult-p-pc">下記からご選択ください。</p>
             <div className="SearchTag-input_padding">
               { !parkInput ?
                 <p>該当する検索結果はございません。</p>: parkInput}

               </div>

               </div>
           : ''}
          </div>




   </>
)

}

}


SearchbarDrawer_pc.propTypes ={
    getParks:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired
  }

  const mapStateToProps = (state) =>({
    data:state.data
  })


export default connect(mapStateToProps,{getParks})(SearchbarDrawer_pc);



