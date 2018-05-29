
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Bookmarks from './Bookmarks';
import BookmarksHeader from './BookmarksHeader';


class MainPage extends Component {
    render() {
        return(
            <div>
                <BookmarksHeader />
                <Bookmarks />
            </div>
        )
    }
}

MainPage.defaultProps = {
    isPrinting: false,
  };

export default withRouter(connect(
    state => ({
        isPrinting: state.print
    }),
    dispatch => ({
        onPrint: (value) => {
            const payload = value;
            dispatch({ type: 'START_PRINTING', payload })
        }
    })
)(MainPage));