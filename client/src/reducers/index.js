import { combineReducers } from 'redux';
import data from './data';
import auth from './auth';
import alert from './alert';
import avatars from './avatars';

export default combineReducers({
    data,
    auth,
    alert,
    avatars
});