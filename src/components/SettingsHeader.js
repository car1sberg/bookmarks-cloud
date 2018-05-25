
import React, { Component } from 'react';
import '../css/SettingsHeader.css';

class SettingsHeader extends Component {
    render() {
        return(
            <div className="settings-header">
                <div className="settings-title">
                    <h1>Settings</h1>
                </div>
                <div className="settings-input">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
        )
    }
}

export default SettingsHeader;