import React, {useRef, useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {ChatEngine} from "react-chat-engine";
import {auth} from "../firebase";

import {useAuth} from "../contexts/AuthContext";
import axios from "axios";

const Message = () => {
    const history = useHistory();
    const {user} = useAuth();
    const [loading, setLoading] = useState(true);

        const Logout = async () => {
            await auth.signOut();

            history.push("/");
    }

    useEffect(() => {
        if(!user) {
            history.push("/");
            return;
        }

        

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "8afaea8d-1514-4b90-bc09-a5f244987db7",
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append('email', user.email);
                formdata.append('username', user.email);
                formdata.append('secret', user.uid);
            })
    }, [user, history]);

    return (
        <div className="message-page">
            <div className="navbar">
                <div className="logo">
                    Message
                </div>
                <div onClick={Logout} className="logout">
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectID="8afaea8d-1514-4b90-bc09-a5f244987db7"
                userName="."
                userSecret="."
                />
        </div>
    );
}

export default Message;