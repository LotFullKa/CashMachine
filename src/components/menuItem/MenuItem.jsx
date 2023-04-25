import React from "react";
import style from "./MenuItem.module.scss"

export function Item({text}) {

    const openItem = (event) => {
        // event.target.value
        window.open('u')
    }

    return(
        <div className={style.item} onClick={openItem}>
            {text}
        </div>
    )
}