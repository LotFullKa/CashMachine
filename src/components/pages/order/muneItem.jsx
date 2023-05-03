import { useDispatch } from 'react-redux'
import style from './menuItem.module.scss'
import React from "react";

import { removeItem } from '../../../store/Menu/menuSlice';

function MenuItem({id, name, price, appendToOrder, oldOrder}) {
    const dispatch = useDispatch()

    const clickHandler = (event) => {
        if (event.ctrlKey) {
            dispatch(removeItem({id:id}))
        }
        appendToOrder([...oldOrder, {
            id:id,
            name:name,
            price: parseInt(price)
        }])
    }
    return(
        <div className={style.block} onClick={clickHandler}>
            {name}, {price}
        </div>
    )
}

export default MenuItem