import style from './order.module.scss'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addOrder} from '../../../store/orderQueue/orderQueueSlice'

export function Order() {
    const [name, setName] = useState('Monkey')
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const createOrder = () => {
        dispatch(addOrder({
                    name:name,
                    text:comment,
                    price: 120,
                    order_list: [],
        }))

        window.close()
    }

    
    return (
        <div>
            <label>
            <div className={style.orderName}>
                    Клиент : 
                    <input className={style.textarea} type='text' value={name} onChange={handleChange}/>
            </div>
            </label>

            <div>
                <button onClick={createOrder}> Создать </button>
            </div>
        </div>
        
    )
}