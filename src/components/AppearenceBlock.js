
import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import AppearenceBookmarks from './AppearenceBookmarks';

class AppearenceBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showBookmarks: false,
            addBookmarkInput: ''
        }
    }

    handleShowBookmarks() {
        setTimeout(() => 
            this.setState({ showBookmarks: !this.state.showBookmarks }), 500)
    }

    handleThemeToWhite() {
        const light = true;
        this.props.onSwitchTheme(light);
        document.getElementById('body').classList.remove('darkTheme');
    }

    handleThemeToBlack() {
        const light = false;
        this.props.onSwitchTheme(light);
        document.getElementById('body').classList.add('darkTheme');
        document.getElementsByClassName('toggle-label')[0].style.color = 'inherit';
        document.getElementsByClassName('toggle-label')[1].style.color = 'inherit';
    }

    handleAddBookmark() {
        if (this.state.addBookmarkInput.trim().length !== 0 ) {
            this.props.onAddBookmark(this.state.addBookmarkInput)
            this.setState({ addBookmarkInput: '' })
        }
    }

    render() {
        const { showBookmarks } = this.state;
        const { lightTheme, bookmarks } = this.props;

        return(
            <Fragment>
                <span className="appearence-title" id="appearence">Appearence</span>
                {/* switching themes */}
                <div className="first-main-part">
                    <span>Themes</span>
                    <div className="radio-buttons">
                        <div className="input-label" onClick={this.handleThemeToWhite.bind(this)}>
                            <input 
                                className="radio"
                                type="radio"
                                checked={lightTheme}
                                onChange={this.handleThemeToWhite.bind(this)}
                                id="white"
                                name="theme"
                                value="white"/>
                            <label className="toggle-label" htmlFor="white">White</label>
                        </div>
                        <div className="input-label" onClick={this.handleThemeToBlack.bind(this)}>
                            <input 
                                className="radio"
                                checked={!lightTheme}
                                onChange={this.handleThemeToBlack.bind(this)}
                                type="radio"
                                id="black"
                                name="theme"
                                value="black" />
                            <label className="toggle-label" htmlFor="black">Black</label>
                        </div>
                    </div>
                </div>
                {/* bookmarks block */}
                {showBookmarks &&
                    <div className="main-part settings-bookmarks">
                        <AppearenceBookmarks bookmarks={bookmarks} />
                        <div className="settings-addInput-block">
                            <input 
                                onChange={(e) => this.setState({ addBookmarkInput: e.target.value })} 
                                type="text"
                                value={this.state.addBookmarkInput} />
                            <span onClick={this.handleAddBookmark.bind(this)}>Add</span>
                        </div>
                    </div>
                }
                {/* show bookmarks block */}
                <div className="checkbox-part">
                    <span>Show bookmarks</span>
                    <div>
                        <input type="checkbox" className="bookmarks-checkbox" id="bookmarks-checkbox" />
                        <label onClick={this.handleShowBookmarks.bind(this)} htmlFor="bookmarks-checkbox"></label>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(connect(
    state => ({
        lightTheme: state.theme,
        bookmarks: state.bookmarks,
    }),
    dispatch => ({
        onAddBookmark: (bookmarkTitle) => {
            const payload = {
                id: Date.now(),
                title: bookmarkTitle,
                url: 'was not added'
            };
            dispatch({ type: 'ADD_BOOKMARK', payload })
        },
        onSwitchTheme: (bool) => {
            const payload = bool;
            dispatch({ type: 'SWITCH_THEME', payload })
        }
    })
)(AppearenceBlock));