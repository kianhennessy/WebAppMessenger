import React, {useRef, useState, useEffect} from "react";

import axios from "axios"
import {useHistory} from "react-router-dom"
import {ChatEngine} from "react-chat-engine"

import {useAuth} from "../contexts/AuthContext"
import {auth} from "../firebase"

export default function Message() {
    const didMountRef = useRef(false)
    const [loading, setLoading] = useState(true)
    const {user} = useAuth()
    const history = useHistory()

    async function Logout () {
        await auth.signOut()
        history.push("/")
    }

    async function getFile(url) {
        let response = await fetch(url);
        let data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: 'image/jpeg'});
    }

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true

            if (!user || user === null) {
                history.push("/")
                return
            }

            // Get-or-Create should be in a Firebase Function
            axios.get(
                'https://api.chatengine.io/users/me/',
                { headers: {
                        "project-id": '8afaea8d-1514-4b90-bc09-a5f244987db7',
                        "user-name": user.email,
                        "user-secret": user.uid
                    }}
            )

                .then(() => setLoading(false))

                .catch(e => {
                    let formdata = new FormData()
                    formdata.append('email', user.email)
                    formdata.append('username', user.email)
                    formdata.append('secret', user.uid)

                    getFile(user.photoURL)
                        .then(avatar => {
                            formdata.append('avatar', avatar, avatar.name)

                            axios.post(
                                'https://api.chatengine.io/users/',
                                formdata,
                                {headers: { "private-key": "69bf80d7-db82-427c-8830-1b78c5abdbd0"} }
                            )
                                .then(() => setLoading(false))
                                .catch(e => console.log('e', e.response))
                        })
                })
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        }
    }, [user, history])

    if (!user || loading) return <div />

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
                userName={user.email}
                userSecret={user.uid}
                />
        </div>
    )
}
