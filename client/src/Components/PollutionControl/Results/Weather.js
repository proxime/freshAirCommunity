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
    const colors = [
        '#0b459a',
        '#185daf',
        '#1bbeec',
        '#50c5d0',
        '#eeeeee',
        '#8dc73a',
        '#5fb433',
        '#ece63f',
        '#f69f1c',
        '#f66f1c',
        '#f25916',
        '#eb2414',
        '#db2314',
        '#f47075',
        '#fbbbbb',
        '#78429a',
        '#aeaeae',
    ];
    const [actuallColor, setColor] = useState(colors[0]);


    if (weatherNumber !== weather.ic) setWheatherNumber(weather.ic);
    useEffect(() => {
        switch (weatherNumber) {
            case "01d":
                setIcon(w01d);
                setWeatherText('Słonecznie');
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
                setWeatherText('Burzowo');
                break;
            case "13d":
            case "13n":
                setIcon(w13d);
                setWeatherText('Śnieżnie');
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
    }, [setIcon]);

    useEffect(() => {
        if (weather.tp < -20) {
            setColor(colors[0]);
        }
        else if (weather.tp < -11) {
            setColor(colors[1]);
        }
        else if (weather.tp < -5) {
            setColor(colors[2]);
        }
        else if (weather.tp < -2) {
            setColor(colors[3]);
        }
        else if (weather.tp < 1) {
            setColor(colors[4]);
        }
        else if (weather.tp < 4) {
            setColor(colors[5]);
        }
        else if (weather.tp < 8) {
            setColor(colors[6]);
        }
        else if (weather.tp < 12) {
            setColor(colors[7]);
        }
        else if (weather.tp < 16) {
            setColor(colors[8]);
        }
        else if (weather.tp < 20) {
            setColor(colors[9]);
        }
        else if (weather.tp < 24) {
            setColor(colors[10]);
        }
        else if (weather.tp < 28) {
            setColor(colors[11]);
        }
        else if (weather.tp < 32) {
            setColor(colors[12]);
        }
        else if (weather.tp < 36) {
            setColor(colors[13]);
        }
        else if (weather.tp < 40) {
            setColor(colors[14]);
        }
        else if (weather.tp < 35) {
            setColor(colors[15]);
        } else {
            setColor(colors[16]);
        }
    }, [setColor]);

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
                <div className="pollution-card-color" style={{ backgroundColor: actuallColor }}></div>
            </div>
            <div className="pollution-card-name">
                Pogoda
            </div>
        </div>
    );
}

export default Weather;