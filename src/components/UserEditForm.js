
import React, { Component } from 'react';
import '../css/UserEditForm.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const isActive = {
    background: '#4aff64',
}

function importAvatars(r) {
    return r.keys().map(r);
  }
//   creating an arr of images taken from a folder using require.context API
export const avatars = importAvatars(require.context('../assets/avatars/', false, /\.(png|jpe?g|svg)$/));

class UserEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        }
    }

    handleSetCurrent(avatar, index) {
        this.setState({ activeIndex: index})
        this.props.setAvatar(avatar)
    }

    render() {
        const { activeIndex } = this.state;
        const { editInputName, editInputEmail, cancel, update, currentUser } = this.props;

        return (
            <div className="editUser-form-block">
                <form className="editUser-form" onSubmit={update}>
                    {/* Username section */}
                    <div className="edit-name-block">
                        <label className="editUser-label" htmlFor="username">Username</label>
                        <input 
                            className="editUser-input"
                            ref={editInputName}
                            type="text"
                            maxLength={20}
                            defaultValue={currentUser.name}
                            id="username" />
                    </div>
                    {/* Email section */}
                    <div className="edit-email-block">
                        <label className="editUser-label" htmlFor="email">Email</label>
                        <input 
                            className="editUser-input"
                            ref={editInputEmail}
                            type="text"
                            maxLength={30}
                            defaultValue={currentUser.email}
                            id="email" />
                    </div>
                    {/* Avatars section */}
                    <div className="userEdit-avatar-default">
                        <ul>
                            {avatars.map((avatar, index) => 
                                <li key={index} 
                                    className="edit-li"
                                    style={activeIndex === index ? isActive : null}>
                                    <div 
                                        onClick={this.handleSetCurrent.bind(this, avatar, index)}
                                        id="active-edit-ava"
                                        className="single-img-editBlock">
                                        <img src={avatar} className="default-avatars" alt="Avatar" />
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="btnEditUser-group">
                        <button onClick={cancel}>Cancel</button>
                        <input type="submit" value="Update" />
                    </div>
                </form>
            </div>
        )
    }
}

UserEditForm.propTypes = {
    update: PropTypes.func,
    cancel: PropTypes.func,
    editInputEmail: PropTypes.func,
    editInputName: PropTypes.func,
    setAvatar: PropTypes.func,
    currentUser: PropTypes.object
}

export default withRouter(connect(
    state => ({
        userAvatar: state.activeAvatar
    }),
    dispatch => ({
        setAvatar: (path) => {
            const payload = path
            dispatch({ type: 'SET_USER_AVATAR', payload })
        },
    })
)(UserEditForm));