import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <img src={logo} alt="Fresh Air Community" className="navbar-logo" />
            </div>
            <div className="navbar-list-container">
                <ul className="navbar-list">
                    <li><Link to="/">Strona Główna</Link></li>
                    <li><Link to="/pollution">Zanieczyszczenia</Link></li>
                    <li><Link href="#!">Forum</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;