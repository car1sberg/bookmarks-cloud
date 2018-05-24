
import React, { Fragment } from 'react';
import '../css/CreateForm.css'


const CreateForm = ({ cancel, create }) => {
    return(
        <Fragment>
            <span className="create-title">Create</span>
            <div className="create-form-block">
                <form>
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
                        <button onClick={create}>Create</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default CreateForm;