import React, {useEffect} from "react";
import {connect} from "react-redux";
import socket from "../../socket";
import {UPDATE_MESSAGES} from "../../actions";

import "./messages.scss";

const Messages = ({messages, UPDATE_MESSAGES, userName}) => {

    useEffect(() => {
        socket.on("NEW_MESSAGE", updateMessages)
    }, [])

    const updateMessages = (msg) => {
        UPDATE_MESSAGES(msg);
    }

    return (
        <div className="chat__messages-container">
            <ul className="chat__messages-list">
                {messages.map(item =>
                    <li key={item.id}
                        className={`chat__message${item.user === userName ? " yours" : ""}`}>{item.msg}<span className="chat__message-user">{item.user}</span></li>
                )}
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        userName: state.userName
    }
}
const mapDispatchToProps = {
    UPDATE_MESSAGES
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);