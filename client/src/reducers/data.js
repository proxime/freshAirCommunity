import { GET_COUNTRIES, GET_STATES, GET_CITIES, GET_CITY } from "../actions/types";

const initialState = {
    countries: [],
    states: [],
    cities: [],
    city: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload
            }
        case GET_STATES:
            return {
                ...state,
                states: payload
            }
        case GET_CITIES:
            return {
                ...state,
                cities: payload
            }
        case GET_CITY:
            return {
                ...state,
                city: payload
            }
        default:
            return state;
    }
}