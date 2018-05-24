
import React, { Component } from 'react';
import '../css/Bookmarks.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import CreateForm from './CreateForm';
import EditForm from './EditForm';

class Bookmarks extends Component {
    state = {
        isEditing: false,
        isCreating: false
    }

    startCreating() {
        this.setState({ isEditing: false, isCreating: true })
    }

    handleCreate(e) {
        e.preventDefault();
        this.setState({ isCreating: false})
    }

    handleCancelCreating() {
        this.setState({ isCreating: false })
    }

    handleCancelEditing() {
        this.setState({ isEditing: false })
    }

    startEditing() {
        this.setState({ isCreating: false, isEditing: true})
    }

    handleUpdate(e) {
        e.preventDefault();
        this.setState({ isEditing: false })
    }

    render() {
        const { bookmarks } = this.props;
        const { isCreating, isEditing } = this.state;

        return(
            <div className="main-block">
                <div className="bookmark-list">
                    <span className="bookmark-list-title">
                        {bookmarks.length !== 0 ? 'Bookmark list' : 'Bookmark list is empty'}
                    </span>
                    <ul>
                        {bookmarks.map(bookmark => 
                            <li key={bookmark.id} className="bookmark-row">
                                <span>{bookmark.title}</span>
                                <span 
                                    className="edit-bookmark"
                                    onClick={this.startEditing.bind(this)}
                                    >Edit
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
                <p 
                    className="create-bookmark-link"
                    onClick={this.startCreating.bind(this)}
                    >Create a bookmark
                </p>
                {isEditing &&
                    <EditForm 
                        cancel={this.handleCancelEditing.bind(this)}
                        update={this.handleUpdate.bind(this)}/>
                }
                {isCreating &&
                    <CreateForm 
                        create={this.handleCreate.bind(this)}
                        cancel={this.handleCancelCreating.bind(this)}/>
                }
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({
        bookmarks: state.bookmarks
    }),
    dispatch => ({
        onAddBookmark: (bookmarkTitle, bookmarkUrl) => {
            const payload = {
                id: Date.now(),
                title: bookmarkTitle,
                url: bookmarkUrl
            };
            dispatch({ type: 'ADD_BOOKMARK', payload })
        },
        onEditBookmark: () => {
            const payload = {
                isOpened: false
            }
            dispatch({ type: 'EDIT_BOOKMARK',  payload })
        }
    })
)(Bookmarks))