import a0 from '../images/avatars/0.png';
import a1 from '../images/avatars/1.png';
import a2 from '../images/avatars/2.png';
import a3 from '../images/avatars/3.png';
import a4 from '../images/avatars/4.png';
import a5 from '../images/avatars/5.png';
import a6 from '../images/avatars/6.png';
import a7 from '../images/avatars/7.png';
import a8 from '../images/avatars/8.png';
import a9 from '../images/avatars/9.png';
import a10 from '../images/avatars/10.png';
import a11 from '../images/avatars/11.png';
import a12 from '../images/avatars/12.png';
import a13 from '../images/avatars/13.png';
import a14 from '../images/avatars/14.png';
import { GET_AVATAR } from '../actions/types';

const initialState = {
    avatars: [
        a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14
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