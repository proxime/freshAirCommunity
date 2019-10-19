import React from 'react';
import DashboardSubstanceItem from './DashboardSubstanceItem';

const DashboardSubstance = () => {
    return (
        <div className="dashboard-substances">
            <h1>
                <div className="section-before"></div>
                <span className="bold">Substancje</span>
            </h1>
            <div className="dashboard-substances-belt">
                <DashboardSubstanceItem />
                <DashboardSubstanceItem />
                <DashboardSubstanceItem />
                <DashboardSubstanceItem />
                <DashboardSubstanceItem />
                <DashboardSubstanceItem />
                <DashboardSubstanceItem />
                <DashboardSubstanceItem />
            </div>
        </div>
    );
}

export default DashboardSubstance;