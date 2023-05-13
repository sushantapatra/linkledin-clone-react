import React, { forwardRef } from 'react'
import './css/post.css'


import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({ name, desc, message, photoUrl }, ref) => {
    return (
        <div className='posts' ref={ref}>
            <div className="posts__header">
                <div className="posts__headerLeft">
                    <Avatar src={photoUrl} />
                    <div className="posts_profile_details">
                        <h3>{name}</h3>
                        <p>{desc}</p>
                    </div>

                </div>
                <MoreHorizIcon />
            </div>
            <div className="posts__body">
                <p>{message}</p>
            </div>

            <div className="posts__footer">
                <div className="posts__footer__options">
                    <ThumbUpIcon />
                    <span>Like</span>
                </div>
                <div className="posts__footer__options">
                    <CommentIcon />
                    <span>Comment</span>
                </div>
                <div className="posts__footer__options">
                    <ShareIcon />
                    <span>Share</span>
                </div>
                <div className="posts__footer__options">
                    <SendIcon />
                    <span>Send</span>
                </div>
            </div>
        </div>
    )
})


export default Post