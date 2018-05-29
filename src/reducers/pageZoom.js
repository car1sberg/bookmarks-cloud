
const initialState = 1;

const SET_ZOOM = 'SET_ZOOM';

export default function pageZoom(state = initialState, action) {

    switch (action.type) {
        case SET_ZOOM:
           return action.payload;
        default:    
            return state;
    }
}