
const initialState = {
    
}

export default function bookmarks(state = initialState, action) {

    switch (action.type) {
        case ADD_BOOKMARK:
           return [
               ...state, 
               action.payload
            ];
        case DELETE_BOOKMARK:
           return state.filter(item => item.id !== action.payload);
        case EDIT_BOOKMARK :
            const active = state.find(item => item.id === action.itemId)
            const comment = Object.assign({}, action.payload);

            active.comments.push(comment);
            return [...state];
            
        default:    
            return state;
    }
}