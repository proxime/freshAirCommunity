import axios from 'axios';
import { setAlert } from './alert';
import { GET_NEWS, ADD_NEWS, GET_SINGLE_NEWS, FAILED_SINGLE_NEWS, WAITING_SINGLE_NEWS, ADD_LIKE, ADD_COMMENT, DELETE_COMMENT } from './types';

export const getAllNews = () => async dispatch => {
    try {
        const res = await axios.get('/api/news');

        dispatch({
            type: GET_NEWS,
            payload: res.data
        })

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error)));
        }
    }
}

export const addNews = (title, image, text) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({
        title,
        image,
        text
    });

    try {
        const res = await axios.post('/api/news', body, config);

        dispatch({
            type: ADD_NEWS,
            payload: res.data
        })

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error)));
        }
    }
}

export const getSilngleNews = id => async dispatch => {
    try {
        dispatch({
            type: WAITING_SINGLE_NEWS
        })

        const res = await axios.get(`/api/news/${id}`);

        dispatch({
            type: GET_SINGLE_NEWS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: FAILED_SINGLE_NEWS
        })
    }
}

export const deleteNews = (id, history) => async dispatch => {
    try {
        dispatch({
            type: WAITING_SINGLE_NEWS
        })

        await axios.delete(`/api/news/${id}`);
        history.push('/news');

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error)));
        }
    }
}

export const addLike = (id, emote) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({
        emote
    });

    try {
        const res = await axios.post(`/api/news/${id}/like`, body, config);

        dispatch({
            type: ADD_LIKE,
            payload: res.data
        })

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error)));
        }
    }
}

export const addComment = (id, text) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({
        text
    });

    try {
        const res = await axios.post(`/api/news/${id}/comment`, body, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error)));
        }
    }
}

export const deleteComment = (newsId, commentId) => async dispatch => {
    try {
        const res = await axios.delete(`/api/news/${newsId}/${commentId}`);

        dispatch({
            type: DELETE_COMMENT,
            payload: res.data
        })

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error)));
        }
    }
}