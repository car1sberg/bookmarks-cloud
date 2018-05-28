
import React, { Component } from 'react';
import '../css/UserCreateForm.css';
import avatars from './UserAvatars';



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
                    {/* icons group */}
                    <div className="user-avatar-default">
                        <ul>
                            {avatars.map((avatar, index) => 
                                <li key={index}>
                                    <div className="single-img-block">
                                    {avatar}
                                    </div>
                                </li>
                            )}
                        </ul>
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

export default UserCreateForm;