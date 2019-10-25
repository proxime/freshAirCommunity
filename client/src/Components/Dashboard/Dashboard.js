import React, { useEffect } from 'react';
import './Dashboard.css';
import DashboardHead from './DashboardHead';
import DashboardSubstance from './DashboardSubstance';
import DashboardHowTo from './DashboardHowTo';
import DashboardNews from './DashboardNews';

import cracowImg from '../../images/cities/cracow.jpg';
import shanghaiImg from '../../images/cities/Shanghai.jpg';
import delhiImg from '../../images/cities/Delhi.jpg';
import hanoiImg from '../../images/cities/Hanoi.jpg';
import kathamanduImg from '../../images/cities/Kathamandu.jpg';

const Dashboard = () => {
    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className="container">
            <DashboardHead />
            <DashboardNews />
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
                        Miasta o najwyższym <span className="bold">Indeksie zanieczyszczenia powietrza</span>
                    </div>
                </h1>
                <div className="dashboard-cities">
                    <div className="dashboard-cities-item">
                        <div className="dashboard-cities-item-circle-shadow">
                            <div className="dashboard-cities-item-circle" style={{ backgroundImage: `url('${shanghaiImg}')` }}>
                            </div>
                        </div>
                        <h2>Shanghai</h2>
                        <p>Chiny</p>
                    </div>
                    <div className="dashboard-cities-item">
                        <div className="dashboard-cities-item-circle-shadow">
                            <div className="dashboard-cities-item-circle" style={{ backgroundImage: `url('${delhiImg}')` }}>
                            </div>
                        </div>
                        <h2>Delhi</h2>
                        <p>Indie</p>
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
                            <div className="dashboard-cities-item-circle" style={{ backgroundImage: `url('${hanoiImg}')` }}>
                            </div>
                        </div>
                        <h2>Hanoi</h2>
                        <p>Wietnam</p>
                    </div>
                    <div className="dashboard-cities-item">
                        <div className="dashboard-cities-item-circle-shadow">
                            <div className="dashboard-cities-item-circle" style={{ backgroundImage: `url('${kathamanduImg}')` }}>
                            </div>
                        </div>
                        <h2>Kathmandu</h2>
                        <p>Nepal</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;