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
import AddNews from './ProfilePages/AddNews';

const Profile = ({ auth, usedAvatar }) => {
    const [iconsWindowH, setIconsWindowH] = useState(0);

    if (!auth.loading && !auth.isAuthenticated) return <Redirect to='/auth/login' />
    if (auth.loading || !auth.user) return <h1>Ładowanie</h1>

    return (
        <>
            <ProfileNavbar />
            <ProfileMobileNavbar />
            <div className="profile-container" style={iconsWindowH ? { height: iconsWindowH } : null} >
                <div className="profile-backrond" style={{ backgroundImage: `url(${usedAvatar})` }}></div>
                <Switch>
                    <Route exact path="/profile" component={Home} />
                    <Route exact path="/profile/edit" render={(props) => <Settings {...props} setIconsWindowH={(height) => setIconsWindowH(height)} />} />
                    <Route exact path="/profile/likes" component={Likes} />
                    <Route exact path="/profile/activity" component={Activity} />
                    <Route exact path="/profile/addNews" component={AddNews} />
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
    usedAvatar: state.avatars.used,
})

export default connect(mapStateToProps)(Profile);