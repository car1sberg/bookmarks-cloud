
import { combineReducers } from 'redux';
import bookmarks from './bookmarks';
// import config from './config';
import users from './users';
import inputValue from './inputValue';

export default combineReducers({
    users,
    bookmarks,
    inputValue
    // config
})