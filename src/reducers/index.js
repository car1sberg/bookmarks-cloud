
import { combineReducers } from 'redux';
import bookmarks from './bookmarks';
import users from './users';
import inputValue from './inputValue';
import theme from './theme';
import userSearchValue from './userSearchValue';
import pageZoom from './pageZoom';
import pageFont from './pageFont';
import activeAvatar from './activeAvatar';

export default combineReducers({
    activeAvatar,
    bookmarks,
    inputValue,
    pageZoom,
    pageFont,
    theme,
    users,
    userSearchValue
})