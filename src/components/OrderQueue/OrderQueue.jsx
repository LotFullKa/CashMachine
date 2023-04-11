import React, { useEffect, useState } from "react";
import style from "./OrderDeque.module.scss"
import { Item } from "./Item";
import { AddItem } from "./Item";

export function OrderDeque() {
    const [orderDeque, setOrderDeque] = useState([])
    const [idGenerator, inc] = useState(orderDeque.length + 1)

    const removeById = (id) => {
        setOrderDeque(
            (prev) => (prev.filter(item => item.id !== id))
        )
    }
    
    const appendItem = () => {
        setOrderDeque([...orderDeque, {id: idGenerator, text:'salt'}])
        // window.open()
    }

    useEffect(() => {
        inc(orderDeque.length + 1)
    }, [orderDeque])
    
    return (
        <div className={style.orders}>
        {orderDeque.map((item, index) => 
                            <Item 
                            key={index}
                            id={item.id}
                            text={item.text} 
                            removeById={removeById}/>
                            )}

        <AddItem append={appendItem} /> 
        </div>
    )
}