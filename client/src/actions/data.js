import axios from 'axios';
import { GET_COUNTRIES } from './types';

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