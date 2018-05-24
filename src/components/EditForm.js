
import React, { Fragment } from 'react';
import '../css/EditForm.css'


const EditForm = ({ cancel, update }) => {
    return(
        <Fragment>
            <span className="create-title">Edit</span>
            <div className="edit-form-block">
                <form className="edit-form" onSubmit={update}>
                    <div className="title-block">
                        <label className="edit-label" htmlFor="title">Bookmark title</label>
                        <input className="edit-input" type="text" id="title" />
                    </div>
                    <div className="url-block">
                        <label className="edit-label" htmlFor="url">Bookmark URL</label>
                        <input className="edit-input" type="text" id="url" />
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