import React from "react";
import style from "./OrderItem.module.scss"

// png
import close from '../../assets/close.png'

export function Item({id, text, removeById}) {
    return (
        <div className={style.item}>
            <img className={style.remove}
                 alt='remove'
                 src={close}
                 onClick={()=>removeById(id )}
                >
            </img>
            <div>
                {text}
            </div>
        </div>
    )
}
