
const initialState = [
    {
        id: 1,
        title: "Some good title",
        url: '',
        ObjectId: 1
    },
    {
        id: 2,
        title: "Another good title",
        url: '',
        ObjectId: 1
    },
    {
        id: 3,
        title: "One more good title",
        url: '',
        ObjectId: 1
    },
]

const ADD_BOOKMARK = 'ADD_BOOKMARK';
const EDIT_BOOKMARK = 'EDIT_BOOKMARK';
const SEARCH_BOOKMARKS = 'SEARCH_BOOKMARKS';

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
        case SEARCH_BOOKMARKS:
            const filtered = state.filter(bookmark => 
                bookmark.title.toLowerCase().includes(action.payload.toLowerCase()))
            return filtered;
        default:    
            return state;
    }
}