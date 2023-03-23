import React, { useState } from 'react';
import { GoBeaker } from "react-icons/go";
import { Order } from './order';


const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (
    <div>
       {props.orders.map(el => (
          <Order key={el.id} item = {el} onDelete={props.onDelete} />
        ))}
        <p className='summa'>Суммa: {new Intl.NumberFormat().format(summa)}BYN</p>
    </div>
  )
};

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Корзина пуста</h2>
    </div>
  )
}

export const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
        <div>
            <span className='logo'>Физико-химическая лаборатория</span>    
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Отзывы</li>
                <li>Кабинет</li>
            </ul>
            <GoBeaker onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopCartButton ${cartOpen && 'active'}`}/>

            {cartOpen && (
              <div className='shopCart'>
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
              </div>
            )}
        
        </div>
        <div className='presentation'>
             
        </div>
    </header>
  );
};
