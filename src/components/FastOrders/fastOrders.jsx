import { useState } from "react"
import { useSelector } from "react-redux"
import style from './fastOrders.module.scss'

function FastOrderItem({name, index}) {
    return (
        <div className={style.item}>
            {index}.
            <div className={style.name}>{name}</div>
        </div>
    )
}

export function FastOrders() {
    // const [globalQueue, setGlobalQueue] = useState([])
    const orders = useSelector(state => state.orders.orders)

    let globalQueue = orders.flatMap((value) => value.order_list)
    
    return(
        <div>
            {globalQueue.map((val, index) => <FastOrderItem name={val.name} index={index+1}/>)}
        </div>
    )
}