import React from 'react';
import logo from '../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <img src={logo} alt="Fresh Air Community" className="navbar-logo" />
            </div>
            <div className="navbar-list-container">
                <ul className="navbar-list">
                    <li><a href="#!">Nie wiem</a></li>
                    <li><a href="#!">Co tu bedzie</a></li>
                    <li><a href="#!">Forum</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;