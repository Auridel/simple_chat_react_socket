import React, {useEffect} from "react";
import Login from "../login/login";
import Chat from "../chat/chat";
import socket from "../../socket";
import {connect} from "react-redux";
import {ROOM_JOINED} from "../../actions";

import "./app.scss";

const App = ({ROOM_JOINED, joined}) => {

    useEffect(() => {
        socket.on("ROOM_JOINED", onJoin)
    }, [])

    const onJoin = ({room, users}) => {
        ROOM_JOINED(room, users);
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
    ROOM_JOINED
}

export default connect(mapStateToProps, mapDispatchToProps)(App);