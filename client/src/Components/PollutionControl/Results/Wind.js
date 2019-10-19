import React from 'react';

const Wind = ({ wind }) => {
    return (
        <div className="pollution-result-card">
            <div className="pollution-card-desc">
                <h1>{wind} m/s</h1>
            </div>
            <div className="pollution-card-image">

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