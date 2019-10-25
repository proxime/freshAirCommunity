import React from 'react';

import icon from '../../../images/icons/wind.png';

const Wind = ({ wind }) => {
    return (
        <div className="pollution-result-card">
            <div className="pollution-card-desc">
                <h1>{wind} m/s</h1>
            </div>
            <div className="pollution-card-image" style={{ height: 60 }}>
                <img src={icon} alt="" />
            </div>
            <div className="pollution-card-color-container">
                <div className="pollution-card-color"></div>
            </div>
            <div className="pollution-card-name">
                Siła wiatru
            </div>
        </div>
    );
}

export default Wind;