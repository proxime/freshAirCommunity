import axios from 'axios';
import { AUTH_ERROR, REGISTER_FAIL, USER_LOADED, REGISTER_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, CHANGE_EMAIL } from './types';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

export const getUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const registerUser = (formData) => async dispatch => {
    const { login, email, password } = formData;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({
        login,
        email,
        password,
    });

    try {
        const res = await axios.post('/api/auth/register', body, config)

        dispatch({
            type: REGISTER_USER,
            payload: res.data,
        });

        dispatch(getUser());

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error)));
        }

        dispatch({
            type: REGISTER_FAIL,
        });
    }
}

export const loginUser = formData => async dispatch => {
    const { login, password } = formData;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({
        login,
        password
    });

    try {
        const res = await axios.post('/api/auth/login', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        dispatch(getUser());


    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error)));
        }

        dispatch({
            type: LOGIN_FAIL,
        });
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}

export const changeEmail = email => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({
        email
    });

    try {
        const res = await axios.post('/api/auth/change/email', body, config);

        dispatch({
            type: CHANGE_EMAIL,
            payload: res.data,
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error)));
        }
    }
}

export const changeMyPassword = (password, password2) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({
        password,
        password2
    });

    try {
        const res = await axios.post('/api/auth/change/password', body, config);

        res.data.alerts.forEach(alert => dispatch(setAlert(alert)));

        dispatch(getUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error)));
        }
    }
}