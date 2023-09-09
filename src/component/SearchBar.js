import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("delhi");
    const [tempInfo, setTempInfo] = useState({});
    // console.log(inputValue);
    const getInfo = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=0eceba858383204389a4f525175ed2e7`;
            const res = await fetch(url);
            const data = await res.json();
            const { temp, pressure, humidity } = data.main;
            const { main: weathermood } = data.weather[0];
            const { speed } = data.wind;
            const { name } = data;
            const { sunset } = data.sys;

            const myNewWeather = {
                temp,
                pressure,
                humidity,
                weathermood,
                speed,
                name,
                sunset
            }

            setTempInfo(myNewWeather);

            // const sec = sunset;
            // const date = new Date(sec * 1000);
            // const timestr = `${date.getHours()}:${date.getMinutes}`;

            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getInfo();
        setInputValue("");
    }, [])

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          getInfo();
        }
      };

    return (
        <>
            <div className="inputBox">
                <input className="inp" onKeyPress={handleKeyPress} type="serach" placeholder="✍ Write City name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className="btn" onClick={getInfo}>Serach</button>
            </div>
            <WeatherCard tempInfo={tempInfo} />
        </>
    )
}

export default SearchBar
