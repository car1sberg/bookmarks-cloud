
import React, { Fragment } from 'react';
import '../css/EditForm.css'


const EditForm = ({ cancel, update, currentBookmark, editInputTitle, editInputUrl }) => {
    return(
        <Fragment>
            <span className="edit-title">Edit</span>
            <div className="edit-form-block">
                <form className="edit-form" onSubmit={update}>
                    <div className="edit-title-block">
                        <label className="edit-label" htmlFor="title">Bookmark title</label>
                        <input 
                            className="edit-input"
                            ref={editInputTitle}
                            defaultValue={currentBookmark.title}
                            type="text"
                            id="title" />
                    </div>
                    <div className="edit-url-block">
                        <label className="edit-label" htmlFor="url">Bookmark URL</label>
                        <input
                            className="edit-input"
                            ref={editInputUrl}
                            defaultValue={currentBookmark.url}
                            type="text"
                            id="url" />
                    </div>
                    <div className="btn-group">
                        <button onClick={cancel}>Cancel</button>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default EditForm;