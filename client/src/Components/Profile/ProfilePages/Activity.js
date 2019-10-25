import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllNews } from '../../../actions/news';

import e0 from '../../../images/emotes/0.png';
import e1 from '../../../images/emotes/1.png';
import e2 from '../../../images/emotes/2.png';
import e3 from '../../../images/emotes/3.png';
import e4 from '../../../images/emotes/4.png';

const emotes = [e0, e1, e2, e3, e4]

const Activity = ({ user, news: { news, headNews }, getAllNews }) => {
    useEffect(() => {
        getAllNews();

        return () => {
            window.scrollTo(0, 0);
        }
    }, [])

    const allNews = [...headNews, ...news];
    const myNews = allNews.filter(news => {
        let yourReaction = -1;
        news.likes.forEach(like => {
            if (like.user === user._id) yourReaction = like.emote;
        })
        if (yourReaction > -1) {
            news.myEmote = yourReaction;
            return news;
        }
    })

    console.log(myNews)

    const renderNews = myNews.map(item => (
        <Link to={`/news/${item._id}`} className="activity-item" key={item._id}>
            <div className="activity-item-title">
                {item.title}
            </div>
            <div className="activity-item-emote">
                <img src={emotes[item.myEmote]} alt="" />
            </div>
        </Link>
    ))



    return (
        <>
            <h1 className="profile-title">Moje Reakcje</h1>
            <div className="activity-container">
                {renderNews}
            </div>
        </>
    );
}

Activity.propTypes = {
    getAllNews: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    user: state.auth.user,
    news: state.news
});

export default connect(mapStateToProps, { getAllNews })(Activity);