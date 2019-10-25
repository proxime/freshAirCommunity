import React from 'react';

const DashboardSubstance = () => {
    return (
        <div className="dashboard-substances">
            <h1>
                <div className="section-before"></div>
                <span className="bold">Substancje</span>
            </h1>
            <div className="dashboard-substances-belt">
                <div className="dashboard-substances-item">
                    <div className="dashboard-substances-circle">
                        <p>SO<sub>2</sub></p>
                    </div>
                    <div className="dashboard-substances-desc">
                        <p>Dwutlenek</p>
                        <p>Siarki</p>
                    </div>
                </div>
                <div className="dashboard-substances-item">
                    <div className="dashboard-substances-circle">
                        <p>N<sub>x</sub>O<sub>y</sub></p>
                    </div>
                    <div className="dashboard-substances-desc">
                        <p>Tlenki</p>
                        <p>Azotu</p>
                    </div>
                </div>
                <div className="dashboard-substances-item">
                    <div className="dashboard-substances-circle">
                        <p>X<sub>2</sub></p>
                    </div>
                    <div className="dashboard-substances-desc">
                        <p>Pyły</p>
                        <p>Węglowe</p>
                    </div>
                </div>
                <div className="dashboard-substances-item">
                    <div className="dashboard-substances-circle">
                        <p>LZO</p>
                    </div>
                    <div className="dashboard-substances-desc">
                        <p>Związki</p>
                        <p>Organiczne</p>
                    </div>
                </div>
                <div className="dashboard-substances-item">
                    <div className="dashboard-substances-circle">
                        <p>CO</p>
                    </div>
                    <div className="dashboard-substances-desc">
                        <p>Tlenek</p>
                        <p>Węgla</p>
                    </div>
                </div>
                <div className="dashboard-substances-item">
                    <div className="dashboard-substances-circle">
                        <p>CO<sub>2</sub></p>
                    </div>
                    <div className="dashboard-substances-desc">
                        <p>Dwutlenek</p>
                        <p>Węgla</p>
                    </div>
                </div>
                <div className="dashboard-substances-item">
                    <div className="dashboard-substances-circle">
                        <p>O<sub>3</sub></p>
                    </div>
                    <div className="dashboard-substances-desc">
                        <p>Ozon</p>
                        <p>Troposferyczny</p>
                    </div>
                </div>
                <div className="dashboard-substances-item">
                    <div className="dashboard-substances-circle">
                        <p>Pb</p>
                    </div>
                    <div className="dashboard-substances-desc">
                        <p>Ołów</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardSubstance;