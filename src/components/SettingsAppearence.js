
import React, { Component } from 'react';
import '../css/SettingsAppearence.css';
import FontBlock from './FontBlock';
import ZoomBlock from './ZoomBlock';
import AdvancedBlock from './AdvancedBlock';
import AppearenceBlock from './AppearenceBlock';

class SettingsAppearence extends Component {
    render() {
        return(
            <div className="appearence-block">
                <AppearenceBlock />
                <FontBlock />
                <ZoomBlock />
                <AdvancedBlock />
            </div>
        )
    }
}

export default SettingsAppearence;