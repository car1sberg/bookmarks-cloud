
import React, { Fragment } from 'react';
import '../css/SettingsUsers.css';

const SettingsUsers = () => {
    return(
        <Fragment>
            <span className="user-title">People</span>
                <div className="default-settings-block">
                    <div className="user-profile">
                        <div className="user-avatar-block">
                        <div className="avatar"></div>
                        <div className="user-info">
                            <span>Username</span>
                            <span className="user-email">Email</span>
                        </div>
                        </div>
                        <span className="edit-user">Edit</span>
                    </div>
                </div>
                <div className="manage-people">
                    <span>Manage other people</span>
                </div>
        </Fragment>
    )
}

export default SettingsUsers;