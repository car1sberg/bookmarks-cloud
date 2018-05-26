
import React, { Component } from 'react';
import '../css/SettingsAppearence.css';

class SettingsAppearence extends Component {
    render() {
        return(
            <div className="appearence-block">
                <span className="appearence-title">Appearence</span>
                <div className="first-main-part">
                    <span>Themes</span>
                    <div className="radio-buttons">
                        <div className="input-label">
                            <input 
                                className="radio"
                                type="radio" 
                                id="white"
                                name="theme"
                                value="white"
                                defaultChecked />
                            <label htmlFor="white">White</label>
                        </div>
                        <div className="input-label">
                            <input 
                                className="radio"
                                type="radio"
                                id="black"
                                name="theme"
                                value="black" />
                            <label htmlFor="black">Black</label>
                        </div>
                    </div>
                </div>
                <div className="main-part settings-bookmarks">
                    <span>Add bookmark</span>
                    <ul className="settings-bookmarks-list"><li>Bookmark title</li></ul>
                    <div className="settings-addInput-block">
                        <input type="text" />
                        <span>Add</span>
                    </div>
                </div>
                <div className="checkbox-part">
                    <span>Show bookmarks</span>
                    <div>
                        <input type="checkbox" className="bookmarks-checkbox" id="bookmarks-checkbox" />
                        <label htmlFor="bookmarks-checkbox"></label>
                    </div>
                </div>
                <div className="fontSize-part">
                    <span>Font size</span>
                    <div className="font-dropdown">
                        <span>Medium</span>
                        <div className="dropdown-btn-block">
                            <i className="fa fa-caret-down caret"></i>
                        </div>
                    </div>
                </div>
                <div className="zoom-part"></div>
            </div>
        )
    }
}

export default SettingsAppearence;