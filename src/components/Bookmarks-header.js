
import React from 'react';
import logo from '../logo.svg';
import '../css/BookmarksHeader.css';

const BookmarksHeader = () => {
    return(
        <header className="bookmarks-header">
            <div className="logoBlock">
                <h1>Bookmarks</h1>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <input type="text" className="bookmarks-field" placeholder="Search..." />
        </header>
    )
}

export default BookmarksHeader;