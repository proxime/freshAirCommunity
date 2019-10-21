import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const MobileNavbar = ({ auth }) => {
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
                    {auth.isAuthenticated ? (
                        <li><Link onClick={() => setMenuActive(false)} to="/auth/profile">Mój profil</Link></li>
                    ) : (
                            <li><Link onClick={() => setMenuActive(false)} to="/auth/login">Zaloguj się</Link></li>
                        )}
                </ul>
            </div >
        </>
    );
}

MobileNavbar.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(MobileNavbar);