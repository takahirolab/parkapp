import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { ReactComponent as Cloud } from '../images/cloud.svg'
import { ReactComponent as CloudSunny } from '../images/cloudSunny.svg'
import { ReactComponent as Rain } from '../images/Rain.svg'

export class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weather_icon: ''
        };
    }

        componentDidMount() {
            this.handleGetLatAndLng_day();
        }

        handleGetLatAndLng_day = async () => {
            const response_day = await axios.get('http://api.openweathermap.org/data/2.5/onecall?lat=35.681236&lon=139.767125&exclude=current&lang=ja&appid=53c3cb0dbb1e4379c04eecc993b22af1');
            const weatheritems_hourly = response_day.data.hourly[0].weather[0].description
            const test = weatheritems_hourly.includes('曇')
            console.log(test)
            console.log(weatheritems_hourly)

            if (weatheritems_hourly.indexOf('曇') != -1) {
                this.setState({ weather_icon: 'Cloud', })
            }
            if (weatheritems_hourly.indexOf('雲') != -1) {
                this.setState({ weather_icon: 'Cloud', })
            }
            if (weatheritems_hourly.indexOf('晴') != -1) {
                this.setState({ weather_icon: 'CloudSunny', })
            }
            if (weatheritems_hourly.indexOf('雨') != -1) {
                this.setState({ weather_icon: 'Rain', })
            }

        }


    render() {
        return (
            <>
                          <Link to="/weather">
                            {
                                this.state.weather_icon = "Cloud" ?
                                    <Cloud className="nav-mobile__padding" /> :
                                    this.state.weather_icon = "CloudSunny" ? <CloudSunny className="nav-mobile__padding" /> :
                                    <Rain className="nav-mobile__padding" />


                            }
                        </Link>

            </>
        )
    }
}


export default Weather
