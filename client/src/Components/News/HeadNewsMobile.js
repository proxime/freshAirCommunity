import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const HeadNewsMobile = ({ headNews }) => {
    return (
        <>
            {headNews.length > 2 && (
                <div className="head-news-mobile">
                    <Link to={`/news/${headNews[0]._id}`} className="head-news-mobile-main">
                        <div className="head-news-main-image-container">
                            <div className="head-news-main-image" style={{ backgroundImage: `url(${headNews[0].image})` }}></div>
                        </div>
                        <div className="head-news-main-text">
                            <div className="head-news-main-title">
                                {headNews[0].title}
                            </div>
                            <div className="head-news-main-date">
                                <Moment format="DD.MM.YYYY HH:mm">{headNews[0].date}</Moment>
                            </div>
                        </div>
                    </Link>
                    <div className="head-news-mobile-secondary-container">
                        <Link to={`/news/${headNews[1]._id}`} className="head-news-mobile-secondary">
                            <div className="head-news-secondary-image-container">
                                <div className="head-news-secondary-image" style={{ backgroundImage: `url(${headNews[1].image})` }}></div>
                            </div>
                            <div className="head-news-secondary-text">
                                <div className="head-news-secondary-title">
                                    {headNews[1].title}
                                </div>
                                <div className="head-news-secondary-date">
                                    <Moment format="DD.MM.YYYY HH:mm">{headNews[1].date}</Moment>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/news/${headNews[2]._id}`} className="head-news-mobile-secondary">
                            <div className="head-news-secondary-image-container">
                                <div className="head-news-secondary-image" style={{ backgroundImage: `url(${headNews[2].image})` }}></div>
                            </div>
                            <div className="head-news-secondary-text">
                                <div className="head-news-secondary-title">
                                    {headNews[2].title}
                                </div>
                                <div className="head-news-secondary-date">
                                    <Moment format="DD.MM.YYYY HH:mm">{headNews[2].date}</Moment>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

const mapStateToProps = state => ({
    headNews: state.news.headNews,
})

export default connect(mapStateToProps)(HeadNewsMobile);