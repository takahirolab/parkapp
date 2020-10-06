import React, {  Suspense, lazy,Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import ScreamSkeleton from '../../util/ScreamSkeleton';
import Park from '../../components/park/Park';

import { connect } from 'react-redux';


import {getParks} from '../../redux/actions/dataActions';
import ParkInf from './parkInf';
import { Navbar } from '../../layout/Navbar';

const LazyComponent = lazy(() => import('../../util/ScreamSkeleton'));


class ParkDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          park_detail: [],
          isExecuting: false,
          result: '',
          txt: "初期画面",
          fromTxt: "",
          backGround: "yellow",
          bkImg: ""
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
          console.log(this.state.park_detail)
      })
    }, 2000);



    }


    render() {
      const park_detail = this.state.park_detail;
      const {loading} =this.state.park_detail;

        // console.log(park)
        let park_Inf =
        park_detail.map((park) =>
          <ParkInf key={park.parkId} park={park} className="parkInf_pos"/>)

        return (

          <div>
                <Navbar/>
            <div className="innner">
              <ScreamSkeleton/>
                {park_Inf}
            </div>
          </div>



        )

    }
}

ParkDetail.propTypes ={
    getParks:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired,
    park: PropTypes.object.isRequired,
  }

  const mapStateToProps = (state) =>({
    data:state.data

  })

  export default connect(mapStateToProps,{getParks})(ParkDetail);


