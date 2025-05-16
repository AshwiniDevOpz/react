

import React, { useState } from 'react';
import { Data } from '../../dataset/Datas';
import './Carts.css'

const Carts = () => {
  const [cartItems, setCartItems] = useState(Data);

  const clearCart = () => {
    setCartItems([]);
  };

  const resetCart = () => {
    setCartItems(Data);
  };

  const deleteItem = (indexToDelete) => {
    
    const updatedCart = cartItems.filter((item, index) => index !== indexToDelete);
    setCartItems(updatedCart);
    
  };

  return (
    <div className='cart'>
      <h1>Items in cart:</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name}{item.age}
            <button onClick={() => deleteItem(index)}  className='btn'>Delete</button> 
          </li>
        ))}
      </ul>
      <button onClick={clearCart} className='del'>Delete Cart</button>
      <button onClick={resetCart} className='res'>Reset Cart</button>
    </div>
  );
};

export default Carts;
