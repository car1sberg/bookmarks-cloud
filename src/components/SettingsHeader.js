
import React, { Component } from 'react';
import '../css/SettingsHeader.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SettingsHeader extends Component {

    getValue(e) {
        this.props.onFindUser(e.target.value);
    }

    componentWillUnmount() {
        const refreshValue = '';
        this.props.onFindUser(refreshValue);
    }

    render() {
        return(
            <div className="settings-header">
                <div className="settings-title">
                    <h1>Settings</h1>
                </div>
                <div className="settings-input">
                    <input 
                        type="text"
                        value={this.props.userSearchValue}
                        placeholder="Search..."
                        onChange={this.getValue.bind(this)}/>
                </div>
            </div>
        )
    }
}

SettingsHeader.propTypes = {
    onFindUser: PropTypes.func,
}

export default withRouter(connect(
    state => ({
        userSearchValue: state.userSearchValue
    }),
    dispatch => ({
        onFindUser: (inputValue) => {
            const payload = inputValue;
            dispatch({ type: 'FIND_USER', payload })
        },
    })
)(SettingsHeader));