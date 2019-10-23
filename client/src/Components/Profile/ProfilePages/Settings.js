import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeEmail, changeMyPassword } from '../../../actions/auth';
import { setAlert, clearAlerts, deleteAlert } from '../../../actions/alert';
import SettingsIcons from '../SettingsIcons';

const Settings = ({ user, setIconsWindowH, changeEmail, setAlert, alert, clearAlerts, changeMyPassword, deleteAlert, usedAvatar }) => {
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
        let alertIndex = -1;
        alert.filter((item, index) => {
            if (item.param === 'successPassword') alertIndex = index;
        });
        if (alertIndex > -1) deleteAlert(alertIndex);
    }

    const onSubmit = e => {
        e.preventDefault();
        clearAlerts();
        if (email !== user.email) {
            if (!email) return setAlert({ msg: 'Wprowadź E-mail!', param: 'email' });
            changeEmail(email);
        }
        if (changePassword) {
            if (!password || !password2) return setAlert({ msg: 'Wypełnij pola formularza!', param: 'password' });
            if (password === password2) return setAlert({ msg: 'Wprowadziłeś takie same hasła!', param: 'password' });
            changeMyPassword(password, password2);
        }
    }

    useEffect(() => {
        return () => {
            clearAlerts();
            window.scrollTo(0, 0);
        }
    }, [clearAlerts])

    const emailAlert = alert.filter(item => item.param === 'email');
    const passwordAlert = alert.filter(item => item.param === 'password');
    const successPasswordAlert = alert.filter(item => item.param === 'successPassword');

    if (successPasswordAlert.length > 0 && formData.password) {
        setFormData({
            ...formData,
            password: '',
            password2: '',
        })
    }

    return (
        <>
            <h1 className="profile-title">Edytuj Konto</h1>
            <div className="edit-profile">
                <div className="edit-profile-image">
                    <div className="edit-profile-image-container" style={{ backgroundImage: `url(${usedAvatar})` }}>
                        <div className="edit-profile-image-btn" onClick={() => setOpenIconWindow(true)}>
                            <i className="fas fa-pencil-alt"></i>
                        </div>
                    </div>
                    <h2>{user.login}</h2>
                </div>
                <div className="edit-profile-data">
                    <form onSubmit={e => onSubmit(e)}>
                        <label>
                            E-mail
                                <input type="email" name="email" placeholder="E-mail" value={email} onChange={e => onChange(e)} />
                            {emailAlert.length > 0 && <span>{emailAlert[0].msg}</span>}
                        </label>
                        <p onClick={() => setChangePassword(!changePassword)}>{changePassword ? "Nie Zmieniaj Hasła" : "Zmień Hasło"}</p>
                        {changePassword && (
                            <div className="edit-profille-password">
                                Hasło
                                <input type="password" name="password" placeholder="Stare Hasło" value={password} onChange={e => onChange(e)} />
                                <input type="password" name="password2" placeholder="Nowe Hasło" value={password2} onChange={e => onChange(e)} />
                                {passwordAlert.length > 0 && <span>{passwordAlert[0].msg}</span>}
                                {successPasswordAlert.length > 0 && <span style={{ color: 'green' }}>{successPasswordAlert[0].msg}</span>}
                            </div>
                        )}
                        <div className="settings-buttons">
                        </div>
                    </form>
                    <div className="setting-buttons">
                        <button className="settings-save" onClick={e => onSubmit(e)}>Zapisz Zmiany</button>
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
    changeEmail: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    clearAlerts: PropTypes.func.isRequired,
    deleteAlert: PropTypes.func.isRequired,
    changeMyPassword: PropTypes.func.isRequired,
    alert: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    user: state.auth.user,
    alert: state.alert,
    usedAvatar: state.avatars.used,
})

export default connect(mapStateToProps, { changeEmail, setAlert, clearAlerts, changeMyPassword, deleteAlert })(Settings);