
import React from 'react';
import '../css/Settings.css';
import smile from '../icons/smile.svg';

const smileIcon = <img src={smile} className="smile-icon" alt="smile" />

const Settings = () => {
    return(
        <div className="settings-main-block">
            <aside>
                <ul className="aside-list">
                    <li>
                        {smileIcon}
                        <span>People</span>
                    </li>
                    <li>
                        {smileIcon}
                        <span>Appearence</span>
                    </li>
                </ul>
                <div className="aside-advanced">
                    <span className="aside-title">Advanced</span>
                    <ul className="aside-list">
                        <li>
                            {smileIcon}
                            <span>Printing</span>
                        </li>
                        <li>
                            {smileIcon}
                            <span>Reset</span>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="settings-info">
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
            </div>
        </div>
    )
}

export default Settings;