
const initialState = false;

const START_PRINTING = 'START_PRINTING';

export default function print(state = initialState, action) {
    switch (action.type) {
        case START_PRINTING:
           return action.payload;
        default:    
            return state;
    }
}