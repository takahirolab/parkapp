import React, { Component } from 'react'
import { getParks } from '../../redux/actions/dataActions';
import {connect} from 'react-redux';

export class M_readMore extends Component {
    constructor(props) {
        super(props)
        this.Readmore = this.Readmore.bind(this)
    }
    Readmore() {
        return this.props.ReadMore();
    }


    render() {
        const parkRows = this.props.rows
        const parks = this.props.data.parks
        const marker = this.props.Maker
        return (
       <>
                {parkRows.length === 0 || parkRows.length <= 40 ? '' :
                    // 検索結果がある場合
                    parks.length > marker ? <button onClick={() => { this.Readmore(); }} className="ReadMore">もっとみる</button> : ''
                }
           </>
        )
    }
}

const mapStateToProps = (state) =>({
    data: state.data
  })

export default connect(mapStateToProps,{getParks})(M_readMore);
