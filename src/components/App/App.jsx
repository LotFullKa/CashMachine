import style from './App.module.scss';
import { Home } from '../pages/home/home';
import { Order } from '../pages/order/order';
import { Route, Routes,  Navigate } from 'react-router-dom';

function App() {
    // If you need reset local storage
    // localStorage.removeItem('persist:root')

    return (
        <div className={style.App}>

        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/order_item' element={<Order/>}/>
            <Route path='*' element={<Navigate to='/'/>} />
        </Routes>

            
        </div>
    );
}

export default App;
