import React from 'react';
import classes from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src='https://img3.akspic.ru/crops/9/0/4/1/7/171409/171409-zakat-oblako-tsvetnoy-zolotoj_chas-gorizont-1080x1920.jpg'/>
            </div>
            <div>
                <div>
                    ava+description
                </div>
                <div>
                    My posts
                    <div>
                        New posts
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                    </div>
                </div>
                <img
                    src='https://i.pinimg.com/236x/6b/26/3f/6b263fe281237221847ecef1e4fc566e.jpg'/>
            </div>
        </div>
    )
}





