import React, { useEffect, useState } from "react";
import style from "./OrderQueue.module.scss"
import { Item } from "./OrderItem";
import { AddItem } from "./OrderItem";
import { useDispatch, useSelector } from "react-redux";

import {addOrder} from '../../store/orderQueue/orderQueueSlice'

export function OrderQueue() {
    
    const orders = useSelector(state => state.orders.orders)
    const dispatch = useDispatch()

    
    const appendItem = () => dispatch(
        addOrder({
        name: 'Красная кепка',
        text:'sugar with milk'
    }))

    

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