import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import MobileNavbar from './MobileNavbar.js';
import { connect } from 'react-redux';

const Navbar = ({ auth }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <img src={logo} alt="Fresh Air Community" className="navbar-logo" />
            </div>
            <div className="navbar-login">
                {auth.isAuthenticated ? (
                    <Link to="/auth/profile">Mój profil</Link>
                ) : (
                        <Link to="/auth/login">Zaloguj się</Link>
                    )}
            </div>
            <MobileNavbar />
            <div className="navbar-list-container">
                <ul className="navbar-list">
                    <li><NavLink exact to="/" activeClassName="active">Strona Główna</NavLink></li>
                    <li><NavLink exact to="/pollution" activeClassName="active">Indeks Zanieczyszczenia</NavLink></li>
                    <li><NavLink to="/news" activeClassName="active">Aktualności</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Navbar);