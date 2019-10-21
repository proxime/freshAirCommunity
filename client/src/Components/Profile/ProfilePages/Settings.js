import React, { useState, useRef, useEffect, setIconsWindowH } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SettingsIcons from '../SettingsIcons';

import a0 from '../../../images/avatars/0.jpg';

const Settings = ({ user, setIconsWindowH }) => {
    const [changePassword, setChangePassword] = useState(false);
    const [formData, setFormData] = useState({
        email: user.email,
        password: '',
        password2: '',
    });
    const [openIconWindow, setOpenIconWindow] = useState(false);

    const { email, password, password2 } = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <h1 className="profile-title">Edytuj Konto</h1>
            <div className="edit-profile">
                <div className="edit-profile-image">
                    <div className="edit-profile-image-container" style={{ backgroundImage: `url(${a0})` }}>
                        <div className="edit-profile-image-btn" onClick={() => setOpenIconWindow(true)}>
                            <i className="fas fa-pencil-alt"></i>
                        </div>
                    </div>
                    <h2>{user.login}</h2>
                </div>
                <div className="edit-profile-data">
                    <form>
                        <label>
                            E-mail
                                <input type="email" name="email" placeholder="E-mail" value={email} onChange={e => onChange(e)} />
                        </label>
                        <p onClick={() => setChangePassword(!changePassword)}>{changePassword ? "Nie Zmieniaj Hasła" : "Zmień Hasło"}</p>
                        {changePassword && (
                            <div className="edit-profille-password">
                                Hasło
                                <input type="password" name="password" placeholder="Stare Hasło" value={password} onChange={e => onChange(e)} />
                                <input type="password" name="password2" placeholder="Nowe Hasło" value={password2} onChange={e => onChange(e)} />
                            </div>
                        )}
                        <div className="settings-buttons">
                        </div>
                    </form>
                    <div className="setting-buttons">
                        <button className="settings-save">Zapisz Zmiany</button>
                        <button className="settings-delete">Usuń Konto</button>
                    </div>
                </div>
            </div>
            {openIconWindow && <SettingsIcons setIconsWindowH={height => setIconsWindowH(height)} setOpenIconWindow={(value) => setOpenIconWindow(value)} />}
        </>
    );
}

Settings.propTypes = {
    user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    user: state.auth.user,
})

export default connect(mapStateToProps)(Settings);