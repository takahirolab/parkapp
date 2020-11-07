import React ,{ Component }from 'react'
import PropTypes from 'prop-types'
import SearchbarDrawer from '../SearchbarDrawer'
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import { getParks } from '../../redux/actions/dataActions';
import { connect } from 'react-redux';

const morning = {
  pathname: '/search',search: '?morning',state: { scene: '朝' }
};const afternoon = {
  pathname: '/search',search: '?afternoon',state: { scene: '夕方' }
};const picnic = {
  pathname: '/search',search: '?picnic',state: { scene: 'ピクニック' }
};const camp = {
  pathname: '/search',search: '?camp',state: { scene: 'キャンプ' }
};const night = {
  pathname: '/search',search: '?night',state: { scene: '夜景' }
};const familly = {
  pathname: '/search',search: '?familly',state: { scene: '家族' }
};const dating = {
  pathname: '/search',search: '?dating',state: { scene: 'デート' }
};const fittness = {
  pathname: '/search',search: '?dating',state: { scene: '運動' }
};const tokyo = {
  pathname: '/search',search: '?tokyo',state: { parklocation: '東京都' }
};const all = {
  pathname: '/search',search: '?all',state: { parklocation: '',scene: '' }
};

export class HomeHeaderSp extends Component{
  render() {
    const parkSuggestArray = [];
    const parks = this.props.data.parks;
    const parkTokyoitems =
    parks.map((parkSuggest_item) =>
      <>
        {parkSuggest_item.parkLocation === "東京都" ?
          parkSuggestArray.push(parkSuggest_item) :
          ''
        }
      </>
    )


    return (
        <div className="container container_paddinng park-result-padding homeTop container-paddding-sp">
            <div className="park-result">
                <SearchbarDrawer/>

            <div className="serch-items">
                <ul className="Search-category">
                    <input type="checkbox" id="drawerforwhat" class="drawer-hidden"/>
                    <label for="drawerforwhat" className="searchFrom"> <EmojiPeopleRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} /><p className="p search-select_font">なにをする</p></label>
                    <div class="drawer-content__forwhat">
                  <div className="sceneTag-drawer-header">
                    <label for="drawerforwhat" className="sceneTag-drawer-header-back">戻る</label>
                    <h2 className="sceneTag-drawer-header-title h2">なにをする</h2>
                      </div>
                      <h2 className="sceneTag-drawer-header-h2">人気のタグから見つける</h2>
                      <ul className="sceneTag-drawer-header-popular">
                    <li className="drawer-header-popular-item">dsaf</li>
                    <li className="drawer-header-popular-item"></li>
                    <li className="drawer-header-popular-item"></li>
                    <li className="drawer-header-popular-item"></li>
                    <li className="drawer-header-popular-item"></li>
                    <li className="drawer-header-popular-item"></li>
                    <li className="drawer-header-popular-item"></li>
                    <li className="drawer-header-popular-item"></li>
                    <li className="drawer-header-popular-item"></li>
                      </ul>

                <h2 className="sceneTag-drawer-header-h2 sceneTag-drawer__bottom" >すべてのタグから見つける</h2>
                  <ul className="sceneTag-drawer-header--items">
                   <Link to={morning} className="sceneTag-drawer-header--item"><p>朝</p><ArrowBackIosIcon/></Link>
                   <Link to={afternoon} className="sceneTag-drawer-header--item"><p>夕方</p><ArrowBackIosIcon/></Link>
                   <Link to={picnic} className="sceneTag-drawer-header--item"><p>ピクニット</p><ArrowBackIosIcon/></Link>
                   <Link to={camp} className="sceneTag-drawer-header--item"><p>キャンプ</p><ArrowBackIosIcon/></Link>
                   <Link to={night} className="sceneTag-drawer-header--item"><p>夜景</p><ArrowBackIosIcon/></Link>
                    <Link to={dating} className="sceneTag-drawer-header--item"><p>デート</p><ArrowBackIosIcon/></Link>
                    <Link to={familly} className="sceneTag-drawer-header--item"><p>家族</p><ArrowBackIosIcon/></Link>
                   <Link to={fittness} className="sceneTag-drawer-header--item"><p>運動</p><ArrowBackIosIcon/></Link>
               </ul>
                    </div>


                    <input type="checkbox" id="drawerwithwho" class="drawer-hidden"/>
                    <label for="drawerwithwho" className="searchFrom"> <PeopleRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} /><p className ="p search-select_font">だれと行く</p></label>
                    <div class="drawer-content__withwho">
                  <div className="sceneTag-drawer-header">
                    <label for="drawerwithwho" className="sceneTag-drawer-header-back"><ArrowBackIosIcon/>戻る</label>
                        <h2 className="sceneTag-drawer-header-title h2">だれと行く</h2>
                  </div>
                  <ul className="sceneTag-drawer-header--items">
                    <Link to={morning} className="sceneTag-drawer-header--item"><p>家族</p><ArrowBackIosIcon /></Link>
                   <Link to={afternoon} className="sceneTag-drawer-header--item"><p>カップル</p><ArrowBackIosIcon/></Link>
                   <Link to={picnic} className="sceneTag-drawer-header--item"><p>同僚</p><ArrowBackIosIcon/></Link>
                   <Link to={picnic} className="sceneTag-drawer-header--item"><p>友人</p><ArrowBackIosIcon/></Link>
                   <Link to={picnic} className="sceneTag-drawer-header--item"><p>ひとり</p><ArrowBackIosIcon/></Link>
                   <Link to={picnic} className="sceneTag-drawer-header--item"><p>小さい子ども</p><ArrowBackIosIcon/></Link>
                   <Link to={picnic} className="sceneTag-drawer-header--item"><p>車椅子の方</p><ArrowBackIosIcon/></Link>
                   <Link to={picnic} className="sceneTag-drawer-header--item"><p>乳幼児</p><ArrowBackIosIcon/></Link>
               </ul>
             </div>



            </ul>
                </div>
                </div>
            </div>
    )
}
}

HomeHeaderSp.propTypes ={
  getParks:PropTypes.func.isRequired,
  data:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
  data:state.data
})


export default connect(mapStateToProps,{getParks})(HomeHeaderSp);

