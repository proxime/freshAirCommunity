import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-white.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer-text">
                &copy; 2019 Fresh Air Community Wszelkie Prawa Zastrzeżone
            </div>
            <div className="footer-logo">
                <Link to="/" className="footer-logo-container">
                    <img src={logo} alt="Fresh Air Community" className="footer-logo" />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;