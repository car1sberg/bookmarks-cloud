
import React, { Fragment } from 'react';
import '../css/CreateForm.css'


const CreateForm = ({ cancel, create, createInputTitle, createInputUrl }) => {
    return(
        <Fragment>
            <span className="create-title">Create</span>
            <div className="create-form-block">
                <form className="create-form" onSubmit={create}>
                    <div className="create-title-block">
                        <label className="create-label" htmlFor="title">Bookmark title</label>
                        <input 
                            className="create-input"
                            ref={createInputTitle}
                            type="text"
                            id="title" />
                    </div>
                    <div className="create-url-block">
                        <label className="create-label" htmlFor="url">Bookmark URL</label>
                        <input 
                            className="create-input"
                            ref={createInputUrl}
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

export default CreateForm;