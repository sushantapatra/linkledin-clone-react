import React, { useState, useEffect } from 'react'
import './css/feed.css'

import { Avatar } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Post from './Post';

import { db } from './firebaseConfig';
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot } from 'firebase/firestore'

import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'

import FlipMove from 'react-flip-move';

const Feed = () => {
    const [input, setInput] = useState('')
    const [feeds, setFeeds] = useState([])
    const user = useSelector(selectUser)
    const submitPost = (event) => {
        event.preventDefault()
        if (input == "") {
            return alert('Post is required!')
        }
        addDoc(collection(db, 'posts'), {
            name: user.displayName,
            desc: "This is description",
            message: input,
            photoUrl: user.photoURL,
            created: Timestamp.now()
        }).catch(err => console.error(err))
        setInput('')
    }

    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setFeeds(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [input])

    return (
        <div className='feed'>
            <div className="feed__input">
                <div className="feed__form">
                    <Avatar src={user.photoURL} />
                    <form onSubmit={submitPost}>
                        <input type="text" placeholder='Start a post' value={input} onChange={(e) => setInput(e.target.value)} />
                        <input type="submit" />
                    </form>

                </div>
                <div className="feed__options">
                    <div className="option">
                        <InsertPhotoIcon style={{ color: '#70b5f9' }} />
                        <span>Photo</span>
                    </div>
                    <div className="option">
                        <YouTubeIcon style={{ color: '#7fc15e' }} />
                        <span>Video</span>
                    </div>
                    <div className="option">
                        <TodayIcon style={{ color: '#e7a33e' }} />
                        <span>Event</span>
                    </div>
                    <div className="option">
                        <AssignmentIcon style={{ color: '#fc9295' }} />
                        <span>Write Article</span>
                    </div>
                </div>
            </div>
            <FlipMove>
                {
                    feeds.map(({ id, data: { name, desc, message, photoUrl, created } }) => {
                        return (<Post name={name} desc={desc} message={message} photoUrl={photoUrl} />)
                    })
                }
            </FlipMove>


        </div>


    )
}

export default Feed