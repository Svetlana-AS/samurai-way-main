import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div className={s.item}>
                My posts
            </div>
            <Post message='Hi,how are you?' like = {20} />
            <Post message='It s my first post' like = {6} />
        </div>
    )
}





