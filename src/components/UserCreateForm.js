
import React, { Component } from 'react';
import '../css/UserCreateForm.css';
import PropTypes from 'prop-types';


class UserCreateForm extends Component {
    
    render() {
        const { create, cancel, createInputName, createInputEmail } = this.props;
        
        return (
            <div className="createUser-form-block">
                <form className="create-user" onSubmit={create}>
                    {/* username */}
                    <div className="create-name-block">
                        <label className="createUser-label" htmlFor="title">Username</label>
                        <input 
                            className="createUser-input"
                            ref={createInputName}
                            maxLength={20}
                            type="text"
                            id="title" />
                    </div>
                    {/* email */}
                    <div className="create-email-block">
                        <label className="createUser-label" htmlFor="url">Email</label>
                        <input 
                            className="createUser-input"
                            maxLength={30}
                            ref={createInputEmail}
                            type="text"
                            id="url" />
                    </div>
                    {/* buttons */}
                    <div className="btnUser-group">
                        <button onClick={cancel}>Cancel</button>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

UserCreateForm.propTypes = {
    create: PropTypes.func,
    cancel: PropTypes.func,
    createInputName: PropTypes.func,
    createInputEmail: PropTypes.func
}

export default UserCreateForm;