import React, { useState, useEffect } from 'react';

const Pollution = ({ pollution }) => {
    const [sqiText, setAqiText] = useState(null);
    const [color, setColor] = useState();
    useEffect(() => {
        const colors = [
            '#46e246',
            '#ffff00',
            '#ff9900',
            '#ff0000',
            '#99004d',
            '#7e0123'
        ]

        if (pollution.aqius < 50) {
            setAqiText('Bardzo Dobry');
            setColor(colors[0]);
        }
        else if (pollution.aqius < 50) {
            setAqiText('Dobry');
            setColor(colors[1]);
        }
        else if (pollution.aqius < 100) {
            setAqiText('Umiarkowany');
            setColor(colors[2]);
        }
        else if (pollution.aqius < 150) {
            setAqiText('Dostateczny');
            setColor(colors[3]);
        }
        else if (pollution.aqius < 200) {
            setAqiText('Zły');
            setColor(colors[4]);
        }
        else if (pollution.aqius < 300) {
            setAqiText('Bardzo Zły');
            setColor(colors[5]);
        }
        else {
            setAqiText('Niebezpieczny');
            setColor(colors[0]);
        }
    });

    return (
        <div className="pollution-result-card">
            <div className="pollution-card-desc">
                <h1>{pollution.aqius}</h1>
                <p>{sqiText}</p>
            </div>
            <div className="pollution-card-image">

            </div>
            <div className="pollution-card-color-container">
                <div className="pollution-card-color" style={{ backgroundColor: color }}></div>
            </div>
            <div className="pollution-card-name">
                Indeks jakości powietrza
            </div>
        </div>
    );
}

export default Pollution;