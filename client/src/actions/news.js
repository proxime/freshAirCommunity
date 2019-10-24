import axios from 'axios';
import { setAlert } from './alert';
import { GET_NEWS, ADD_NEWS } from './types';

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