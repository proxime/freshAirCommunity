import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { logout } from './../../actions/auth';
import { connect } from 'react-redux';

const ProfileNavbar = ({ logout, userType }) => {
    const [minNav, setMinNav] = useState(true);

    return (
        <div className={minNav ? "profile-navbar min" : "profile-navbar"}>
            <ul>
                <li>
                    <div className="profile-navbar-slide-icon-container" onClick={() => setMinNav(!minNav)}>
                        <div className="profile-navbar-slide-icon">
                            {minNav ? (
                                <i className="fas fa-chevron-right"></i>
                            ) : (
                                    <i className="fas fa-chevron-left"></i>
                                )}
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink exact to="/profile" activeClassName="active">
                        <div className="profile-navbar-icon">
                            <i className="far fa-user"></i>
                        </div>
                        <p>Mój Profil</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile/edit" activeClassName="active">
                        <div className="profile-navbar-icon">
                            <i className="far fa-edit"></i>
                        </div>
                        <p>Edytuj Konto</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile/likes" activeClassName="active">
                        <div className="profile-navbar-icon">
                            <i className="far fa-star"></i>
                        </div>
                        <p>Lubiane Miasta</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile/activity" activeClassName="active">
                        <div className="profile-navbar-icon">
                            <i className="far fa-clipboard"></i>
                        </div>
                        <p>Moja Aktywność</p>
                    </NavLink>
                </li>
                {userType === 'redactor' && (
                    <li>
                        <NavLink exact to="/profile/addNews" activeClassName="active">
                            <div className="profile-navbar-icon">
                                <i className="fas fa-plus"></i>
                            </div>
                            <p>Dodaj News</p>
                        </NavLink>
                    </li>
                )}
                <li>
                    <div className="profile-navbar-logout" onClick={() => logout()}>
                        <div className="profile-navbar-icon">
                            <i className="fas fa-sign-out-alt"></i>
                        </div>
                        <p>Wyloguj</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

ProfileNavbar.propTypes = {
    logout: PropTypes.func.isRequired,
    userType: PropTypes.string,
}

const mapStateToProp = state => ({
    userType: state.auth.user.type,
});

export default connect(mapStateToProp, { logout })(ProfileNavbar);