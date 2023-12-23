import React, { useState } from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from './Home';
import Women from './Women'
import Kids from './Kids'
import logo from './image/Home/shoes_logo.jpg'
import Cart from './cart';


function Main({size,handleClick,cart,setCart,handleChange}) {

  return (
    <div>
        <Router>
            <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="logo"/>
                    </a>
                    <div className="navbar-nav">
                        <ul className="navbar-nav" style={{listStyleType:'none'}}>
                            <li style={{display:'block',padding:10,textDecoration:'none'}}><Link to='/'>Men</Link></li>
                            <li style={{display:'block',padding:10,textDecoration:'none'}}><Link to='/Women'>Women</Link></li>
                            <li style={{display:'block',padding:10,textDecoration:'none'}}><Link to='/Kids'>Kids</Link></li>
                        </ul>
                        <div style={{display:"block",padding:10}}>
                            <Link to="/Cart">
                                <span>
                                    <i className='fas fa-cart-plus'></i>
                                </span> 
                                
                            </Link>
                            <span>{size}</span>
                        </div>
                    </div>
                </nav>
            </div>
            </div>
            <Routes>
                <Route path='/' element={<Home handleClick={handleClick}/>} />
                <Route path='/Women' element={<Women handleClick={handleClick}/>} />
                <Route path='/Kids' element={<Kids handleClick={handleClick}/>} />
                <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default Main

