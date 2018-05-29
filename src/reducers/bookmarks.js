
const initialState = [
    {
        id: 1,
        title: "Google",
        url: 'https://google.com',
    },
    {
        id: 2,
        title: "GitHub",
        url: 'https://google.com',
    },
    {
        id: 3,
        title: "YouTube",
        url: 'https://github.com',
    },
]

const ADD_BOOKMARK = 'ADD_BOOKMARK';
const EDIT_BOOKMARK = 'EDIT_BOOKMARK';

export default function bookmarks(state = initialState, action) {

    switch (action.type) {
        case ADD_BOOKMARK:
           return [
               ...state, 
               action.payload
            ];
        case EDIT_BOOKMARK:
            const updated = state.map(bookmark => {
                if (bookmark.id === action.payload.id) {
                    return{...bookmark, ...action.payload}
                }
                return bookmark;
            })
            return updated;
        default:    
            return state;
    }
}