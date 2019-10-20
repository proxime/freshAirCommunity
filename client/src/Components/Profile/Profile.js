import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileNavbar from './ProfileNavbar';

const Profile = ({ auth }) => {
    if (!auth.loading && !auth.isAuthenticated) return <Redirect to='/auth/login' />

    return (
        <>
            <ProfileNavbar />
            <div className="container">
            </div>
        </>
    );
}

Profile.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(Profile);