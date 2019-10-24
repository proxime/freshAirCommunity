import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Loading from '../Loading';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSilngleNews, getAllNews } from '../../actions/news';

const SingleNews = ({ match, news, getSilngleNews, getAllNews }) => {
    const containerEl = useRef(null);
    const [newsId, setNewsId] = useState(match.params.id);

    useEffect(() => {
        getSilngleNews(newsId)
        getAllNews();

        return () => {
            window.scrollTo(0, 0);
        }
    }, [])

    useEffect(() => {
        if (containerEl.current && news.actuallNews) {
            containerEl.current.innerHTML = news.actuallNews.text;
        }

        if (match.params.id !== newsId) {
            setNewsId(match.params.id);
            getSilngleNews(match.params.id)
            window.scrollTo(0, 0);
        }
    })

    const latestNews = news.headNews.map((item, index) => (
        <li key={index}>
            <Link to={`/news/${item._id}`}>
                <p className="last-news-date">
                    <Moment format="DD.MM.YYYY HH:mm">{item.date}</Moment>
                </p>
                <span>{item.title}</span>
            </Link>
        </li>
    ));

    const lastNews = news.news.slice(0, 3).map((item, index) => (
        <li key={index}>
            <Link to={`/news/${item._id}`}>
                <p className="last-news-date">
                    <Moment format="DD.MM.YYYY HH:mm">{item.date}</Moment>
                </p>
                <span>{item.title}</span>
            </Link>
        </li>
    ));


    return (
        <div className="container">
            <div className="single-news-container">
                <div className="single-news">
                    {news.waitingNews ? (
                        <Loading />
                    ) : (
                            news.actuallNews ? (
                                <>
                                    <h1 className="single-news-title">{news.actuallNews.title}</h1>
                                    <p className="single-news-date"><Moment format="DD.MM.YYYY HH:mm">{news.actuallNews.date}</Moment></p>
                                    <div className="single-news-image" style={{ backgroundImage: `url(${news.actuallNews.image})` }}></div>
                                    <div className="single-news-content" ref={containerEl}>

                                    </div>
                                </>
                            ) : (
                                    <h1>404</h1>
                                )
                        )}
                </div>
                <div className="last-news">
                    <h1>Najnowsze Informacje</h1>
                    <ul>
                        {latestNews}
                        {lastNews}
                    </ul>
                </div>
            </div>
        </div>
    );
}

SingleNews.ptpTypes = {
    getSilngleNews: PropTypes.func.isRequired,
    getAllNews: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    news: state.news,
})

export default connect(mapStateToProps, { getSilngleNews, getAllNews })(SingleNews);