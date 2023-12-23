import React, { useEffect, useState } from 'react'
import './styles/cart.css'

function Cart({cart,setCart,handleChange}) {
    const [price,setPrice]=useState(0)
    const handlePrice = ()=>
    {
        let ans=0;
        cart.map((item)=>
        {
            ans += item.count * item.price
        })
        setPrice(ans);
    }
    useEffect(()=>
    {
        handlePrice();
    })

    const handleRemove = (id)=>
    {
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
    }
    

  return (
    <div className='div1'>
        <div className='row padding1'>
            <div className='col-md-7'>
                <h3>Items</h3>
            </div>
            <div className='col-md-3'>
                <h3>Quentity</h3>
            </div>
            <div className='col-md-1'>
                <h3>Price</h3>
            </div>
            <div className='col-md-1 total1'>
                <h3>Total</h3>
            </div>
        </div>
        <hr/>
        {
            cart.map((item)=>
            {
                return(
                    <>
                        <div className='cart_box' key={item.id}>
                            <div>
                                <img src={item.image} className='cart_img'/>
                                <p className='p'>{item.title}</p>
                            </div>
                            <div>
                                <button onClick={()=>handleChange(item ,+1)}>+</button>
                                    <button><span>{item.count}</span></button>
                                <button onClick={()=>handleChange(item ,-1)}>-</button> 
                            </div>
                            <div>
                                <span>{item.price}</span>
                                <button onClick={()=>handleRemove(item.id)}>Remove</button>
                            </div>

                        </div>
                    </>
                    )
            })
        }
        <div className='total'>
            <span>Total Price of you Cart</span>
            <span>Rs.{price}</span>
        </div>
    </div>
  )
}

export default Cart