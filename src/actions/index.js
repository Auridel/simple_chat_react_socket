const ROOM_JOINED = (room, users) => {
    return {
        type: "ROOM_JOINED",
        payload: {room, users}
    }
}

const UPDATE_USERS = (users) => {
    return {
        type: "UPDATE_USERS",
        payload: users
    }
}

const UPDATE_MESSAGES = (messages) => {
    return {
        type: "UPDATE_MESSAGES",
        payload: messages
    }
}

export {
    ROOM_JOINED,
    UPDATE_USERS,
    UPDATE_MESSAGES
}