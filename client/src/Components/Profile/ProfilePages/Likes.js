import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { likeAndUnlike } from '../../../actions/auth';
import { getCity } from '../../../actions/data';

const Likes = ({ likes, likeAndUnlike, getCity, history }) => {
    const [likeHovered, setLikeHoveres] = useState({
        item: null
    });

    const handleMouseEnter = (index) => {
        if (likeHovered.item === index) return;
        setLikeHoveres({ item: index })
    }

    const handleMouseLevae = (index) => {
        if (likeHovered.item === index) {
            setLikeHoveres({ item: null })
        }
    }

    const handleShowCity = (country, state, city) => {
        getCity(country, state, city);
        history.push('/pollution');
    }

    const myLikes = likes.map((like, index) => (
        <div className="likes-item" key={index}>
            <div className="likes-item-icon" onClick={() => likeAndUnlike(like.country, like.state, like.city, like.pl)} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLevae(index)}>
                {likeHovered.item === index ? (<i className="far fa-star"></i>) : (<i className="fas fa-star"></i>)}
            </div>
            <div className="likes-item-text" onClick={() => handleShowCity(like.country, like.state, like.city)}>
                <h1>{like.pl.miasto}</h1>
                <p>{like.pl.panstwo} {'//'} {like.pl.stan}</p>
            </div>
        </div>
    ));

    return (
        <>
            <h1 className="profile-title">Lubiane Miasta</h1>
            <div className="likes-container">
                {myLikes}
            </div>
        </>
    );
}

Likes.propTypes = {
    likeAndUnlike: PropTypes.func.isRequired,
    getCity: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    likes: state.auth.user.likes
});

export default connect(mapStateToProps, { likeAndUnlike, getCity })(withRouter(Likes));