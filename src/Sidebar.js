import React from 'react'
import './css/sidebar.css'
import { Avatar } from '@mui/material'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const user = useSelector(selectUser)
    return (
        <div className='sidebar'>
            <div className="sidebar__profile">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQINx69r1kWQrjm6eWTs2cgLsn9i45p10BpaQ&usqp=CAU" alt="background" />

                <div className="profile__details">
                    <Avatar src={user.photoURL} />
                    <h4>Sushanta Patra</h4>
                    <p>Web Developer</p>
                </div>
                <div className="profile__stats">
                    <span>Who Viewed your profile</span>
                    <span className='stat__number'>20</span>
                </div>
                <div className="profile__stats">
                    <span>Connection <br /><b>Grow your Network</b> </span>
                    <span className='stat__number'>120</span>
                </div>
            </div>
            <div className="sidebar__recent">
                <p>Recent</p>
                <p className='hash'><span>#</span>Branding</p>
                <p className='hash'><span>#</span>Marketing</p>
                <p className='hash'><span>#</span>Web Development</p>
                <p className='hash'><span>#</span>Programming</p>
                <p className='hash'><span>#</span>React JS</p>
                <p className='hash'><span>#</span>Redux toolkit</p>

            </div>
        </div>
    )
}

export default Sidebar