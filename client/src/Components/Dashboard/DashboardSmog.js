import React from 'react';

const DashboardSmog = () => {
    return (
        <div className="dashboard-smog-desc">
            <div className="dashboard-somg-item">
                <h1>Smog Londyński</h1>
                <div className="smog-section">
                    <h2>Skład:</h2>
                    <p>tlenek siarki, tlenki azotu, tlenki węgla, sadza oraz opadające pyły.</p>
                </div>
                <div className="smog-section">
                    <h2>Występowanie:</h2>
                    <p>Powstaje w sezonie grzewczym - od października do marca, w umiarkowanej strefie klimatycznej.</p>
                </div>
            </div>
            <div className="dashboard-somg-item right">
                <h1>Smog Typu Los Angeles</h1>
                <div className="smog-section">
                    <h2>Skład:</h2>
                    <p>tlenek węgla, tlenek azotu oraz węglowodory.</p>
                </div>
                <div className="smog-section">
                    <h2>Występowanie:</h2>
                    <p>Powstaje w miesiącach letnich w strefach subtropikalnych.</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardSmog;