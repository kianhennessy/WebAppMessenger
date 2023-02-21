import React from "react";
// login method icons
import {GoogleOutlined} from "@ant-design/icons";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import {auth} from "../firebase";

export default function Login(){
    return (
        <div id="login-page">
            <div id="login-box">
                <h3>Chat</h3>
                <div className="button-login google-button"
                     onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign in with Google
                </div>
                <br/><br/>
            </div>
        </div>
    )
}