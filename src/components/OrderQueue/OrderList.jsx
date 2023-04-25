import { useSelector } from "react-redux"

export function OrderList(id){
    const [obj] = useSelector(state => state.orders.orders).filter(val => val.id === id)

    console.log(obj)
    obj.order_list.map(val => <li>{val}</li>)
}