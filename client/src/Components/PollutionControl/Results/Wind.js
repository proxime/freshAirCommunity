import React, { useEffect, useState } from 'react';

import icon from '../../../images/icons/wind.png';

const Wind = ({ wind }) => {
    const colors = [
        '#8dc73a',
        '#5fb433',
        '#ece63f',
        '#f69f1f',
        '#f66f1c',
        '#f25916',
    ];
    const [actuallColor, setColor] = useState(colors[0]);

    useEffect(() => {
        if (wind < 2) {
            setColor(colors[0]);
        } else if (wind < 6) {
            setColor(colors[1]);
        } else if (wind < 10) {
            setColor(colors[2]);
        } else if (wind < 15) {
            setColor(colors[3]);
        } else if (wind < 20) {
            setColor(colors[4]);
        } else {
            setColor(colors[5]);
        }
    }, [setColor]);

    return (
        <div className="pollution-result-card">
            <div className="pollution-card-desc">
                <h1>{wind} m/s</h1>
            </div>
            <div className="pollution-card-image" style={{ height: 60 }}>
                <img src={icon} alt="" />
            </div>
            <div className="pollution-card-color-container">
                <div className="pollution-card-color" style={{ backgroundColor: actuallColor }}></div>
            </div>
            <div className="pollution-card-name">
                Siła wiatru
            </div>
        </div>
    );
}

export default Wind;