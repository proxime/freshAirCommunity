import a0 from '../images/avatars/0.jpg';
import a1 from '../images/avatars/1.jpg';
import a2 from '../images/avatars/2.jpg';
import a3 from '../images/avatars/3.jpg';
import a4 from '../images/avatars/4.jpg';
import a5 from '../images/avatars/5.jpg';
import a6 from '../images/avatars/0.jpg';
import a7 from '../images/avatars/0.jpg';
import a8 from '../images/avatars/0.jpg';
import a9 from '../images/avatars/0.jpg';
import a10 from '../images/avatars/0.jpg';
import a11 from '../images/avatars/0.jpg';
import a12 from '../images/avatars/0.jpg';
import a13 from '../images/avatars/0.jpg';
import a14 from '../images/avatars/0.jpg';
import a15 from '../images/avatars/0.jpg';
import a16 from '../images/avatars/0.jpg';
import a17 from '../images/avatars/0.jpg';
import a18 from '../images/avatars/0.jpg';
import a19 from '../images/avatars/0.jpg';
import { GET_AVATAR } from '../actions/types';

const initialState = {
    avatars: [
        a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19
    ],
    used: a0
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_AVATAR:
            return {
                ...state,
                used: state.avatars[payload],
            }
        default:
            return state;
    }
}