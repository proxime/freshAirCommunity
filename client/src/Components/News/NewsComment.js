import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addComment, deleteComment } from '../../actions/news';

const NewsComment = ({ newsId, actuallNews, addComment, avatars, auth, deleteComment }) => {
    const [comment, setComment] = useState("");

    const handleAddComment = e => {
        e.preventDefault();
        if (!comment) return;
        setComment("");
        addComment(newsId, comment);
    }

    const comments = actuallNews.comments.map(comment => (
        <div className="comment" key={comment._id}>
            <div className="comment-author">
                <div className="comment-author-image" style={{ backgroundImage: `url(${avatars[comment.user.avatar]})` }}></div>
            </div>
            <div className="comment-value">
                <h2 className="comment-authorname">{comment.user.login}</h2>
                <p className="comment-text">
                    {comment.text}
                </p>
                {auth.isAuthenticated && (auth.user.type === "redactor" || auth.user._id === comment.user._id) && (
                    <div className="delete-comment" onClick={() => deleteComment(newsId, comment._id)}>
                        Usuń Komentarz
                </div>
                )}
            </div>
        </div>
    ))

    return (
        <div className="comments-section">
            <div className="comments-title">Komentarze</div>
            {auth.isAuthenticated ? (
                <div className="comment-form">
                    <form onSubmit={e => handleAddComment(e)}>
                        <label>
                            <p>Dodaj Komentarz</p>
                            <textarea onChange={(e) => setComment(e.target.value)} name="comment" value={comment}></textarea>
                        </label>
                        <button>Dodaj Komentarz</button>
                    </form>
                </div>
            ) : (
                    <h1 className="login-comment">
                        <Link to="/auth/login">Zaloguj się</Link> aby dodać komentarz
                </h1>
                )}
            <div className="comments">
                {comments}
            </div>
        </div>
    );
}

NewsComment.propTypes = {
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    actuallNews: state.news.actuallNews,
    avatars: state.avatars.avatars,
    auth: state.auth,
})

export default connect(mapStateToProps, { addComment, deleteComment })(NewsComment);