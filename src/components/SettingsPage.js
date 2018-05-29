
import React, { Fragment, Component } from 'react';
import SettingsHeader from './SettingsHeader';
import Settings from './Settings';


const SettingsPage = () => {
    return(
        <Fragment>
            <SettingsHeader />
            <Settings />
        </Fragment>
    )
}

export default SettingsPage;