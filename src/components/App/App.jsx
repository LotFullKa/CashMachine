import style from './App.module.scss'
import classnames from 'classnames/bind'
import { MenuList } from '../ menuList/MenuList';
import { OrderQueue } from '../OrderQueue/OrderQueue';

const cx = classnames.bind(style)

function App() {
   
    return (
        <div className={style.App}>
            <div>
                <div className={cx('split', 'left')}>
                    left column
                </div>

                <div className={cx('split', 'right')}>
                    Order Queue here
                    <OrderQueue/>
                </div>
            </div>
        </div>
    );
}

export default App;
