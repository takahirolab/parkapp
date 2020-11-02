import React, {  Suspense, lazy,Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import ScreamSkeleton from '../../util/ScreamSkeleton';
import Park from './Park';

import { connect } from 'react-redux';


import {getParks} from '../../redux/actions/dataActions';
import ParkInf from './parkInf';
import { Navbar } from '../../layout/Navbar';

import ParkLikeButton from './LikeButton'

const LazyComponent = lazy(() => import('../../util/ScreamSkeleton'));




class ParkDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          park_detail: [],
          isExecuting: false,
          result: '',
          bkImg: "",
          btnGo:""
        };
    }

    componentWillMount() {
      setTimeout(() => {
        this.setState({
          txt: "読み込み完了",
          bkImg: ``
        });
      }, 3000);
    }


  componentWillMount() {
    setTimeout(() => {
      const parkId = this.props.match.params.parkId;
      this.props.getParks(parkId);
      axios
        .get(`/park/${parkId}`)
        .then((res)=> {
          this.setState({
              park_detail:this.state.park_detail.concat(res.data
              )
          })
      })
    }, 2000);
    }


    render() {
      const park_detail = this.state.park_detail;
      const { loading } = this.state.park_detail;
      console.log(this.props.user)

        // console.log(park)
        let park_Inf =
        park_detail.map((park) =>
          <ParkInf key={park.parkId} park={park} className="parkInf_pos"/>)

        return (
          <>
            <Navbar/>
            <div className="innner">
              <ScreamSkeleton/>
              {park_Inf}
              <ParkLikeButton/>fdsfa
              <div className="btnGo-inner">
                <ParkLikeButton parkId={this.state.park_detail.parkId} >
                  {/* <div className="btn btnGo" style={{ backGround: '' }} on>この公園に行ってみたい</div> */}
                </ParkLikeButton>
              </div>
            </div>
          </>
        )

    }
}

ParkDetail.propTypes = {
  user:PropTypes.object.isRequired,
    getParks:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired,
    park: PropTypes.object.isRequired,
  }

  const mapStateToProps = (state) =>({
    data: state.data,
    user:state.user,

  })

  export default connect(mapStateToProps,{getParks})(ParkDetail);


