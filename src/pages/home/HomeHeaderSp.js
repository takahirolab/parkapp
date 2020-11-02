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


                    <input type="checkbox" id="drawerwhere" class="drawer-hidden"/>
                    <label for="drawerwhere" className="searchFrom"> <LocationOnRoundedIcon style={{ fontSize: 20, color: '#52BF90' }} /><p className ="p search-select_font">どこにいく</p></label>
                    <div class="drawer-content__where">
                  <div className="sceneTag-drawer-header">
                    <label for="drawerwhere" className="sceneTag-drawer-header-back"><ArrowBackIosIcon/>戻る</label>
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
                          <label for="drawer-kanto" class="drawer-city-kanto__color" >関東({parkSuggestArray.length})</label>
                          <div className="drawer-city-li drawer-city-kanto">
                            <Link to={tokyo}>東京都({parkSuggestArray.length})</Link>
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

