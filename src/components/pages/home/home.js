import style from './home.module.scss'
import classnames from 'classnames/bind'
import { OrderQueue } from '../../OrderQueue/OrderQueue';

const cx = classnames.bind(style)

export function Home() {
    
    return(
        <div>
            <div className={cx('split', 'left')}>
                left column
            </div>

            <div className={cx('split', 'right')}>
                Order Queue here
                <OrderQueue/>
            </div>
        </div>
    )
}