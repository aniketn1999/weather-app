import React, { useEffect, useState } from 'react'

const WeatherCard = ({ weatherData }) => {

    const [icons, setIcons] = useState()

    const { temp, humidity, pressure, speed, name, country, sunset, weathermood } = weatherData

    const date = new Date(sunset * 1000)
    const hours = date.getHours()
    const minutes = date.getMinutes()

    const timeStr = `${hours}:${minutes}`
    // console.log(timeStr);

    useEffect(() => {

        switch (weathermood) {
            case 'Sunny':
                setIcons('wi-day-sunny')
                break;
            case 'Clear':
                setIcons('wi-day-sunny')
                break;
            case 'Fog':
                setIcons('wi-day-fog')
                break;
            case 'Haze':
                setIcons('wi-day-haze')
                break;
            case 'Mist':
                setIcons('wi-dust')
                break;
            case 'Clouds':
                setIcons('wi-cloudy')
                break;
            case 'Rain':
                setIcons('wi-day-rain')
                break;
            case 'Smoke':
                setIcons('wi-smoke')
                break;

            default:
                break;
        }

    }, [weatherData])

    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${icons}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span style={{marginLeft:"15px"}}>{temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition" style={{marginLeft:"15px"}}>{weathermood}</div>
                        <div className="place" style={{marginLeft:"15px"}}>
                            {name}, {country}
                        </div>
                    </div>
                </div>

                <div className="date"> {new Date().toLocaleString()} </div>

                {/* our 4column section  */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timeStr} <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard
