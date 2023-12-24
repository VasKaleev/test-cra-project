import { useState } from 'react';
import cart from './assets/img/cart.svg'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isProductInCart, setIsProductIncart] = useState(false)
  const addProductToCartHandler = () => {
    // alert('Товар успешно добавлен в корзину')
    setCount(1)
    setIsProductIncart(true)
  }
  function prov() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div className='appContainer'>
      <div className='cards'>
        <img className='card' src={cart} alt="" />
        <div className='kol_tov'>{count}</div>
      </div>
      <div className='addBut'>
        {isProductInCart ? <div>
          Товар успешно добавлен в корзину
        </div> : ''}
        {isProductInCart ? 
        <div className='butAddRem'>
          <button className="but_" onClick={prov}>
            -
          </button>
          <div className='count'>{count}</div>
          <button className="butPlus" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div> : ''}
        <button className='but' onClick={addProductToCartHandler} >
          {isProductInCart ? 'Перейти в корзину' : 'В корзину'}
        </button>

      </div>

    </div>
  );
}

export default App;

