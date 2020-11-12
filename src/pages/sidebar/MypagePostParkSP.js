// import { Dashboard } from '@material-ui/icons'
import React, { Component, Fragment,useState } from 'react';
import MapageMain from './MypageMain'
import { connect } from 'react-redux';
import {postScream , clearErrors} from '../../redux/actions/dataActions';
import PropTypes from 'prop-types';

import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'

export class MypagePost extends Component {
    constructor(props) {
        super();
        this.state = {
            open: false,
            parkName: '',
            parkAbout: '',
            parkFeature: '',
            parkLocation: '',
            parkUrl: '',
            parkPrice: '',
            parkTag1: '',
            parkTag2: '',
            parkTag3: '',
            parkTag4: '',
            errors: {},
            parkImage: ''
        };
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
          this.setState({
            errors: nextProps.UI.errors
          });
        }
        if (!nextProps.UI.errors && !nextProps.UI.loading) {
          this.setState({
            parkName: '',
            parkAbout:'',
            parkFeature:'',
            parkLocation:'',
            parkUrl:'',
            parkPrice:'',
            parkTag1:'',
            parkTag2:'',
            parkTag3:'',
            parkTag4: '',
            parkImage:'',
            open: false, errors: {},
          });

        }
    }


    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      console.log( event)
      };




    handleSubmit = (event) => {
        event.preventDefault();
        const newPark = {
          parkName: this.state.parkName,
          parkAbout: this.state.parkAbout,
          parkFeature: this.state.parkFeature,
          parkLocation: this.state.parkLocation,
          parkUrl: this.state.parkUrl,
          parkPrice: this.state.parkPrice,
          parkTag1: this.state.parkTag1,
          parkTag2: this.state.parkTag2,
          parkTag3: this.state.parkTag3,
          parkTag4: this.state.parkTag4,
          parkImage: this.state.parkImage
        }
        this.props.postScream({parkName: this.state.parkName});

    }

    render() {
console.log(this.state.errors)
        const {UI: { loading }
    } = this.props;
  const { errors } = this.state;
  const { authenticated } = this.props;
        return (
<>
<Navbar/>
                <div className="Mypage-item-padding">
                    <h2 className="Mypage-item-h2">公園を投稿する</h2>
                    <div className="">
                        <form onSubmit={this.handleSubmit} className="MypagePost-form MypagePost-margintop">

                            <div className="Mypage-item-inf">
                                <div className="Mypage-item-inf__inner">
                                    <div className="Mypage_parkName-inner">
                                        <p className="Mypage-item-nameh2" >公園名</p>
                                        <p className="Mypage-require Mypage-require__margin">必須</p>
                                    </div>
                                    <input
                                    name="parkName"
                                    type="text"
                                    label="公園名"
                                    placeholder="公園名"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                        />
                                </div>
                            </div>

                            <div className="Mypage-item-inf">
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >公園についての説明</p>
                                    <input
                                    rows="5"
                                    wrap="soft"
                                    name="parkAbout"
                                    type="textarea"
                                    label="公園について"
                                    placeholder="公園について"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                        />
                                </div>
                            </div>

                            <div className="Mypage-item-inf">
                                <div className="Mypage-item-inf__inner">
                                <div className="Mypage_parkName-inner">
                                        <p className="Mypage-item-nameh2" >場所</p>
                                        <p className="Mypage-require Mypage-require__margin">必須</p>
                                    </div>
                                    <input
                                    name="parkLocation"
                                    type="text"
                                    label="公園のについて"
                                    placeholder="所在地"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                        />
                                </div>
                            </div>

                            <div className="Mypage-item-inf">
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >公園のwebサイト</p>
                                    <input
                                    name="parkUrl"
                                    type="text"
                                    label="公園のについて"
                                    placeholder="公園のURL"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                        />
                                </div>
                            </div>
                            <div className="Mypage-item-inf">
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >入園料</p>
                                    <input
                                    name="parkPrice"
                                    type="number"
                                    label="公園のについて"
                                    placeholder="入園料"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                        />
                                </div>
                            </div>
                           <div className="Mypage-PostTag">
                            <div className="Mypage-item-inf Mypage-Posttag__width">
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >公園タグ1</p>
                                    <select
                                    value={this.state.parkTag1}
                                    name="parkTag1"
                                    type="text"
                                    label="公園のについて"
                                    placeholder="公園のタグ1"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                    >
                                            <option value="" style={{display:'none'}}>なし</option>
                                            <option value="">なし</option>
                                            <option value="東京都">東京</option>
                                            <option value="大阪">大阪</option>
                                            <option value="神奈川">神奈川</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Mypage-item-inf Mypage-Posttag__width">
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >公園タグ2</p>
                                    <select
                                    value={this.state.parkTag2}
                                    name="parkTag2"
                                    type="text"
                                    label="公園のについて"
                                    placeholder="公園のタグ2"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                    >
                                            <option value="" style={{display:'none'}}>なし</option>
                                            <option value="">なし</option>
                                            <option value="東京都">東京</option>
                                            <option value="大阪">大阪</option>
                                            <option value="神奈川">神奈川</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Mypage-item-inf Mypage-Posttag__width" >
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >公園タグ3</p>
                                    <select
                                    value={this.state.parkTag3}
                                    name="parkTag3"
                                    type="text"
                                    label="公園のについて"
                                    placeholder="公園のタグ3"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                    >
                                            <option value="" style={{display:'none'}}>なし</option>
                                            <option value="">なし</option>
                                            <option value="東京都">東京</option>
                                            <option value="大阪">大阪</option>
                                            <option value="神奈川">神奈川</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Mypage-item-inf Mypage-Posttag__width">
                                <div className="Mypage-item-inf__inner">
                                    <p className="Mypage-item-nameh2" >公園タグ4</p>
                                    <select
                                    value={this.state.parkTag4}
                                    name="parkTag4"
                                    type="text"
                                    label="公園のについて"
                                    placeholder="公園のタグ4"
                                    className="MypageInput"
                                    onChange={this.handleChange}
                                    >
                                            <option value="" style={{display:'none'}}>なし</option>
                                            <option value="">なし</option>
                                            <option value="東京都">東京</option>
                                            <option value="大阪">大阪</option>
                                            <option value="神奈川">神奈川</option>
                                    </select>
                                </div>
                            </div>




                        </div>


                            <input
                                type="file"
                                name="parkImage"
                                label="タグ4"
                                rows="3"
                                placeholder="image"
                                onChange={this.handleChange}
                                fullWidth
                            />
                            {0 === Object.keys(this.state.errors).length?
                              '' : <p style={{color:'red',margin:'0 auto'}}>入力内容に不備があります。</p>
 }
                            <button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="Mypage-Post-btn Mypage-Post-btn__margin"
                            >
                                登録する
                            </button>
                        </form>
                    </div>
                </div>
                    <Footer />
            </>
        )
    }
}
MypagePost.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    classes:PropTypes.object.isRequired, //objectが必須にしたい項目。
    loginUser:PropTypes.func.isRequired, //objectが必須にしたい項目。
    user:PropTypes.object.isRequired, //objectが必須にしたい項目。
    UI:PropTypes.object.isRequired //objectが必須にしたい項目。
  };


  const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    user:state.user,
      UI: state.UI,
      data: state.data
  });

  export default connect(mapStateToProps, { postScream,clearErrors})(MypagePost);

