
import React from 'react';
import smile from '../icons/smile.svg';
import '../css/SettingsAside.css';

const smileIcon = <img src={smile} className="smile-icon" alt="smile" />

const SettingsAside = () => {
    return(
        <aside>
            <ul className="aside-list">
                <li>
                    {smileIcon}
                    <span>People</span>
                </li>
                <li>
                    {smileIcon}
                    <span>Appearence</span>
                    <div className="aside-advanced">
                        <span className="aside-title">Advanced</span>
                        <ul className="advanced-list">
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
                </li>
            </ul>
        </aside>
    )
}

export default SettingsAside;