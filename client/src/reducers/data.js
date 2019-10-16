import { GET_COUNTRIES } from "../actions/types";

const initialState = {
    countries: [],
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload
            }
        default:
            return state;
    }
}