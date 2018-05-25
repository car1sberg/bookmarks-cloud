
import React from 'react';
import '../css/Settings.css';
import smile from '../icons/smile.svg';

const smileIcon = <img src={smile} className="smile-icon" alt="smile" />

const Settings = () => {
    return(
        <div>
            <aside>
                <div className="anchors">
                    {smileIcon}
                    <span>People</span>
                </div>
                <div className="anchors">
                    {smileIcon}
                    <span>Appearence</span>
                </div>
                
                
            </aside>
            <div></div>
        </div>
    )
}

export default Settings;