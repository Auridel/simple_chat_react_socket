import React from "react";
import Messages from "../messages/messages";
import AddForm from "../addForm/addForm";
import Users from "../users/users";

import "./chat.scss";

const Chat = () => {
    return(
        <section className="chat">
            <Users/>
            <div className="chat__wrapper">
                <Messages/>
                <AddForm/>
            </div>
        </section>
    )
};

export default Chat;