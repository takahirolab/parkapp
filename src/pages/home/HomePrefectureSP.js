import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getParks } from '../../redux/actions/dataActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const tokyo = {
    pathname: '/search',search: '?tokyo',state: { parklocation: '東京都' }
  };


export class HomeLocatiomSp extends Component{
  constructor(props) {
    super(props);
  this.state = {
      value: '',
      parklocation:'',
      parkTag: '',
      parkTag2: '',
      HomeSearchLocation: 'none',
      HomeSearchWhat:'none',
      prefecture: '',
      HomeparkSelectWhatSee: 'true',
      HomeparkSelectWhatLearn: '',
      HomeparkSelectWhatPlay: '',
      HomeparkSelectWhatOther: '',
      HomeparkSearchSelectWhat: '',

  }
   this.inputRef = React.createRef();
  this.modalRef = React.createRef();
  this.modalRefwhat = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterTextChangeTag = this.handleFilterTextChangeTag.bind(this);
    this.handleFilterTextChangeTag2 = this.handleFilterTextChangeTag2.bind(this);
    this.HomeSearchLocation= this.HomeSearchLocation.bind(this);
    this.HomeSearchWhat= this.HomeSearchWhat.bind(this);
    this.HomeSearchWhatReset= this.HomeSearchWhatReset.bind(this);
  this.valueDelete = this.valueDelete.bind(this)
  this.filterList = this.filterList.bind(this)

  this.HomeSearchLocationReset= this.HomeSearchLocationReset.bind(this);
  this.HomeparkSelectWhatSee = this.HomeparkSelectWhatSee.bind(this)
  this.handleClickEvent = this.handleClickEvent.bind(this)
  this.handleClickEventwhat = this.handleClickEventwhat.bind(this)
}


componentDidMount() {
  // EventTargetに全てのClick eventをHandlingできるように登録する
  document.addEventListener('click', this.handleClickEvent)
  document.addEventListener('click', this.handleClickEventwhat)
}

componentWillUnmount() {
  // click eventがeventListenerに登録されたままになってしまうのでUnmount時にremoveする
  document.removeEventListener('click', this.handleClickEvent)
  document.removeEventListener('click', this.handleClickEventwhat)
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


HomeSearchLocation() {
this.setState({
  HomeSearchWhat:'none'
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
  HomeSearchLocation:'none'
})
this.state.HomeSearchWhat ==='none'?
this.setState({
  HomeSearchWhat:'inline'
  }):
this.setState({
  HomeSearchWhat:'none'
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
       parkTag:this.state.HomeparkSearchSelectWhat
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

        return (
            <div className="container-paddding-sp container_paddinng homeCategorySP__margin">
                <div className="park-city-item__title">
                    <h2 className="park-city-item__h2">都道府県からさがす</h2>
                    <Link to={tokyo}><p className="park-city-item__p">すべてみる</p></Link>
            </div>
            <div className="HomeSearchLocation-Select-items">
                  <table className="HomeSearchLocation-Select__margin" >

                  {/* <tr>
                    <td className="HomeSearchLocation-td">北海道</td>
                  </tr> */}
                  <tr>
                  <td className="HomeSearchLocation-td">北海道・東北</td>
                  <td className="HomeParkprefectur-flex">
                    {/* <div className="HomeParkprefecture" onClick={this.focusTextInput.bind(this, '北海道')}>北海道</div> */}

                      <Link to={{ pathname: "/park/search", state: { parklocation: '北海道' } }} className="HomeParkprefecture">北海道</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '青森県県' } }} className="HomeParkprefecture">青森県</Link>
                      <Link to={{ pathname: '/park/search', state: { parklocation: '秋田県' } }} className="HomeParkprefecture">秋田県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '山形県' } }} className="HomeParkprefecture">山形県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '岩手県' } }} className="HomeParkprefecture">岩手県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '宮城県' } }} className="HomeParkprefecture">宮城県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '福島県' } }} className="HomeParkprefecture">福島県</Link>
                  </td>
                    </tr>
                  <tr>
                  <td className="HomeSearchLocation-td">関東</td>
                  <td className="HomeParkprefectur-flex">
                  <Link to={{ pathname: "/park/search",search: "?sort=new",state: { parklocation: '東京都' } }} className="HomeParkprefecture">東京都</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '埼玉県' } }} className="HomeParkprefecture">埼玉県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '千葉県' } }} className="HomeParkprefecture">千葉県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '神奈川県' } }} className="HomeParkprefecture">神奈川県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '茨城県' } }} className="HomeParkprefecture">茨城県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '栃木県' } }} className="HomeParkprefecture">栃木県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '群馬県' } }} className="HomeParkprefecture">群馬県</Link>
                  </td>
                  </tr>
                  <tr>
                  <td className="HomeSearchLocation-td">中部</td>
                  <td className="HomeParkprefectur-flex">
                  <Link to={{ pathname:"/park/search", state: { parklocation: '新潟県' } }} className="HomeParkprefecture">新潟県</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '長野県' } }} className="HomeParkprefecture">長野県</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '石川県' } }} className="HomeParkprefecture">石川県</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '富山県' } }} className="HomeParkprefecture">富山県</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '福井県' } }} className="HomeParkprefecture">福井県</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '静岡県' } }} className="HomeParkprefecture">静岡県</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '山梨県' } }} className="HomeParkprefecture">山梨県</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '愛知県' } }} className="HomeParkprefecture">愛知県</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '岐阜県' } }} className="HomeParkprefecture">岐阜県</Link>
                     </td>
                  </tr>
                  <tr>
                  <td className="HomeSearchLocation-td">関西</td>
                  <td className="HomeParkprefectur-flex">
                  <Link to={{ pathname: "/park/search", state: { parklocation: '大阪府' } }} className="HomeParkprefecture">大阪府</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '京都府' } }} className="HomeParkprefecture">京都府</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '和歌山県' } }} className="HomeParkprefecture">和歌山県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '三重県' } }} className="HomeParkprefecture">三重県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '滋賀県' } }} className="HomeParkprefecture">滋賀県</Link>
                        <Link to={{ pathname: "/park/search", state: { parklocation: '奈良県' } }} className="HomeParkprefecture">奈良県</Link>
                  </td>
                  </tr>
                  <tr>
                  <td className="HomeSearchLocation-td">中国・四国</td>
                  <td className="HomeParkprefectur-flex">
                  <Link to={{ pathname: "/park/search", state: { parklocation: '兵庫県' } }} className="HomeParkprefecture">兵庫県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '岡山県' } }} className="HomeParkprefecture">岡山県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '広島県' } }} className="HomeParkprefecture">広島県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '山口県' } }} className="HomeParkprefecture">山口県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '鳥取県' } }} className="HomeParkprefecture">鳥取県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '島根県' } }} className="HomeParkprefecture">島根県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '香川県' } }} className="HomeParkprefecture">香川県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '愛媛県' } }} className="HomeParkprefecture">愛媛県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '高知県' } }} className="HomeParkprefecture">高知県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '徳島県' } }} className="HomeParkprefecture">徳島県</Link>

                  </td>
                  </tr>

                  <tr>
                  <td className="HomeSearchLocation-td">九州・沖縄</td>
                  <td className="HomeParkprefectur-flex">
                  <Link to={{ pathname: "/park/search", state: { parklocation: '福岡県' } }} className="HomeParkprefecture">福岡県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '長崎県' } }} className="HomeParkprefecture">長崎県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '佐賀県' } }} className="HomeParkprefecture">佐賀県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '大分県' } }} className="HomeParkprefecture">大分県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '熊本県' } }} className="HomeParkprefecture">熊本県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '宮崎県' } }} className="HomeParkprefecture">宮崎県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '鹿児島県' } }} className="HomeParkprefecture">鹿児島県</Link>
                      <Link to={{ pathname: "/park/search", state: { parklocation: '沖縄県' } }} className="HomeParkprefecture">沖縄県</Link>
                  </td>
                  </tr>

              </table>

              </div>
                <Link to="/about" className="About-home">本サービスについてはこちら</Link>
            </div>
        )
    }
}



HomeLocatiomSp.propTypes ={
    getParks:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired
  }

  const mapStateToProps = (state) =>({
    data:state.data
  })


export default connect(mapStateToProps,{getParks})(HomeLocatiomSp);
