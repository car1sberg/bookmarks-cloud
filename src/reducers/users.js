
import { avatars } from '../components/UserEditForm';

const defaultAvatar = avatars[0];

const initialState = [
    { 
        id: 1,
        name: 'Volodymyr',
        email: 'my_email@example.com',
        image: defaultAvatar,
    },
    { 
        id: 2,
        name: 'Anonymous',
        email: 'anon@gmail.com',
        image: defaultAvatar,
    },
]
    
const EDIT_USER = 'EDIT_USER';
const ADD_USER = 'ADD_USER';

export default function users(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
           return [
               ...state, 
               action.payload
            ];
        case EDIT_USER:
            const updated = state.map(user => {
                if (user.id === action.payload.id) {
                    return{...user, ...action.payload}
                }
                return user;
            })
            return updated;
        default:    
            return state;
    }
}