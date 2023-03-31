import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faEdit,
  faStar,
  faClipboard,
} from "@fortawesome/free-regular-svg-icons";

const ProfileMobileNavbar = ({ logout, userType }) => {
  return (
    <div className="profile-navbar-mobile">
      <ul>
        <li>
          <NavLink exact to="/profile" activeClassName="active">
            <div className="profile-navbar-mobile-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile/edit" activeClassName="active">
            <div className="profile-navbar-icon">
              <FontAwesomeIcon icon={faEdit} />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile/likes" activeClassName="active">
            <div className="profile-navbar-icon">
              <FontAwesomeIcon icon={faStar} />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile/activity" activeClassName="active">
            <div className="profile-navbar-icon">
              <FontAwesomeIcon icon={faClipboard} />
            </div>
          </NavLink>
        </li>
        {userType === "redactor" && (
          <li>
            <NavLink exact to="/profile/addNews" activeClassName="active">
              <div className="profile-navbar-icon">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </NavLink>
          </li>
        )}
        <li>
          <div
            className="profile-navbar-mobile-logout"
            onClick={() => logout()}
          >
            <div className="profile-navbar-icon">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

ProfileMobileNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  userType: PropTypes.string,
};

const mapStateToProp = (state) => ({
  userType: state.auth.user.type,
});

export default connect(mapStateToProp, { logout })(ProfileMobileNavbar);
