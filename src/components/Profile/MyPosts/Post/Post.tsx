import React from 'react';
import s from './Post.module.css'




type PostType= {
    message:string
    likesCount: number
    id:number
}


export const Post = (props:PostType) => {
    return (
        <div className={s.item}>
            <img src='https://ychef.files.bbci.co.uk/976x549/p0dnxrcv.jpg'/>
            <img src='https://i.pinimg.com/236x/6b/26/3f/6b263fe281237221847ecef1e4fc566e.jpg'/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>

    )
}





