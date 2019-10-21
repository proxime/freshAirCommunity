import React, { useState } from 'react';
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

import a0 from '../../images/avatars/0.jpg';

const Profile = ({ auth }) => {
    const [iconsWindowH, setIconsWindowH] = useState(0);

    if (!auth.loading && !auth.isAuthenticated) return <Redirect to='/auth/login' />
    if (auth.loading) return <h1>Ładowanie</h1>

    console.log(iconsWindowH)

    return (
        <>
            <ProfileNavbar />
            <ProfileMobileNavbar />
            <div className="profile-container" style={iconsWindowH ? { height: iconsWindowH } : null} >
                <div className="profile-backrond" style={{ backgroundImage: `url(${a0})` }}></div>
                <Switch>
                    <Route exact path="/profile" component={Home} />
                    <Route exact path="/profile/edit" render={(props) => <Settings {...props} setIconsWindowH={(height) => setIconsWindowH(height)} />} />
                    <Route exact path="/profile/likes" component={Likes} />
                    <Route exact path="/profile/activity" component={Activity} />
                </Switch>
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