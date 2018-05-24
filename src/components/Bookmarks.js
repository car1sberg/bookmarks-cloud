
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

    handleCreate() {
        this.setState({ isCreating: true, isEditing: false })
    }

    handleCancelCreating() {
        this.setState({ isCreating: false })
    }

    handleCancelEditing() {
        this.setState({ isEditing: false })
    }

    handleEdit() {
        this.setState({ isEditing: true, isCreating: false })
    }

    handleUpdate() {
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
                                    onClick={this.handleEdit.bind(this)}
                                    >Edit
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
                <p 
                    className="create-bookmark-link"
                    onClick={this.handleCreate.bind(this)}
                    >Create a bookmark
                </p>
                {isEditing &&
                    <EditForm 
                        cancelEditing={this.handleEdit.bind(this)}
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
        onAddBookmark: (itemTitle) => {
            const payload = {
                id: Date.now(),
                title: itemTitle,
                comments: []
            };
            dispatch({ type: 'ADD_ITEM', payload })
        },
        onDeleteBookmark: (id) => {
            dispatch({ type: 'DELETE_ITEM',  payload: id })
        },
        onEditBookmark: () => {
            const payload = {
                isOpened: false
            }
            dispatch({ type: 'IS_CLOSED',  payload })
        }
    })
)(Bookmarks))