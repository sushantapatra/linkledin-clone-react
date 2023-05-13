import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebaseConfig';
import { signOut } from "firebase/auth";

const Headeroption = ({ Icon, title }) => {
    const user = useSelector(selectUser)
    return (
        <div className='header__option'>
            {<Icon src={user.photoURL} onClick={() => signOut(auth)} />}
            {title}
        </div>
    )
}

export default Headeroption