import React, { useState } from "react";
import style from "./OrderItem.module.scss"
import { OrderList } from "./OrderList.jsx";

import { useDispatch, useSelector } from "react-redux";
import { rejectOrder, closeOrder } from '../../store/orderQueue/orderQueueSlice'
import { plus } from "../../store/GlobalCash/globalCashSlice";
import classnames from 'classnames/bind'

const cx = classnames.bind(style)

export function Item({id, order}) {
    [order] = order
    
    const [payded, setPayded] = useState(false)
    
    // temp consts
    const price_value = order.price
    const order_name = order.name

    const dispatch = useDispatch()

    const reject = () => dispatch(
        rejectOrder({id: id})
    )
    
    const close = () => {
        if (payded) {
            dispatch(
                plus({sum:price_value})
            )
            dispatch(
                closeOrder({id:id})
            )
        }
    }

    return ( 
        <div className={style.item}>
            <div className={style.name}>{order_name}</div>
            {/* body */}
            <div className={style.orderlist}>
                комментарий: {order.text}<br/>
                ----------------------------
                {order.order_list.map(v => <li>{v.name}</li>)}
            </div>
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
        </div>
    )
}

