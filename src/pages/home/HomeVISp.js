import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pic1 from '../../images/pic1.png'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

export class HomeVISp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }
  render() {
    return (
      <div className="mainVI">
        <img src={Pic1} className="mainVI-img" />
        <form className="HomeSearch-sp">

        <div className="HomeParkSearch-Location HomeParkSearch__width" onClick={this.HomeSearchLocation} ref={this.modalRef}>
          <LocationOnRoundedIcon style={{ fontSize: 24, color: '#52BF90' }} />
          <input type="text"
            name="test2"
            className="homeSearchLocation-input"
            value={this.state.value}
            onChange={this.filterList}
            autocomplete="off"
            placeholder="都道府県・公園からさがす"
            style={{ color: '#52bf90' }}
            ref={this.inputRef}
            />
          </div>

          <div className="HomeParkSearch-what" onClick={this.HomeSearchWhat} ref={this.modalRefwhat}>
            <EmojiPeopleRoundedIcon style={{ fontSize: 24, color: '#52bf90' }} />
            <p className="HomeParkSearch-what-sp-font">目的からさがす</p>
          </div>

          <div className="HomeParkSearch-Location HomeParkSearchOthre__sp">
            <AddRoundedIcon style={{ fontSize: 24, color: '#52bf90' }} />
            <p className="HomeParkSearch-what-sp-font">そのた詳細条件</p>
          </div>


          <button type="submit"  className="HomeParkSearchicon-sp" >
                <p style={{ fontSize: 14, color: '#fff' }}>公園をさがす</p>
            </button>

        </form>
      </div>
    )
  }
}


export default HomeVISp
