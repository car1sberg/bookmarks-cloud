
const initialState = ''

const FIND_USER = 'FIND_USER';

export default function userSearchValue(state = initialState, action) {

    switch (action.type) {
        case FIND_USER:
           return action.payload;
        default:    
            return state;
    }
}