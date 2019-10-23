import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { likeAndUnlike } from '../../actions/auth';
import { clearAlerts } from '../../actions/alert';

const PolutionLike = ({ likeAndUnlike, likes, city: { country, state, city, pl }, clearAlerts }) => {
    const handleLike = () => {
        clearAlerts();
        likeAndUnlike(country, state, city, pl);
    }

    const isLiked = likes.filter(like => like.country === country && like.state === state && like.city === city);

    return (
        <div className="pollution-like-container">
            <div className="pollution-like" onClick={() => handleLike()}>
                <div className="pollution-like-icon">
                    {isLiked.length > 0 ? (<i className="fas fa-star"></i>) : (<i className="far fa-star"></i>)}
                </div>
                <div className="pollution-item-text">
                    {isLiked.length > 0 ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
                </div>
            </div>
        </div>
    );
}

PolutionLike.propTypes = {
    likeAndUnlike: PropTypes.func.isRequired,
    clearAlerts: PropTypes.func.isRequired,
    likes: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    likes: state.auth.user.likes,
    city: state.data.city
})

export default connect(mapStateToProps, { likeAndUnlike, clearAlerts })(PolutionLike);