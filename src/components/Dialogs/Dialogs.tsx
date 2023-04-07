import React from 'react';
import s from './Dialogs.module.css'



export const Dialogs = () => {

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className= {s.dialog}>
                        Mikhail
                    </div>
                    <div className={s.dialog}>
                      Svetlana
                    </div>
                    <div className={s.dialog}>
                       Daria
                    </div>
                    <div className={s.dialog}>
                        Pavel
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>
                        Hi
                    </div>
                    <div className={s.message}>
                        How is your It
                    </div>
                    <div className={s.message}>
                        Yo
                    </div>

                </div>
            </div>

        )
}