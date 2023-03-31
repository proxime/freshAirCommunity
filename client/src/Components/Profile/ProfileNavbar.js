import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { logout } from "./../../actions/auth";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSignOutAlt,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faEdit,
  faStar,
  faClipboard,
} from "@fortawesome/free-regular-svg-icons";

const ProfileNavbar = ({ logout, userType }) => {
  const [minNav, setMinNav] = useState(true);

  return (
    <div className={minNav ? "profile-navbar min" : "profile-navbar"}>
      <ul>
        <li>
          <div
            className="profile-navbar-slide-icon-container"
            onClick={() => setMinNav(!minNav)}
          >
            <div className="profile-navbar-slide-icon">
              {minNav ? (
                <FontAwesomeIcon icon={faChevronRight} />
              ) : (
                <FontAwesomeIcon icon={faChevronLeft} />
              )}
            </div>
          </div>
        </li>
        <li>
          <NavLink exact to="/profile" activeClassName="active">
            <div className="profile-navbar-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <p>Mój Profil</p>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile/edit" activeClassName="active">
            <div className="profile-navbar-icon">
              <FontAwesomeIcon icon={faEdit} />
            </div>
            <p>Edytuj Konto</p>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile/likes" activeClassName="active">
            <div className="profile-navbar-icon">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>Obserwowane Miasta</p>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile/activity" activeClassName="active">
            <div className="profile-navbar-icon">
              <FontAwesomeIcon icon={faClipboard} />
            </div>
            <p>Moje Reakcje</p>
          </NavLink>
        </li>
        {userType === "redactor" && (
          <li>
            <NavLink exact to="/profile/addNews" activeClassName="active">
              <div className="profile-navbar-icon">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <p>Dodaj News</p>
            </NavLink>
          </li>
        )}
        <li>
          <div className="profile-navbar-logout" onClick={() => logout()}>
            <div className="profile-navbar-icon">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
            <p>Wyloguj</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

ProfileNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  userType: PropTypes.string,
};

const mapStateToProp = (state) => ({
  userType: state.auth.user.type,
});

export default connect(mapStateToProp, { logout })(ProfileNavbar);
