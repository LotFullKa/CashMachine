import style from './orderItem.module.scss'

function OrderItem({name, price}) {
    return(
        <div className={style.orderItem}>
            {name}, {price}
        </div>
    )
}

export default OrderItem