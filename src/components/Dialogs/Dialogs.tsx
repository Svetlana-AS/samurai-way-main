import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    name:string
    id:number
}
const DialogItem = (props:DialogItemType) => {

    let path = '/dialogs/'+ props.id

    return(
        <div className= {s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message:string
}

const Message = (props:MessageType)=> {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

type DialogsType = {

}
export const Dialogs = () => {

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name='Mikhail' id={1} />
                    <DialogItem name='Svetlana' id={2}/>
                    <DialogItem name='Daria' id={3} />
                    <DialogItem name='Pavel' id={4}/>
                </div>
                <div className={s.messages}>
                 <Message message='Hi' />
                 <Message message='How is your It' />
                 <Message message='Yo' />
                </div>
            </div>

        )
}