import { GET_NEWS, ADD_NEWS } from "../actions/types";

const initialState = {
    news: [],
    headNews: [],
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
        default:
            return state;
    }

}