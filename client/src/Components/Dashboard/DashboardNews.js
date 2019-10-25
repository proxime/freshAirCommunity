import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../News/News.js';
import NewsItem from '../News/NewsItem';
import { connect } from 'react-redux';
import { getAllNews } from '../../actions/news';

const DashboardNews = ({ news, getAllNews }) => {
    useEffect(() => {
        getAllNews();
    }, [])


    const lastNews = news.headNews.map(item => (
        <NewsItem
            key={item._id}
            id={item._id}
            title={item.title}
            image={item.image}
            date={item.date}
        />
    ))

    const newsItems = news.news.splice(0, 1).map(item => (
        <NewsItem
            key={item._id}
            id={item._id}
            title={item.title}
            image={item.image}
            date={item.date}
        />
    ))

    return (
        <div className="dashboard-news-section">
            <h1 style={{ margin: 0 }}>
                <div className="section-before"></div>
                <div>
                    <span className="bold">Najnowsze Aktualności</span>
                </div>
            </h1>
            <div className="news-container" style={{ margin: '0 auto' }}>
                <div className="news-items">
                    {lastNews}
                    {newsItems}
                </div>
            </div>
        </div>
    );
}

DashboardNews.propTypes = {
    news: PropTypes.object.isRequired,
    getAllNews: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    news: state.news
})

export default connect(mapStateToProps, { getAllNews })(DashboardNews);