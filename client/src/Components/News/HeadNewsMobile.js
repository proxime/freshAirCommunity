import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const HeadNewsMobile = ({ headNews }) => {
    return (
        <>
            {headNews.length > 2 && (
                <div className="head-news-mobile">
                    <div className="head-news-mobile-main">
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
                    </div>
                    <div className="head-news-mobile-secondary-container">
                        <div className="head-news-mobile-secondary">
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
                        </div>
                        <div className="head-news-mobile-secondary">
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
                        </div>
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