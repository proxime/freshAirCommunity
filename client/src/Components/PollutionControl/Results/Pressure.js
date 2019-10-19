import React from 'react';

const Pressure = ({ pressure }) => {
    return (
        <div className="pollution-result-card">
            <div className="pollution-card-desc">
                <h1>{pressure} hPa</h1>
            </div>
            <div className="pollution-card-image">

            </div>
            <div className="pollution-card-color-container">
                <div className="pollution-card-color"></div>
            </div>
            <div className="pollution-card-name">
                Ciśnienie atmosferyczne
            </div>
        </div>
    );
}

export default Pressure;