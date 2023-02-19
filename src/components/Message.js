import React from "react";
import {useNavigate} from "react-router-dom";
import {ChatEngine} from "react-chat-engine";
import {auth} from "../firebase";


const Message = () => {
    return (
        <div className="message-page">
            <div className="navbar">
                <div className="logo">
                    Message
                </div>
                <div className="logout">
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                pro
                />
        </div>



    );
}

export default Message;