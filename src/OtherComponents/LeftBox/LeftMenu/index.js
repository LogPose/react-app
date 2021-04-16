import React from 'react'
import '../LeftMenu/LeftMenu.css'

function LeftMenu() {
    return (
        <div> 
            <button className="menuBtn">Ваша страница</button>
            <button className="menuBtn">Сообщения</button>
            <button className="menuBtn">Новости</button>
            <button className="menuBtn">Страница на ГитХаб</button>
            <button className="menuBtn">Проверка связи</button>
            <button className="menuBtn">Всякая всячина</button>
            <button className="menuBtn">О создателе</button>
        </div>
    )
}

export default LeftMenu