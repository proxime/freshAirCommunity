import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeAvatar } from '../../actions/auth';

const ProfileIcons = ({ setIconsWindowH, setOpenIconWindow, avatars: { avatars, usedAvatar }, user, changeAvatar }) => {
    const iconsEl = useRef(null);
    const [activeIcon, setActiveIcon] = useState(user.avatar);

    useEffect(() => {
        if (iconsEl.current) {
            const height = iconsEl.current.offsetHeight + iconsEl.current.offsetTop + 50;
            setIconsWindowH(height);
        }
    })

    useEffect(() => {
        return function () {
            setIconsWindowH(0);
        }
    }, [setIconsWindowH])

    const setActive = (id) => {
        setActiveIcon(id);
    }

    const iconItems = avatars.map((icon, index) => (
        <div
            key={index}
            className={activeIcon === index ? "select-profile-icon-item active" : "select-profile-icon-item"}
            style={{ backgroundImage: `url(${icon})` }}
            onClick={() => setActive(index)}
        >

        </div>
    ))

    const handleChangeAvatar = () => {
        changeAvatar(activeIcon);
        setOpenIconWindow(false);
    }

    return (
        <>
            <div className="select-profile-icon" ref={iconsEl}>
                <h2>Wybierz Nowe Zdjęcie</h2>
                <div className="select-profile-icons">
                    {iconItems}
                </div>
                <div className="select-profile-icons-buttons">
                    <button onClick={() => handleChangeAvatar()}>Zapisz</button>
                    <button onClick={() => setOpenIconWindow(false)}>Cofnij</button>
                </div>
            </div>
            <div onClick={() => setOpenIconWindow(false)} className="select-icon-pop"></div>
        </>
    );
}

ProfileIcons.propTypes = {
    changeAvatar: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    avatars: state.avatars,
    user: state.auth.user
})

export default connect(mapStateToProps, { changeAvatar })(ProfileIcons);