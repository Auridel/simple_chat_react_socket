const ROOM_JOINED = (room, users, userName) => {
    return {
        type: "ROOM_JOINED",
        payload: {room, users, userName}
    }
}

const UPDATE_USERS = (users) => {
    return {
        type: "UPDATE_USERS",
        payload: users
    }
}

const UPDATE_MESSAGES = (message) => {
    return {
        type: "UPDATE_MESSAGES",
        payload: message
    }
}

export {
    ROOM_JOINED,
    UPDATE_USERS,
    UPDATE_MESSAGES
}