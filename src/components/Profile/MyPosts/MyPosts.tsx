import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let posts = [
        {id:1, message:'Hi,how are you?', likesCount:20},
        {id:2, message:'It s my first post', likesCount:20},
    ]

    const postsElement = posts
        .map(p=> <Post message={p.message} likesCount = {p.likesCount} id = {p.id} />)


    return (
        <div>
            <div className={s.postsBlock}>
               <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div >
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}





