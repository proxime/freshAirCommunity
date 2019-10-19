import React from 'react';
import logo from '../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import MobileNavbar from './MobileNavbar.js';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <img src={logo} alt="Fresh Air Community" className="navbar-logo" />
            </div>
            <div className="navbar-login">
                <Link to="/auth/login">Zaloguj się</Link>
            </div>
            <MobileNavbar />
            <div className="navbar-list-container">
                <ul className="navbar-list">
                    <li><NavLink exact to="/" activeClassName="active">Strona Główna</NavLink></li>
                    <li><NavLink exact to="/pollution" activeClassName="active">Zanieczyszczenia</NavLink></li>
                    <li><NavLink exact to="/forum" activeClassName="active">Forum</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;