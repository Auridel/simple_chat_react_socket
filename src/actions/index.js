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

const UPDATE_MESSAGES = (message) => {
    return {
        type: "UPDATE_MESSAGES",
        payload: message
    }
}

const SET_USERNAME = (name) => {
    return {
        type: "SET_USERNAME",
        payload:name
    }
}

export {
    ROOM_JOINED,
    UPDATE_USERS,
    UPDATE_MESSAGES,
    SET_USERNAME
}