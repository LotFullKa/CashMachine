import style from './home.module.scss'
import classnames from 'classnames/bind'
import { OrderQueue } from '../../OrderQueue/OrderQueue';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../../store/GlobalCash/globalCashSlice';
import { resetOrders } from '../../../store/orderQueue/orderQueueSlice';
import { FastOrders } from '../../FastOrders/fastOrders';

const cx = classnames.bind(style)

export function Home() {
    const cash = useSelector(state => state.cash.globalCash)
    const dispatcher = useDispatch(``)

    const resetDay = () => {
        dispatcher(reset())
        dispatcher(resetOrders())
    }

    return(
        <div>
            <div className={style.header}>
                <div className={style.cash}> Cегодня вы заработали: {cash}</div>
                <div className={style.button} onClick={resetDay}> сбросить день </div>
            </div>
            <div className={cx('split', 'left')}>
                <FastOrders/>
            </div>

            <div className={cx('split', 'right')}>
                <OrderQueue/>
            </div>
        </div>
    )
}