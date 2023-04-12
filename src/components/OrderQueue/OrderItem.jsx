import React, { useState } from "react";
import style from "./OrderItem.module.scss"
import { OrderList } from "./OrderList";

import { useDispatch, useSelector } from "react-redux";
import { rejectOrder, closeOrder } from '../../store/orderQueue/orderQueueSlice'
import classnames from 'classnames/bind'

const cx = classnames.bind(style)

export function Item({id, order}) {
    [order] = order
    
    const [payded, setPayded] = useState(false)
    
    // temp consts
    const price_value = 2
    const order_name = 'Красная кепка'
    useSelector(state => state.orders.orders)

    const dispatch = useDispatch()

    const reject = () => dispatch(
        rejectOrder({id: id})
    )
    
    const close = () => {
        if (payded) {
            dispatch(
                closeOrder({id:id})
            )
        }
    }

    return ( 
        <div className={style.item}>
            <div className={style.name}>{order_name}</div>
            <div className={style.buttons}>
                {/* price */}
                <div className={payded ? cx('price', 'payded'): cx('price', 'not_payded', 'button')} 
                                onClick={() => setPayded(!payded)}>
                    {price_value}
                </div>
                {/* done */}
                <div className={style.button} onClick={close}>
                    выполнен
                </div>
                {/* reject */} 
                <div className={style.button} onClick={reject}>
                    отменить
                </div>
            </div> 
            <div className={style.order_list}> 
                    {/* <OrderList id={id}/>*/}
            </div>
        </div>
    )
}

