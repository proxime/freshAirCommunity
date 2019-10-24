import React from 'react';
import Moment from 'react-moment';

const NewsItem = ({ title, image, date }) => {
    return (
        <div className="news-item">
            <div className="news-item-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="news-item-text">
                <div className="news-item-title">
                    {title}
                </div>
                <div className="news-item-date">
                    <Moment format="DD.MM.YYYY HH:mm">{date}</Moment>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;