import style from './App.module.scss'
import classnames from 'classnames/bind'
import { MenuList } from '../ menuList/MenuList';
import { OrderDeque } from '../OrderDeque/OrderDeque';

const cx = classnames.bind(style)

function App() {
   
    return (
        <div className={style.App}>
            <div>
                <div className={cx('split', 'left')}>
                    <div className={cx('split', 'up')}>
                        Im left up
                    </div>
                    <div className={cx('split', 'down')}>
                        Im left down
                    </div>
                </div>

                <div className={cx('split', 'right')}>
                    Order Deque here
                    <OrderDeque/>
                </div>
            </div>
        </div>
    );
}

export default App;
