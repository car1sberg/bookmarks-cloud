
import { combineReducers } from 'redux';
import bookmarks from './bookmarks';
import users from './users';
import inputValue from './inputValue';
import theme from './theme';
import userSearchValue from './userSearchValue';

export default combineReducers({
    users,
    bookmarks,
    inputValue,
    theme,
    userSearchValue
})