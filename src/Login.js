import React from "react";
// login method icons
import {GoogleOutlined} from "@ant-design/icons";

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-box">
                <h3>Chat</h3>

                <div className="button-login google-button">
                    <GoogleOutlined /> Sign in with Google
                </div>
                <br />

            </div>
        </div>
    );
}

export default Login;