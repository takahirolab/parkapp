import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getParks } from '../../redux/actions/dataActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import bigPark from '../../images/bigPark.jpg'
import boatParkr from '../../images/boatParkr.jpg'
import Grass from '../../images/Grass.jpg'
import nationalPark from '../../images/nationalPark.jpg'
import photographer from '../../images/photographer.jpg'

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

                  <tr>
                    <td className="HomeSearchLocation-td">北海道</td><td onClick={this.focusTextInput.bind(this,'北海道')}>北海道</td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">東北</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'青森')}>青森</div><div  className="HomeParkprefecture"　onClick={this.focusTextInput.bind(this,'岩手')}>岩手</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'秋田')}>秋田</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'岩手')}>岩手</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'山形')}>山形</div><div  className="HomeParkprefecture"　onClick={this.focusTextInput.bind(this,'福島')}>福島</div></td>
                    </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">関東</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'東京都')}>東京</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'神奈川')}>神奈川</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'埼玉')}>埼玉</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'千葉')}>千葉</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'茨城')}　>茨城</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'山形')}onClick={this.focusTextInput.bind(this,'栃木')}>栃木</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'群馬')}>群馬</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">中部</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'山梨')}>山梨</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'静岡')}>静岡</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'愛知')}>愛知</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'岐阜')}>岐阜</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'長野')}>長野</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'石川')}>石川</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'福井')}>福井</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'新潟')}>新潟</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">関西</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'大阪大阪')}>大阪</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'滋賀滋賀')}>滋賀</div><div  className="HomeParkprefecture"　onClick={this.focusTextInput.bind(this,'三重三重')}>三重</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'京都京都')}>京都</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'和歌山和歌山')}>和歌山</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'兵庫兵庫')}>兵庫</div></td>
                  </tr>
                  <tr>
                    <td className="HomeSearchLocation-td">中国・四国</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'岡山')}>岡山</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'広島')}>広島</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'山口')}>山口</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'鳥取')}>鳥取</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'島根')}>島根</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'愛媛')}>愛媛</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'香川')}>香川</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'徳島')}>徳島</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'高知')}>高知</div></td>
                  </tr>

                  <tr>
                    <td className="HomeSearchLocation-td">九州・沖縄</td><td className="HomeParkprefectur-flex"><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'福岡')}>福岡</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'大分')}>大分</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'宮崎')}>宮崎</div><div  className="HomeParkprefecture"　onClick={this.focusTextInput.bind(this,'鹿児島')}>鹿児島</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'長崎')}>長崎</div><div  className="HomeParkprefecture"onClick={this.focusTextInput.bind(this,'佐賀')}>佐賀</div><div  className="HomeParkprefecture" onClick={this.focusTextInput.bind(this,'沖縄')}>沖縄</div></td>
                  </tr>

              </table>

              </div>

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
