import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import Navbar from './Navbar';


function App() {
  const [cart,setCart]=useState([])
  // insert data in cart
   const handleClick = (item)=>
    {
        let isPresent = false;
        cart.forEach((product)=>
        {
            if(item.id === product.id)
            {
                isPresent = true;
            }
        })
        if (isPresent)
          return
        setCart([...cart, item])
    }

    // in cart data increment and decrement
    const handleChange = (item,d)=>
    {
      let ind = -1;
      cart.forEach((data, index)=>
      {
        if(data.id === item.id)
          ind = index;
      });
      const tempArr = cart
      tempArr[ind].count += d;
      if (tempArr[ind].count === 0)
        tempArr[ind].count = 1;
      setCart([...tempArr])
    }


    

  return (
    <>
      <Navbar size={cart.length} handleClick={handleClick} 
      cart={cart} setCart={setCart} 
      handleChange={handleChange}/>
    </>
  );
}

export default App;
