import { GET_NEWS, ADD_NEWS, FAILED_SINGLE_NEWS, GET_SINGLE_NEWS, WAITING_SINGLE_NEWS, ADD_LIKE } from "../actions/types";

const initialState = {
    news: [],
    headNews: [],
    actuallNews: null,
    waitingNews: false,
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_NEWS:
            return {
                ...state,
                news: [...payload].splice(3),
                headNews: [...payload].splice(0, 3),
            }
        case ADD_NEWS:
            return {
                ...state,
                news: [payload, ...state.news]
            }
        case GET_SINGLE_NEWS:
        case ADD_LIKE:
            return {
                ...state,
                actuallNews: payload,
                waitingNews: false,
            }
        case FAILED_SINGLE_NEWS:
            return {
                ...state,
                actuallNews: null,
                waitingNews: false,
            }
        case WAITING_SINGLE_NEWS:
            return {
                ...state,
                waitingNews: true,
            }
        default:
            return state;
    }

}