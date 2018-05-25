
import React, { Fragment } from 'react';
import Bookmarks from './Bookmarks';
import BookmarksHeader from './BookmarksHeader';

const MainPage = () => {
    return(
        <Fragment>
            <BookmarksHeader />
            <Bookmarks />
        </Fragment>
    )
}

export default MainPage;