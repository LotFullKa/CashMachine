import style from './order.module.scss';
import React, { useEffect, useState } from "react";
import classnames from 'classnames/bind';
import { useDispatch, useSelector } from "react-redux";
import {addOrder} from '../../../store/orderQueue/orderQueueSlice';
import Modal from './modal_wind.jsx';
import MenuItem from './muneItem.jsx';
import OrderItem from './orderItem.jsx';
import { addItem } from '../../../store/Menu/menuSlice';

const cx = classnames.bind(style)

export function Order() {

    // order
    const [name, setName] = useState('Monkey')
    const [price, setPrice] = useState(0)
    const [comment, setComment] = useState('')
    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        if (orderList.length !== 0 ) {
            console.log('sum:', orderList.reduce((acc, num) => acc + num.price, 0))
            console.log("order list:", orderList)
            setPrice(orderList.reduce((acc, num) => acc + num.price, 0))
        }
    }, [orderList])
    
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const createOrder = () => {
        dispatch(addOrder({
                    name:name,
                    text:comment,
                    price: price,
                    order_list: orderList,
        }))

        window.close()
    }

    const reject = () => {
        window.close()
    }

    // Menu 
    const menu = useSelector(state => state.menu.items)

    const addClass = () => {
        setActive(true)        
    }

    const afterFillCategoria = () => {
        dispatch(addItem({
            name:categoriaName,
            price:categoriaPrice
        }))

        setActive(false)
        setCatergoriaName('')
        setCatergoriaPrice(0)
    }   

    
    // modal windows
    const [active, setActive] = useState(false)
    const [categoriaName, setCatergoriaName] = useState('')
    const [categoriaPrice, setCatergoriaPrice] = useState(0)

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

                {orderList.map((val)=> <OrderItem name={val.name} price={val.price} />)}

                <div className={style.commentBlock}>
                    Комментарий:
                    <textarea className={style.comment} value={comment} onChange={(e) => setComment(e.target.value)}/>
                </div>
                <div className={style.buttons}>
                    <button className={style.button} onClick={reject}> отмена </button>
                    <button className={style.button} onClick={createOrder}> создать </button>
                </div>
            </div>
            <div className={cx('split', 'right')}>
                
                {menu.map(item=> <MenuItem key={item.id} id={item.id} name={item.name} 
                                           price={item.price} appendToOrder={setOrderList}
                                           oldOrder={orderList}/>)}
                
                <button className={style.addClass} onClick={addClass}> + </button>
            </div>
            
            <Modal active={active} setActive={setActive} 
                   name={categoriaName} setName={setCatergoriaName} 
                   price={categoriaPrice} setPrice={setCatergoriaPrice}
                   finishFill={afterFillCategoria}/>
        </div>
        
    )
}