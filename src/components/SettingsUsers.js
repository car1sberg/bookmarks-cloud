
import React, { Fragment, Component } from 'react';
import '../css/SettingsUsers.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import UserCreateForm from './UserCreateForm';
import UserEditForm from './UserEditForm';
import { avatars } from './UserEditForm';
import PropTypes from 'prop-types';


class SettingsUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreating: false,
            isEditing: false,
            currentUser: undefined,
            activeIndex: -1,
        }
    }

    setAvatarToDefault() {
        this.props.setDeafaultAvatar(avatars[0]);
    }

    handleEditUserOpen(user, i) {
        this.setState({ currentUser: user, isEditing: true, activeIndex: i })
    }

    handleEditUserClose() {
        this.setState({ isEditing: false, activeIndex: -1 })
        this.setAvatarToDefault()
    }

    handleUpdate(e) {
        e.preventDefault();
        let id = this.state.currentUser.id;
        let name = this.editInputName.value;
        let email = this.editInputEmail.value;
        let image = this.props.activeAvatar;
        if (name.trim().length !== 0 && email.trim().length !== 0) {
            this.props.onEditUser(id, name, email, image)
            this.setState({ isEditing: false, activeIndex: -1 })
            this.setAvatarToDefault()
        }
    }

    handleAddUser(e) {
        e.preventDefault();
        let id = Date.now();
        let name = this.createInputName.value;
        let email = this.createInputEmail.value;
        let image = avatars[0];
        if (name.trim().length !== 0 && email.trim().length !== 0) {
            this.props.onAddUser(id, name, email, image)
            this.setState({ isCreating: false })
        }
    }

    handleAddUserOpen() {
        this.setState({ isCreating: true })
    }

    handleAddUserClose() {
        this.setState({ isCreating: false })
    }

    render() {
        const { users, userSearchValue } = this.props;
        const { isCreating, activeIndex, currentUser } = this.state;
        const filteredUsers = users.filter(user => 
            user.name.toLowerCase().includes(userSearchValue.trim().toLowerCase()));

        return(
            <Fragment>
                <span className="user-title" id="people">People</span>
                <div className="default-settings-block">
                    <ul>
                        {filteredUsers.map((user, i) =>  {
                            const current = activeIndex === i;
                            // DISPLAYING USER LIST
                            return(
                                <li key={i}>
                                    <div className="user-profile">
                                        <div className="user-avatar-block">
                                            <div className="avatar">
                                                <img src={user.image} alt="Avatar" />
                                            </div>
                                            <div className="user-info">
                                                <span>{user.name}</span>
                                                <span className="user-email">{user.email}</span>
                                            </div>
                                        </div>
                                        <span 
                                            className="edit-user"
                                            onClick={this.handleEditUserOpen.bind(this, user, i)}
                                            >Edit
                                        </span>
                                    </div>
                                    {current && <UserEditForm 
                                        currentUser={currentUser}
                                        editInputName={input => this.editInputName = input}
                                        editInputEmail={input => this.editInputEmail = input}
                                        cancel={this.handleEditUserClose.bind(this)} 
                                        update={this.handleUpdate.bind(this)}/>
                                    }
                                </li>
                            )}
                        )}
                    </ul>
                </div>
                    <div className="manage-people">
                        <span onClick={this.handleAddUserOpen.bind(this)}>Manage other people</span>
                        {isCreating && 
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <UserCreateForm 
                                createInputName={input => this.createInputName = input}
                                createInputEmail={input => this.createInputEmail = input}
                                cancel={this.handleAddUserClose.bind(this)} 
                                create={this.handleAddUser.bind(this)}/>
                        </div>
                            }
                    </div>
            </Fragment>
        )
    }
}

SettingsUsers.propTypes = {
    onAddUser: PropTypes.func,
    onEditUser: PropTypes.func,
    setDeafaultAvatar: PropTypes.func,
    users: PropTypes.array,
    userSearchValue: PropTypes.string
}

export default withRouter(connect(
    state => ({
        users: state.users,
        userSearchValue: state.userSearchValue,
        activeAvatar: state.activeAvatar
    }),
    dispatch => ({
        onAddUser: (userId, userName, userEmail, userImage) => {
            const payload = {
                id: userId,
                name: userName,
                email: userEmail,
                image: userImage
            };
            dispatch({ type: 'ADD_USER', payload })
        },
        onEditUser: (userId, userName, userEmail, userImage) => {
            const payload = {
                id: userId,
                name: userName,
                email: userEmail,
                image: userImage
            };
            dispatch({ type: 'EDIT_USER', payload })
        },
        setDeafaultAvatar: (path) => {
            const payload = path
            dispatch({ type: 'SET_USER_AVATAR', payload })
        },
    })
)(SettingsUsers));