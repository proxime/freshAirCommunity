import React from 'react';
import './Dashboard.css';
import DashboardHead from './DashboardHead';
import DashboardSubstance from './DashboardSubstance';
import DashboardHowTo from './DashboardHowTo';
import cracowImg from '../../images/cities/cracow.jpg';

const Dashboard = () => {
    return (
        <div className="container">
            <DashboardHead />
            <div className="dashboard-section">
                <h1>
                    <div className="section-before"></div>
                    <div>
                        <span className="bold">Czym jest</span> zanieczyszczenie powietrza?
                    </div>
                </h1>
                <p><span className="bold">Smog jest nienaturalnym zjawiskiem atmosferycznym,</span> które polega na współistnieniu związków chemicznych oraz pyłów w naszej atmosferze. Przebywanie, oddychanie nim <span className="bold">zagraża naszemu zdrowiu i życiu.</span></p>
            </div>
            <DashboardSubstance />
            <DashboardHowTo />
            <div className="dashboard-cities-container">
                <h1>
                    <div className="section-before"></div>
                    <div>
                        <span className="bold">Najbardziej zanieczyszone miasta </span>na świecie
                    </div>
                </h1>
                <div className="dashboard-cities">
                    <div className="dashboard-cities-item">
                        <div className="dashboard-cities-item-circle-shadow">
                            <div className="dashboard-cities-item-circle" style={{ backgroundImage: `url('${cracowImg}')` }}>
                            </div>
                        </div>
                        <h2>Kraków</h2>
                        <p>Polska</p>
                    </div>
                    <div className="dashboard-cities-item">
                        <div className="dashboard-cities-item-circle-shadow">
                            <div className="dashboard-cities-item-circle" style={{ backgroundImage: `url('${cracowImg}')` }}>
                            </div>
                        </div>
                        <h2>Kraków</h2>
                        <p>Polska</p>
                    </div>
                    <div className="dashboard-cities-item">
                        <div className="dashboard-cities-item-circle-shadow">
                            <div className="dashboard-cities-item-circle" style={{ backgroundImage: `url('${cracowImg}')` }}>
                            </div>
                        </div>
                        <h2>Kraków</h2>
                        <p>Polska</p>
                    </div>
                    <div className="dashboard-cities-item">
                        <div className="dashboard-cities-item-circle-shadow">
                            <div className="dashboard-cities-item-circle" style={{ backgroundImage: `url('${cracowImg}')` }}>
                            </div>
                        </div>
                        <h2>Kraków</h2>
                        <p>Polska</p>
                    </div>
                    <div className="dashboard-cities-item">
                        <div className="dashboard-cities-item-circle-shadow">
                            <div className="dashboard-cities-item-circle" style={{ backgroundImage: `url('${cracowImg}')` }}>
                            </div>
                        </div>
                        <h2>Kraków</h2>
                        <p>Polska</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;