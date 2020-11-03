import React, {useEffect} from "react";
import Login from "../login/login";
import Chat from "../chat/chat";
import socket from "../../socket";
import {connect} from "react-redux";
import {ROOM_JOINED, SET_USERNAME} from "../../actions";

import "./app.scss";

const App = ({ROOM_JOINED, joined, SET_USERNAME}) => {

    useEffect(() => {
        socket.on("ROOM_JOINED", onJoin);
        socket.on("SET_USERNAME", onSetUsername)
    }, [])

    const onJoin = ({room, users}) => {
        ROOM_JOINED(room, users);
    }
    const onSetUsername = (name) => {
        SET_USERNAME(name);
    }


    return (
        <>
            {joined? <Chat/> : <Login/>}
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        joined: state.joined
    }
}
const mapDispatchToProps = {
    ROOM_JOINED,
    SET_USERNAME
}

export default connect(mapStateToProps, mapDispatchToProps)(App);