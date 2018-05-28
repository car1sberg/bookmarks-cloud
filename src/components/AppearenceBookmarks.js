
import React, { Fragment } from 'react';

const AppearenceBookmarks = ({ bookmarks }) => {
    return(
        <Fragment>
            <span>Add bookmark</span>
            <ul className="settings-bookmarks-list">
                {bookmarks.map(bookmark => 
                    <li key={bookmark.id}>{bookmark.name}</li>
                )}
            </ul>
        </Fragment>
    )
}

export default AppearenceBookmarks;