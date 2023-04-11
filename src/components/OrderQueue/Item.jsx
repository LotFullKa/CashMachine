import React from "react";
import style from "./Item.module.scss"

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

export function AddItem({append, text}) {

    return (
        <button className={style.button} onClick={append}> add new order </button>
    )
}