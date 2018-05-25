
import React, { Component } from 'react';
import '../css/Bookmarks.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import CreateForm from './CreateForm';
import EditForm from './EditForm';

class Bookmarks extends Component {
    state = {
        isEditing: false,
        isCreating: false,
    }

    startCreating() {
        this.setState({ isEditing: false, isCreating: true })
    }

    handleCreate(e) {
        e.preventDefault();
        let title = this.createInputTitle.value;
        let url = this.createInputUrl.value;
        if (title.trim().length !== 0 && url.trim().length !== 0) {
            this.props.onAddBookmark(title, url);
            title = '';
            url = '';
            this.setState({ isCreating: false})
        }
    }

    handleCancelCreating() {
        this.setState({ isCreating: false })
    }

    handleCancelEditing() {
        this.setState({ isEditing: false })
    }

    startEditing(bookmark) {
        this.setState({ isCreating: false, isEditing: true, currentBookmark: bookmark})
    }

    handleUpdate(e) {
        e.preventDefault();
        let id = this.state.currentBookmark.id;
        let title = this.editInputTitle.value;
        let url = this.editInputUrl.value;
        if (title.trim().length !== 0 && url.trim().length !== 0) {
            this.props.onEditBookmark(id, title, url)
            this.setState({ isEditing: false })
        }
    }

    render() {
        const { bookmarks, inputValue } = this.props;
        const { isCreating, isEditing, currentBookmark } = this.state;
        const filteredBookmarks = bookmarks.filter((bookmark) => 
            bookmark.title.toLowerCase().includes(inputValue.toLowerCase()));

        return(
            <div className="main-block">
                <div className="bookmark-list">
                    <span className="bookmark-list-title">
                        {filteredBookmarks.length !== 0 ? 'Bookmark list' : 'Nothing was found :('}
                    </span>
                    <ul>
                        {filteredBookmarks.map((bookmark,index) => 
                            <li key={index} className="bookmark-row">
                                <span>{bookmark.title}</span>
                                <span 
                                    className="edit-bookmark"
                                    onClick={this.startEditing.bind(this, bookmark)}
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
                        editInputTitle={input => this.editInputTitle = input}
                        editInputUrl={input => this.editInputUrl = input}
                        currentBookmark={currentBookmark}
                        cancel={this.handleCancelEditing.bind(this)}
                        update={this.handleUpdate.bind(this)}/>
                }
                {isCreating &&
                    <CreateForm 
                        createInputTitle={(input) => this.createInputTitle = input}
                        createInputUrl={(input) => this.createInputUrl = input}
                        create={this.handleCreate.bind(this)}
                        cancel={this.handleCancelCreating.bind(this)}/>
                }
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({
        bookmarks: state.bookmarks,
        inputValue: state.inputValue
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
        onEditBookmark: (bookmarkId, bookmarkTitle, bookmarkUrl) => {
            const payload = {
                id: bookmarkId,
                title: bookmarkTitle,
                url: bookmarkUrl
            }
            dispatch({ type: 'EDIT_BOOKMARK',  payload })
        }
    })
)(Bookmarks))