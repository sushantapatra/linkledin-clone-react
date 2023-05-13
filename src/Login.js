import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './css/login.css'
import { auth } from './firebaseConfig'
import { loginuser } from './features/userSlice';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const dispatch = useDispatch();
    const [signup, setSignup] = useState(false)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        profile: ""
    })

    const [userlogin, setUserLogin] = useState({
        username: "",
        password: "",
    })


    const inputEvent = (e) => {
        const { name, value } = e.target
        setUser((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, user.email, user.password).then((userAuth) => {
            updateProfile(userAuth.user, {
                displayName: user.name,
                photoURL: user.profile
            }).then(() => {
                dispatch(loginuser({
                    displayName: user.name,
                    email: userAuth.email,
                    uid: userAuth.id,
                    photoURL: user.profile
                }))
            })
        }).catch(error => alert(error))
        setUser({
            name: "",
            email: "",
            password: "",
            profile: ""
        })
    }




    const inputEvent2 = (e) => {
        const { name, value } = e.target
        setUserLogin((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const formSubmitRegister = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, userlogin.username, userlogin.password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch(loginuser({
                displayName: user.displayName,
                email: user.email,
                uid: user.id,
                photoURL: user.photoURL
            }))
        }).catch(error => console.log(error))
    }
    return (
        <>

            <div className='loginScreen'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt="Login" />
                {
                    signup === true ? (
                        <form onSubmit={formSubmit}>
                            <input type="text" placeholder='Full Name' name="name" value={user.name} onChange={inputEvent} />
                            <input type="text" placeholder='Email' name="email" value={user.email} onChange={inputEvent} />
                            <input type="text" placeholder='Profile Image' name="profile" value={user.profile} onChange={inputEvent} />
                            <input type="password" placeholder='Password' name="password" value={user.password} onChange={inputEvent} />

                            <input type="submit" value="Sign Up" />
                            <h4>Already a member ? <span onClick={e => setSignup(false)}>Login Here</span></h4>
                        </form>
                    ) : (
                        <form onSubmit={formSubmitRegister}>

                            <input type="email" placeholder='Email' name="username" value={userlogin.username} onChange={inputEvent2} />
                            <input type="password" placeholder='Password' name="password" value={userlogin.password} onChange={inputEvent2} />
                            <input type="submit" value="Sign In" />
                            <h4>Not a member ? <span onClick={e => setSignup(true)}>Register Here</span></h4>
                        </form>
                    )
                }








            </div>
        </>
    )
}

export default Login