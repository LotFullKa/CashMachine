import React, { useEffect, useState } from "react";
import style from "./OrderQueue.module.scss"
import { Item } from "./OrderItem.jsx";
import { AddItem } from "./OrderItem.jsx";
import { useDispatch, useSelector } from "react-redux";

import {addOrder} from '../../store/orderQueue/orderQueueSlice'

export function OrderQueue() {
    
    const orders = useSelector(state => state.orders.orders)
    const dispatch = useDispatch()

    
    const appendItem = () => {
        const orderWin = window.open('/order_item', 'mywin','width=1200, height=800')
        orderWin.addEventListener('beforeunload', (event) => {window.location.reload()})
    }

    

    return (
        <div className={style.orders}>
        {orders.map((item, index) => 
                            <Item 
                            key={index}
                            id={item.id}
                            order={orders.filter(it => it.id === item.id)} 
                            />
                            )}

        <button className={style.button} onClick={appendItem}> add new order </button>
        </div>
    )
}