import React, { useEffect, useState } from 'react';

import icon from '../../../images/icons/pressure.png';

const Pressure = ({ pressure }) => {
    const colors = [
        '#05295d',
        '#50C5D0',
        '#eb2414',
    ];
    const [actuallColor, setColor] = useState(colors[0]);

    useEffect(() => {
        if (pressure < 1004) {
            setColor(colors[0]);
        }
        else if (pressure < 1020) {
            setColor(colors[1]);
        } else {
            setColor(colors[2]);
        }
    }, [setColor]);

    return (
        <div className="pollution-result-card">
            <div className="pollution-card-desc">
                <h1>{pressure} hPa</h1>
            </div>
            <div className="pollution-card-image">
                <img src={icon} alt="" />
            </div>
            <div className="pollution-card-color-container">
                <div className="pollution-card-color" style={{ backgroundColor: actuallColor }}></div>
            </div>
            <div className="pollution-card-name">
                Ciśnienie atmosferyczne
            </div>
        </div>
    );
}

export default Pressure;