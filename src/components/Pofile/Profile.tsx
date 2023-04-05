import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div >
            <div>
                <img
                    src='https://img3.akspic.ru/crops/9/0/4/1/7/171409/171409-zakat-oblako-tsvetnoy-zolotoj_chas-gorizont-1080x1920.jpg'/>
            </div>
            <div>
                <div>
                    ava+description
                </div>
                <MyPosts/>
            </div>
        </div>
    )
}





