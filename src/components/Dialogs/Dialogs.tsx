 import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
 import {DialogItem} from "./DialogItem/DialogItem";
 import {Message} from "./Message/Message";




type DialogsType = {

}
export const Dialogs = () => {

    let dialogs = [
        {id:1, name:'Mikhail'},
        {id:2, name: 'Svetlana'},
        {id:3, name: 'Daria'},
        {id:4, name: 'Pavel'},
    ]

    let messages = [
        {id:1, message:'Hi'},
        {id:2, message:'How is your It'},
        {id:3, message:'Yo'},
    ]

    const dialogsElements = dialogs
        .map(d=> <DialogItem name={d.name} id={d.id} />)

    const messagesElements = messages
        .map(m=> <Message message={m.message} id={m.id} />)

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>

        )
}