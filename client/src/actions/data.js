import axios from 'axios';
import { GET_COUNTRIES, GET_STATES, GET_CITIES, GET_CITY, DELETE_STATES, DELETE_CITIES, WAITING_FOR_CITY, UPDATE_AFTER_LOAD_CITY } from './types';

// GET countries
export const getCountries = () => async dispatch => {
    try {
        const countries = await axios.get('/api/data');

        dispatch({
            type: GET_COUNTRIES,
            payload: countries.data
        })
    } catch (err) {
        console.log(err);
    }
}

// GET states
export const getStates = country => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({
            country
        });

        const states = await axios.post('/api/data/states', body, config);

        dispatch({
            type: GET_STATES,
            payload: states.data
        })
    } catch (err) {
        console.log(err);
    }
}

// GET cities
export const getCities = (country, state) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({
            country,
            state
        });

        const cities = await axios.post('/api/data/cities', body, config);

        dispatch({
            type: GET_CITIES,
            payload: cities.data
        })
    } catch (err) {
        console.log(err);
    }
}

// GET city
export const getCity = (country, state, city) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({
            country,
            state,
            city
        });

        dispatch({
            type: WAITING_FOR_CITY
        })

        const cityRes = await axios.post('/api/data/city', body, config);

        dispatch({
            type: GET_CITY,
            payload: cityRes.data
        })
    } catch (err) {
        console.log(err);
    }
}

// Delete state list
export const deleteStates = () => dispatch => {
    dispatch({
        type: DELETE_STATES,
    })
}

// Delete city list
export const deleteCities = () => dispatch => {
    dispatch({
        type: DELETE_CITIES,
    })
}

// Update After get city
export const waitingForUpdate = () => dispatch => {
    dispatch({
        type: UPDATE_AFTER_LOAD_CITY,
    })
}

// Init all data
export const initData = () => async dispatch => {
    try {
        dispatch(getCountries());
        dispatch(getStates('Poland'));
        dispatch(getCities('Poland', 'Mazovia'));
        dispatch(getCity('Poland', 'Mazovia', 'Warsaw'));
    } catch (err) {
        console.log(err);
    }
}