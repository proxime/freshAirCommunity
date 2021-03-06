import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../../actions/auth';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const Home = ({ user, logout, usedAvatar }) => {
    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        }
    }, [])

    return (
        <>
            <h1 className="profile-title">Mój Profil</h1>
            <div className="my-profile">
                <div className="my-profile-square">
                    <div className="my-profile-image-container">
                        <div className="my-profile-image" style={{ backgroundImage: `url(${usedAvatar}` }}></div>
                    </div>
                    <h1>{user.login}</h1>
                    <h2>{user.email}</h2>
                    <p>Członek od: <Moment format="DD.MM.YYYY">{user.date}</Moment></p>
                </div>
                <div className="my-profile-function">
                    <div className="my-profile-function-item">
                        <Link to="/profile/edit">Edytuj Konto</Link>
                    </div>
                    <div className="my-profile-function-item">
                        <Link to="/profile/likes">Obserwowane Miasta</Link>
                    </div>
                    <div className="my-profile-function-item">
                        <Link to="/profile/activity">Moje Reakcje</Link>
                    </div>
                    <div className="my-profile-function-item">
                        <div className="my-profile-function-logout" onClick={() => logout()}>
                            Wyloguj
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    user: state.auth.user,
    usedAvatar: state.avatars.used,
});

export default connect(mapStateToProps, { logout })(Home);