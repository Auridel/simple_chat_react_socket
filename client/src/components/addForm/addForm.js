import React from "react";

import "./addForm.scss";

const AddForm = () => {
    return (
        <div className="add-form">
            <textarea className="add-form__input"/>
            <button className="add-form__btn">Send</button>
        </div>
    )
};

export default AddForm;