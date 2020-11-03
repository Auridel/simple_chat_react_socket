const initialState = {
    joined: false,
    room: null,
    userName: "",
    users: [],
    messages: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ROOM_JOINED": {
            const {room, users} = action.payload;
            console.log(action.payload)
            return {
                ...state,
                joined: true,
                users: users,
                room: room
            }
        }
        case "UPDATE_USERS": {
            return {
                ...state,
                users: action.payload
            }
        }
        case "UPDATE_MESSAGES": {
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        }
        case "SET_USERNAME": {
            return {
                ...state,
                userName: action.payload
            }
        }
        default: return state;
    }
};

export default reducer;