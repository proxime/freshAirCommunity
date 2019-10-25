import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Loading from '../Loading';
import NewsComment from './NewsComment';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSilngleNews, getAllNews, addLike, deleteNews } from '../../actions/news';
import { setAlert, clearAlerts } from '../../actions/alert';

import e0 from '../../images/emotes/0.png';
import e1 from '../../images/emotes/1.png';
import e2 from '../../images/emotes/2.png';
import e3 from '../../images/emotes/3.png';
import e4 from '../../images/emotes/4.png';

const SingleNews = ({ match, news, getSilngleNews, getAllNews, addLike, auth, setAlert, clearAlerts, alert, deleteNews, history }) => {
    const containerEl = useRef(null);
    const [newsId, setNewsId] = useState(match.params.id);

    useEffect(() => {
        getSilngleNews(newsId)
        getAllNews();

        return () => {
            clearAlerts();
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
            clearAlerts();
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

    const likes = [0, 0, 0, 0, 0];

    if (news.actuallNews) {
        news.actuallNews.likes.forEach(like => {
            likes[like.emote]++;
        })
    }

    const handleAddLike = (newsId, index) => {
        if (!auth.loading) {
            clearAlerts();
            if (auth.isAuthenticated) {
                addLike(newsId, index);
            } else {
                setAlert({ msg: 'Zaloguj się aby ocenić', param: 'emotes' })
            }
        }
    }

    const emotesAlert = alert.filter(item => item.param === 'emotes');

    return (
        <div className="container">
            <div className="single-news-container">
                <div className="single-news">
                    {news.waitingNews ? (
                        <Loading />
                    ) : (
                            news.actuallNews ? (
                                <>
                                    <div className="single-news-wrapper">
                                        {auth.isAuthenticated && auth.user.type === 'redactor' && (
                                            <div className="deleteNewsBtn" onClick={() => deleteNews(newsId, history)}>
                                                Usuń News
                                        </div>
                                        )}
                                        <h1 className="single-news-title">{news.actuallNews.title}</h1>
                                        <p className="single-news-date"><Moment format="DD.MM.YYYY HH:mm">{news.actuallNews.date}</Moment></p>
                                        <div className="single-news-image" style={{ backgroundImage: `url(${news.actuallNews.image})` }}></div>
                                        <div className="single-news-content" ref={containerEl}>

                                        </div>
                                    </div>

                                    <div className="single-news-reactions">
                                        <div onClick={() => handleAddLike(newsId, 0)} className="single-news-reaction">
                                            <img src={e0} alt="" />
                                            <p>{likes[0]}</p>
                                        </div>
                                        <div onClick={() => handleAddLike(newsId, 1)} className="single-news-reaction">
                                            <img src={e1} alt="" />
                                            <p>{likes[1]}</p>
                                        </div>
                                        <div onClick={() => handleAddLike(newsId, 2)} className="single-news-reaction">
                                            <img src={e2} alt="" />
                                            <p>{likes[2]}</p>
                                        </div>
                                        <div onClick={() => handleAddLike(newsId, 3)} className="single-news-reaction">
                                            <img src={e3} alt="" />
                                            <p>{likes[3]}</p>
                                        </div>
                                        <div onClick={() => handleAddLike(newsId, 4)} className="single-news-reaction">
                                            <img src={e4} alt="" />
                                            <p>{likes[4]}</p>
                                        </div>
                                        {emotesAlert.length > 0 && <p className="emote-warrning">{emotesAlert[0].msg}</p>}
                                    </div>

                                    <NewsComment newsId={newsId} />
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
    addLike: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    clearAlerts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    news: state.news,
    auth: state.auth,
    alert: state.alert
})

export default connect(mapStateToProps, { getSilngleNews, getAllNews, addLike, setAlert, clearAlerts, deleteNews })(withRouter(SingleNews));