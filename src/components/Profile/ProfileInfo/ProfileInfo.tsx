import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.img}>
                <img src='https://img3.akspic.ru/crops/9/0/4/1/7/171409/171409-zakat-oblako-tsvetnoy-zolotoj_chas-gorizont-1080x1920.jpg'/>
            </div>
            <div>
                <div className={s.descriptionBlock}>
                    ava+description
                </div>
            </div>
        </div>
    )
}





