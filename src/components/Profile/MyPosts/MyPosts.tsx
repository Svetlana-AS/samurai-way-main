import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id:1, message:'Hi,how are you?', likesCount:20},
        {id:1, message:'It s my first post', likesCount:20},
    ]



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
                {postData.map((el)=>{
                    return(
                        <div key={el.id}>
                            <div>{el.message}</div>
                            <div>{el.likesCount}</div>

                        </div>

                    )

                })}
            </div>
        </div>
    )
}





