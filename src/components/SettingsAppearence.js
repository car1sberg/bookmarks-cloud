
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
                    <div className="dropdown-block">
                        <div className="font-dropdown">
                            <div className="dropdown-title">
                                <span>Medium</span>
                            </div>
                        </div>
                        <div class="dropdown">
                            <i className="fa fa-caret-down caret"></i>
                            <div class="dropdown-content-font">
                                <ul>
                                    <li>Small</li>
                                    <li>Medium</li>
                                    <li>Large</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="zoom-part">
                    <span>Page zoom</span>
                    <div className="dropdown-block">
                        <div className="zoom-dropdown">
                            <div className="dropdown-title">
                                <span>100%</span>
                            </div>
                        </div>
                        <div class="dropdown">
                            <i className="fa fa-caret-down caret"></i>
                            <div class="dropdown-content-zoom">
                                <ul>
                                    <li>90%</li>
                                    <li>100%</li>
                                    <li>110%</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="advanced-title">
                    <h3>Advanced</h3>
                </div>
                <span className="printing-title">Printing</span>
                <div className="printing-part">
                    <span>Printers</span>
                </div>
                <span className="reset-title">Reset</span>
                <div className="reset-part">
                    <span className="reset-ref">Reset</span>
                    <span className="reset-explanation">Restore settings to their original defaults</span>
                </div>
            </div>
        )
    }
}

export default SettingsAppearence;