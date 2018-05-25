
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/BookmarksHeader.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class BookmarksHeader extends Component {
    // state = {
    //     search: ''
    // }

    getValue(e) {
        // this.setState({ search: e.target.value })
        this.props.onGetValue(e.target.value);
    }

    render() {
        // const { search } = this.state;

        return(
            <header className="bookmarks-header">
                <div className="logoBlock">
                    <h1>Bookmarks</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <input 
                    type="text"
                    // value={search}
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