import React from 'react'
import './css/header.css'
import Headeroption from './Headeroption';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Header = () => {
    const user = useSelector(selectUser)
    console.log(user);

    return (
        <div className='header'>
            <div className="header__left">
                <div className="header__logo">
                    <img src="https://cdn-icons-png.flaticon.com/128/3992/3992606.png" alt="logo" />
                </div>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className="header__right">
                <Headeroption Icon={HomeIcon} title="Home" />
                <Headeroption Icon={PeopleIcon} title="My Network" />
                <Headeroption Icon={BusinessCenterIcon} title="Jobs" />
                <Headeroption Icon={MessageIcon} title="Messaging" />
                <Headeroption Icon={NotificationsIcon} title="Notification" />
                <Headeroption Icon={Avatar} title={user.displayName} />
            </div>
        </div>
    )
}

export default Header