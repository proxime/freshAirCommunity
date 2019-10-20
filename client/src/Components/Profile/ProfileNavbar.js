import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { logout } from './../../actions/auth';
import { connect } from 'react-redux';

const ProfileNavbar = ({ logout }) => {
    const [minNav, setMinNav] = useState(false);

    return (
        <div className={minNav ? "profile-navbar min" : "profile-navbar"}>
            <ul>
                <li>
                    <div className="profile-navbar-slide-icon-container" onClick={() => setMinNav(!minNav)}>
                        <div className="profile-navbar-slide-icon">
                            {minNav ? (
                                <i class="fas fa-chevron-right"></i>
                            ) : (
                                    <i class="fas fa-chevron-left"></i>
                                )}
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink exact to="/profile" activeClassName="active">
                        <div className="profile-navbar-icon">
                            <i class="far fa-user"></i>
                        </div>
                        <p>Moje Konto</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile/edit" activeClassName="active">
                        <div className="profile-navbar-icon">
                            <i class="far fa-edit"></i>
                        </div>
                        <p>Edytuj Dane</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile/likes" activeClassName="active">
                        <div className="profile-navbar-icon">
                            <i class="far fa-star"></i>
                        </div>
                        <p>Lubiane Miasta</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile/posts" activeClassName="active">
                        <div className="profile-navbar-icon">
                            <i class="far fa-clipboard"></i>
                        </div>
                        <p>Moja Aktywność</p>
                    </NavLink>
                </li>
                <li>
                    <div className="profile-navbar-logout" onClick={() => logout()}>
                        <div className="profile-navbar-icon">
                            <i class="fas fa-sign-out-alt"></i>
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
}

export default connect(null, { logout })(ProfileNavbar);