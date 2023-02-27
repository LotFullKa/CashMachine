import style from './App.module.scss'
import classnames from 'classnames/bind'
import { MenuList } from '../ menuList/MenuList';

const cx = classnames.bind(style)

function App() {
   
    return (
        <div className={style.App}>
            <div>
                <div className={cx('split', 'left')}>
                    <MenuList/>
                </div>

                <div className={cx('split', 'right')}>
                    Im right
                </div>
            </div>
        </div>
    );
}

export default App;
