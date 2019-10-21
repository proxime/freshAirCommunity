import React, { useState } from 'react';

import a0 from '../../../images/avatars/0.jpg';

const Settings = () => {
    const [changePassword, setChangePassword] = useState(false);

    return (
        <>
            <div className="profile-container" >
                <div className="profile-backrond" style={{ backgroundImage: `url(${a0})` }}></div>
                <div className="profile"></div>
                <h1 className="profile-title">Edytuj Konto</h1>
                <div className="edit-profile">
                    <div className="edit-profile-image">
                        <div className="edit-profile-image-container" style={{ backgroundImage: `url(${a0})` }}>

                        </div>
                        <h2>Devilsroyal</h2>
                    </div>
                    <div className="edit-profile-data">
                        <form>
                            <label>
                                E-mail
                                <input type="text" name="email" id="" placeholder="E-mail" />
                            </label>
                            <p onClick={() => setChangePassword(!changePassword)}>{changePassword ? "Nie Zmieniaj Hasła" : "Zmień Hasło"}</p>
                            {changePassword && (
                                <div className="edit-profille-password">
                                    Hasło
                                <input type="password" name="password1" id="" placeholder="Stare Hasło" />
                                    <input type="password" name="password2" id="" placeholder="Nowe Hasło" />
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
            </div>
        </>
    );
}

export default Settings;