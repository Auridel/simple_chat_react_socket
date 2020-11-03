import React, {useEffect} from "react";
import {connect} from "react-redux";
import socket from "../../socket";
import {UPDATE_MESSAGES} from "../../actions";

import "./messages.scss";

const Messages = ({messages, UPDATE_MESSAGES}) => {

    useEffect(() => {
        socket.on("NEW_MESSAGE", updateMessages)
    })

    const updateMessages = (arr) => {
        UPDATE_MESSAGES(arr);
    }

    return (
        <div className="chat__messages-container">
            <ul className="chat__messages-list">
                {messages.map(item =>
                    <li key={item.id} 
                        className="chat__message">{item.msg}<span className="chat__message-user">{item.user}</span></li>
                )}
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}
const mapDispatchToProps = {
    UPDATE_MESSAGES
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);