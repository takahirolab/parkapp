import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Pic1 from '../../images/pic1.png'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import HomeWeather from './HomeWeather'
import HomeSearch from './HomeSearch'

const HomeMainVI = () => {
        return (
            <div className="main-visual" style={{ backgroundImage: `linear-gradient(to right bottom, #3d5d4b45, #52bf901a),url(${Pic1})` ,backgroundPosition:'50% 67%'}}>
                <div className="main_visual__cotainer">
                    <HomeWeather />
                    <HomeSearch />

                </div>
            </div>
        )
    }



export default HomeMainVI
