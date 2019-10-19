import React, { useState, useEffect } from 'react';

import w01d from './../../../images/weather/01d.png';
import w01n from './../../../images/weather/01n.png';
import w02d from './../../../images/weather/02d.png';
import w02n from './../../../images/weather/02n.png';
import w03d from './../../../images/weather/03d.png';
import w04d from './../../../images/weather/04d.png';
import w09d from './../../../images/weather/09d.png';
import w10d from './../../../images/weather/10d.png';
import w10n from './../../../images/weather/10n.png';
import w11d from './../../../images/weather/11d.png';
import w13d from './../../../images/weather/13d.png';
import w50d from './../../../images/weather/50d.png';

const Weather = ({ weather }) => {
    const [weatherNumber, setWheatherNumber] = useState(null);
    const [icon, setIcon] = useState(null);
    const [weatherText, setWeatherText] = useState(null);
    if (weatherNumber !== weather.ic) setWheatherNumber(weather.ic);
    useEffect(() => {
        switch (weatherNumber) {
            case "01d":
                setIcon(w01d);
                setWeatherText('Słoczecnie');
                break;
            case "01n":
                setIcon(w01n);
                setWeatherText('Bezchmurna Noc');
                break;
            case "02d":
                setIcon(w02d);
                setWeatherText('Lekkie Zachmurzenie');
                break;
            case "02n":
                setIcon(w02n);
                setWeatherText('Lekkie Zachmurzenie');
                break;
            case "03d":
            case "03n":
                setIcon(w03d);
                setWeatherText('Zachmurzenie');
                break;
            case "04d":
            case "04n":
                setIcon(w04d);
                setWeatherText('Silne Zachmurzenie');
                break;
            case "09d":
            case "09n":
                setIcon(w09d);
                setWeatherText('Deszczowo');
                break;
            case "10d":
                setIcon(w10d);
                setWeatherText('Przelotne Opady');
                break;
            case "10n":
                setIcon(w10n);
                setWeatherText('Przelotne Opady');
                break;
            case "11d":
            case "11n":
                setIcon(w11d);
                setWeatherText('Burza');
                break;
            case "13d":
            case "13n":
                setIcon(w13d);
                setWeatherText('Śnieg');
                break;
            case "50d":
            case "50n":
                setIcon(w50d);
                setWeatherText('Zamglenie');
                break;
            default:
                setIcon(null);
                break;
        }
    });

    return (
        <div className="pollution-result-card">
            <div className="pollution-card-desc">
                <h1>{weather.tp}&deg;C</h1>
                <p>{weatherText}</p>
            </div>
            <div className="pollution-card-image">
                <img src={icon} alt="" />
            </div>
            <div className="pollution-card-color-container">
                <div className="pollution-card-color"></div>
            </div>
            <div className="pollution-card-name">
                Pogoda
            </div>
        </div>
    );
}

export default Weather;