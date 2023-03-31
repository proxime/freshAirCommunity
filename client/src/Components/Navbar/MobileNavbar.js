import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileNavbar = ({ auth }) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div
        className="mobile-nav-btn"
        onClick={() => setMenuActive(!menuActive)}
      >
        <FontAwesomeIcon icon={faBars} />
        <span>menu</span>
      </div>
      <div className={menuActive ? "mobile-nav active" : "mobile-nav"}>
        <ul>
          <li>
            <Link onClick={() => setMenuActive(false)} to="/">
              Strona Główna
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuActive(false)} to="/news">
              Aktualności
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuActive(false)} to="/pollution">
              Indeks Zanieczyszczenia
            </Link>
          </li>
          {auth.isAuthenticated ? (
            <li>
              <Link onClick={() => setMenuActive(false)} to="/auth/profile">
                Mój profil
              </Link>
            </li>
          ) : (
            <li>
              <Link onClick={() => setMenuActive(false)} to="/auth/login">
                Zaloguj się
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

MobileNavbar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MobileNavbar);
