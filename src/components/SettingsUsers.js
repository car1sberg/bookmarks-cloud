
import React, { Fragment, Component } from 'react';
import '../css/SettingsUsers.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import UserCreateForm from './UserCreateForm';
import UserEditForm from './UserEditForm';


class SettingsUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreating: false,
            isEditing: false,
            currentUser: undefined,
            activeIndex: -1
        }
    }

    handleEditUserOpen(user, i) {
        console.log('user:', user, 'i - ', i)
        this.setState({ currentUser: user, isEditing: true, activeIndex: i })
    }

    handleEditUserClose() {
        this.setState({ isEditing: false, activeIndex: -1 })
    }

    handleUpdate(e) {
        e.preventDefault();
        let id = this.state.currentUser.id;
        let name = this.editInputName.value;
        let email = this.editInputEmail.value;
        if (name.trim().length !== 0 && email.trim().length !== 0) {
            this.props.onEditUser(id, name, email)
            this.setState({ isEditing: false, activeIndex: -1 })
        }
    }

    handleAddUser(e) {
        e.preventDefault();
        let id = Date.now();
        let name = this.createInputName.value;
        let email = this.createInputEmail.value;
        if (name.trim().length !== 0 && email.trim().length !== 0) {
            this.props.onAddUser(id, name, email)
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

                            return(
                                <li key={i}>
                                    <div className="user-profile">
                                        <div className="user-avatar-block">
                                            <div className="avatar">
                                                <img src={user.image} alt="Avatar default" />
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

export default withRouter(connect(
    state => ({
        users: state.users,
        userSearchValue: state.userSearchValue
    }),
    dispatch => ({
        onAddUser: (userId, userName, userEmail) => {
            const payload = {
                id: userId,
                name: userName,
                email: userEmail,
                // image: userImage
            };
            dispatch({ type: 'ADD_USER', payload })
        },
        onEditUser: (userId, userName, userEmail) => {
            const payload = {
                id: userId,
                name: userName,
                email: userEmail,
                // image: userImage
            };
            dispatch({ type: 'EDIT_USER', payload })
        },
    })
)(SettingsUsers));