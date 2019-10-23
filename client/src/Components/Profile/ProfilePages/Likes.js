import React from 'react';
import { connect } from 'react-redux';

const Likes = ({ likes }) => {
    const myLikes = likes.map((like, index) => (
        <div className="likes-item" key={index}>
            <div className="likes-item-icon">
                <i className="fas fa-star"></i>
            </div>
            <div className="likes-item-text">
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

const mapStateToProps = state => ({
    likes: state.auth.user.likes
});

export default connect(mapStateToProps)(Likes);