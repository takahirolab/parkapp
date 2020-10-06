import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import ScreamSkeleton from '../../util/ScreamSkeleton';
import Park from '../../components/park/Park';

import { connect } from 'react-redux';


import {getParks} from '../../redux/actions/dataActions';
import ParkInf from './parkInf';
import { Navbar } from '../../layout/Navbar';


class ParkActivityDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          park_detail:[]
        };
    }


  componentDidMount() {
    const parkId = this.props.match.params.parkId;
    this.props.getParks(parkId);
    axios
      .get(`/park/${parkId}`)
      .then((res)=> {
        this.setState({
            park_detail:this.state.park_detail.concat(res.data)
        })
        console.log(this.state.park_detail)
    })

    }


    render() {
        // const park =[]
        // park.push(this.state.park_detail)
        const park_detail =this.state.park_detail;

        // console.log(park)

        let park_Inf =
        park_detail.map((park) =>
         <ParkInf key={park.parkId} park={park} />)


        return (

            <div>
                <Navbar/>
                <div className="innner">
                {park_Inf}
                </div>
            </div>



        )

    }
}

ParkActivityDetail.propTypes ={
    getParks:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired,
    park: PropTypes.object.isRequired,
  }

  const mapStateToProps = (state) =>({
    data:state.data

  })

  export default connect(mapStateToProps,{getParks})(ParkActivityDetail);

