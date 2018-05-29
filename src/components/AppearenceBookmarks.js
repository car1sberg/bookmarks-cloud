
import React from 'react';
import PropTypes from 'prop-types';

const AppearenceBookmarks = ({ bookmarks }) => {
    return(
        <div>
            <span>Add bookmark</span>
            <ul className="settings-bookmarks-list">
                {bookmarks.map(bookmark => 
                    <li key={bookmark.id}>{bookmark.title}</li>
                )}
            </ul>
        </div>
    )
}

AppearenceBookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired 
}

export default AppearenceBookmarks;