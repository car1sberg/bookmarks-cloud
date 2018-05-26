
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
                        <form>
                            <div className="input-label">
                                <input 
                                    className="radio"
                                    type="radio" 
                                    id="white"
                                    name="theme"
                                    value="white"
                                    checked />
                                <label for="white">White</label>
                            </div>
                            <div className="input-label">
                                <input 
                                    className="radio"
                                    type="radio"
                                    id="black"
                                    name="theme"
                                    value="black" />
                                <label for="black">Black</label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="main-part"></div>
                <div className="main-part"></div>
                <div className="main-part"></div>
                <div className="main-part"></div>
            </div>
        )
    }
}

export default SettingsAppearence;