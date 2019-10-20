import { combineReducers } from 'redux';
import data from './data';
import auth from './auth';
import alert from './alert';

export default combineReducers({
    data,
    auth,
    alert
});