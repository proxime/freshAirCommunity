import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const ProfileMobileNavbar = ({ logout, userType }) => {
    return (
        <div className="profile-navbar-mobile">
            <ul>
                <li>
                    <NavLink exact to="/profile" activeClassName="active">
                        <div className="profile-navbar-mobile-icon">
                            <i className="far fa-user"></i>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile/edit" activeClassName="active">
                        <div className="profile-navbar-icon">
                            <i className="far fa-edit"></i>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile/likes" activeClassName="active">
                        <div className="profile-navbar-icon">
                            <i className="far fa-star"></i>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile/activity" activeClassName="active">
                        <div className="profile-navbar-icon">
                            <i className="far fa-clipboard"></i>
                        </div>
                    </NavLink>
                </li>
                {userType === 'redactor' && (
                    <li>
                        <NavLink exact to="/profile/addNews" activeClassName="active">
                            <div className="profile-navbar-icon">
                                <i className="fas fa-plus"></i>
                            </div>
                        </NavLink>
                    </li>
                )}
                <li>
                    <div className="profile-navbar-mobile-logout" onClick={() => logout()}>
                        <div className="profile-navbar-icon">
                            <i className="fas fa-sign-out-alt"></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

ProfileMobileNavbar.propTypes = {
    logout: PropTypes.func.isRequired,
    userType: PropTypes.string,
}

const mapStateToProp = state => ({
    userType: state.auth.user.type,
});

export default connect(mapStateToProp, { logout })(ProfileMobileNavbar);