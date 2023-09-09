import React, { useEffect, useState } from 'react'
import Details from './Details'

const WeatherCard = ({ tempInfo }) => {
    const [weatherState, setWeatherState] = useState("");
    const {
        temp,
        pressure,
        humidity,
        weathermood,
        speed,
        name,
        sunset
    } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds": setWeatherState("https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png");
                    break;
                case "Haze": setWeatherState("https://cdn-icons-png.flaticon.com/512/4151/4151022.png");
                    break;
                case "Rain": setWeatherState("https://cdn-icons-png.flaticon.com/512/1779/1779940.png");
                    break;                   
                case "Clear": setWeatherState("https://cdn-icons-png.flaticon.com/512/3294/3294851.png");
                    break; 
                default:
                    setWeatherState("https://cdn-icons-png.flaticon.com/512/3294/3294851.png");                  
            }
        }
    })
    return (
        <>
            <div className="weathercard">
                <div className="img">
                    <img src={weatherState} width="40%" height="90%" alt="" />
                    <span className="temp">{temp}°C <br /><span>{name} | {weathermood}</span></span>
                </div>
                <hr />
                <Details tempInfo={tempInfo} />
            </div>
        </>
    )
}

export default WeatherCard

// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=0eceba858383204389a4f525175ed2e7
