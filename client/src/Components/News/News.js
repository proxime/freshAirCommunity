import React from 'react';
import './News.css';

const url = 'https://images.wallpaperscraft.com/image/road_marking_bridge_123398_1920x1080.jpg';

const News = () => {
    return (
        <div className="container">
            <div className="head-news">
                <div className="head-news-container">
                    <div className="head-news-main">
                        <div className="head-news-main-image-container">
                            <div className="head-news-main-image" style={{ backgroundImage: `url(${url})` }}></div>
                        </div>
                        <div className="head-news-main-text">
                            <div className="head-news-main-title">
                                Domowe sposoby badania jakości powietrza.
                            </div>
                            <div className="head-news-main-date">
                                25.10.2019 12:00
                        </div>
                        </div>
                    </div>
                    <div className="head-news-secondary-container">
                        <div className="head-news-secondary">
                            <div className="head-news-secondary-image-container">
                                <div className="head-news-secondary-image" style={{ backgroundImage: `url(${url})` }}></div>
                            </div>
                            <div className="head-news-secondary-text">
                                <div className="head-news-secondary-title">
                                    Domowe sposoby badania jakości powietrza.
                                    </div>
                                <div className="head-news-secondary-date">
                                    25.10.2019 12:00
                                    </div>
                            </div>
                        </div>
                        <div className="head-news-secondary">
                            <div className="head-news-secondary-image-container">
                                <div className="head-news-secondary-image" style={{ backgroundImage: `url(${url})` }}></div>
                            </div>
                            <div className="head-news-secondary-text">
                                <div className="head-news-secondary-title">
                                    Domowe sposoby badania jakości powietrza.
                                    </div>
                                <div className="head-news-secondary-date">
                                    25.10.2019 12:00
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;