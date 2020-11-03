import React from "react";

import "./users.scss";

const Users = () => {
    return (
        <aside className="users">
            <p className="users__room"><span className="users__strong">Room:</span> room 1</p>
            <ul className="users__list">
                <li className="users__list-item">user1</li>
                <li className="users__list-item">user2</li>
            </ul>
        </aside>
    )
};

export default Users;