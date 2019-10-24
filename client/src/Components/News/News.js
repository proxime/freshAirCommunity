import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './News.css';
import HeadNewsPc from './HeadNewsPc';
import HeadNewsMobile from './HeadNewsMobile';
import NewsItem from './NewsItem';
import { connect } from 'react-redux';
import { getAllNews } from '../../actions/news';

const News = ({ news, getAllNews }) => {
    useEffect(() => {
        getAllNews();
    }, [])

    const newsItems = news.news.map(item => (
        <NewsItem
            key={item._id}
            title={item.title}
            image={item.image}
            date={item.date}
        />
    ))

    return (
        <div className="container">
            <div className="head-news">
                <HeadNewsPc />
                <HeadNewsMobile />
            </div>
            <div className="news-container">
                <h1 className="news-title">Aktualności</h1>
                <div className="news-items">
                    {newsItems}
                </div>
            </div>
        </div>
    );
}

News.propTypes = {
    news: PropTypes.object.isRequired,
    getAllNews: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    news: state.news
})

export default connect(mapStateToProps, { getAllNews })(News);