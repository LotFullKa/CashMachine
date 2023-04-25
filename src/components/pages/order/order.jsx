import style from './order.module.scss'
import React, { useState } from "react";
import classnames from 'classnames/bind'
import { useDispatch, useSelector } from "react-redux";
import {addOrder} from '../../../store/orderQueue/orderQueueSlice'

const cx = classnames.bind(style)

export function Order() {
    const [name, setName] = useState('Monkey')
    const [price, setPrice] = useState(0)
    const [comment, setComment] = useState('')
    
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const createOrder = () => {
        dispatch(addOrder({
                    name:name,
                    text:comment,
                    price: price,
                    order_list: [],
        }))

        window.close()
    }

    const reject = () => {
        window.close()
    }

    // Menu 
    const [menu, setMenu] = useState([])

    const addClass = () => {
        setMenu(...menu, )
    }

    
    return (
        <div>
            <div className={style.head}>
                <div className={style.price}> Сумма заказа: {price} </div>
                <label>
                    <div className={style.orderName}>
                        Клиент : 
                        <input className={style.textarea} type='text' value={name} onChange={handleChange}/>
                    </div>
                </label>
            </div>
            <div className={cx('split', 'left')}>
                now order
                <div className={style.buttons}>
                    <button className={style.button} onClick={reject}> отмена </button>
                    <button className={style.button} onClick={createOrder}> Создать </button>
                </div>
            </div>
            <div className={cx('split', 'right')}>
                menu
                <button className={style.addClass} onClick={addClass}> + </button>
            </div>

           
        </div>
        
    )
}