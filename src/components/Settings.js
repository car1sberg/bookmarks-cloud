
import React from 'react';
import '../css/Settings.css';
import SettingsUsers from './SettingsUsers';
import SettingsAside from './SettingsAside';
import SettingsAppearence from './SettingsAppearence';


const Settings = () => {
    return(
        <div className="settings-main-block">
            <SettingsAside />
            <div className="settings-info">
                <SettingsUsers />
                <SettingsAppearence />
            </div>
        </div>
    )
}

export default Settings;