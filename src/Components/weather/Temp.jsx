import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard"

const Temp = () => {

    const [searchValue, setSearchValue] = useState('Pune')
    const [weatherData, setWeatherData] = useState({})

    const getWeather = async () => {

        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=a9e6e991f62555fd508de2ed4f995682&units=metric`
            let res = await fetch(url)
            let data = await res.json()
            console.log(data);

            const { temp, humidity, pressure } = data.main
            const { speed } = data.wind
            const { name } = data
            const { country, sunset } = data.sys
            const { main: weathermood } = data.weather[0]
            console.log(weathermood);

            const weatherInfo = {
                temp, humidity, pressure, speed, name, country, sunset, weathermood
            }

            setWeatherData(weatherInfo)
            
        } catch (error) {
            console.log(error);
        }
        
        
        setSearchValue('')
        
    }
    
    
    
    
    useEffect(() => {
        getWeather()
    }, [])

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        placeholder="search..."
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <button
                        className="searchButton"
                        type="button"
                        onClick={getWeather}
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* our temp card  */}

            <WeatherCard weatherData={weatherData} />

        </>
    );
};

export default Temp;