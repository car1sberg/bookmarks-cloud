
import React, { Fragment } from 'react';
import '../css/EditForm.css'


const EditForm = ({ cancel, update }) => {
    return(
        <Fragment>
            <span className="create-title">Edit</span>
            <div className="create-form-block">
                <form onSubmit={update}>
                    <div className="title-block">
                        <label for="title">Bookmark title</label>
                        <input type="text" id="title" />
                    </div>
                    <div className="url-block">
                        <label for="url">Bookmark URL</label>
                        <input type="text" id="url" />
                    </div>
                    <div>
                        <button onClick={cancel}>Cancel</button>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default EditForm;