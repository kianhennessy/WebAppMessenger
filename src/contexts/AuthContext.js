import React, {useContext, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from '../firebase';

// create context
const AuthContext = React.createContext();

// export entire context
// when function is called get access to populated context
export function useAuth() { return useContext(AuthContext) }

// children will render js passed into AuthProvider
export function AuthProvider({ children }) {
    // set up states
    const [loading, setLoading] = useState(true)
    // user object
    const [user, setUser] = useState()
    // call useHistory hook to redirect user
    const history = useHistory()

    useEffect(() => {
        // grab user from firebase auth
        auth.onAuthStateChanged((user) => {
            setUser(user)
            // stop loading when user is set
            setLoading(false)
            // redirect to message page if user is logged in
            if(user) history.push('/message')
        })
        // call useEffect when user or history changes (when redirect happens or add user)
    }, [user, history])

    const value = {user}

    return (
        <AuthContext.Provider value={value}>
            {/*show children components when not loading*/}
            {!loading && children}
        </AuthContext.Provider>
    )
}