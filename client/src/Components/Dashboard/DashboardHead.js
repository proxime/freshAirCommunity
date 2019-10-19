import React from 'react';
import logo from './../../images/logo-white.png';

const DashboardHead = () => {
    return (
        <div className="dashboard-head">
            <div className="dashboard-logo">
                <img src={logo} alt="" />
            </div>
        </div>
    );
}

export default DashboardHead;