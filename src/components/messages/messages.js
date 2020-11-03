import React from "react";

import "./messages.scss";

const Mesages = () => {
    return (
        <div className="chat__messages-container">
            <ul className="chat__messages-list">
                <li className="chat__message">Hello</li>
                <li className="chat__message yours">Hi</li>
            </ul>
        </div>
    )
};

export default Mesages;