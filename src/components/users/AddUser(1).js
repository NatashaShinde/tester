import React from "react";

const AddUserOne = () => {
    return (
        <div className="container">
            <h1>message you would like to send</h1>

            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input id="messageIn"
                        type="text"
                        placeholder="Enter Your Message"
                        name="messageIn"
                        value={message}
                        onChange={e => onInputChange(e)} />
                </div>

                <button type="button" id="sendBtn">Add mesage</button>
                
            </form>
        </div>
        );
}

export default AddUserOne;