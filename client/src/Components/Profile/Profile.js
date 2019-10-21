import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileNavbar from './ProfileNavbar';
import ProfileMobileNavbar from './ProfileMobileNavbar';
import Home from './ProfilePages/Home';
import Settings from './ProfilePages/Settings';
import Likes from './ProfilePages/Likes';
import Activity from './ProfilePages/Activity';

const Profile = ({ auth }) => {
    if (!auth.loading && !auth.isAuthenticated) return <Redirect to='/auth/login' />

    return (
        <>
            <ProfileNavbar />
            <ProfileMobileNavbar />
            <Switch>
                <Route exact path="/profile" component={Home} />
                <Route exact path="/profile/edit" component={Settings} />
                <Route exact path="/profile/likes" component={Likes} />
                <Route exact path="/profile/activity" component={Activity} />
            </Switch>
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