import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    name: string
    id: number
}
const DialogItem = (props: DialogItemType) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

type DialogsType = {}
export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Mikhail'},
        {id: 2, name: 'Svetlana'},
        {id: 3, name: 'Daria'},
        {id: 4, name: 'Pavel'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your It'},
        {id: 3, message: 'Yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map((el) => {
                    return (
                        <div key={el.id}>{el.name}</div>
                    )
                })}

            </div>
            <div className={s.messages}>
                {messagesData.map((el)=>{
                    return(
                        <div key={el.id}>{el.message}</div>
                    )
                })}
            </div>
        </div>

    )
}