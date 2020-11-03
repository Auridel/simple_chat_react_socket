import React, {useEffect} from "react";
import {connect} from "react-redux";
import socket from "../../socket";
import {UPDATE_USERS} from "../../actions";

import "./users.scss";

const Users = ({users, room, UPDATE_USERS}) => {

    useEffect(() => {
        socket.on("USER_LEFT", onLeft)
    }, [])

    const onLeft = (users) => {
        UPDATE_USERS(users);
    }

    return (
        <aside className="users">
            <p className="users__room"><span className="users__strong">Room: </span>{room}</p>
            <ul className="users__list">
                {users.map(item => <li key={item} className="users__list-item">{item}</li>)}
            </ul>
        </aside>
    )
};

const mapStateToProps = (state) => {
    return{
        room: state.room,
        users: state.users
    }
}
const mapDispatchToProps = {
    UPDATE_USERS
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);