import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <>
            <div className="mobile-nav-btn" onClick={() => setMenuActive(!menuActive)}>
                <i className="fas fa-bars"></i> <span>menu</span>
            </div>
            <div className={menuActive ? 'mobile-nav active' : 'mobile-nav'}>
                <ul>
                    <li><Link onClick={() => setMenuActive(false)} to="/">Strona Główna</Link></li>
                    <li><Link onClick={() => setMenuActive(false)} to="/pollution">Zanieczyszczenia</Link></li>
                    <li><Link onClick={() => setMenuActive(false)} to="#!">Forum</Link></li>
                </ul>
            </div>
        </>
    );
}

export default MobileNavbar;