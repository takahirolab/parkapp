import React, { Component } from 'react'
import axios from 'axios'
import Cloud from '../../images/cloud.png'

export class HomeWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            weather_day: [],
            weather_hourly: [],
            weather: '',
        }
        this.handleGetLatAndLng = this.handleGetLatAndLng.bind(this);
        this.handleGetLatAndLng_day = this.handleGetLatAndLng_day.bind(this);
    }

    handleGetLatAndLng_day = async () => {
        const response_day = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=35.681236&lon=139.767125&exclude=current&lang=ja&appid=53c3cb0dbb1e4379c04eecc993b22af1');
        const weatheritems_day = response_day.data.daily
        const weatheritems_hourly = response_day.data.hourly
        const weatheritems_nowtime =  new Date(response_day.data.hourly[0].dt * 1000).getHours()
        this.setState({  weather_day: weatheritems_day });
        this.setState({  weather_hourly: weatheritems_hourly });
        if (0 <= weatheritems_nowtime&& weatheritems_nowtime< 6) {
            this.setState({ background: 'linear-gradient(135deg, #3B4460, #646A7C)', fontColor: '#fff' });
        }
        else if (6 <= weatheritems_nowtime&&weatheritems_nowtime< 18) {
            this.setState({  background:'linear-gradient(135deg, #61A6CF, #8FADBF)', fontColor: '#fff' });
        }
        else if (18 <=weatheritems_nowtime&& weatheritems_nowtime<= 23) {
            this.setState({ background: 'linear-gradient(135deg, #3B4460, #646A7C)', fontColor: '#fff' });
        }
    }


    handleGetLatAndLng = async () => {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=hokkaido&units=lang=ja&appid=53c3cb0dbb1e4379c04eecc993b22af1');
        const weatheritems = response.data.list
        this.setState({ weather: weatheritems });
    }


  componentWillMount() {
    this.handleGetLatAndLng_day();
    this.handleGetLatAndLng();
  }

    render() {

        const weather_day = this.state.weather_day
        const weatheritem_day =
    weather_day.slice(0,1).map((weatheritem_day) =>
      <>
            <div className="weather-item">
                      {/* <p>今日</p> */}
                      <div className="weather-item-inf">
                      <img src={Cloud} className="weather-img-size"/>
                    <h2 className="__Daily  __Daily_pc ">{parseInt(weatheritem_day.temp.max - 273.15, 10)}°</h2>
                    <p>東京</p>
                      </div>
                    </div>
            </>
      )

    const weatheritem_tommorrow =
    weather_day.slice(1,2).map((weatheritem_day) =>
      <>
            <div className="weather-item w__item">
                      <p>明日</p>
                      <div className="weather-item-inf">
                      <img src={Cloud} className="weather-img-size"/>
                      <h2 className=" __Daily  __Daily_pc ">{parseInt(weatheritem_day.temp.max - 273.15, 10)}°</h2>
                      </div>
                    </div>
            </>
        )
        return (
            <div className="weather_container">
            {/* <p>東京都の天気</p> */}
            <div className="weather_inner">
            <div className="weather-inner">
                {weatheritem_day}
                {/* {weatheritem_tommorrow} */}
                    </div>
                    </div>

</div>
        )
    }
}

export default  HomeWeather
