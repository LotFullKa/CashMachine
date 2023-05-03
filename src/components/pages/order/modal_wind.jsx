import style from './modal_wind.module.scss'
import React from "react";

const  Modal = ({active, setActive,
                 name, setName,
                 price, setPrice, 
                 finishFill
                }) => {
    
    return (
        <div className={active ? style.modal : style.withoutModal}>
            <div className={style.content}>    
                <div className={style.header}> Добавить категорию </div> 
                Название: <input className={style.input} type='text' value={name} onChange={(e) => {setName(e.target.value)}}/><br/>
                Ценник: <input className={style.input} type='number' value={price} onChange={(e) => {setPrice(e.target.value)}}/><br/>
                <button className={style.input} onClick={finishFill}>готово</button>
            </div>
        </div>
    )
}

export default Modal