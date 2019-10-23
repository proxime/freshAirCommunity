import { GET_COUNTRIES, GET_STATES, GET_CITIES, GET_CITY, DELETE_STATES, DELETE_CITIES, WAITING_FOR_CITY, UPDATE_AFTER_LOAD_CITY } from "../actions/types";

const initialState = {
    countries: [],
    states: [],
    cities: [],
    city: {},
    waitingForCity: false,
    updateAfterLoad: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload,
            }
        case GET_STATES:
            return {
                ...state,
                states: payload,
            }
        case GET_CITIES:
            return {
                ...state,
                cities: payload,
            }
        case GET_CITY:
            return {
                ...state,
                city: payload,
                waitingForCity: false,
                updateAfterLoad: true
            }
        case WAITING_FOR_CITY:
            return {
                ...state,
                waitingForCity: true
            }
        case UPDATE_AFTER_LOAD_CITY:
            return {
                ...state,
                updateAfterLoad: false
            }
        case DELETE_STATES:
            return {
                ...state,
                states: []
            }
        case DELETE_CITIES:
            return {
                ...state,
                cities: []
            }
        default:
            return state;
    }
}