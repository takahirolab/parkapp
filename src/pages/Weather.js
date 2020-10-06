import React, { Component } from 'react'
import axios from 'axios'

const city = ["tokyo", "osaka", "fukuoka","hokkaido","miyagi","hiroshima","okinawa","nagoya"];

export class Weather extends Component {
    constructor(props) {
        super(props);
          this.state = {
              weather: [],
              weather_day: [],
              weather_hourly: [],
              background: '',
              fontColor:''
          };
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
        console.log(weatheritems_day)
        console.log(weatheritems_hourly)
        console.log(weatheritems_nowtime)

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


    componentDidMount() {
        this.handleGetLatAndLng_day();
        this.handleGetLatAndLng();
    }





    render() {
        const weather = this.state.weather
        const weather_day = this.state.weather_day
        const weather_hourly = this.state.weather_hourly
        const weather_bg = this.state.background
        console.log(weather_bg)

        const weatheritem123 =
            weather.map((weatheritem) =>
                <>
                <h2>{weatheritem.weather[0].description}</h2>
                    <h2>{weatheritem.dt_txt}</h2>
                </>
            )

        const weatheritem_day =
        weather_day.map((weatheritem_day) =>
                <>
                <div className="weatherDayliy-item __Daily"  style={{color:this.state.fontColor}}>
                    {["日", "月", "火", "水", "木", "金", "土"][new Date(weatheritem_day.dt * 1000).getDay()]}

                    <p className=" __Daily"  style={{color:this.state.fontColor}}>曜日</p>
                    <h2 className=" __Daily"  style={{color:this.state.fontColor}}>{weatheritem_day.weather[0].description}</h2>
                    <div className="MaxMin-temp">
                    <h2 className=" __Daily "  style={{color:this.state.fontColor}}>{parseInt(weatheritem_day.temp.max - 273.15, 10)}°</h2>
                        <h2 className=" __Daily __DailyPos"  style={{color:this.state.fontColor}}>{parseInt(weatheritem_day.temp.min - 273.15, 10)}°</h2>

                    </div>
                </div>
                </>
            )

        const weatheritem_Now =
            weather_hourly.slice(0, 1).map((weatheritem_hourly) =>
                <>
                      <h2 className="weather-city"  style={{color:this.state.fontColor}}>東京都</h2>
                      <h2  className="weather-temp--" style={{color:this.state.fontColor}}>{weatheritem_hourly.weather[0].description}</h2>
                    <div className="weather-temp-inner"><h2 className="weather-temp"  style={{color:this.state.fontColor}}>{parseInt(weatheritem_hourly.temp - 273.15, 10)}</h2><p className="weather-temp-degree"  style={{color:this.state.fontColor}}>°</p></div>

                </>
            )

        const weatheritem_forcast_hourly =
            weather_hourly.slice(0, 24).map((weatheritem_hourly) =>
                <>
                    <div className="forcast_hourly_time_inner">
                        <div className="forcast_hourly_time">
                            <h2  style={{color:this.state.fontColor}}>
                                {
                                        new Date(weatheritem_hourly.dt * 1000).getHours()
                                }
                            </h2>
                            <p  style={{color:this.state.fontColor}}>時</p>
                        </div>
                      <h2 className="weatherHour-temp-time"  style={{color:this.state.fontColor}}>{parseInt(weatheritem_hourly.temp - 273.15, 10)}°</h2>
                    </div>
                </>
            )





        return (
            <>
                <div className="container" style={{background:this.state.background}}>
                    <div className="weatherNow">
                        <div className="weather_time">{weatheritem_Now}</div>
                    </div>
                    <div className="weatherHour-temp-inner">
                        {weatheritem_forcast_hourly}
                    </div>
                    <div className="weatherDayliy">
                       {weatheritem_day}
                    </div>
             </div>
            </>
        )
    }
}



export default (Weather)
// const weatheritem = this.props.weatheritems
// console.log(weatheritem)


// const WeatherItems = (props) => {
//         console.log(props.weatheritem)

//         return (
//             <div className="container">

//                     <h2>{props.weatheritems}</h2>

//             </div>
//         )

//     }





    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         weatheritem:''
    //                 }
    // }


        // const parksNum =
        //     this.props.weatheritems.map((weatheritem) =>
        //     <div>
        //      <h2>{weatheritem[0].weather[0].description}</h2>
        //     </div>
        //     )





        //  const weather = axios
        //   .get('http://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&units=metric&lang=ja&APPID=53c3cb0dbb1e4379c04eecc993b22af1')
        //   .then((res) => {
        //       const weather = res.data.weather[0].description
        //       console.log(weather)
        // this.setState({ weather: weather });
