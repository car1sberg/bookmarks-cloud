
import React from 'react';
import smile from '../assets/icons/smile.svg';
import '../css/SettingsAside.css';
import { Link } from 'react-router-dom';

const smileIcon = <img src={smile} className="smile-icon" alt="smile" />

const SettingsAside = () => {
    return(
        <aside>
            <ul className="aside-list">
                <li>
                    {smileIcon}
                    <span><a href="#people">People</a></span>
                </li>
                <li>
                    {smileIcon}
                    <span><a href="#reset">Appearence</a></span>
                    <div className="aside-advanced">
                        <span className="aside-title">Advanced</span>
                        <ul className="advanced-list">
                            <li>
                                {smileIcon}
                                <span><a href="#print">Printing</a></span>
                            </li>
                            <li>
                                {smileIcon}
                                <span><a href="#reset">Reset</a></span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><span><Link to="/bookmarks-cloud">Exit</Link></span></li>
            </ul>
        </aside>
    )
}

export default SettingsAside;