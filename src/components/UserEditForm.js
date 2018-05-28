
import React from 'react';
import '../css/UserEditForm.css';
import avatars from './UserAvatars';

const UserEditForm = ({ editInputName, editInputEmail, cancel, update, currentUser }) => {
    return (
        <div className="editUser-form-block">
            <form className="editUser-form" onSubmit={update}>
                <div className="edit-name-block">
                    <label className="editUser-label" htmlFor="username">Username</label>
                    <input 
                        className="editUser-input"
                        ref={editInputName}
                        type="text"
                        maxLength={20}
                        defaultValue={currentUser.name}
                        id="username" />
                </div>
                <div className="edit-email-block">
                    <label className="editUser-label" htmlFor="email">Email</label>
                    <input 
                        className="editUser-input"
                        ref={editInputEmail}
                        type="text"
                        maxLength={30}
                        defaultValue={currentUser.email}
                        id="email" />
                </div>
                <div className="userEdit-avatar-default">
                    <ul>
                        {avatars.map((avatar, index) => 
                            <li key={index}>
                                <div 
                                    id="active-edit-ava"
                                    className="single-img-editBlock">
                                    {avatar}
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="btnEditUser-group">
                    <button onClick={cancel}>Cancel</button>
                    <input type="submit" value="Update" />
                </div>
            </form>
        </div>
    )
}

export default UserEditForm;