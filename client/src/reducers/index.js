import { combineReducers } from 'redux';
import data from './data';
import auth from './auth';
import alert from './alert';
import avatars from './avatars';
import news from './news';

export default combineReducers({
    data,
    auth,
    alert,
    avatars,
    news
});