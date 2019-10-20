import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './../../actions/auth';

const Profile = ({ auth, logout }) => {
    if (!auth.loading && !auth.isAuthenticated) return <Redirect to='/auth/login' />

    return (
        <div className="container">
            <h1 onClick={() => logout()}>Wyloguj</h1>
        </div>
    );
}

Profile.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Profile);