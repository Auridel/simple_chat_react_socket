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
            const {room, users, userName} = action.payload;
            console.log(action.payload)
            return {
                ...state,
                joined: true,
                users: users,
                room: room,
                userName: userName
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
        default: return state;
    }
};

export default reducer;