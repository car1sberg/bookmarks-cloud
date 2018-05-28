
const initialState = true;

const SWITCH_THEME = 'SWITCH_THEME';

export default function theme(state = initialState, action) {
    switch (action.type) {
        case SWITCH_THEME:
           return action.payload;
        default:    
            return state;
    }
}