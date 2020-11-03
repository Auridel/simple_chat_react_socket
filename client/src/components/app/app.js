import React from "react";
import Login from "../login/login";

import "./app.scss";
import Chat from "../chat/chat";

const App = () => {
    const logged = false;
    return (
        <>
            {logged? <Chat/> : <Login/>}
        </>
    )
};

export default App;