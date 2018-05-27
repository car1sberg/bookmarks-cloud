
import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class AppearenceBlock extends Component {
    state = {
        showBookmarks: false,
        isDark: false
    }

    handleShowBookmarks() {
        setTimeout(() => 
            this.setState({ showBookmarks: !this.state.showBookmarks }), 500)
    }

    handleThemeToWhite() {
        this.setState({ isDark: false })
        this.props.onSwitchTheme(this.state.isDark);
    }

    handleThemeToBlack() {
        this.setState({ isDark: true })
        this.props.onSwitchTheme(this.state.isDark);
    }

    render() {
        const { showBookmarks, isDark } = this.state;
        const { darkTheme } = this.props;
        console.log('dark from SETTINGS: ', darkTheme)

        return(
            <Fragment>
                <span className="appearence-title" id="appearence">Appearence</span>
                <div className="first-main-part">
                    <span>Themes</span>
                    <div className="radio-buttons">
                        <div className="input-label" onClick={this.handleThemeToWhite.bind(this)}>
                            <input 
                                className="radio"
                                type="radio" 
                                defaultChecked={!isDark}
                                id="white"
                                name="theme"
                                value="white"/>
                            <label htmlFor="white">White</label>
                        </div>
                        <div className="input-label" onClick={this.handleThemeToBlack.bind(this)}>
                            <input 
                                className="radio"
                                defaultChecked={isDark}
                                type="radio"
                                id="black"
                                name="theme"
                                value="black" />
                            <label htmlFor="black">Black</label>
                        </div>
                    </div>
                </div>
                {showBookmarks &&
                    <div className="main-part settings-bookmarks">
                        <span>Add bookmark</span>
                        <ul className="settings-bookmarks-list"><li>Bookmark title</li></ul>
                        <div className="settings-addInput-block">
                            <input type="text" />
                            <span>Add</span>
                        </div>
                    </div>
                }
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
        darkTheme: state.theme
    }),
    dispatch => ({
        onSwitchTheme: (bool) => {
            const payload = bool;
            dispatch({ type: 'SWITCH_THEME', payload })
        }
    })
)(AppearenceBlock));