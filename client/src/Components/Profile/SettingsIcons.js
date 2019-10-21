import React, { useRef, useState, useEffect } from 'react';

import a0 from '../../images/avatars/0.jpg';

const icons = [
    a0, a0, a0, a0, a0, a0, a0, a0, a0, a0, a0, a0, a0, a0, a0, a0, a0, a0, a0, a0,
]

const ProfileIcons = ({ setIconsWindowH, setOpenIconWindow }) => {
    const iconsEl = useRef(null);
    const [activeIcon, setActiveIcon] = useState(0);

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
    }, [])

    const setActive = (id) => {
        setActiveIcon(id);
    }

    const iconItems = icons.map((icon, index) => (
        <div
            key={index}
            className={activeIcon === index ? "select-profile-icon-item active" : "select-profile-icon-item"}
            style={{ backgroundImage: `url(${icon})` }}
            onClick={() => setActive(index)}
        >

        </div>
    ))

    return (
        <>
            <div className="select-profile-icon" ref={iconsEl}>
                <h2>Wybierz Nowe Zdjęcie</h2>
                <div className="select-profile-icons">
                    {iconItems}
                </div>
                <div className="select-profile-icons-buttons">
                    <button>Zapisz</button>
                    <button onClick={() => setOpenIconWindow(false)}>Cofnij</button>
                </div>
            </div>
            <div onClick={() => setOpenIconWindow(false)} className="select-icon-pop"></div>
        </>
    );
}

export default ProfileIcons;