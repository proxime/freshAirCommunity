import React from 'react';
import './News.css';
import HeadNewsPc from './HeadNewsPc';
import HeadNewsMobile from './HeadNewsMobile';
import NewsItem from './NewsItem';

const News = () => {
    return (
        <div className="container">
            <div className="head-news">
                <HeadNewsPc />
                <HeadNewsMobile />
            </div>
            <div className="news-container">
                <h1 className="news-title">Aktualności</h1>
                <div className="news-items">
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                </div>
            </div>
        </div>
    );
}

export default News;