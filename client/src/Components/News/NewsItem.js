import React from 'react';

const url = 'https://images.wallpaperscraft.com/image/road_marking_bridge_123398_1920x1080.jpg';

const NewsItem = () => {
    return (
        <div className="news-item">
            <div className="news-item-image" style={{ backgroundImage: `url(${url})` }}></div>
            <div className="news-item-text">
                <div className="news-item-title">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ad asperiores esse laudantium.
                </div>
                <div className="news-item-date">
                    20.12.2019 12:00
                </div>
            </div>
        </div>
    );
}

export default NewsItem;