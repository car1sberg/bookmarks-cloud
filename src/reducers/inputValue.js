

const initialState = ''

const GET_VALUE = 'GET_VALUE';

export default function inputValue(state = initialState, action) {

    switch (action.type) {
        case GET_VALUE:
           return action.payload;
        default:    
            return state;
    }
}