import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addNews } from '../../../actions/news';
import { setAlert, clearAlerts, deleteAlert } from '../../../actions/alert';

const AddNews = ({ user, addNews, setAlert, alert, clearAlerts, deleteAlert }) => {
    const [formData, setFormaData] = useState({
        title: "",
        image: '',
        loadedImage: '',
        text: '',
    });

    if (user.type !== 'redactor') return <Redirect to="/profile" />

    const { title, image, loadedImage, text } = formData;

    const onChange = e => {
        setFormaData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        let alertIndex = -1;
        alert.filter((item, index) => {
            if (item.param === e.target.name) alertIndex = index;
        });
        if (alertIndex > -1) deleteAlert(alertIndex);
    }

    const handleLoadImage = () => {
        setFormaData({
            ...formData,
            loadedImage: image,
        })
        let alertIndex = -1;
        alert.filter((item, index) => {
            if (item.param === 'loadedImage') alertIndex = index;
        });
        if (alertIndex > -1) deleteAlert(alertIndex);
    }

    const sendPost = e => {
        e.preventDefault();
        clearAlerts();
        if (!title || !loadedImage || !text) {
            if (!title) setAlert({ msg: 'Wprowadź tytuł!', param: 'title' });
            if (!loadedImage) setAlert({ msg: 'Załaduj Obraz!', param: 'loadedImage' });
            if (!text) setAlert({ msg: 'Wprowadź zawartość!', param: 'text' });
            return;
        }
        addNews(title, loadedImage, text);
        setFormaData({
            title: "",
            image: '',
            loadedImage: '',
            text: '',
        })
    }

    const titleAlert = alert.filter(item => item.param === 'title');
    const loadedImageAlert = alert.filter(item => item.param === 'loadedImage');
    const textAlert = alert.filter(item => item.param === 'text');

    return (
        <>
            <h1 className="profile-title">Dodaj News</h1>
            <div className="profile-news-container">
                <form onSubmit={e => sendPost(e)}>
                    <div className="profile-news-title">
                        <label>
                            <p>Tytuł</p>
                            <input type="text" name="title" value={title} onChange={onChange} />
                            {titleAlert.length > 0 && <p className="news-error">{titleAlert[0].msg}</p>}
                        </label>
                    </div>
                    <div className="profile-news-image">
                        <label>
                            <p>Obraz</p>
                            <input type="text" name="image" value={image} onChange={onChange} />
                        </label>
                        <div className="profile-news-image-button" onClick={() => handleLoadImage()}>Załaduj</div>
                        {loadedImageAlert.length > 0 && <p className="news-error">{loadedImageAlert[0].msg}</p>}
                        {loadedImage && (
                            <div className="profile-news-image-container" style={{ backgroundImage: `url(${loadedImage})` }}></div>
                        )}
                    </div>
                    <div className="profile-news-text">
                        <label>
                            <p>Tekst</p>
                            <textarea name="text" value={text} onChange={onChange}></textarea>
                            {textAlert.length > 0 && <p className="news-error">{textAlert[0].msg}</p>}
                        </label>
                    </div>
                    <button>Dodaj News</button>
                </form>
            </div>
        </>
    );
}

AddNews.propTypes = {
    addNews: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    clearAlerts: PropTypes.func.isRequired,
    deleteAlert: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    user: state.auth.user,
    alert: state.alert,
})

export default connect(mapStateToProps, { addNews, setAlert, clearAlerts, deleteAlert })(AddNews);