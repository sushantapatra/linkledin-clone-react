import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './css/app.css'
import { selectUser, loginuser, logoutuser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widget from './Widget';

import { auth } from './firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";


function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect(() => {
        onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                //already login
                dispatch(loginuser({
                    displayName: userAuth.displayName,
                    email: userAuth.email,
                    uid: userAuth.id,
                    photoURL: userAuth.photoURL
                }))
            } else {
                //logout
                dispatch(logoutuser())
            }
        })
    }, [])

    return (
        <>
            {
                !user ? <Login /> : (
                    <div className="app_wrapper">
                        <Header />
                        <div className="app__body">
                            <Sidebar />
                            <Feed />
                            <Widget />
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default App;
