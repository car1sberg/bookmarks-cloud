
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/BookmarksHeader.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BookmarksHeader extends Component {

    getValue(e) {
        this.props.onGetValue(e.target.value);
    }

    componentWillUnmount() {
        const refreshValue = '';
        this.props.onGetValue(refreshValue);
    }

    render() {
        return(
            <header className="bookmarks-header">
                <div className="logoBlock">
                    <h1>Bookmarks</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3><Link to="/settings">Settings</Link></h3>
                </div>
                <input 
                    type="text"
                    onChange={this.getValue.bind(this)}
                    className="bookmarks-field"
                    placeholder="Search..." />
            </header>
        )
    }
}

export default withRouter(connect(
    state => ({
        inputValue: state.inputValue
    }),
    dispatch => ({
        onGetValue: (inputValue) => {
            const payload = inputValue;
            dispatch({ type: 'GET_VALUE', payload })
        }
    })
)(BookmarksHeader));