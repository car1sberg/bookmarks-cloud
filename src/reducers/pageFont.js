
const initialState = 'Medium';

const SET_FONT = 'SET_FONT';

export default function pageFont(state = initialState, action) {

    switch (action.type) {
        case SET_FONT:
           return action.payload;
        default:    
            return state;
    }
}