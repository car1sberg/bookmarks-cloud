
import { combineReducers } from 'redux';
import bookmarks from './bookmarks';
import users from './users';
import inputValue from './inputValue';
import theme from './theme';
import userSearchValue from './userSearchValue';
import pageZoom from './pageZoom';
import pageFont from './pageFont';

export default combineReducers({
    users,
    bookmarks,
    inputValue,
    theme,
    userSearchValue,
    pageZoom,
    pageFont
})