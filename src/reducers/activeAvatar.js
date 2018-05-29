
import defaultAvatar from '../assets/avatars/avatar1.png';

const initialState = defaultAvatar;
    
const SET_USER_AVATAR = 'SET_USER_AVATAR';

export default function activeAvatar(state = initialState, action) {
    switch (action.type) {
        case SET_USER_AVATAR:
           return action.payload
        default:    
            return state;
    }
}