import React from 'react';

import loadingGif from '../images/AnimacjaŁadowania_niebieska.gif'

const Loading = () => {
    return (
        <div className="loading">
            <img src={loadingGif} alt="Ładowanie..." />
        </div>
    );
}

export default Loading;